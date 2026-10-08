/**
 * Publicly available inspection-report samples.
 *
 * WHY THIS MUST BE REAL
 * ---------------------
 * A published inspection report is a *factual* claim about a measured part. An
 * invented, borrowed or "re-typed" report is a fabricated inspection report —
 * a compliance problem (CN: 检验检测机构监督管理办法; EU/US: product liability and
 * false-advertising rules), not an SEO problem. So real reports only.
 *
 * The certifications page already states the bar a document must clear before
 * it is presented as a report: issuer, report number, model or batch,
 * inspection date, method/equipment, measured values, acceptance criteria and
 * an approval signature. Every entry below must carry all of them — a sample
 * missing a field is *plant information*, not a report, and must not be listed
 * here.
 *
 * HOW THIS FILE IS ORGANISED
 * --------------------------
 * Two drafted samples ship below with `draft: true`. The model, the series and
 * the nominal dimensions in the specification column are the real figures
 * already published on the product pages. Everything that has to come off an
 * actual report — report number, batch, date, tolerances, measured values,
 * verdicts, the approval block and the redaction list — is a `[REPLACE: …]`
 * placeholder.
 *
 * Nothing here renders in a normal build. To look at the layout first:
 *
 *   npm run build:draft-preview
 *
 * TO PUBLISH ONE SAMPLE
 * ---------------------
 * 1. Take the real factory report (ideally two: a dimensional one and a
 *    material/heat-treatment one), covering a model people actually search for.
 * 2. Redact customer name, price, quantity and order number. Keep the report
 *    number, the model, the dates, the instrument, the measured values, the
 *    acceptance basis and the approval block — that is the whole point.
 * 3. Export to PDF at /public/downloads/inspection-reports/<slug>.pdf and set
 *    `pdf` to that path.
 * 4. Replace every `[REPLACE: …]`, state precisely which fields you blacked out
 *    in `redacted`, then set `draft: false`.
 *
 * DO NOT
 * ------
 * - Do not reuse another factory's or another model's report.
 * - Do not retype spec values as "measured" values.
 * - Do not publish a report for a model the factory has not actually measured.
 * - Do not leave the approval signature off — an unsigned report is not a report.
 */

import {
  assertNoPendingFields,
  draftPreviewEnabled,
  flattenValues,
  type PendingField,
} from "./publish-mode";

export type InspectionMeasurement = {
  item: string;
  specification: string;
  measured: string;
  verdict: "Pass" | "Fail" | PendingField;
};

export type InspectionReportSample = {
  /** Stable id, used for anchors and cross-links from the documentation cards */
  id: string;
  title: string;
  /** Real report number from the factory's QC system */
  reportNumber: string;
  /** Issuing factory / laboratory — must be identifiable */
  issuedBy: string;
  /** Model actually measured in this report */
  model: string;
  batch?: string;
  /** ISO date of the inspection (not the upload date) */
  inspectionDate: string;
  /** Acceptance basis: controlled drawing revision and/or standard */
  standards: string[];
  /** Equipment actually used */
  instruments: string[];
  measurements: InspectionMeasurement[];
  /** Who approved it (role is enough here; the signature lives in the PDF) */
  approvedBy: string;
  /** Path under /public to the redacted PDF. Omitted → no download link. */
  pdf?: string;
  fileSizeLabel?: string;
  /** Every field blacked out, listed explicitly */
  redacted: string[];
  note?: string;
  /** Drafts never render in a deployed build. */
  draft?: boolean;
  /** What is still missing before this sample can be published. */
  pending?: string;
};

