/**
 * alias-variants.ts — 为件号生成「同一件号的不同写法」变体，用于页面交叉引用文本
 * 与 schema.org 的 Cross references 字段，覆盖买家在实物标记、旧图纸、整机厂
 * 手册里实际会输入的写法。
 *
 * 硬约束（不满足即丢弃）：
 *   1. norm(变体) === norm(源件号)  —— 纯重拼写，不改变件号身份
 *   2. 或 norm(变体) === "lb" + norm(源件号)，且源件号为 HYV<数字> 形式
 *      （WINKEL 体系里 HYV 件号常带 LB / LBY 前缀）
 * 另外调用方会传入 isForeignNorm 回调，用来排除与「其他型号」同 norm 的变体，
 * 避免产生跨型号歧义。
 *
 * 只对「件号形态」的 token 生成变体；散文式 alias（如 "Stud Type Cam Follower"）
 * 原样保留，顺序不变，生成结果一律**追加在末尾**（族页模型目录只显示前 3 条）。
 */

/** 已知件号前缀（白名单，避免把散文里的单词当件号处理） */
const PREFIXES = [
  "NNTR",
  "NUKRE",
  "NUKR",
  "NATV",
  "NATR",
  "PWTR",
  "NUTR",
  "KRV",
  "KR",
  "KRES",
  "HYV",
  "LFR",
  "NBV",
  "JDG",
  "AWD",
  "BYSG",
  "BYS",
  "NBR",
  "RSU",
  "CF",
  "SL",
  "AP",
  "MR",
  "TR",
  "JD",
  "DR",
  "PR",
  "HD",
  "LB",
];

/** 归一化：只保留字母数字，用于身份比对 */
export const aliasNorm = (value: string): string =>
  value.toLowerCase().replace(/[^a-z0-9]/g, "");

/** 件号形态判定：有已知前缀或纯数字，且每个分词都含数字、无小写字母 */
export const isPartNumberToken = (raw: string): boolean => {
  const token = String(raw ?? "").trim();
  if (token.length < 3 || token.length > 18) return false;
  if (!/\d/.test(token)) return false;
  const chunks = token.split(/[\s/]+/).filter(Boolean);
  if (chunks.some((chunk) => !/\d/.test(chunk))) return false;
  if (/[a-z]/.test(token)) return false;
  const letters = aliasNorm(token).replace(/[0-9]/g, "");
  if (!letters) return true;
  return PREFIXES.some((prefix) => token.toUpperCase().startsWith(prefix));
};

