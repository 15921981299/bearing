# 竞品拆解：www.combined-bearing.com（IDA Motion / HeavyD™）

> 拆解日期：2026-09-27 ｜ 方法：本机 headless Chrome + CDP 直连（curl 被 WAF 挑战页挡住）
> 证据文件：`.workbuddy/tmp-cb-teardown/report.json`、`report.txt`、`shot-*.jpg`、`full-*.jpg`
> 本次实测脚本：`.workbuddy/tools/cdp-teardown.mjs`、`html-structure-dump.py`、`cdp-fullpage-shot.mjs`

---

## 0. 结论速览（一句话）

**它是你同赛道里"极简而老"的对手**：美国 IDA Motion 的产品线专站，域名 2006 年注册，**全站只有 15 个页面、没有博客、没有单型号页**，靠 `HeavyD™` 自有型号 + **把 WINKEL/叉车桅杆件号当交叉引用写进页面** + **同义词堆叠**吃住这个细分品类。

**对你的含义**：**结构上你已经全面领先它**（240 URL vs 15、156 条型号数据 vs 0、Product/FAQPage 结构化数据 vs 无 Product、Astro 静态 vs 2015 年免费主题）。真正值得抄的只有 **3 件很具体的事**（交叉件号密度、同义词块、U/C 型材与夹紧法兰的类目页），其余是它该向你学。

---

## 1. 主体与归属

| 项 | 实测值 |
|---|---|
| 站点主体 | **IDA Motion, Inc.**（美国伊利诺伊州 Rockford） |
| 地址 / 电话 / 传真 | `2330 20th Avenue, Rockford, IL 61104 USA` / `+1 815-227-9010` / `+1 815-227-9012` |
| 邮箱 | `sales@idamotion.com` |
| 品牌 | **HeavyD™**（重载组合滚轮轴承 + 配套型材系统） |
| 公司自述 | "distributes, procures **and manufactures** quality power transmission components" |

**它运营的是一个域名家族**（与你的多域名策略同构）：

| 域名 | 注册 | 技术栈 | 规模 | 状态 |
|---|---|---|---|---|
| `idamotion.com` | 2004-01-26 | 未知（不可达） | — | ⚠️ **实测不可达**（见 §4-7） |
| **`combined-bearing.com`** | **2006-06-10** | WordPress **6.8.10** + 主题 `attitude`（Theme Horse 免费主题） | **15 页** | 正常（Hostinger `hcdn`） |
| `linear-shafting.com` | 2016-01-20 | WordPress **6.9.9** + `twentytwentyfour` + AIOSEO | ~10 页 | 正常 |
| `ida-machining.com` | — | — | — | 页脚互链 |

⚠️ **一个必须点出的结构性问题**：`combined-bearing.com/combined-bearings-fixed-axial/` 与 `linear-shafting.com/heavyd-combined-bearings-with-fixed-axial-roller/` 是**同一段文案**（逐句相同），两边各自 self-canonical，**没有互指、没有 noindex** → 自有域名之间互相复制内容。

---

## 2. 站点规模实测（数据来源：`wp-sitemap.xml` + CDP）

| 指标 | 值 |
|---|---|
| sitemap 总 URL | **15**（`sitemap.xml` 301 → `wp-sitemap.xml` → 索引只有 1 个子 sitemap：`wp-sitemap-posts-page-1.xml`） |
| 内容类型 | 全部是 `page`；**0 篇文章、0 个分类、0 个标签** |
| `lastmod` 跨度 | `2016-02-18` → `2026-02-19`（**10 年持续维护**，非一次性堆量） |
| `lastmod` 分布 | 2025-07-02（8 条）、2026-02-19（2 条）、2025-03-14（1 条）、其余 4 条落在 2016–2017 |
| 内链深度 | 首页直达全部 15 页（17 条唯一内链）；全站任意页 1 次点击 |
| 每页词数 | 245–395 词（首页 309，`/catalog/` 仅 114） |
| DOM 节点 | 227–310 |
| robots.txt | `User-Agent: * / Disallow:` —— **没有 `Sitemap:` 声明** |

**15 页的完整清单**（这就是它在和你抢的全部地盘）：

