export type DownloadItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
  category: 'Track rollers' | 'Combined bearings' | 'Full complement' | 'Profiles' | 'Catalog request';
  format: 'PDF';
  updated: string;
};

export const downloadItems: DownloadItem[] = [
  {
    slug: 'combined-bearing-inspection-checklist',
    title: 'Combined Bearing Inspection Checklist',
    description: 'Blank RFQ and batch-inspection worksheet covering identification, dimensions, adjustment, running surfaces, materials, lubrication and packing.',
    href: '/downloads/combined-bearing-inspection-checklist.pdf', category: 'Combined bearings', format: 'PDF', updated: '2026-07',
  },
  {
    slug: 'mr96-screw-adjustable-combined-bearings',
    title: 'MR.961-MR.968 Screw-Adjustable Technical Table',
    description: 'Verified dimensions, radial and axial load ratings, grease speed, mass, materials and adjustment notes.',
    href: '/downloads/mr96-screw-adjustable-combined-bearings.pdf', category: 'Combined bearings', format: 'PDF', updated: '2026-07',
  },
  {
    slug: 'high-load-axial-support-combined-bearings',
    title: 'MR.142 / MR.146-MR.154 High-Load Series',
    description: 'High-load axial-support bearing dimensions, load ratings, speed, mass and washer-adjustment references.',
    href: '/downloads/high-load-axial-support-combined-bearings.pdf', category: 'Combined bearings', format: 'PDF', updated: '2026-07',
  },
  {
    slug: 'mr4180-mr4188-heavy-load-combined-bearings',
    title: 'MR4180-MR4188 Heavy-Load Adjustable Series',
    description: 'Complete series geometry, radial and axial load ratings, material notes and controlled-drawing checks.',
    href: '/downloads/mr4180-mr4188-heavy-load-combined-bearings.pdf', category: 'Combined bearings', format: 'PDF', updated: '2026-07',
  },
  {
    slug: 'zrs-steel-section-combined-bearings', title: 'Steel-Section ZRS Combined Bearings',
    description: 'MR.706 through MR.191 dimensions, load ratings, speeds, masses and alternate ZRS references.',
    href: '/downloads/zrs-steel-section-combined-bearings.pdf', category: 'Combined bearings', format: 'PDF', updated: '2026-07',
  },
  {
    slug: 'inclined-zrs-combined-bearings', title: 'Inclined-Section ZRS Combined Bearings',
    description: 'Inclined-profile MR series geometry, ratings and execution notes for angled steel guides.',
    href: '/downloads/inclined-zrs-combined-bearings.pdf', category: 'Combined bearings', format: 'PDF', updated: '2026-07',
  },
  {
    slug: 'kres-external-adjustable-combined-bearings', title: 'KRES Externally Adjustable Combined Bearings',
    description: 'KRES.062 through KRES.149 geometry, adjustment ranges, loads, speeds and masses.',
    href: '/downloads/kres-external-adjustable-combined-bearings.pdf', category: 'Combined bearings', format: 'PDF', updated: '2026-07',
  },
  {
    slug: 'radial-stud-combined-bearing-series', title: '2-Series Radial Combined Bearings With Stud',
    description: 'Published 2-series, TR and MR radial combined-bearing identification references and drawing checks.',
    href: '/downloads/radial-stud-combined-bearing-series.pdf', category: 'Combined bearings', format: 'PDF', updated: '2026-07',
  },
  {
    slug: '4-078-shim-adjustable-combined-bearings',
    title: '4.078 / 4.0784 Shim-Adjustable Cross Reference',
    description: 'Focused MR.152 and MR.142 cross-reference with dimensions, load ratings and shim options.',
    href: '/downloads/4-078-shim-adjustable-combined-bearings.pdf', category: 'Combined bearings', format: 'PDF', updated: '2026-07',
  },
  {
    slug: 'high-temperature-combined-bearing-series',
    title: '4.054HT-4.063HT High-Temperature Series',
    description: 'High-temperature model range and the grease, seal, temperature and drawing checks required for quotation.',
    href: '/downloads/high-temperature-combined-bearing-series.pdf', category: 'Combined bearings', format: 'PDF', updated: '2026-07',
  },
  {
    slug: 'pr4-precision-adjustable-series',
    title: 'PR4.454-PR4.463 Precision Adjustable Series',
    description: 'Precision eccentric-adjustable series identification and controlled-drawing review checklist.',
    href: '/downloads/pr4-precision-adjustable-series.pdf', category: 'Combined bearings', format: 'PDF', updated: '2026-07',
  },
  {
    slug: 'combined-bearing-nbv-profile-matrix',
    title: 'Combined Bearing / Standard NbV 0-8 Matrix',
    description: 'Bidirectional profile-to-bearing matching table with article numbers, replacement references and mass.',
    href: '/downloads/combined-bearing-nbv-profile-matrix.pdf', category: 'Profiles', format: 'PDF', updated: '2026-07',
  },
  {
    slug: 'combined-bearing-standard-series-reference',
    title: 'Combined Bearing Factory Series Reference',
    description: 'Standard, precision, eccentric, jumbo and welded-plate (AP) combined bearing references with JD / MR / TR cross-references.',
    href: '/downloads/combined-bearing-standard-series-reference.pdf',
    category: 'Combined bearings',
    format: 'PDF',
    updated: '2026-07',
  },
  {
    slug: 'sl-full-complement-bearing-reference',
    title: 'SL Full Complement Bearing Factory Reference',
    description: 'SL18, SL04 and related full-complement cylindrical roller bearing samples for gearboxes, sheaves and heavy drives.',
    href: '/downloads/sl-full-complement-bearing-reference.pdf',
    category: 'Full complement',
    format: 'PDF',
    updated: '2026-07',
  },
  {
    slug: 'natr-pp-track-roller-reference',
    title: 'NATR..-PP Track Roller Technical Reference',
    description: 'Dimensions, load ratings and identification notes for NATR..-PP yoke-type track rollers.',
    href: '/downloads/natr-pp-track-roller-reference.pdf',
    category: 'Track rollers',
    format: 'PDF',
    updated: '2026-07',
  },
  {
    slug: 'nukr-stud-track-roller-reference',
    title: 'NUKR Stud Type Track Roller Reference',
    description: 'Stud diameter, overall length, thread, radial ratings, grease speed and mass for NUKR metric cam followers.',
    href: '/downloads/nukr-stud-track-roller-reference.pdf',
    category: 'Track rollers',
    format: 'PDF',
    updated: '2026-07',
  },
  {
    slug: 'nntr-rsu-support-roller-reference',
    title: 'NNTR / RSU Support Roller Sample Reference',
    description: 'Sample double-row support roller dimensions and load ratings for initial model identification.',
    href: '/downloads/nntr-rsu-support-roller-reference.pdf',
    category: 'Track rollers',
    format: 'PDF',
    updated: '2026-07',
  },
];

export const catalogRequestHref = '/contact/?source=catalog-download';
