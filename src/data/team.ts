/**
 * Engineering / technical-review team — the site's named-author layer (E-E-A-T).
 *
 * WHY NAMED AUTHORS MATTER — AND WHY THEY MUST BE REAL
 * ---------------------------------------------------
 * Named authors are an E-E-A-T signal. A fabricated engineer is worse than no
 * engineer: Google treats invented authorship as misleading content, and
 * industrial buyers can tell a stock portrait from a real workshop photo.
 * So every record that is not marked `draft: true` must be REAL — a real
 * person, a real role you are allowed to state, and a photo you actually took.
 *
 * IMPORTANT (corrected 2026-10-08): a named author does NOT need a public
 * profile to be legitimate. For a SOHO start-up the engineer may have no
 * LinkedIn / patent / journal — that is normal and fine. Google's E-E-A-T is
 * satisfied by a real identity plus first-hand experience, not by an external
 * link. The old build gate that refused a review author with an empty `sameAs`
 * was over-strict and has been removed; `sameAs` is now optional.
 *
 * HOW THIS FILE IS ORGANISED
 * --------------------------
 * Zhang Wei (machining engineer) is published below. One drafted record
 * ships with `draft: true` and every fact that has to come from reality
 * replaced by a `[REPLACE: …]` placeholder. It exists so the layout, the
 * bylines and the structured data are already wired up. It is NOT rendered
 * by a normal build.
 *
 *   npm run build:draft-preview   # look at the layout locally
 *   npm run build                 # drafts excluded, placeholders checked
 *
 * TO PUBLISH ONE ENGINEER
 * -----------------------
 * 1. Replace every `[REPLACE: …]` in that record with the real value.
 * 2. Set `draft: false` and `consentOnFile: true`.
 * 3. Change `slug` to the person's name (the URL is /team/<slug>/).
 * Optional: add a public profile URL to `sameAs` if one exists — it adds an
 * independent check, but it is NOT required for the author to appear.
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
    // ── PUBLISHED — machining engineer, confirmed by the site owner ────────
    // Facts below were provided by the owner on 2026-10-08: real name, real
    // role, 5–10 years in machining, duties = drawing review / machining
    // process & production / dimensional checks & shipment release. Photo is
    // an original (not stock). Consent on file via the owner.
    //
    // Published as the site-wide review author: a real person, a real role and
    // a real photo are enough for E-E-A-T. No public profile is required, so
    // `sameAs` stays empty and bylines render as "Technical review by …".
    slug: "zhang-wei",
    name: "Zhang Wei",
    role: "Machining Engineer",
    credentials: [
      "Machining engineer with more than five years in bearing-component production",
      "Reviews customer drawings and confirms manufacturability before quotation",
      "Owns machining process and production, in-process dimensional checks and shipment release",
    ],
    bio: "Zhang Wei reviews customer drawings and confirms each combined bearing execution against the stated duty before an order is released to production. He owns the machining process on the shop floor, verifies critical dimensions in process, and gives the final release before shipment.",
    photo: {
      src: "/images/team/zhang-wei.jpg",
      width: 262,
      height: 262,
      alt: "Zhang Wei, machining engineer, selecting a bearing component from stock",
    },
    // Deliberately empty: no verifiable public profile exists yet. The build
    // gate only refuses an empty sameAs for the site-wide review author.
    sameAs: [],
    // Site-grounded topics only — these mirror the range already published on
    // /products/.
    knowsAbout: [
      "Combined roller bearings",
      "Forklift mast guide bearing selection",
      "Radial and axial load rating review",
      "Dimensional inspection planning",
      "Carburized bearing steel (20CrMnTi)",
      "Danieli and machine-maker reference replacement bearings",
      "Sealed and vibration-duty combined bearing execution",
    ],
    consentOnFile: true,
    reviewAuthor: true,
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
// Fails the build if a real (non-draft) member would go out with a placeholder
// still in it. This is the one guard that stays: it stops an unfinished
// "[REPLACE: …]" record reaching production. It does NOT require an external
// profile — a real person with no public link is a legitimate author.
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