export const inspectionReportSamples: InspectionReportSample[] = [
  {
    // ── DRAFT A — dimensional report ───────────────────────────────────────
    id: "draft-dimensional-4-054",
    draft: true,
    title: "Dimensional inspection report — 4.054 combination roller bearing",
    reportNumber: "[REPLACE: real report number]",
    issuedBy:
      "Combined Bearing Source — Changzhou plant inspection room [REPLACE: confirm the issuing department as it is written on the report]",
    model: "4.054",
    batch: "[REPLACE: batch or lot number]",
    inspectionDate: "[REPLACE: YYYY-MM-DD]",
    standards: [
      "[REPLACE: controlled drawing revision]",
      "[REPLACE: tolerance standard used, e.g. GB/T 307.1]",
    ],
    // The plant's measurement room is already shown on /certifications/; confirm
    // which instruments are named on this particular report.
    instruments: [
      "Universal length measuring instrument",
      "Optical measurement system",
    ],
    // Specification column = the real nominal figures published on
    // /products/combined-bearings/winkel-4-054/. Tolerances come off the drawing.
    measurements: [
      {
        item: "Bore diameter d",
        specification: "30 mm [REPLACE: drawing tolerance]",
        measured: "[REPLACE: measured]",
        verdict: "[REPLACE: Pass/Fail]",
      },
      {
        item: "Outside diameter D",
        specification: "62.5 mm [REPLACE: drawing tolerance]",
        measured: "[REPLACE: measured]",
        verdict: "[REPLACE: Pass/Fail]",
      },
      {
        item: "Overall height H",
        specification: "37.5 mm [REPLACE: drawing tolerance]",
        measured: "[REPLACE: measured]",
        verdict: "[REPLACE: Pass/Fail]",
      },
      {
        item: "Axial roller seat height h",
        specification: "30.5 mm [REPLACE: drawing tolerance]",
        measured: "[REPLACE: measured]",
        verdict: "[REPLACE: Pass/Fail]",
      },
      {
        item: "Radial runout of outer ring",
        specification: "[REPLACE: drawing limit]",
        measured: "[REPLACE: measured]",
        verdict: "[REPLACE: Pass/Fail]",
      },
    ],
    approvedBy: "[REPLACE: approver role as printed on the report]",
    redacted: [
      "[REPLACE: list exactly which fields were blacked out — e.g. Customer name, Unit price, Order quantity, PO number]",
    ],
    note: "Release copy of the report supplied with this batch.",
    pending:
      "Report number, batch, inspection date, drawing revision and tolerance standard, every measured value and verdict, the approver block, the exact redaction list, and the redacted PDF at /public/downloads/inspection-reports/. Then set draft: false.",
  },
  {
    // ── DRAFT B — material / heat-treatment report ─────────────────────────
    // Worth having because it answers "do they check more than dimensions?".
    id: "draft-material-pr4-056",
    draft: true,
    title: "Heat-treatment verification report — PR4.056 (20CrMnTi)",
    reportNumber: "[REPLACE: real report number]",
    issuedBy:
      "Combined Bearing Source — Changzhou plant inspection room [REPLACE: confirm the issuing department as it is written on the report]",
    model: "PR4.056",
    batch: "[REPLACE: heat-treatment batch number]",
    inspectionDate: "[REPLACE: YYYY-MM-DD]",
    standards: [
      "[REPLACE: controlled drawing revision]",
      "[REPLACE: heat-treatment standard used, e.g. JB/T 8881]",
    ],
    instruments: [
      "[REPLACE: hardness tester actually used]",
      "[REPLACE: metallographic equipment actually used]",
    ],
    measurements: [
      {
        item: "Effective case depth",
        specification: "[REPLACE: drawing requirement]",
        measured: "[REPLACE: measured]",
        verdict: "[REPLACE: Pass/Fail]",
      },
      {
        item: "Surface hardness",
        specification: "[REPLACE: drawing requirement]",
        measured: "[REPLACE: measured]",
        verdict: "[REPLACE: Pass/Fail]",
      },
      {
        item: "Core hardness",
        specification: "[REPLACE: drawing requirement]",
        measured: "[REPLACE: measured]",
        verdict: "[REPLACE: Pass/Fail]",
      },
      {
        item: "Decarburization depth",
        specification: "[REPLACE: drawing requirement]",
        measured: "[REPLACE: measured]",
        verdict: "[REPLACE: Pass/Fail]",
      },
      {
        item: "Microstructure (martensite / retained austenite)",
        specification: "[REPLACE: acceptance level]",
        measured: "[REPLACE: measured]",
        verdict: "[REPLACE: Pass/Fail]",
      },
    ],
    approvedBy: "[REPLACE: approver role as printed on the report]",
    redacted: [
      "[REPLACE: list exactly which fields were blacked out — e.g. Customer name, Heat-treatment supplier, Unit price, Order quantity, PO number]",
    ],
    pending:
      "Same list as the dimensional sample, plus the heat-treatment standard and the hardness / metallographic equipment actually used. If the plant does not issue a separate heat-treatment report, drop this sample and keep only the dimensional one — one real report beats two padded ones.",
  },
];

/** Samples that are real and cleared for publication. Never includes drafts. */
export const publishedInspectionReports: InspectionReportSample[] =
  inspectionReportSamples.filter((report) => !report.draft);

/** Drafted samples, shown only in the local preview build. */
export const draftInspectionReports: InspectionReportSample[] =
  inspectionReportSamples.filter((report) => report.draft);

/** What the current build should render. */
export const activeInspectionReports: InspectionReportSample[] =
  draftPreviewEnabled
    ? [...publishedInspectionReports, ...draftInspectionReports]
    : publishedInspectionReports;

export const hasActiveInspectionReports: boolean =
  activeInspectionReports.length > 0;

// ── Build gate ────────────────────────────────────────────────────────────
assertNoPendingFields(
  "Inspection report samples",
  activeInspectionReports.map((report) => ({
    label: report.id,
    values: flattenValues(
      report.title,
      report.reportNumber,
      report.issuedBy,
      report.model,
      report.batch,
      report.inspectionDate,
      report.standards,
      report.instruments,
      report.measurements,
      report.approvedBy,
      report.redacted,
    ),
  })),
);
