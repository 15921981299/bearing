# 代码层整理审计 — combinedbearingsource.com

日期：2026-09-26
范围：`E:\bearing` 全部源码、脚本、构建与部署配置
基线：`astro check` = 0 错误 / 0 警告 / 6 提示；`check:links` = 243 HTML / 0 断裂；sitemap = 240 URL

---

## P0 — 线上事故：`public/_redirects` 劫持自有栏目（已线上实测 · 2026-09-27 已修复）

**症状**：12 个已构建、已进 sitemap 的页面被 301 到无关页面。

**全量实测**（240 个 sitemap URL 逐条 `curl`）：

| 线上 URL | 实测 | dist/ 中 | sitemap 中 |
|---|---|---|---|
| `/resources/` + 5 子页 | **301 → `/certifications/`** | 6 个 HTML 存在 | 已收录 |
| `/case-studies/` + 5 子页 | **301 → `/about/`** | 6 个 HTML 存在 | 已收录 |
| `/blog/` `/materials/` `/compare/` `/glossary/` | **301 → `/part-products/`**（该路径 404） | 不存在 | 未收录 |

结果：**228 个返回 200，12 个返回 301**——非 200 的 URL 全部落在这两个栏目上。

**成因**：`public/_redirects` 是从 engine 站 fork 时**整份继承**的，规则针对原项目的 URL 空间，其 `*` 通配恰好覆盖了本站自己的栏目：

```
/blog/*        /part-products/  301     ← 目标已 404
/materials/*   /part-products/  301     ← 目标已 404
/compare/*     /part-products/  301     ← 目标已 404
/glossary/*    /part-products/  301     ← 目标已 404
/case-studies/* /about/         301     ← 命中 6 个活页面
/resources/*    /certifications/ 301    ← 命中 6 个活页面
/standards/*    /certifications/ 301    ← 左侧无真实页面，属有意归一，可留
```

**为什么之前没被发现**：`scripts/check-internal-links.mjs` 扫的是 `dist/`，页面在 `dist/` 里确实存在，所以报"0 断裂"；`astro build` 亦正常产出。**301 发生在 Cloudflare 资源层，在本地工具视野之外。** 7 月的 `seo-check-2026-07-23.md` 同样漏过——它只抽查了首页 / about / solutions 这些主干页。

**判据（可复用的规则）**：`_redirects` 左侧路径若在 `src/pages/` 下真实存在，该条规则就是错的，必须删。

**已修复（2026-09-27）**：删除 6 条（4 条指向 404 + 2 条劫持活栏目），只保留 `/standards/* → /certifications/ 301`。原文件备份于 `.workbuddy/backup-2026-09-27/_redirects.before`。

修复后实测：`npm run build` → 242 页成功；`check:links` → 243 HTML / 0 断裂；sitemap → 240 URL（与基线一致）；`dist/_redirects` 只剩 1 条规则。**改动在下次部署后生效，尚未部署。**

**来源已实锤（2026-09-27 实测）**：这 6 个路径在 `machiningsupplier.com` 上**全部返回 200（真实存在）**，在本站则多为 404 或正是自己的活栏目 —— 本规则集原是为 **machining 站的 URL 归一** 编写的，fork 时被整份继承。

**机制要点（来自 Cloudflare 官方文档）**：
- `_redirects` 的执行顺序在静态资源**之前** —— "Redirects are always followed, regardless of whether or not an asset matches the incoming request."
- 因此命中规则即 301，**哪怕目标 HTML 真实存在**；而本地 `check:links` 只扫 `dist/`，必然漏报。
- 以 `#` 开头的行是注释；每行必须严格是 `[source] [destination] [code?]`，否则整行被忽略。
- 重定向**不作用于 Worker 代码处理的请求**（本站 `assets` 未设 `run_worker_first`，故静态页面走 Assets 层受 `_redirects` 约束，`/api/rfq` 走 Worker 不受影响）。

---

## P1 — 死代码 / fork 遗留（可直接删，均为实测 0 引用）

