# Combined Bearing Source

Supplier website for combined bearings, track rollers, full-complement cylindrical roller
bearings, back-up rollers, cross roller bearings and Standard NbV steel profiles.

- **Live site**: [combinedbearingsource.com](https://combinedbearingsource.com)
- **Stack**: Astro 5 (static site generation) + TypeScript client scripts
- **Hosting**: Cloudflare Workers (Workers + Assets), RFQ API via Zoho SMTP, drawings in R2

A production build emits **243 static pages** (~22 MB), roughly 168 of which are
data-driven bearing model pages.

## Requirements

- Node.js 20 or newer
- pnpm 10.11.1 — pinned via `packageManager` in `package.json`

> **Known inconsistency**: the project is pinned to pnpm (`pnpm-lock.yaml`, no
> `package-lock.json`), but the npm scripts and the Cloudflare build command use `npm run`.
> Both work; normalising on one of them is a pending cleanup.

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:4321
```

## Scripts

| Command                             | What it does                                                                             |
| ----------------------------------- | ---------------------------------------------------------------------------------------- |
| `pnpm dev`                          | Astro dev server on port 4321                                                            |
| `pnpm build`                        | Static build into `dist/` — run this before deploying                                    |
| `pnpm preview`                      | Serve the built `dist/` locally                                                          |
| `pnpm check`                        | `astro check` — type and template diagnostics                                            |
| `pnpm check:links`                  | Validate every internal link across the built HTML. **Requires `dist/` to exist first.** |
| `pnpm audit:encoding`               | Scan source files for mojibake / bad encoding                                            |
| `pnpm optimize:images`              | Image optimisation pass                                                                  |
| `pnpm format` / `pnpm format:check` | Prettier write / check                                                                   |
| `pnpm deploy`                       | `pnpm build` then `npx wrangler deploy`                                                  |

### Offline / one-off tools (not wired to any npm script)

These run manually and are **not** part of `astro build` or `wrangler deploy`. They are kept
because they generate or maintain assets that **are** published:

| Script                                           | What it does                                                                                                     |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| `scripts/generate-catalog-reference-pdfs.py`     | Rebuilds the combined-bearing + SL reference PDFs into `public/downloads/` and `output/pdf/`                     |
| `scripts/generate-series-reference-pdfs.py`      | Rebuilds the NUKR / NNTR track-roller reference PDFs (same two targets)                                          |
| `scripts/generate-special-bearing-pdfs.py`       | Rebuilds the MR / ZRS / KRES / PR4 / profile-matrix / inspection-checklist PDFs into `public/downloads/`         |
| `scripts/generate-track-roller-reference-pdf.py` | Builds the NATR..-PP reference PDF into `output/pdf/` (staging only — copy to `public/downloads/` after review)  |
| `scripts/process-factory-assets.mjs`             | `src/assets/factory-facility/` → `public/images/factory-facility/`, referenced by `src/data/factory-evidence.ts` |
| `scripts/export-site-pages-xlsx.mjs`             | Exports the current page inventory to `exports/`                                                                 |
| `scripts/strip-jade-source-urls.py`              | One-off migration that stripped `sourceUrl` fields from the model data files                                     |

> The PDF generators need `reportlab`; `process-factory-assets.mjs` needs `sharp` (already a dev dependency).

## Site structure

Static routes, all with trailing slashes (`trailingSlash: 'always'`):

| Path                                 | Source                                        | Description                                                 |
| ------------------------------------ | --------------------------------------------- | ----------------------------------------------------------- |
| `/`                                  | `src/pages/index.astro`                       | Homepage                                                    |
| `/products/`                         | `src/pages/products/index.astro`              | Product family hub                                          |
| `/products/<family>/`                | `src/pages/products/[slug].astro`             | One page per family, generated from `src/data/products.ts`  |
| `/products/<family>/<model>`         | `src/pages/products/<family>/[model].astro`   | Model detail pages — 6 dynamic route folders                |
| `/products/combined-bearing-series/` | `src/pages/products/combined-bearing-series/` | Series hub + `[slug]` detail pages                          |
| `/solutions/`                        | `src/pages/solutions/`                        | Application / cross-reference guides                        |
| `/case-studies/`                     | `src/pages/case-studies/`                     | Customer case studies                                       |
| `/resources/`                        | `src/pages/resources/`                        | Technical resource library                                  |
| `/downloads/`                        | `src/pages/downloads/index.astro`             | PDF catalogue downloads (files live in `public/downloads/`) |
| `/certifications/`                   | `src/pages/certifications.astro`              | Quality and certification evidence                          |
| `/about/`                            | `src/pages/about.astro`                       | Company profile                                             |
| `/contact/`                          | `src/pages/contact.astro`                     | Parts inquiry form, posts to Worker `/api/rfq`              |
| `/thank-you/`                        | `src/pages/thank-you.astro`                   | Post-submission confirmation                                |
| `/privacy/`                          | `src/pages/privacy.astro`                     | Privacy policy                                              |
| `/sitemap/`                          | `src/pages/sitemap.astro`                     | Human-readable sitemap page                                 |

`@astrojs/sitemap` additionally generates `/sitemap-index.xml` → `/sitemap-0.xml`.
Exclusions are configured in `src/data/sitemap-exclude.ts` (`/401/`, `/404/`, `/thank-you/`).

## Where content lives

Almost all page copy is data-driven — edit these instead of the page templates:

| File                                                 | Contents                                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `src/data/site.ts`                                   | Company info, contacts, GA4 / GSC / GTM IDs, social links, JSON-LD schema builders    |
| `src/data/products.ts`                               | The 7 product families: titles, summaries, series groups, selection checks, body copy |
| `src/data/combined-bearing-models.ts`                | Combined bearing model pages (59 slugs)                                               |
| `src/data/extended-bearing-models.ts`                | Track roller / SL-series model pages (98 slugs)                                       |
| `src/data/special-combined-series.ts`                | Special combined series pages (11 slugs)                                              |
| `src/data/seo-landing-pages.ts`                      | SEO landing page definitions                                                          |
| `src/data/technical-references.ts`                   | Technical reference tables                                                            |
| `src/data/factory-evidence.ts`                       | Factory capability and inspection evidence                                            |
| `src/data/downloads.ts`                              | Downloadable PDF catalogue entries                                                    |
| `src/data/resources.ts` / `faqs.ts` / `page-faqs.ts` | Resource library and FAQ sets                                                         |

## Continuous integration

`.github/workflows/ci.yml` runs on every push to `main` and on pull requests:
`pnpm install --frozen-lockfile` → `pnpm check` → `pnpm format:check` → `pnpm build` →
`pnpm check:links`. It only _verifies_ the commit — deployment is handled by Cloudflare's
own Git integration, so a red CI run neither blocks nor rolls back a deploy.

## Deployment (Cloudflare Workers)

```bash
pnpm build
npx wrangler deploy
```

`wrangler.jsonc` declares:

- `main`: `cloudflare-worker.js`
- `assets.directory`: `./dist`
- `r2_buckets`: binding `R2_BUCKET` → bucket `bearing-rfq-uploads`
- `vars`: `ZOHO_SMTP_USER` / `ZOHO_SMTP_HOST` (`smtppro.zoho.com`) / `ZOHO_SMTP_PORT` (`465`)

In the Cloudflare dashboard use build command `npm run build`, deploy command
`npx wrangler deploy`, and production branch `main` (not `cloudflare/workers-autoconfig`).

### Worker secrets

Set these in the Cloudflare dashboard — never commit them:

| Secret                | Purpose                                                       |
| --------------------- | ------------------------------------------------------------- |
| `ZOHO_SMTP_PASS`      | Zoho app password for `sales@combinedbearingsource.com`       |
| `RFQ_DOWNLOAD_SECRET` | HMAC secret for the 7-day private drawing download links      |
| `R2_BUCKET`           | R2 binding for drawing uploads (declared in `wrangler.jsonc`) |

Optional (plain variables — set in the dashboard or `wrangler.jsonc`, not secret):

| Variable           | Purpose                                                                                                                                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RFQ_NOTIFY_EMAIL` | Inbox that receives new RFQ notifications. Defaults to `admin@machiningsupplier.com`; the sales mailbox lives on the `machiningsupplier.com` domain, so the notification address intentionally differs from the site domain |

> **Do not delete or rename `zoho-smtp.js`.** `cloudflare-worker.js` imports
> `SALES_EMAIL`, `isZohoSmtpConfigured` and `sendZohoEmail` from it on line 1 — it is a
> runtime dependency of the deployed Worker, not a scratch file.

The RFQ flow: `/contact/` form → `POST /api/rfq` → email sent over Zoho SMTP
(port 465, implicit TLS) → drawing stored in R2 → signed 7-day download link
returned to the sales inbox.

## Local-only directories (not tracked in git)

These are generated or scratch, excluded via `.gitignore` — they are safe to delete
at any time and are **not** needed by `astro build` or `wrangler deploy`:

| Directory         | Why it exists                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| `exports/`        | Output of `scripts/export-site-pages-xlsx.mjs` and image-processing backups                      |
| `output/pdf/`     | Staging copies of the PDFs that are published from `public/downloads/`                           |
| `tmp/`            | Local screenshots and scratch files                                                              |
| `_legacy-engine/` | Leftovers from the engine (MTU) site this repo was forked from — kept locally for reference only |

## Environment variables

Copy `.env.example` to `.env` (both are gitignored except the example). All are optional:

- `PUBLIC_LINKEDIN_URL` — company LinkedIn; also feeds Organization schema `sameAs`
- `PUBLIC_AUTHOR_WEI_CHEN_LINKEDIN`, `PUBLIC_AUTHOR_LISA_HUANG_LINKEDIN` — author `sameAs`
