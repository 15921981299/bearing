import {
  assertNoPendingFields,
  draftPreviewEnabled,
  flattenValues,
} from "./publish-mode";

/**
 * Factory media, split by what it actually proves.
 *
 * `workshop`   — production floor / machining (capacity evidence)
 * `inspection` — measurement & QC (inspection evidence)
 *
 * `capturedOn` and `batch` are optional but strongly recommended: a photo that
 * pins down a date and a batch is evidence, a photo without them is decoration.
 * Only add them when they are true for that frame.
 */
export type FactoryMediaKind = "workshop" | "inspection";

export type FactoryFacilityMedia = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  description: string;
  kind: FactoryMediaKind;
  /** ISO date the photo was actually taken, when known */
  capturedOn?: string;
  /** Batch / model visible in the frame, when known */
  batch?: string;
  /** Drafts never render in a deployed build. */
  draft?: boolean;
  /** Which shot from `factoryPhotoPlan` this frame is meant to replace. */
  pendingShot?: string;
};

/**
 * Shots still to be taken at the plant.
 *
 * The four photos below are real but two of them are only instrument stills —
 * they show that an instrument exists, not that anyone inspects with it. A
 * photo becomes evidence when three things are in the same frame: a person
 * operating, a legible reading, and a batch or model label. Until then it is
 * decoration, which is why nothing here is wired into the page: this is a
 * shooting checklist, not site content.
 *
 * Take the shots, drop the files into public/images/factory-facility/ using the
 * `file` names below, then add them to `factoryFacilityMedia` with
 * `kind: "inspection"`, a real `capturedOn` and — when the frame shows one — the
 * `batch`. Run `npm run audit:publish` to see which shots are still missing.
 */
export type FactoryPhotoSlot = {
  /** File name to use in public/images/factory-facility/ */
  file: string;
  subject: string;
  /** What must be legible in the same frame for the photo to be evidence */
  mustShow: string;
  purpose: string;
  kind: FactoryMediaKind;
};

export const factoryPhotoPlan: FactoryPhotoSlot[] = [
  {
    file: "inspection-bench-in-operation.webp",
    subject: "Inspection bench, an operator measuring a specific model",
    mustShow: "Model marking or the traveller / work order",
    purpose: "Proves inspection happens rather than equipment exists",
    kind: "inspection",
  },
  {
    file: "instrument-reading-closeup.webp",
    subject: "Close-up of the instrument reading",
    mustShow: "A legible reading next to the part being measured",
    purpose: "The single most persuasive frame in the whole set",
    kind: "inspection",
  },
  {
    file: "batch-parts-awaiting-inspection.webp",
    subject: "A whole batch laid out before or after inspection",
    mustShow: "Batch label",
    purpose: "Shows batch handling, not a single staged part",
    kind: "inspection",
  },
  {
    file: "cmm-or-optical-screen.webp",
    subject: "Measurement screen of the CMM or optical system",
    mustShow: "The measured values on screen",
    purpose: "Instrument-grade evidence",
    kind: "inspection",
  },
  {
    file: "hardness-testing.webp",
    subject: "Hardness tester or a metallographic specimen",
    mustShow: "Specimen and reading together",
    purpose: "Material evidence, pairs with the heat-treatment report",
    kind: "inspection",
  },
  {
    file: "bore-and-clearance-check.webp",
    subject: "Bore, outside diameter or clearance check",
    mustShow: "Plug gauge or dial indicator plus the part",
    purpose: "Routine dimensional evidence",
    kind: "inspection",
  },
  {
    file: "packing-labelling.webp",
    subject: "Labelling and packing before shipment",
    mustShow: "Model and batch on the label",
    purpose: "Connects inspection to what the customer receives",
    kind: "inspection",
  },
  {
    file: "inspection-record-form.webp",
    subject: "Filling in the inspection record sheet",
    mustShow: "Report number (may be blurred)",
    purpose: "Documentary evidence behind the report samples",
    kind: "inspection",
  },
];

