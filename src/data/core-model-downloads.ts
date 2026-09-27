export type CoreModelDownload = {
  slug: string;
  model: string;
  href: string;
  family: "Standard" | "Eccentric adjustable" | "Precision";
};

const standardModels = [
  "4.053",
  "4.054",
  "4.055",
  "4.056",
  "4.057",
  "4.058",
  "4.059",
  "4.060",
  "4.061",
  "4.062",
  "4.063",
] as const;

const adjustableModels = [
  "4.454",
  "4.455",
  "4.456",
  "4.457",
  "4.458",
  "4.459",
  "4.460",
  "4.461",
  "4.462",
  "4.463",
] as const;

const precisionModels = [
  "PR4.054",
  "PR4.055",
  "PR4.056",
  "PR4.058",
  "PR4.059",
  "PR4.061",
] as const;

const toSlug = (model: string) =>
  `winkel-${model.toLowerCase().replace(".", "-")}`;
const toDownload = (
  model: string,
  family: CoreModelDownload["family"],
): CoreModelDownload => {
  const slug = toSlug(model);
  return {
    slug,
    model,
    family,
    href: `/downloads/model-sheets/${slug}.pdf`,
  };
};

export const coreModelDownloads: CoreModelDownload[] = [
  ...standardModels.map((model) => toDownload(model, "Standard")),
  ...adjustableModels.map((model) => toDownload(model, "Eccentric adjustable")),
  ...precisionModels.map((model) => toDownload(model, "Precision")),
];

export const coreModelDownloadBySlug = Object.fromEntries(
  coreModelDownloads.map((item) => [item.slug, item]),
);
