# Combined Bearing Source

Combined bearing and track roller supplier website built with [Astro](https://astro.build). Live site: [combinedbearingsource.com](https://combinedbearingsource.com).

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run check
npm run build
npm run preview
```

## Site structure

| Path | Description |
|------|-------------|
| `/` | Homepage |
| `/capabilities/` | Engine parts support capabilities |
| `/materials/` | Engine parts reference materials |
| `/industries/` | Industry applications |
| `/case-studies/` | Project case studies |
| `/blog/` | Technical articles |
| `/about/` | About us |
| `/contact/` | Parts inquiry form (Cloudflare Worker `/api/rfq`) |
| `/thank-you/` | Post-submission confirmation |

## Configuration

Edit `src/data/site.ts`:

- `gaMeasurementId` — Google Analytics 4 (leave empty to disable)
- `googleSiteVerification` — GSC HTML verification content value (leave empty to skip)
- `social.linkedin` / `social.youtube` — footer social links (leave empty to hide)

## Stack

- Astro 5 (static site generation)
- TypeScript client scripts
- `@astrojs/sitemap` for SEO
- Cloudflare Worker (`cloudflare-worker.js` + `wrangler.jsonc`) for static assets + RFQ form via Zoho SMTP + R2

### Deploy (Cloudflare Workers)

```bash
npm run build
npx wrangler deploy
```

Or `npm run deploy`. In the Cloudflare dashboard, use build command `npm run build` and deploy command `npx wrangler deploy`, with production branch `main` (not `cloudflare/workers-autoconfig`).

### Worker secrets

RFQ API is implemented in `cloudflare-worker.js` (Workers + Assets) and sends
inquiries through Zoho SMTP. The legacy `functions/` directory is not used by
the production Worker deployment.

Set these secrets/bindings on Cloudflare:

- `ZOHO_SMTP_PASS` — Zoho app password for `sales@combinedbearingsource.com`
- `RFQ_DOWNLOAD_SECRET` — HMAC secret for private 7-day drawing download links
- `R2_BUCKET` — R2 bucket binding for drawing uploads (`bearing-rfq-uploads`, declared in `wrangler.jsonc`)

Email is sent via Zoho SMTP from `sales@combinedbearingsource.com`. The SMTP host
and port are declared in `wrangler.jsonc` (`smtppro.zoho.com:465`). Create the R2
bucket named `bearing-rfq-uploads` if it does not already exist.