| 文件 | 判定依据 |
|---|---|
| `scripts/import-engine-family-parts-xlsx.mjs`（321 行） | 引用 `src/data/diesel-part-source-parts.ts`、`E:/claude/parts.xlsx` — 本仓库不存在 |
| `scripts/import-engine-family-sitemap.mjs`（258 行） | 引用 `dieselpartsource-sitemap.xml`、`src/data/mtu-parts.ts`，抓取 `dieselpartsource.com` |
| `scripts/process-engine-family-images.py`（211 行） | 操作 `public/images/engine-family-parts` |
| `scripts/parse-parts-to-excel.mjs`（105 行） | 读 `e:/claude/parts.txt`，解析 `diesel-part-source.com` |
| `src/components/DetailPageShell.astro` | 全仓 0 引用 |
| `src/components/SubpageLinks.astro` | 全仓 0 引用 |
| `src/styles/product-model.css`（802 行） | 0 引用，且无任何 `@import` 引入（`BearingModelPage` 用的是 `product-detail.css`） |
| `scripts/lib/keywordseverywhere.mjs`（163 行） | 无任何消费者；`.env.example` 提到的 `npm run export:keywords:ke` 在 `package.json` 里不存在 |
| `scripts/lib/load-env.mjs`（37 行） | 无任何消费者 |

**已排除的假阳性**（看起来像死代码，实际是活的，不要删）：

- `src/data/sitemap-exclude.ts` — 被 `astro.config.mjs` 引用
- `public/images/stage3-bearing-models/`（14 张）— 被 `combined-bearing-models.ts` 与 `extended-bearing-models.ts` 引用
- 6 个 product family 的 `[model].astro`（7–9 行的薄包装）— Astro 路由惯例，每个 URL 前缀一个文件，合并会改 URL

---

## P2 — 一致性 / 工具链

1. **prettier 形同虚设**。`format` / `format:check` 脚本与 `.prettierrc` 齐备，但 **103 个文件未格式化**（`src/` 内 85 + 配置/脚本/文档 18）：
   - 全部 16 个 CSS、15 个 data 模块、18 个组件、26 个页面、9 个客户端脚本
   - `astro.config.mjs`、`cloudflare-worker.js`、`wrangler.jsonc`、`zoho-smtp.js`、`README.md`、`pnpm-lock.yaml` 等
   - **`Analytics.astro`、`Gtm.astro` 直接解析失败**（内联 `<script>` 的 `dataLayer.push(arguments)` / `w[l] = w[l] || []`）→ `npm run format` 当前不可用
   - 且**没有 `.prettierignore`**
2. **`astro check` 6 个提示**：未使用的 import ×2（`optimize-images.mjs` 的 `stat`、`parse-parts-to-excel.mjs` 的 `writeFileSync`）；`BreadcrumbHero` 的 `current` 已标 `@deprecated`，仍在 `certifications.astro:138`、`thank-you.astro:16` 使用；`FunnelPageView.astro:15` 的 `<script define:vars>` 缺 `is:inline`
3. **`tsconfig.json` 的 `@/*` alias 从未使用**（0 次；157 处全为相对路径）
4. **`cloudflare-worker.js:198` 硬编码跨域收件地址** `to: 'admin@machiningsupplier.com'`，而 `zoho-smtp.js` 的 `SALES_EMAIL = 'sales@combinedbearingsource.com'`。当前行为是故意的（收件箱在 machiningsupplier 域），但两个域名混在一条链路且埋在代码里，建议提为 env var
5. **`cloudflare-worker.js:185` `console.log(emailBody)`** 把客户姓名/邮箱/询盘全文写进 Cloudflare 日志
6. **未被引用的图片在被发布**：`public/images/combined-bearing-models` 20 张中 15 张无引用、`extended-bearing-models` 15 张中 11 张无引用。`public/` 会被原样拷贝，故 `dist/images/combined-bearing-models` 实测 20 张全在
7. **空目录**：`public/videos/`、`scripts/tmp/`
8. **`public/_routes.json`** 是 Cloudflare **Pages 时代残留**（Workers 下无效，已被 `.assetsignore` 排除，属无害噪音）
9. **无 CI**：没有 `.github/workflows`

---

## 未做的事（需要决策）

- ~~**`_redirects` 未修改**~~ → **已于 2026-09-27 修改**（本地文件已改并构建验证通过；**尚未 commit、尚未部署**，改动在下次部署后生效）。
- **git 历史重写只完成在本地**。远端 `main` 仍是旧历史 `a7b39c3`；本地 HEAD 为重写后的 `2a72921`（`.git` 已从 140M 收到 11M，文件树指纹与重写前一致）。**force push 尚未执行。**