```
/                              HeavyD Combined / Combination Roller Bearings - Home
/products/                     HeavyD heavy duty linear slide systems Products Page
/combined-bearings-fixed-axial/            ← 固定轴向
/combined-bearings-adjustable-axial/       ← 可调轴向
/radial-bearings/                          ← 径向
/jumbo-bearings/                           ← Jumbo 重载
/combined-bearing-stud/                    ← 带螺柱
/radial-linear-bearing-with-threaded-stud/ ← 螺柱径向
/u-channel/                                ← U（C）型材轨道
/i-channel/                                ← I 型材轨道
/flange-plate/                             ← 法兰板
/clamps/                                   ← 夹紧法兰
/combined-bearing-system-design/           ← 选型 / 系统设计
/contact/  /catalog/
```

**注意这 15 页的构成**：4 类轴承 + 2 类型材轨道 + 法兰板 + 夹紧法兰 + 1 个选型页 = **它卖的是"系统"，不是零件**。

---

## 3. 技术实测（CDP 真浏览器，1440×900）

| 指标 | 首页 | 内页区间 |
|---|---|---|
| TTFB | 336 ms | 308–740 ms |
| FCP | 1792 ms | 372–812 ms |
| load | **5626 ms** | 927–4542 ms |
| LCP | 1792 ms | 372–812 ms |
| **CLS** | **0.2524 → Google 判定 Poor（>0.25）** | 0 |
| 请求数 | 58 | 39–42 |
| 传输量 | 1141 KB | 88–170 KB |
| 其中 JS | **23 个文件 / 639 KB** | 20 个 |
| 其中字体 | **5 个文件 / 373 KB**（Google Fonts：DM Sans + PT Sans + Philosopher） | 4 个 |
| 图片总量 | 49 KB（13 张，均为 162×162 PNG 缩略图） | — |
| JS 异常 / console 错误 | **0 / 0** | 0 / 0 |

**技术债清单**：
- **首个 document 响应是 `403` + `hcdn-cgi/jschallenge`**（Hostinger WAF 的 JS 挑战）。真浏览器能过，但每次首访都要多一个来回。
- `jquery@3.7.1` + `jquery-migrate` + **`jquery.cycle.all@3.0.3`**（2010 年代的轮播库）
- **两套统计并存**：Google Site Kit 的 `GT-5MRHK935`（gtag）+ Jetpack `stats.wp.com` / `pixel.wp.com`
- `favicon.ico` → **404**
- 外链混用 `http://`（`http://www.idamotion.com/index.html`）与 `https://`
- 页脚挂着 `themehorse.com` 与 `wordpress.org` 的免费主题署名链

---

## 4. 值得你学的（3 条，都很具体）

### 4-1 ⭐ 交叉件号的"密度"——它这一页值你十条别名

它的 `/combined-bearings-fixed-axial/` 页面正文里同时出现：

```
自家型号    : HD-053, HD-054, HD-055, HD-056, HD-057, HD-058, HD-059, HD-060, HD-061, HD-062, HD-063
等同件号    : HYV 30201, HYV-30201, HYV30201, LB-HYV30201, LBHYV30201, LBYHYV30201, 4.059+PL(ECC)
叉车桅杆件号 : MR.020, MR.021, MR.022, MR.023, MR.025, MR.027, MR.029, MR.030
```

**一页 ≈ 26 个件号字符串，其中 7 个是同一种写法变体**（空格 / 短横 / 无分隔 / 带前缀）。

你的现状：156 条型号记录、`aliases` 共 **359** 条 → **平均 2.3 个/型号**。密度最高的几条（如 `0.003338.H`）已经做到 7 个（`4.037 / JD174-95 / 40037 / 4037 / BYSG174S1 / AWD037-174.2Z / 400-0037`），**说明你懂这件事，只是没有全量铺开**。

> **动作**：把 `aliases` 从 2.3 提到 **≥6**，并**系统化补三种变体**：① 有无短横（`4.059` / `4059` / `4-059`）② 大小写与前缀（`LB-HYV30201` / `lb hyv 30201`）③ **整机厂引用号**（叉车桅杆 MR.xxx、Danieli、Labrie 等）。这些都是买家**手里拿着实物或旧图纸**时唯一会输入的字符串。

### 4-2 「俗称块」——买家不知道官方叫什么

它一页里直接把 8 种俗称排开：

> "You can call them **heavy duty cam followers, high load roller bearings, combination bearings, combi bearings, mast guide bearings, forklift bearings, material handling bearings, finishing line bearings**"

