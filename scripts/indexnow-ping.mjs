#!/usr/bin/env node
/**
 * IndexNow submission for combinedbearingsource.com
 *
 * Pushes the site's URLs to IndexNow so participating engines (Bing, Yandex,
 * Seznam, Naver) recrawl them within minutes instead of waiting for the next
 * scheduled crawl. This is the fix for the "IndexNow not implemented" item in
 * Bing Webmaster Tools > Recommendations.
 *
 * Usage:
 *   node scripts/indexnow-ping.mjs                 # push every URL in dist/sitemap-0.xml
 *   node scripts/indexnow-ping.mjs --from-live     # read the live sitemap instead
 *   node scripts/indexnow-ping.mjs --dry-run       # print the payload, send nothing
 *   node scripts/indexnow-ping.mjs --endpoint=bing # use Bing's own endpoint
 *   node scripts/indexnow-ping.mjs https://combinedbearingsource.com/about/
 *                                                  # push only the listed URLs
 *
 * Run this AFTER `wrangler deploy` has finished — submitting URLs that are not
 * live yet just wastes the quota and can get the key throttled.
 */

import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "combinedbearingsource.com";
const KEY = "4d3e0b16ffd721647bdd89e5ed3ffff5";
const KEY_FILE = resolve(ROOT, "public", `${KEY}.txt`);
const LOCAL_SITEMAP = resolve(ROOT, "dist", "sitemap-0.xml");
const LIVE_SITEMAP = `https://${HOST}/sitemap-0.xml`;

const ENDPOINTS = {
  indexnow: "https://api.indexnow.org/indexnow",
  bing: "https://www.bing.com/indexnow",
  yandex: "https://yandex.com/indexnow",
};

// IndexNow caps a single request at 10,000 URLs.
const BATCH_SIZE = 10000;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const fromLive = args.includes("--from-live");
const endpointKey =
  args
    .find((arg) => arg.startsWith("--endpoint="))
    ?.slice("--endpoint=".length) ?? "indexnow";
const urlArgs = args.filter((arg) => /^https?:\/\//.test(arg));

function abort(message) {
  console.error(`indexnow: ${message}`);
  process.exit(1);
}

if (!(endpointKey in ENDPOINTS)) {
  abort(
    `unknown endpoint "${endpointKey}" (expected one of: ${Object.keys(ENDPOINTS).join(", ")})`,
  );
}

// The protocol requires the key to be readable at keyLocation. A mismatch here
// means every submission is rejected with 403/422, so fail loudly and early.
if (!existsSync(KEY_FILE)) {
  abort(`missing key file ${KEY_FILE}`);
}
if (readFileSync(KEY_FILE, "utf8").trim() !== KEY) {
  abort(`key file ${KEY_FILE} does not contain ${KEY}`);
}

function urlsFromSitemap(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map(
    (match) => match[1],
  );
}

function cleanUrls(rawUrls) {
  const seen = new Set();
  const kept = [];
  let foreign = 0;
  let malformed = 0;

  for (const raw of rawUrls) {
    let url;
    try {
      url = new URL(raw);
    } catch {
      malformed += 1;
      continue;
    }
    if (url.hostname !== HOST) {
      foreign += 1;
      continue;
    }
    const clean = `${url.origin}${url.pathname}${url.search}`;
    if (seen.has(clean)) continue;
    seen.add(clean);
    kept.push(clean);
  }

  if (foreign) console.log(`  skipped ${foreign} URL(s) not on ${HOST}`);
  if (malformed) console.log(`  skipped ${malformed} malformed URL(s)`);
  return kept;
}

async function resolveUrls() {
  if (urlArgs.length > 0) {
    console.log(`Source: ${urlArgs.length} URL(s) from the command line`);
    return cleanUrls(urlArgs);
  }

  const source = fromLive ? LIVE_SITEMAP : LOCAL_SITEMAP;
  if (!fromLive && !existsSync(LOCAL_SITEMAP)) {
    abort(
      `${LOCAL_SITEMAP} not found — run \`npm run build\` first, or pass --from-live`,
    );
  }

  console.log(`Source: ${source}`);
  const response = fromLive
    ? await fetch(source)
    : new Response(readFileSync(LOCAL_SITEMAP));
  if (!response.ok) abort(`could not read sitemap: HTTP ${response.status}`);

  return cleanUrls(urlsFromSitemap(await response.text()));
}

async function submit(endpoint, batch) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: batch,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const explanations = {
    200: "OK — URLs accepted",
    202: "Accepted — key validated, URLs queued",
    400: "Bad request — malformed payload",
    403: "Forbidden — key file not reachable at keyLocation, or key content mismatch",
    422: "Unprocessable — URLs do not belong to host, or key does not match",
    429: "Too many requests — back off and retry later",
  };

  return {
    status: response.status,
    note:
      explanations[response.status] ?? (await response.text()).slice(0, 200),
  };
}

const urls = await resolveUrls();
if (urls.length === 0) abort("no URLs to submit");

const endpoint = ENDPOINTS[endpointKey];
console.log(`Endpoint: ${endpoint}`);
console.log(`URLs: ${urls.length}`);
for (const url of urls.slice(0, 5)) console.log(`  ${url}`);
if (urls.length > 5) console.log(`  … and ${urls.length - 5} more`);

if (dryRun) {
  console.log("\n--dry-run: nothing sent.");
  process.exit(0);
}

let failures = 0;
for (let offset = 0; offset < urls.length; offset += BATCH_SIZE) {
  const batch = urls.slice(offset, offset + BATCH_SIZE);
  const { status, note } = await submit(endpoint, batch);
  const ok = status === 200 || status === 202;
  if (!ok) failures += 1;
  console.log(
    `\nBatch ${offset / BATCH_SIZE + 1} (${batch.length} URL${batch.length === 1 ? "" : "s"}): HTTP ${status} — ${note}`,
  );
}

if (failures > 0) {
  console.error(`\nindexnow: ${failures} batch(es) failed.`);
  process.exit(1);
}
console.log("\nindexnow: all batches accepted.");
