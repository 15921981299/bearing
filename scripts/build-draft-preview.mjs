#!/usr/bin/env node
/**
 * Preview build with the drafted records switched on.
 *
 *   npm run build:draft-preview
 *
 * This sets DRAFT_PREVIEW=1 for the Astro process only. Draft records
 * (`draft: true`) render, page titles carry a DRAFT marker bar, and every record
 * still waiting for real values shows its "still to fill in" note.
 *
 * The output is for looking at, not for shipping. A plain `npm run build` — the
 * one Cloudflare runs — never sees this flag, so drafts cannot reach production.
 *
 * Cross-platform on purpose: npm runs scripts through cmd.exe on Windows, where
 * the usual `VAR=1 astro build` prefix is not valid shell syntax.
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

const astroBin = path.resolve("node_modules/astro/astro.js");

if (!existsSync(astroBin)) {
  console.error(
    `[draft-preview] Astro CLI not found at ${astroBin}.\n` +
      `[draft-preview] Install dependencies first (pnpm install).`,
  );
  process.exit(1);
}

console.log(
  "[draft-preview] DRAFT_PREVIEW=1 — draft records will render. " +
    "This output must not be deployed.",
);

const result = spawnSync(process.execPath, [astroBin, "build"], {
  stdio: "inherit",
  env: { ...process.env, DRAFT_PREVIEW: "1" },
});

process.exit(result.status ?? 1);
