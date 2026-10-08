/**
 * Engineering / technical-review team — the site's named-author layer (E-E-A-T).
 *
 * WHY NAMED AUTHORS MATTER — AND WHY THEY MUST BE REAL
 * ---------------------------------------------------
 * Named authors are a *verification* signal. A fabricated engineer is worse
 * than no engineer: Google treats invented authorship as misleading content,
 * and industrial buyers actually open LinkedIn to check the person. So every
 * record that is not marked `draft: true` must be true.
 *
 * HOW THIS FILE IS ORGANISED
 * --------------------------
 * Two drafted records ship below with `draft: true` and every fact that has to
 * come from reality replaced by a `[REPLACE: …]` placeholder. They exist so the
 * layout, the bylines and the structured data are already wired up. They are
 * NOT rendered by a normal build.
 *
 *   npm run build:draft-preview   # look at the layout locally
 *   npm run build                 # drafts excluded, placeholders checked
 *
 * TO PUBLISH ONE ENGINEER
 * -----------------------
 * 1. Replace every `[REPLACE: …]` in that record with the real value.
 * 2. Add the external profile URL to `sameAs` — without it a named author is
 *    unverifiable and most of the E-E-A-T gain evaporates. The build refuses a
 *    review author with an empty `sameAs`.
 * 3. Set `draft: false` and `consentOnFile: true`.
 * 4. Change `slug` to the person's name (the URL is /team/<slug>/).
 *
 * CHECKS BEFORE YOU SET `consentOnFile: true`
 * ------------------------------------------
 * - The person has seen the exact wording and photo and agreed to both.
 * - The title matches their real role; do not inflate it.
 * - The photo is one you or the factory took. A stock portrait of a "person" is
 *   the same fabrication problem as an invented name.
 * - If they leave the company, set `consentOnFile` back to false — a stale
 *   named author is worse than none.
 */

import {
  assertNoPendingFields,
  draftPreviewEnabled,
  flattenValues,
} from "./publish-mode";

export type TeamMember = {
  /** URL segment: /team/<slug>/ */
  slug: string;
  /** Real name as the person agrees to publish it */
  name: string;
  /** Real job title — do not inflate */
  role: string;
  /** Verifiable career facts, one sentence each */
  credentials: string[];
  bio: string;
  yearsExperience?: number;
  joinedYear?: number;
  photo?: { src: string; width: number; height: number; alt: string };
  /**
   * External, independently checkable profiles (LinkedIn, patent, journal,
   * conference listing). Feeds `Person.sameAs`. Required to publish a review
   * author — a named author nobody can look up carries almost no weight.
   */
  sameAs: string[];
  knowsAbout?: string[];
  /**
   * The person has agreed to be named and shown here. Members with
   * `consentOnFile: false` are never rendered anywhere on the site.
   */
  consentOnFile: boolean;
  /** Named technical reviewer on guides / application references / solutions */
  reviewAuthor?: boolean;
  /**
   * Drafts never render in a deployed build. Set to false once every value in
   * the record is real and the person has agreed to be named.
   */
  draft?: boolean;
  /** What is still missing before this record can be published. */
  pending?: string;
};

export const teamMembers: TeamMember[] = [
  {
    // ── DRAFT 1 — the site-wide technical review author ────────────────────
    // Becomes the named author on every technical guide, application reference
    // and solution page once published.
    slug: "draft-review-author",
    draft: true,
    name: "[REPLACE: real name]",
    role: "[REPLACE: real job title]",
    credentials: [
      "[REPLACE: number of years, and in which specialisation]",
      "[REPLACE: previous industry or employer background]",
      "[REPLACE: what this person actually owns at the plant]",
    ],
    bio: "[REPLACE: 2-3 sentences on the decisions this person actually makes — drawing review, selection against duty, inspection scope, production release]",
    // Deliberately empty: the build refuses to publish a review author without
    // at least one externally verifiable profile.
    sameAs: [],
    // Site-grounded topics only — these mirror the range already published on
    // /products/. Adjust to what the person really works on.
    knowsAbout: [
      "Combined roller bearings",
      "Forklift mast guide bearing selection",
      "Radial and axial load rating review",
      "Dimensional inspection planning",
      "Carburized bearing steel (20CrMnTi)",
    ],
    consentOnFile: false,
    reviewAuthor: true,
    pending:
      "Real name, real job title (do not inflate), 3 verifiable career facts, a photo you took, and at least one externally checkable profile URL in sameAs. Then set draft: false and consentOnFile: true.",
  },
  {
    // ── DRAFT 2 — quality / inspection engineer ────────────────────────────
    // Backs the inspection-report samples up with a named person who signs the
    // scope off.
    slug: "draft-quality-engineer",
    draft: true,
    name: "[REPLACE: real name]",
    role: "[REPLACE: real job title]",
    credentials: [
      "[REPLACE: years in inspection or quality, and where]",
      "[REPLACE: which instruments and methods this person is qualified on]",
      "[REPLACE: what this person signs off before shipment]",
    ],
    bio: "[REPLACE: 2-3 sentences on what this person measures, what they reject, and what they release]",
    sameAs: [],
    knowsAbout: [
      "Incoming and in-process inspection",
      "Hardness and case-depth verification",
      "Batch traceability and packing release",
      "Measuring instrument handling",
    ],
    consentOnFile: false,
    pending:
      "Real name, real job title, the instruments this person is actually qualified on, and an externally checkable profile URL. Then set draft: false and consentOnFile: true.",
  },
];

/** Members that are real, agreed and publishable. Never includes drafts. */
export const publishedTeamMembers: TeamMember[] = teamMembers.filter(
  (member) => !member.draft && member.consentOnFile,
);

/** Drafted members, shown only in the local preview build. */
export const draftTeamMembers: TeamMember[] = teamMembers.filter(
  (member) => member.draft,
);

/**
 * What the current build should render. Drafts appear only when the local
 * preview switch is on; every deployed build gets `publishedTeamMembers`.
 */
export const activeTeamMembers: TeamMember[] = draftPreviewEnabled
  ? [...publishedTeamMembers, ...draftTeamMembers]
  : publishedTeamMembers;

/** The member used as named author in Article schema and visible bylines. */
export const articleReviewAuthor: TeamMember | undefined =
  activeTeamMembers.find((member) => member.reviewAuthor);

/** Guard for every consumer: false keeps team UI, schema and routes off. */
export const hasActiveTeam: boolean = activeTeamMembers.length > 0;

export const teamMemberHref = (slug: string): string => `/team/${slug}/`;

// ── Build gate ────────────────────────────────────────────────────────────
// Fails the build if a real member would go out with a placeholder still in it,
// or if the site-wide review author has no way of being looked up.
assertNoPendingFields(
  "Engineering team",
  activeTeamMembers.map((member) => ({
    label: member.slug,
    values: flattenValues(
      member.name,
      member.role,
      member.bio,
      member.credentials,
      member.knowsAbout,
    ),
  })),
);

if (
  !draftPreviewEnabled &&
  articleReviewAuthor &&
  articleReviewAuthor.sameAs.length === 0
) {
  throw new Error(
    `Engineering team: "${articleReviewAuthor.slug}" is set as the site-wide ` +
      `review author but has an empty sameAs. A named author with no ` +
      `externally checkable profile is unverifiable, so the build stops here. ` +
      `Add a LinkedIn / patent / journal / conference URL, or clear ` +
      `reviewAuthor.`,
  );
}
