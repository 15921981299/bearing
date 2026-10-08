/**
 * Draft / publish mode — the gate that keeps drafted-but-unverified content out
 * of a real build.
 *
 * THE PROBLEM THIS SOLVES
 * -----------------------
 * Trust signals (named engineers, inspection reports, client cases) are only
 * worth anything if they are true, and inventing them is actively harmful:
 * an invented author is misleading content, an invented inspection report is a
 * fabricated test report, an invented client case is a misstatement about a
 * third party.
 *
 * At the same time the *structure* around those signals — files, types, page
 * layout, schema wiring, the site-grounded facts — can legitimately be built in
 * advance. So the data files ship with drafted records that are marked
 * `draft: true`, and every field that has to come from reality carries a
 * `[REPLACE: …]` placeholder.
 *
 * TWO RULES, ENFORCED HERE
 * ------------------------
 * 1. A record marked `draft: true` is never rendered by a normal build. It is
 *    only rendered when the local preview switch below is on, so you can look
 *    at the layout before the real values exist.
 * 2. A record that is *not* a draft may not contain a `[REPLACE: …]`
 *    placeholder. `assertNoPendingFields()` throws during the build if one
 *    does, which fails the build instead of publishing a made-up fact.
 *
 * Rule 2 is deliberately implemented in the data layer rather than in a
 * pre-build script: the throw happens wherever the data is imported, so it
 * cannot be sidestepped by calling `astro build` directly.
 */

const env = typeof process === "undefined" ? undefined : process.env;

/**
 * Local preview switch.
 *
 *   npm run build:draft-preview
 *
 * makes draft records render so the layout can be checked before the real
 * material exists. It is off for every normal build, and Cloudflare never sets
 * it, so drafts cannot reach production by accident.
 */
export const draftPreviewEnabled: boolean = env?.["DRAFT_PREVIEW"] === "1";

/** Marker that identifies a value still waiting for a real one. */
export const PENDING_MARKER = "[REPLACE";

/** A string that is still a placeholder. */
export type PendingField = `[REPLACE${string}]`;

export const isPendingField = (value: string): value is PendingField =>
  value.includes(PENDING_MARKER);

/** One record's worth of values to scan. */
export type PublishGateEntry = { label: string; values: readonly string[] };

/**
 * Build-time gate. Throws when a record that is *not* a draft would publish
 * with placeholders still in it.
 *
 * Skipped while the draft preview switch is on — that build is local-only and
 * never deployed.
 */
export function assertNoPendingFields(
  kind: string,
  entries: readonly PublishGateEntry[],
): void {
  if (draftPreviewEnabled) return;
  const offenders = entries.filter((entry) =>
    entry.values.some(isPendingField),
  );
  if (offenders.length === 0) return;
  const shown = offenders
    .slice(0, 8)
    .map((entry) => entry.label)
    .join(", ");
  const more = offenders.length > 8 ? ` (+${offenders.length - 8} more)` : "";
  throw new Error(
    `${kind}: ${offenders.length} record(s) would be published with ` +
      `"${PENDING_MARKER}…" placeholders still in them: ${shown}${more}. ` +
      `Fill in the real value, or set draft: true on the record so it stays ` +
      `out of the build. Drafts are visible locally with ` +
      `npm run build:draft-preview.`,
  );
}

/** Flattens a nested record's strings for the gate above. */
export const flattenValues = (...values: readonly unknown[]): string[] => {
  const out: string[] = [];
  const walk = (value: unknown): void => {
    if (typeof value === "string") out.push(value);
    else if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === "object")
      Object.values(value).forEach(walk);
  };
  values.forEach(walk);
  return out;
};