/** 从 model 字段拆出件号 token，例如 "AP92-Q / 4.092" -> ["AP92-Q", "4.092"] */
export const partNumberTokens = (value: string): string[] =>
  String(value)
    .split(/[/,]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .filter(isPartNumberToken);

const tokenize = (value: string): string[] =>
  value.match(/[A-Za-z]+|[0-9]+(?:\.[0-9]+)*/g) ?? [];

/**
 * 点号是否为「分段符」而非小数点。
 * 只有每个点号后都恰好跟 3 位数字才算分段符：
 *   4.053 / 113.018.000 / MR.020 -> true
 *   JD62.5-37.5 / G88.4 / 4.0037 -> false（小数，替换会改变含义）
 */
const dotsAreSeparators = (token: string): boolean => {
  if (!token.includes(".")) return false;
  const after = [...token.matchAll(/\.(\d*)/g)].map((match) => match[1]);
  return after.length > 0 && after.every((digits) => digits.length === 3);
};

/** 所有分隔符组合（短横 / 空格），每个边界取其一 */
const joinCombos = (parts: string[]): string[] => {
  if (parts.length < 2 || parts.length > 4) return [];
  const out: string[] = [];
  const walk = (index: number, acc: string) => {
    if (index === parts.length) {
      out.push(acc);
      return;
    }
    for (const separator of ["-", " "])
      walk(index + 1, `${acc}${separator}${parts[index]}`);
  };
  walk(1, parts[0]);
  return out;
};

/** 主形态：买家最可能输入的写法（一体拼接 / 全短横 / 全空格 / 点号替换） */
const primaryCandidates = (raw: string): string[] => {
  const token = raw.trim();
  const parts = tokenize(token);
  const out: string[] = [];
  const hasDecimalPart = parts.some((part) => part.includes("."));
  if (parts.length > 1) {
    // 拼接成一体：仅在没有任何小数段时才安全（否则 62.5 + 37.5 会被拼成 62.537.5）
    if (!hasDecimalPart) out.push(parts.join(""));
    out.push(parts.join("-"));
    out.push(parts.join(" "));
  }
  if (dotsAreSeparators(token)) {
    out.push(token.replace(/\./g, ",")); // 欧洲小数逗号：4,053
    out.push(token.replace(/\./g, "-")); // 4-053
    out.push(token.replace(/\./g, " ")); // 4 053
  }
  const normalized = aliasNorm(token);
  if (/^hyv\d+$/.test(normalized)) {
    const base = normalized.toUpperCase();
    out.push(`LB-${base}`, `LB${base}`, `LBY${base}`);
  }
  return out;
};

/** 补充形态：主形态不够时才启用的混合分隔符组合（KRV-35 PP / KRV 35-PP） */
const extraCandidates = (raw: string): string[] => {
  const token = raw.trim();
  const parts = tokenize(token);
  if (parts.length < 3) return [];
  const primary = new Set(primaryCandidates(token));
  return joinCombos(parts).filter((value) => !primary.has(value));
};

/**
 * 建立 norm -> 拥有该写法的记录 slug 集合（覆盖 model 与全部 alias）。
 * 用来保证「派生变体」不会引用到属于其他型号的写法：
 * 例如 MR.147 的记录里若误写了 MR.146G2，则 MR.146G2 属于 MR.146，
 * 在 MR.147 下就不再派生它的拼写变体（原样保留原 alias，不做静默放大）。
 */
export const buildAliasOwnerIndex = (
  records: readonly {
    slug: string;
    model: string;
    aliases: readonly string[];
  }[],
): Map<string, Set<string>> => {
  const index = new Map<string, Set<string>>();
  const add = (value: string, slug: string) => {
    const key = aliasNorm(value);
    if (!key) return;
    const owners = index.get(key) ?? new Set<string>();
    owners.add(slug);
    index.set(key, owners);
  };
  for (const record of records) {
    add(record.model, record.slug);
    for (const token of partNumberTokens(record.model)) add(token, record.slug);
    for (const alias of record.aliases) add(alias, record.slug);
  }
  return index;
};

/** 判定某 norm 是否被「当前 slug 之外」的记录占用 */
export const makeForeignNormCheck =
  (index: Map<string, Set<string>>, slug: string) =>
  (norm: string): boolean => {
    const owners = index.get(norm);
    if (!owners) return false;
    for (const owner of owners) if (owner !== slug) return true;
    return false;
  };

/**
 * 生成拼写变体。
 * @param aliases 现有 alias（顺序保留）
 * @param model   该记录的 model 字段（其件号也会作为变体来源）
 * @param isForeignNorm 判定某 norm 是否属于「其他型号」，属于则跳过
 * @param target  补齐目标条数（默认 8）
 * @param hardMax 硬上限（默认 10）
 * @param perToken 单个件号最多派生几个变体（默认 6）
 */
export function spellingVariants(
  aliases: readonly string[],
  model: string,
  isForeignNorm: (norm: string) => boolean,
  target = 8,
  hardMax = 10,
  perToken = 6,
): string[] {
  const seen = new Set(aliases.map((alias) => alias.toLowerCase()));
  const out: string[] = [];
  const sources = [
    ...aliases.filter((alias) => isPartNumberToken(alias)),
    ...partNumberTokens(model),
  ];
  const full = () => aliases.length + out.length >= hardMax;
  const reachedTarget = () => aliases.length + out.length >= target;

  const collect = (getCandidates: (token: string) => string[]) => {
    outer: for (const token of sources) {
      let used = 0;
      for (const candidate of getCandidates(token)) {
        if (full() || reachedTarget()) break outer;
        if (used >= perToken) break;
        const key = candidate.toLowerCase();
        if (!candidate || seen.has(key) || candidate === token) continue;
        const candidateNorm = aliasNorm(candidate);
        const sourceNorm = aliasNorm(token);
        const invariantHolds =
          candidateNorm === sourceNorm ||
          (candidateNorm === `lb${sourceNorm}` && /^hyv\d+$/.test(sourceNorm));
        if (!invariantHolds) continue;
        if (isForeignNorm(candidateNorm)) continue;
        seen.add(key);
        out.push(candidate);
        used += 1;
      }
    }
  };

  collect(primaryCandidates); // 第一轮：最可能被输入的写法
  collect(extraCandidates); // 第二轮：仍然不足目标时才补混合分隔符组合
  return out;
}