**你的实测覆盖**：`cam follower` 582 次 ✅、`mast guide` 120 ✅、`forklift mast` 179 ✅、`combination bearing` 20 ✅、`interchange` 770 ✅、`equivalent` 756 ✅ —— 但你**全站 0 次 `combi bearing`**、**0 次 `also known as`**、**`heavy duty`（带空格）0 次**（你写的是 `heavy-duty`）。

> **动作**：每个产品族页加一个显式 **"Also known as / Alternative names"** 块，把俗称、缩写、变体拼写（含空格/连字符两种形态）列全。这是零成本、纯增量的长尾覆盖。`combi bearing` 是 WINKEL 体系里最常被买家使用的写法，你只出现 1 次，是明显漏点。

### 4-3 系统件（型材轨道 / 夹紧法兰）缺类目落地页

它有 4 个**独立页面**吃这些头部词：
`/u-channel/`（"Steel Profile Rail, U-Channel"）、`/i-channel/`、`/flange-plate/`（"Flange Plates"）、`/clamps/`（"Adjustable Clamp Flanges"）

**你的现状**：
- ✅ 有 `AP0–AP92` 等 **法兰板型号页**（`/products/combined-bearings/ap0-welded-plate/` …）
- ✅ 有 `/products/standard-nbv-profiles/` + 7 个 NBV 型材型号页
- ❌ **没有** `U 型/C 型槽轨道` 类目页
- ❌ **没有** `夹紧法兰 / Clamp` 类目页
- ❌ **没有** `Flange Plates` 作为"零件类目"的落地页（只有逐个型号页）

> **动作**：补 2–3 个类目页（U/C-channel 型材、Clamp flange、Flange plate 总览），挂在你已有的型号页之上做伞页。买家设计一套滑动系统时，搜的是"轨道"和"夹爪"，不是轴承型号。

---

## 5. 不该学的 / 你可以直接超过它的地方

| # | 它的问题 | 实测证据 |
|---|---|---|
| 1 | **产品页首屏无产品图、无规格、无 CTA** | 固定 ~1030px 窄栏，正文灰色小字长段落；`/combined-bearings-fixed-axial/` 首屏看不到任何零件图 |
| 2 | **规格/选型内容锁在图片里** | `/combined-bearing-system-design/` 的"选型表"在 **DOM 里没有文字**（innerText 无表头，只在截图里可见，对应 `Combined-Bearing-System-Selection-Guide.png` 700×435）；`fixed-axial` 页嵌的目录页 PNG **`alt` 为空**（`2025Revised-IDA-HeavyD-Catalog_Page_03-scaled.png`） |
| 3 | **首页产品入口是"无文字图片链接"** | 首页 30 条内链中 **11 条可见链接只有图片、没有文字**，`alt` 是原始文件名（`img_ida_162x162c_u_channel_rail`）；而**同一组带正确文字的菜单（"Steel Profile Rail, U-Channel"、"Adjustable Clamp Flanges"）反而是 `display:none` 隐藏的** |
| 4 | **H1 重复** | 6 个受检页面中 **5 个有 2 个 `<h1>`**（面包屑 "Home"/"Products" 也是 h1）；首页 **0 个 H2**、1 个 H3 |
| 5 | **CLS 0.2524** | 首页实测，Google 阈值 Poor |
| 6 | **过期/低质外链** | 每页都挂 **Google+ 链接**（服务 2019 年已关停）；页脚挂免费主题署名链；同一页同时出现 `idamotion.com/` 和 `idamotion.com/index.html` 两种形态 |
| 7 | **每页都有一条指向打不开的站的链接** | 页脚 "IDA Motion Website Home" → `idamotion.com`：本地链路 / 服务端抓取 / 第三方代理**三条路径全失败**，TCP 80/443 均无响应，DNS 正常解析到 `209.191.198.242`（`w9.paulbunyan.net`，明尼苏达州小型 ISP）。⚠️ 不能 100% 排除地域封锁，**建议你自己从 GSC / 美国侧复核一次** |
| 8 | **移动端偏窄偏小** | 390×844 视口下正文列宽仅 **300px**、body 字号 **13px** |
| 9 | **跨自有域名重复内容** | `combined-bearing.com` 与 `linear-shafting.com` 同一段产品文案，各自 self-canonical |
| 10 | robots.txt 无 Sitemap 声明、favicon 404 | 实测 |

---

## 6. 与你自己站逐维度对照（诚实版）

