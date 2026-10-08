#!/usr/bin/env node
/**
 * Publish-readiness audit for the four trust signals.
 *
 *   npm run audit:publish
 *
 * Answers three questions:
 *
 *   1. Would a real build publish anything that is not real yet? The hard gate
 *      lives in the data layer (src/data/publish-mode.ts) and throws during
 *      `astro build`; this script runs the same import so you can see the
 *      verdict without starting a build.
 *   2. How much is actually published versus still drafted?
 *   3. Which of the planned factory shots have been taken?
 *
 * Read-only: it never writes to the repository.
 */
import { build } from "esbuild";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

// Bundles land in .workbuddy/ and are simply overwritten on the next run.
// They are never deleted from here: recursive deletes on this machine go
// through a hook that can stall for minutes, and a couple of ignored files in
// .workbuddy/ cost nothing.
const outdir = path.resolve(".workbuddy/tmp-audit");

/** Bundles a data module so its exports (and its build gate) can be inspected. */
async function loadModule(entry) {
  mkdirSync(outdir, { recursive: true });
  const outfile = path.join(outdir, `${path.basename(entry, ".ts")}.mjs`);
  await build({
    entryPoints: [entry],
    bundle: true,
    format: "esm",
    platform: "node",
    outfile,
    logLevel: "error",
  });
  return import(pathToFileURL(outfile).href + `?t=${Date.now()}`);
}

const section = (title) =>
  console.log(`\n${title}\n${"─".repeat(title.length)}`);

let gateFailure = null;
let data = null;

try {
  data = {
    team: await loadModule("src/data/team.ts"),
    reports: await loadModule("src/data/inspection-reports.ts"),
    factory: await loadModule("src/data/factory-evidence.ts"),
  };
} catch (error) {
  gateFailure = error;
}

section("Publish gate");
if (gateFailure) {
  console.error("FAILED — a real build would stop here.\n");
  console.error(gateFailure.message ?? gateFailure);
  process.exit(1);
}
console.log("PASS — nothing drafted would reach a deployed build.");

const { team, reports, factory } = data;

section("Trust signals");
const rows = [
  [
    "Engineering team",
    team.publishedTeamMembers.length,
    team.draftTeamMembers.length,
  ],
  [
    "Inspection report samples",
    reports.publishedInspectionReports.length,
    reports.draftInspectionReports.length,
  ],
  [
    "Client / application cases",
    factory.publishedFactoryCaseStudies.length,
    factory.draftFactoryCaseStudies.length,
  ],
  [
    "Factory photos",
    factory.activeFactoryFacilityMedia.length,
    factory.activeFactoryFacilityMedia.filter((m) => m.draft).length,
  ],
];
console.log(
  "signal".padEnd(30) + "published".padStart(10) + "draft".padStart(8),
);
for (const [label, published, draft] of rows) {
  console.log(
    String(label).padEnd(30) +
      String(published).padStart(10) +
      String(draft).padStart(8),
  );
}

const reviewAuthor = team.articleReviewAuthor;
section("Site-wide byline");
if (reviewAuthor) {
  console.log(
    `Review author: ${reviewAuthor.name} — ${reviewAuthor.role}` +
      (reviewAuthor.sameAs.length
        ? `\nVerifiable profile: ${reviewAuthor.sameAs.join(", ")}`
        : "\nVerifiable profile: MISSING — the build will refuse this."),
  );
} else {
  console.log(
    "No review author published yet — guides, cases and solution pages are\n" +
      "signed by the Organization. Publishing one engineer switches all of them\n" +
      "to a named Person in one go.",
  );
}

section("Factory photo plan");
const photoDir = "public/images/factory-facility";
const missing = [];
for (const slot of factory.factoryPhotoPlan) {
  const file = path.join(photoDir, slot.file);
  const taken = existsSync(file);
  if (!taken) missing.push(slot);
  console.log(`${taken ? "[x]" : "[ ]"} ${slot.file}`);
}
if (missing.length) {
  console.log(
    `\n${missing.length} of ${factory.factoryPhotoPlan.length} shots still to take. ` +
      "The full shooting list is in seo-reports/eeat-material-brief-2026-09-28.md §2.",
  );
} else {
  console.log(
    "\nAll planned shots are on disk. Add them to `factoryFacilityMedia` with a\n" +
      "real capturedOn date (and batch where the frame shows one) — a photo with a\n" +
      "date and a batch is evidence, one without them is decoration.",
  );
}