export const factoryFacilityMedia: FactoryFacilityMedia[] = [
  {
    src: "/images/clean/cnc-workshop-documentary.webp",
    width: 1024,
    height: 682,
    alt: "CNC bearing machining workshop at our Changzhou manufacturing plant",
    title: "CNC machining workshop",
    description:
      "CNC production equipment and operators at our Changzhou bearing manufacturing plant.",
    kind: "workshop",
  },
  {
    src: "/images/clean/cnc-machining-centers-documentary.webp",
    width: 1400,
    height: 933,
    alt: "CNC machining centers at our Changzhou bearing factory",
    title: "CNC machining centers",
    description:
      "Machining centers and in-process bearing components on the production floor.",
    kind: "workshop",
  },
  {
    src: "/images/factory-facility/length-measuring-instrument.webp",
    width: 736,
    height: 492,
    alt: "Universal length measuring instrument in our factory inspection room",
    title: "Length measurement equipment",
    description:
      "Measurement-room equipment used for dimensional verification before shipment.",
    kind: "inspection",
  },
  {
    src: "/images/factory-facility/optical-measuring-instrument.webp",
    width: 736,
    height: 492,
    alt: "Optical measuring instrument at our Changzhou bearing factory",
    title: "Optical measurement system",
    description:
      "Optical measurement and profile-checking workstation for precision bearing inspection.",
    kind: "inspection",
  },
];

/**
 * What the current build should render. Media records have no `draft` entries
 * today; the filter exists so a half-ready frame can be parked here without
 * reaching a deployed build.
 */
export const activeFactoryFacilityMedia: FactoryFacilityMedia[] =
  draftPreviewEnabled
    ? factoryFacilityMedia
    : factoryFacilityMedia.filter((media) => !media.draft);

export const factoryEvidenceSource = {
  name: "Combined Bearing Source — Changzhou Manufacturing Base",
  url: "/about/",
  disclosure:
    "Facility photos show our Changzhou manufacturing and inspection capacity used for combined bearings, track rollers and related industrial roller bearings. Legacy watermark overlays were removed; the workshop scenes and equipment were retained.",
};

export type FactoryCaseStudy = {
  slug: string;
  title: string;
  description: string;
  industry: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  datePublished: string;
  sourceUrl: string;
  sourceLabel: string;
  facts: { label: string; value: string }[];
  sections: { heading: string; paragraphs: string[] }[];
  /**
   * Replaces the default "application identification reference" note for pages
   * that describe a real customer engagement, including what was redacted.
   */
  disclosure?: string;
  /** Drafts never render in a deployed build. */
  draft?: boolean;
  /** What is still missing before this page can be published. */
  pending?: string;
};