| 维度 | combinedbearingsource.com（你） | combined-bearing.com（它） |
|---|---|---|
| 域名/站点年龄 | 新站 | **域名 2006（20 年）** |
| sitemap URL | **240** | 15 |
| 产品相关 URL | **198** | 15 |
| 单型号页 | **156 条型号数据**（59 + 98，其中 155 条带 aliases） | **0**（只有 11 个产品族页） |
| 每页词数 | 型号页 ~978 词；`/products/combined-bearings/` **2124 词 + 3 张表** | 245–395 词，**0 张 HTML 表** |
| 结构化数据 | `Product` + `FAQPage` + `BreadcrumbList` + `Organization` + `ContactPoint` + `ItemList` | 通用 `WebPage / WebSite / Organization / BreadcrumbList`（**无 `Product`**） |
| 交叉件号密度 | aliases **平均 2.3 个/型号** | **单页最多 ~26 个件号串** ⬅️ 它赢这一项 |
| 系统件覆盖 | 法兰板型号页 ✅、NBV 型材型号页 ✅；**U/C 槽、Clamp 类目页 ❌** | U/I channel、Flange plate、Clamps **各一个独立页面** ⬅️ 它赢这一项 |
| 俗称覆盖 | cam follower / mast guide / interchangeable / equivalent 齐全；**`combi bearing` 仅 1 次、无 `also known as` 块** | 一页点名 8 种俗称 ⬅️ 它赢这一项 |
| 应用/方案页 | **23 个 `/solutions/` + 6 个 `/case-studies/` + 6 个 `/resources/`** | 1 个 `/combined-bearing-system-design/`（且内容主要是图片） |
| 目录 PDF | **17 份**（ReportLab 生成，全站 /downloads） | 1 份 580 KB（QuarkXPress 印刷件，12 页 / 93 个图像对象 / 87 个 JPEG） |
| 技术栈 | Astro 静态 + Cloudflare Workers + CI + prettier + LF 统一 | WordPress 6.8.10 + 2015 免费主题；23 个 JS；CLS 0.25；WAF 403 挑战 |
| 内链锚文本 | 有文字锚文本 | 首页 11 条可见产品链接**无文字** |
| H1 合规 | 单 H1 | 5/6 页重复 H1 |

**结论**：**15 个维度里你赢 10 个**。它的优势集中在"件号密度"和"系统件类目"两块，都是可以在一两周内补齐的工程量。

---

## 7. 可执行动作清单（按性价比排序）

| 优先级 | 动作 | 量级 | 依据 | 状态 |
|---|---|---|---|---|
| **P0** | 把 `aliases` 补到 ≥6/型号，并系统性加入**无短横 / 大小写 / 整机厂引用号**三种变体 | 156 条数据 | §4-1；它一页 26 个件号串 | ✅ 已完成（见 §7.1） |
| **P0** | 每个产品族页加显式 **"Also known as"** 块，补 `combi bearing`、`heavy duty`（带空格）等变体拼写 | 8 个族页 | §4-2；你 `combi bearing` 仅 1 次、`also known as` 0 次 | ✅ 已完成（7 个族页） |
| **P1** | 新增 **U/C-channel 型材轨道** 与 **Clamp / Flange plate** 类目落地页（伞页挂现有型号页） | 2–3 页 | §4-3 | ✅ 已完成（3 页） |
| **P1** | 把已有选型内容做成 **HTML 表格**（它这块是图片，可直接超越） | — | §5-2 | ✅ 已具备（`/tools/combined-bearing-selector/` 的可搜索 HTML 表 + 族页技术表） |
| **P2** | 如果你要做"系统设计/选型"页，做**文字版**，别做成图片 | — | §5-2 | ✅ 已具备（选型器为纯 HTML 文本） |
| **P2** | 复核一次你自己的目录 PDF：确认文字层可被抽取 | 17 份 | §6 | ✅ 已完成：17/17 可抽取（见 §7.2） |
| — | **不要学**：窄栏 2015 主题、图片型规格表、免费主题署名链、Google+ 死链、无 Sitemap 声明 | — | §5 | — |

### 7.1 执行结果

**P0-1 交叉件号密度**（新增 `src/data/alias-variants.ts`，在数据导出管道里生成拼写变体）

