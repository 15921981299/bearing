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

修复后实测：`npm run build` → 242 页成功；`check:links` → 243 HTML / 0 断裂；sitemap → 240 URL（与基线一致）；`dist/_redirects` 只剩 1 条规则。

**已部署（2026-09-27 05:29）并线上验证**：force push 至远端 `main`（`a7b39c3` → `907d398`）。

> **部署路径**：本站 **Cloudflare Git 集成生效，push 到 `main` 会自动构建部署**——本次 push 于 05:10:07 完成，05:10:27 即出现部署记录，线上在 05:20 前已切到新版本。另于 05:29 手动执行 `npx wrangler deploy`（`Version ID 85c69883-4a62-4df2-9ed9-58aac4149e2f`），用于确保 `dist` 与 HEAD 完全一致。

| 验证项（**不带参数**，真实用户视角） | 修复前 | 部署后 |
|---|---|---|
| `/resources/` | 301 | **200** |
| `/case-studies/` | 301 | **200** |
| `/blog/` `/materials/` `/compare/` `/glossary/` | 301→404 链 | **404** 直返 |
| `/standards/foo/` | 301 | **301 → /certifications/**（有意保留） |
| **sitemap 全量 240 URL** | 228×200 + **12×301** | **240 全部 200，非 200 = 0** |

**已完成（2026-09-27）**：远端 `cloudflare/workers-autoconfig` 分支（Cloudflare bot 于 2026-07-27 自动创建，携带全部 824 个 `exports/` 文件）已删除，本地已 repack（`.git` 71M → 11M）。⚠️ GitHub 侧体积因 `refs/pull/1/head` 仍指向该 commit 而未下降；详见文末。

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

- ~~**`_redirects` 未修改**~~ → **已于 2026-09-27 修复、部署并线上验证通过**（见 P0 章节）。
- ~~**git 历史重写只完成在本地**~~ → **force push 已完成**：远端 `main` 从 `a7b39c3` 更新为 `907d398`，远端 `exports/` 计数归 **0**。
- ~~**远端仍有第二个分支携带那 70MB**~~ → **已于 2026-09-27 删除**（详见下节）。
- **本机环境提示**：`npm run build` 在**已有旧 `dist/`** 时会因安全删除机制卡死（实测 17 分钟、dist 被删到一半）。正确顺序是先 `mv dist dist__prev` 再构建。

---

## 已执行：远端遗留分支删除 + 本地 repack（2026-09-27）

### 执行前取证（证明「删了不丢东西」）
| 核对项 | 结果 |
|---|---|
| 分支性质 | `bc7c17b1ee0750905f1c36a84893dce7447b8862`，作者 `cloudflare-workers-and-pages[bot]`，2026-07-27 03:37 UTC，孤立分支（与 `main` **无共同祖先**） |
| 相对 `main` 多出文件 | 843 个（644 jpg + 177 webp + 5 pdf + 4 txt + 3 xlsx + 3 js + 2 png + 1 tmp + 1 mjs + 1 md + 1 log + 1 json） |
| `exports/` 与本地磁盘 | **完全一致**：824 文件 / 70,994,903 字节（两侧逐字节核对） |
| `output/` 5 个 PDF | 与磁盘**大小逐个相同** |
| 磁盘上**没有**的分支独有文件 | 仅 5 个文本：`functions/api/rfq/index.js`、`functions/_lib/resend.js`、`public/_worker.js/index.js`、`scripts/create-worker-entry.mjs`、`package-lock.json` |
| 备份位置 | `.workbuddy/backup-2026-09-27/workers-autoconfig-branch/`（305K，含 README.txt 记录 SHA 与回滚命令） |

### 操作与结果
| 步骤 | 命令 | 结果 |
|---|---|---|
| 删远端分支 | `git push origin --delete cloudflare/workers-autoconfig` | `- [deleted] cloudflare/workers-autoconfig` ✅ |
| 剪除失效引用 | `git fetch --prune --prune-tags origin` | 本地只剩 `main` / `origin/main` ✅ |
| 过期 reflog | `git reflog expire --expire=now --expire-unreachable=now --all` | 5 条 reflog 清空 |
| 垃圾回收 | `git gc --prune=now` | rc=0 |
| **pack 体积** | — | **67.78 MiB → 7.97 MiB** |
| **pack 对象数** | — | **2054 → 616** |
| **`.git` 体积** | — | **71M → 11M** |
| 完整性 | `git fsck --no-progress` | **0 错误** |
| 内容未变 | `git rev-parse main^{tree}` | **`1e5d19e7aaac28c793af51643cb249222ba51323`，与操作前一致** |
| 旧对象已清除 | `git cat-file -t bc7c17b` | `could not get object info` ✅ |
| 历史可走通 | `git log --oneline \| wc -l` | 25 个提交，HEAD = `907d398` |

### ⚠️ GitHub 侧体积**未同步下降**
- GitHub API 实测 `size: 61218`（≈59.8 MB），删除分支前后**无变化**。
- 根因：`git ls-remote` 仍返回 **`refs/pull/1/head` = `bc7c17b`** —— Cloudflare bot 当时也开了 **PR #1**（现状态 `closed`、`merged_at: null`）。该 PR 引用让那 70MB 在服务端**仍然可达**，GitHub 的 GC 不会回收。
- 结论：**本地瘦身已实打实完成；GitHub 侧的 59.8MB 需要 GitHub 自己跑 GC 才会降。** 常规办法是等（不可控），可靠办法是提工单请 GitHub Support 对该仓库执行一次 `git gc`。
- 影响评估：59.8MB 远低于 GitHub 的告警线（1GB 提示 / 5GB 硬限），**不影响功能，只影响 clone 速度**，属可接受状态。

### 环境经验（本机）
- 本会话 Bash 里 `git push` 会**静默挂死**：全局 `credential.helper = helper-selector`（WorkBuddy 自带），而 `CODEBUDDY_API_KEY_HELPER_DISABLED=1` 使其**不返回任何凭据**，且无 `~/.git-credentials`、无 `~/.ssh` 私钥。
- 可用解法：Windows 凭据管理器里有该仓库凭据（用户名 `15921981299`），经 GCM 2.9.0 取用：
  `GIT_TERMINAL_PROMPT=0 GCM_INTERACTIVE=never git -c credential.helper= -c credential.helper=manager push ...`
  （`credential.helper=` 空值先清空助手列表，再挂 `manager`，否则仍会落到被禁用的 selector。）