export const factoryCaseStudies: FactoryCaseStudy[] = [
  {
    slug: "danieli-steel-equipment-bearing-reference",
    title: "Application Case: Bearings for Steel Equipment Lines",
    description:
      "Combined bearings and steel-equipment bearing references used in metallurgical and leveling line maintenance programs.",
    industry: "Steel and metallurgical equipment",
    image: "/images/clean/cnc-workshop-documentary.webp",
    imageWidth: 1024,
    imageHeight: 682,
    datePublished: "2026-07-16",
    sourceUrl: "/solutions/danieli-equipment-replacement-bearings/",
    sourceLabel: "Danieli equipment replacement bearings",
    facts: [
      { label: "Evidence type", value: "Factory application reference" },
      { label: "Production base", value: "Changzhou manufacturing plant" },
      {
        label: "Application area",
        value: "Steel and metallurgical equipment bearings",
      },
      {
        label: "Example product",
        value: "MR3187 combined track roller bearing",
      },
    ],
    sections: [
      {
        heading: "Application background",
        paragraphs: [
          "Steel-equipment programs often specify long item-number lists for combined bearings, track rollers and support rollers used on levelers, straighteners and related metallurgical lines.",
          "A related product reference identifies MR3187 and related combined-bearing executions with an 88 mm outside dimension and 79 mm height for heavy guide and support positions.",
        ],
      },
      {
        heading: "How we quote this type of project",
        paragraphs: [
          "Send the complete equipment item number, old-bearing marking, dimensions, quantity and application position. We confirm the manufacturing route, inspection scope and documents before quotation.",
          "This page supports identification and RFQ preparation. Final interchangeability depends on the controlled drawing and operating conditions agreed for the order.",
        ],
      },
    ],
  },
  {
    slug: "cross-roller-bearing-oem-application-reference",
    title: "Application Case: Cross Roller Bearings for Reducers",
    description:
      "CSF and SHF cross roller bearing applications for harmonic-reducer and robotics OEM programs produced at our Changzhou plant.",
    industry: "Robotics and harmonic reducers",
    image: "/images/factory-facility/optical-measuring-instrument.webp",
    imageWidth: 736,
    imageHeight: 492,
    datePublished: "2026-07-16",
    sourceUrl: "/products/cross-roller-bearings/",
    sourceLabel: "Cross roller bearing model directory",
    facts: [
      { label: "Evidence type", value: "Factory OEM application reference" },
      { label: "Series", value: "CSF and SHF cross roller bearings" },
      { label: "Application", value: "Robot harmonic reducers" },
      { label: "Production base", value: "Changzhou manufacturing plant" },
    ],
    sections: [
      {
        heading: "Development and application",
        paragraphs: [
          "CSF and SHF cross roller bearings are used in compact, high-rigidity rotary systems for harmonic reducers and robotics. Precision class, clearance or preload and runout must be confirmed against the reducer drawing.",
          "Our Changzhou plant supports model identification, dimensional checks and export packing for OEM and replacement programs.",
        ],
      },
      {
        heading: "Documents to request for a live project",
        paragraphs: [
          "Specify the model, precision class, clearance or preload, runout, starting torque and combined-load duty. A controlled drawing and agreed inspection scope should be confirmed before purchase.",
        ],
      },
    ],
  },
  {
    slug: "forklift-mast-combined-bearing-replacement",
    title: "Application Case: Forklift Mast Combined Bearings",
    description:
      "Fixed, precision and eccentric-adjustable combined bearings for forklift mast channels, with matched NbV steel profiles for OEM and maintenance programs.",
    industry: "Forklift and material handling",
    image: "/images/clean/cnc-machining-centers-documentary.webp",
    imageWidth: 1400,
    imageHeight: 933,
    datePublished: "2026-07-18",
    sourceUrl: "/solutions/combined-bearings-for-forklift-masts/",
    sourceLabel: "Combined bearings for forklift masts",
    facts: [
      { label: "Evidence type", value: "Factory replacement reference" },
      {
        label: "Typical series",
        value: "4.054–4.063, PR4.054–PR4.056, 4.454–4.463",
      },
      { label: "Matched profiles", value: "Standard 0–5 NbV / JDG62–JDG123" },
      { label: "Production base", value: "Changzhou manufacturing plant" },
    ],
    sections: [
      {
        heading: "Application background",
        paragraphs: [
          "Forklift mast stages use combined bearings to carry radial load and side thrust inside steel U-profiles. Buyers often quote a WINKEL, JD, MR or TR number together with truck capacity and mast position.",
          "Common inquiries cover fixed-axial standard bearings, precision PR executions and eccentric-adjustable 4.45x series when channel clearance must be set on assembly.",
        ],
      },
      {
        heading: "What we confirm before quotation",
        paragraphs: [
          "Send the complete marking, d × D × H envelope, axial-roller type, seal or grease preference, quantity and destination. Photos of the mast channel and the mating NbV profile help avoid interchange mistakes.",
          "Where plate-mounted assemblies are used, include the AP plate designation or a controlled plate drawing. Final approval depends on the drawing revision and operating duty agreed for the order.",
        ],
      },
    ],
  },
  {
    slug: "conveyor-track-roller-oem-supply",
    title: "Application Case: Conveyor and Cam Track Rollers",
    description:
      "NATR, NATV, NUKR and NUTR track rollers for conveyors, cam drives and automation guide tracks manufactured at our Changzhou plant.",
    industry: "Conveyors and industrial automation",
    image: "/images/factory-facility/length-measuring-instrument.webp",
    imageWidth: 736,
    imageHeight: 492,
    datePublished: "2026-07-18",
    sourceUrl: "/products/track-roller-bearings/",
    sourceLabel: "Track roller bearing model directory",
    facts: [
      { label: "Evidence type", value: "Factory OEM / MRO reference" },
      { label: "Yoke series", value: "NATR..-PP, NATV..-PP, NUTR" },
      { label: "Stud series", value: "NUKR, KRV" },
      { label: "Production base", value: "Changzhou manufacturing plant" },
    ],
    sections: [
      {
        heading: "Application background",
        paragraphs: [
          "Conveyors, packaging lines and cam mechanisms run thick-section outer rings directly on tracks. Selection depends on mounting type (yoke or stud), bore or stud diameter, outer diameter, width, seal and radial load.",
          "NATR covers caged needle yoke rollers; NATV covers full-complement versions in the same envelope class. NUKR stud followers and NUTR full-complement yoke rollers cover higher radial duty.",
        ],
      },
      {
        heading: "RFQ checklist for track rollers",
        paragraphs: [
          "Provide the full model and suffix, measured d / D / B, track hardness, speed, shock level and whether relubrication is required. For stud types, include thread size, hex and nut supply.",
          "Our plant can supply standard series from the published catalog and drawing-based special outer profiles when the envelope is non-standard.",
        ],
      },
    ],
  },
  {
    slug: "welded-plate-combined-bearing-oem",
    title: "Application Case: Welded-Plate Combined Bearing Assemblies",
    description:
      "AP-series plate-mounted combined bearings for OEM mast and guide assemblies, quoted from plate drawing plus bearing model.",
    industry: "OEM mast and guide systems",
    image: "/images/clean/cnc-workshop-documentary.webp",
    imageWidth: 1024,
    imageHeight: 682,
    datePublished: "2026-07-18",
    sourceUrl: "/solutions/welded-plate-combined-bearings/",
    sourceLabel: "Welded plate combined bearings",
    facts: [
      { label: "Evidence type", value: "Factory OEM assembly reference" },
      {
        label: "Plate series",
        value: "AP0, AP1, AP2, AP2-LUB, AP2-Q, AP3.1, AP4, AP6, AP91-Q",
      },
      {
        label: "Typical bearings",
        value: "PR4.056 / 4.056 class, jumbo 4.091",
      },
      { label: "Production base", value: "Changzhou manufacturing plant" },
    ],
    sections: [
      {
        heading: "Application background",
        paragraphs: [
          "Plate-mounted combined bearings reduce fabrication steps for OEMs. The bearing, weld location, plate thickness, hole pattern and datum geometry form one controlled assembly.",
          "AP2, AP2-LUB and AP2-Q are frequent inquiry designations. Heavier mast systems use AP3.1, AP4, AP6 or jumbo AP91-Q plate assemblies.",
        ],
      },
      {
        heading: "How plate assemblies are quoted",
        paragraphs: [
          "Do not quote from the plate code alone. Send the plate drawing (holes, thickness, weld spec, coating) and the bearing model or envelope. Distortion control and coating requirements should be stated before production.",
          "Lubricated AP2-LUB variants need grease type and access direction. Final interchangeability depends on the approved drawing for the quoted batch.",
        ],
      },
    ],
  },

  // ── DRAFT CLIENT CASES ──────────────────────────────────────────────────
  // The five pages above are application references: they deliberately carry no
  // customer, quantity, date or outcome, which makes them honest but weak as
  // evidence. The two below are the shape a real engagement case takes.
  //
  // Everything that identifies the customer or quantifies the result is a
  // `[REPLACE: …]` placeholder. Fill those from actual order records — and see
  // seo-reports/eeat-material-brief-2026-09-28.md §4 for the three compliant
  // ways to describe a customer (named with written permission / described but
  // unnamed / not a case at all).
  {
    slug: "draft-eu-forklift-mast-bearing-replacement",
    draft: true,
    title: "Client Case: Forklift Mast Bearing Replacement Supply",
    description:
      "Replacement supply of 4.054 and PR4.054 class combined mast bearings for a European material-handling service network.",
    industry: "Forklift and material handling",
    image: "/images/clean/cnc-machining-centers-documentary.webp",
    imageWidth: 1400,
    imageHeight: 933,
    // Editorial date for the page itself — set this to the day you publish.
    datePublished: "2026-09-28",
    sourceUrl: "/solutions/combined-bearings-for-forklift-masts/",
    sourceLabel: "Combined bearings for forklift masts",
    facts: [
      {
        label: "Customer",
        value:
          "[REPLACE: a named customer needs written permission; otherwise describe them — e.g. a European forklift service network]",
      },
      {
        label: "Application",
        value: "Three-stage mast side guide, 4.054 / PR4.054 class",
      },
      {
        label: "Bearing scope",
        value: "Standard fixed-axial and precision PR executions",
      },
      {
        label: "Engagement window",
        value: "[REPLACE: year or date range of the supply]",
      },
    ],
    sections: [
      {
        heading: "The requirement",
        paragraphs: [
          "The customer maintains a fleet of three-stage mast forklifts and replaces mast guide bearings on a scheduled service interval. They were buying through the truck manufacturer's parts channel and hitting two problems: lead time on the fixed-axial standard bearings, and a channel-clearance adjustment that had to be set on assembly for the precision positions.",
          "[REPLACE: state the actual trigger — the lead time, the price gap, a discontinued marking, or a repeat failure — as it was told to you, without embellishment]",
        ],
      },
      {
        heading: "What we did",
        paragraphs: [
          "We cross-referenced the markings taken off the removed bearings — MR, JD and 400-series numbers — against the 4.054 and PR4.054 records, confirmed the 30 x 62.5 x 37.5 mm envelope against the bearing seats, and agreed which positions needed the precision PR execution rather than the standard one.",
          "The inspection scope for the batch was agreed before production: dimensional check on bore, outside diameter, height and axial roller seat height, with records released with the shipment.",
          "[REPLACE: add anything else you actually did — a sample submission, a drawing revision, a packing change]",
        ],
      },
      {
        heading: "Result",
        paragraphs: [
          "[REPLACE: state what actually happened, with numbers if you have them — quantity supplied, delivery days, the number of repeat orders, scrap or rework rate. Remove this whole section if the record is only an inquiry and nothing was delivered.]",
        ],
      },
      {
        heading: "What is redacted on this page",
        paragraphs: [
          "The customer's identity, order quantities, prices and order numbers are not published. Everything else — the application position, the bearing class and the inspection scope — is as agreed for the order.",
        ],
      },
    ],
    disclosure:
      "This page describes a real customer engagement. Commercial terms, quantities and the customer's identity are withheld; the engineering content is not altered.",
    pending:
      "Replace the customer descriptor, the engagement window and the entire Result section with what is actually on the order records. If nothing was delivered, delete this page instead of publishing an inquiry as a case.",
  },
  {
    slug: "draft-metallurgical-line-bearing-replacement",
    draft: true,
    title: "Client Case: Metallurgical Line Combined Bearing Replacement",
    description:
      "Replacement supply of combined track roller bearings for a steel leveler and straightener maintenance programme.",
    industry: "Steel and metallurgical equipment",
    image: "/images/clean/cnc-workshop-documentary.webp",
    imageWidth: 1024,
    imageHeight: 682,
    datePublished: "2026-09-28",
    sourceUrl: "/solutions/danieli-equipment-replacement-bearings/",
    sourceLabel: "Danieli equipment replacement bearings",
    facts: [
      {
        label: "Customer",
        value:
          "[REPLACE: a named customer needs written permission; otherwise describe them — e.g. a steel plant maintenance contractor]",
      },
      {
        label: "Application",
        value: "Leveler / straightener guide and support positions",
      },
      {
        label: "Bearing scope",
        value: "MR3187 combined track roller, 88 mm D x 79 mm H",
      },
      {
        label: "Engagement window",
        value: "[REPLACE: year or date range of the supply]",
      },
    ],
    sections: [
      {
        heading: "The requirement",
        paragraphs: [
          "Metallurgical maintenance programmes quote from long equipment item-number lists rather than bearing designations, and the numbers on the removed part rarely match the drawing the maintenance planner holds.",
          "[REPLACE: state the actual trigger — an obsolete maker number, a shutdown deadline, a bearing that failed early in service]",
        ],
      },
      {
        heading: "What we did",
        paragraphs: [
          "We worked back from the equipment item numbers and the markings on the failed bearings to the MR3187 record — 88 mm outside diameter, 79 mm height, ZZ seal, 20CrMnTi rings — and confirmed the guide and support positions against the measured seat dimensions before quoting.",
          "Because the load ratings are not published for this reference, expected duty was reviewed against the original equipment data rather than a catalogue figure.",
          "[REPLACE: add the specific engineering work you did — a drawing you produced, a material you substituted, a tolerance you widened]",
        ],
      },
      {
        heading: "Result",
        paragraphs: [
          "[REPLACE: what was delivered and what happened — quantity, whether it fitted on first assembly, how many shutdown windows it has survived. Delete this section if the record is only an inquiry.]",
        ],
      },
      {
        heading: "What is redacted on this page",
        paragraphs: [
          "The customer's identity, the equipment line identification, quantities and prices are not published.",
        ],
      },
    ],
    disclosure:
      "This page describes a real customer engagement. Commercial terms, quantities and the customer's identity are withheld; the engineering content is not altered.",
    pending:
      "Same as the forklift case: customer descriptor, engagement window and a Result section taken from real records. Delete the page if there was no delivery.",
  },
];

/** Case pages that are real and cleared for publication. Never includes drafts. */
export const publishedFactoryCaseStudies: FactoryCaseStudy[] =
  factoryCaseStudies.filter((study) => !study.draft);

/** Drafted case pages, shown only in the local preview build. */
export const draftFactoryCaseStudies: FactoryCaseStudy[] =
  factoryCaseStudies.filter((study) => study.draft);

/** What the current build should render. */
export const activeFactoryCaseStudies: FactoryCaseStudy[] = draftPreviewEnabled
  ? [...publishedFactoryCaseStudies, ...draftFactoryCaseStudies]
  : publishedFactoryCaseStudies;

// ── Build gate ────────────────────────────────────────────────────────────
assertNoPendingFields(
  "Factory case studies",
  activeFactoryCaseStudies.map((study) => ({
    label: study.slug,
    values: flattenValues(
      study.title,
      study.description,
      study.facts,
      study.sections,
      study.disclosure,
    ),
  })),
);