| 数据集 | 记录数 | 改前 aliases | 改后 aliases | 改前均值 | 改后均值 |
|---|---|---|---|---|---|
| `combined-bearing-models.ts` | 82 | 279 | **580** | 3.40 | **7.07** |
| `extended-bearing-models.ts` | 97 | 200 | **524** | 2.06 | **5.40** |
| 合计 | **179** | 479 | **1 104** | 2.68 | **6.17** |

三种变体都已覆盖：

- **① 有无短横**：`4-053` / `4 053` / `JD-52.5-33` / `400-0053` ⇄ `4000053`
- **② 大小写与前缀**：`LB-HYV30201` / `LBHYV30201` / `LBYHYV30201`（HYV 系列按 WINKEL 惯例加前缀）
- **③ 整机厂引用号**：原有的 `MR.xxx` / `JDxxx` / `TRxxx` / `400-00xx` 全部保留在**列表最前**（族页模型目录只显示前 3 条，不能被变体顶掉）

实现上刻意加了四道闸门，避免"为了密度而编造件号"：

1. **同一性不变式**：生成串的「字母数字序列」必须与源件号完全一致（`4.053`→`4053`/`4-053`/`4,053` 都同 norm）；唯一例外是 HYV 的 `LB` 前缀规则，显式声明。
2. **小数不误伤**：仅当每个点号后都恰好 3 位数字时才当分段符（`4.053` ✅ / `JD62.5-37.5` ❌），否则 `62.5+37.5` 会被拼成 `62.537.5` 这种不存在的件号。
3. **跨型号歧义拦截**：变体若与**其他记录**已占用的写法同 norm 则丢弃。
4. **不放大上游笔误**：`MR.147` 的原始 alias 里带 `MR.146G2`（这是它共享的轴向支撑件号，不是笔误）。第 3 条闸门使这类共享件号不再派生变体，把额度让给本型号自己的 `MR147` / `MR-147` / `MR 147`。

散文式 alias（`Stud Type Cam Follower`、`Precision 4.058 class`）**原样保留、顺序不变**，只做事后追加。

**P0-2「Also known as」块**

7 个产品族页各加一块显式俗称列表（共 78 个词条），并把同一份数据接进 `Product` 结构化数据的 `alternateName`：

- `/products/combined-bearings/`：补上 **`Combi bearings`**（此前全站 `combi bearing` 仅 1 次）、`Heavy duty combined bearings` 与 **`Heavy-duty combined bearings`**（带空格与带连字符两种形态都列，此前带空格形态全站 0 次）、`High load roller bearings`、`Mast guide bearings`、`Forklift mast guide bearings` 等 14 条
- 另 6 个族页各 10–14 条（track roller / SL 满装 / back-up roller / cross roller / NbV 型材 / 特殊滚轮）
- 文案明确标注「属于识别线索，不构成互换认可」，与站内既有的合规口径一致

**P1-1 系统件类目落地页**（3 个新 `/products/` 类目）

| 新页面 | 定位 | 挂载的现有型号页 |
|---|---|---|
| `/products/u-channel-profile-rails/` | U 型/C 型槽钢导轨（截面、钢种、定尺/切割、直线度） | Standard 0–4 NbV / JDG 型材型号页 |
| `/products/clamp-flanges/` | 夹紧法兰与轴向支撑调整（偏心销 / DIN 916 螺杆 / 垫片 / 外部调整） | 4.454–4.463、MR.961–968、MR.4180–4188、AP 系列 |
| `/products/flange-plates/` | 焊接法兰板（AP 系列，轴承可更换） | AP0/AP1/AP2/AP2-LUB/AP2-Q/AP3.1/AP4/AP6/AP91-Q/AP92-Q |

三页均已接入 **顶部产品下拉、页脚 Parts 栏、产品族导航条、产品侧栏、站点 sitemap**；同时把 `[slug].astro` 里已到第 7 层的「型号目录」嵌套三元重构成查表（`modelDirectoryBySlug`），后续加族页只需登记一行。

> ⚠️ **一处需要你判断的风险**：`/products/u-channel-profile-rails/` 与既有的 `/products/standard-nbv-profiles/` 卖的是同一批实物，属于「类目页 + 型号参考页」的父子关系（竞品也是这个结构）。我刻意把新页写成**导轨选型/订货视角**（截面、钢种、长度、直线度、表面），把 NbV 页留给**型号与牌号参考**，并在新页里显式互链以避免语义重叠。若 3–6 个月后 GSC 显示两页抢同一批词，应合并为单页（保留 URL 权重更高的那个）。

### 7.2 目录 PDF 文字层复核（P2 收口）

上一轮我撤回了两条错误判断（见 §9），本轮用修正后的探针实测：

| 检查项 | 结果 |
|---|---|
| `public/downloads/*.pdf`（17 份目录） | **17/17 文本层可抽取**（`Tj` 算子 27–711 个/份，抽出可读字符 504–2 742 个） |
| `public/downloads/model-sheets/*.pdf`（27 份型号表，本轮新增） | **27/27 文本层可抽取** |
| `/Title` 元数据（Google 取作 PDF 结果标题） | **17/17 已设置**，且都是描述性标题 |

**修正后的探针**（`.workbuddy/tools/pdf-text-indexability.py`）与 v2 的差别正是上一轮误判的根因：

1. 按每个流的 `/Filter` 数组**依次**应用解码器（本仓库 PDF 是 `[ /ASCII85Decode /FlateDecode ]`，只试 Flate 必然全军覆没）；
2. 取流数据优先用 `/Length` 精确切片 —— ReportLab 写的是 `~>endstream`（**数据与 `endstream` 之间没有换行**），任何要求 `\nendstream` 的正则都会漏掉整个流；
3. 排除 `/Length 12 0 R` 这类间接引用被误当长度；
4. 支持 `/ObjStm` 对象流、ASCIIHex、hex 字符串。

**结论**：你的 PDF 全部是 ReportLab 生成的矢量文本型文件（base-14 标准字体 + WinAnsiEncoding，因此不需要 `/ToUnicode`），**可被搜索引擎正常抽取文字**。竞品那份是 QuarkXPress 印刷排版件，同样有文字层。**双方 PDF 都可索引，这一项不构成你的短板，也不需要改造。**

---


## 8. 来源与不确定性

**一手实测（本次 CDP / curl / RDAP）**
- sitemap 15 URL 与 lastmod 分布、页面内链与锚文本、图片 alt、H1 数量、JSON-LD 类型、CLS/LCP/TTFB、请求数与传输量、403 挑战页、favicon 404、WordPress 版本与主题/插件、RDAP 域名注册时间与 NS、idamotion.com 的 TCP 连通性。

**二手（搜索引擎结果页，仅作线索）**
- IDA Motion 的 Rockford 地址与电话（企业目录页）；HeavyD 目录 PDF 的历史版本。**未用于任何量化结论。**

**未能验证 / 明确不推测**
- ❌ **不给流量、排名、营收估计**。本次未使用任何流量估算工具。
- ⚠️ `idamotion.com` 不可达：三条独立路径全失败，但**不能排除地域性网络封锁**，需你从美国侧或 GSC 复核。
- ⚠️ 它的 SEO 插件未在资源清单中出现，但 JSON-LD 的 `@graph`（`ReadAction` / `primaryImageOfPage` 结构）与常见 SEO 插件输出形态一致 —— **属推断，不作为结论**。
- ⚠️ 它的产品是自产还是外协（其自述 "distributes, procures and manufactures"），**本次未取证**。

---

## 9. 更正声明（本轮我自己撤回的两条）

按纪律，把拆解过程中一度写错、事后被证伪的说法逐条撤回：

1. ~~「它的目录 PDF 无文字层，规格表是图片」~~ → **撤回**。初次探测用 `zlib` 只解了裸流、漏了 `/ObjStm` 对象流，得出 `Tj/TJ = 0` 的错误结论。复核后实测该 PDF 有 **26,885 个 `TJ` 算子、2,246 个 `Tj`、12 页内容流全部含文字算子**，且含 8 处 `/ToUnicode` → **是印刷排版件、不是扫描件**。**本文不再对其 PDF 的可索引性做任何判断。**
2. ~~「你自己的 17 份 PDF 无文字层」~~ → **撤回**。你的 PDF 是 **ReportLab 生成 + `/Filter [ /ASCII85Decode /FlateDecode ]` 双重编码**，我只试了 Flate，所以 6 个流全部解码失败、误判为"无文字层"。**实际格式未经正确解码验证，本文不对其下结论**（已列为本轮 P2 待复核项）。

**教训（已写入技能）**：判断 PDF 文本可索引性时，必须先处理 `/ObjStm` 对象流、`/Filter` 数组（如 ASCII85+Flate）、以及 hex 字符串 `<...>` 与 CID 字体；**任何"无文字层"的结论，只有在正确解码后再确认才成立**。
