export const factoryFacilityMedia = [
  {
    src: '/images/factory-facility/cnc-machining-workshop.webp',
    width: 1024,
    height: 682,
    alt: 'CNC bearing machining workshop at our Changzhou manufacturing plant',
    title: 'CNC machining workshop',
    description: 'CNC production equipment and operators at our Changzhou bearing manufacturing plant.',
  },
  {
    src: '/images/factory-facility/cnc-machining-centers.webp',
    width: 1400,
    height: 933,
    alt: 'CNC machining centers at our Changzhou bearing factory',
    title: 'CNC machining centers',
    description: 'Machining centers and in-process bearing components on the production floor.',
  },
  {
    src: '/images/factory-facility/length-measuring-instrument.webp',
    width: 736,
    height: 492,
    alt: 'Universal length measuring instrument in our factory inspection room',
    title: 'Length measurement equipment',
    description: 'Measurement-room equipment used for dimensional verification before shipment.',
  },
  {
    src: '/images/factory-facility/optical-measuring-instrument.webp',
    width: 736,
    height: 492,
    alt: 'Optical measuring instrument at our Changzhou bearing factory',
    title: 'Optical measurement system',
    description: 'Optical measurement and profile-checking workstation for precision bearing inspection.',
  },
] as const;

export const factoryEvidenceSource = {
  name: 'Combined Bearing Source — Changzhou Manufacturing Base',
  url: '/about/',
  disclosure:
    'Facility photos show our Changzhou manufacturing and inspection capacity used for combined bearings, track rollers and related industrial roller bearings.',
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
};

export const factoryCaseStudies: FactoryCaseStudy[] = [
  {
    slug: 'danieli-steel-equipment-bearing-reference',
    title: 'Application Case: Bearings for Steel Equipment Lines',
    description:
      'Combined bearings and steel-equipment bearing references used in metallurgical and leveling line maintenance programs.',
    industry: 'Steel and metallurgical equipment',
    image: '/images/factory-facility/cnc-machining-workshop.webp',
    imageWidth: 1024,
    imageHeight: 682,
    datePublished: '2026-07-16',
    sourceUrl: '/solutions/danieli-equipment-replacement-bearings/',
    sourceLabel: 'Danieli equipment replacement bearings',
    facts: [
      { label: 'Evidence type', value: 'Factory application reference' },
      { label: 'Production base', value: 'Changzhou manufacturing plant' },
      { label: 'Application area', value: 'Steel and metallurgical equipment bearings' },
      { label: 'Example product', value: 'MR3187 combined track roller bearing' },
    ],
    sections: [
      {
        heading: 'Application background',
        paragraphs: [
          'Steel-equipment programs often specify long item-number lists for combined bearings, track rollers and support rollers used on levelers, straighteners and related metallurgical lines.',
          'A related product reference identifies MR3187 and related combined-bearing executions with an 88 mm outside dimension and 79 mm height for heavy guide and support positions.',
        ],
      },
      {
        heading: 'How we quote this type of project',
        paragraphs: [
          'Send the complete equipment item number, old-bearing marking, dimensions, quantity and application position. We confirm the manufacturing route, inspection scope and documents before quotation.',
          'This page supports identification and RFQ preparation. Final interchangeability depends on the controlled drawing and operating conditions agreed for the order.',
        ],
      },
    ],
  },
  {
    slug: 'cross-roller-bearing-oem-application-reference',
    title: 'Application Case: Cross Roller Bearings for Reducers',
    description:
      'CSF and SHF cross roller bearing applications for harmonic-reducer and robotics OEM programs produced at our Changzhou plant.',
    industry: 'Robotics and harmonic reducers',
    image: '/images/factory-facility/optical-measuring-instrument.webp',
    imageWidth: 736,
    imageHeight: 492,
    datePublished: '2026-07-16',
    sourceUrl: '/products/cross-roller-bearings/',
    sourceLabel: 'Cross roller bearing model directory',
    facts: [
      { label: 'Evidence type', value: 'Factory OEM application reference' },
      { label: 'Series', value: 'CSF and SHF cross roller bearings' },
      { label: 'Application', value: 'Robot harmonic reducers' },
      { label: 'Production base', value: 'Changzhou manufacturing plant' },
    ],
    sections: [
      {
        heading: 'Development and application',
        paragraphs: [
          'CSF and SHF cross roller bearings are used in compact, high-rigidity rotary systems for harmonic reducers and robotics. Precision class, clearance or preload and runout must be confirmed against the reducer drawing.',
          'Our Changzhou plant supports model identification, dimensional checks and export packing for OEM and replacement programs.',
        ],
      },
      {
        heading: 'Documents to request for a live project',
        paragraphs: [
          'Specify the model, precision class, clearance or preload, runout, starting torque and combined-load duty. A controlled drawing and agreed inspection scope should be confirmed before purchase.',
        ],
      },
    ],
  },
  {
    slug: 'forklift-mast-combined-bearing-replacement',
    title: 'Application Case: Forklift Mast Combined Bearings',
    description:
      'Fixed, precision and eccentric-adjustable combined bearings for forklift mast channels, with matched NbV steel profiles for OEM and maintenance programs.',
    industry: 'Forklift and material handling',
    image: '/images/factory-facility/cnc-machining-centers.webp',
    imageWidth: 1400,
    imageHeight: 933,
    datePublished: '2026-07-18',
    sourceUrl: '/solutions/combined-bearings-for-forklift-masts/',
    sourceLabel: 'Combined bearings for forklift masts',
    facts: [
      { label: 'Evidence type', value: 'Factory replacement reference' },
      { label: 'Typical series', value: '4.054–4.063, PR4.054–PR4.056, 4.454–4.463' },
      { label: 'Matched profiles', value: 'Standard 0–5 NbV / JDG62–JDG123' },
      { label: 'Production base', value: 'Changzhou manufacturing plant' },
    ],
    sections: [
      {
        heading: 'Application background',
        paragraphs: [
          'Forklift mast stages use combined bearings to carry radial load and side thrust inside steel U-profiles. Buyers often quote a WINKEL, JD, MR or TR number together with truck capacity and mast position.',
          'Common inquiries cover fixed-axial standard bearings, precision PR executions and eccentric-adjustable 4.45x series when channel clearance must be set on assembly.',
        ],
      },
      {
        heading: 'What we confirm before quotation',
        paragraphs: [
          'Send the complete marking, d × D × H envelope, axial-roller type, seal or grease preference, quantity and destination. Photos of the mast channel and the mating NbV profile help avoid interchange mistakes.',
          'Where plate-mounted assemblies are used, include the AP plate designation or a controlled plate drawing. Final approval depends on the drawing revision and operating duty agreed for the order.',
        ],
      },
    ],
  },
  {
    slug: 'conveyor-track-roller-oem-supply',
    title: 'Application Case: Conveyor and Cam Track Rollers',
    description:
      'NATR, NATV, NUKR and NUTR track rollers for conveyors, cam drives and automation guide tracks manufactured at our Changzhou plant.',
    industry: 'Conveyors and industrial automation',
    image: '/images/factory-facility/length-measuring-instrument.webp',
    imageWidth: 736,
    imageHeight: 492,
    datePublished: '2026-07-18',
    sourceUrl: '/products/track-roller-bearings/',
    sourceLabel: 'Track roller bearing model directory',
    facts: [
      { label: 'Evidence type', value: 'Factory OEM / MRO reference' },
      { label: 'Yoke series', value: 'NATR..-PP, NATV..-PP, NUTR' },
      { label: 'Stud series', value: 'NUKR, KRV' },
      { label: 'Production base', value: 'Changzhou manufacturing plant' },
    ],
    sections: [
      {
        heading: 'Application background',
        paragraphs: [
          'Conveyors, packaging lines and cam mechanisms run thick-section outer rings directly on tracks. Selection depends on mounting type (yoke or stud), bore or stud diameter, outer diameter, width, seal and radial load.',
          'NATR covers caged needle yoke rollers; NATV covers full-complement versions in the same envelope class. NUKR stud followers and NUTR full-complement yoke rollers cover higher radial duty.',
        ],
      },
      {
        heading: 'RFQ checklist for track rollers',
        paragraphs: [
          'Provide the full model and suffix, measured d / D / B, track hardness, speed, shock level and whether relubrication is required. For stud types, include thread size, hex and nut supply.',
          'Our plant can supply standard series from the published catalog and drawing-based special outer profiles when the envelope is non-standard.',
        ],
      },
    ],
  },
  {
    slug: 'welded-plate-combined-bearing-oem',
    title: 'Application Case: Welded-Plate Combined Bearing Assemblies',
    description:
      'AP-series plate-mounted combined bearings for OEM mast and guide assemblies, quoted from plate drawing plus bearing model.',
    industry: 'OEM mast and guide systems',
    image: '/images/factory-facility/cnc-machining-workshop.webp',
    imageWidth: 1024,
    imageHeight: 682,
    datePublished: '2026-07-18',
    sourceUrl: '/solutions/welded-plate-combined-bearings/',
    sourceLabel: 'Welded plate combined bearings',
    facts: [
      { label: 'Evidence type', value: 'Factory OEM assembly reference' },
      { label: 'Plate series', value: 'AP0, AP1, AP2, AP2-LUB, AP2-Q, AP3.1, AP4, AP6, AP91-Q' },
      { label: 'Typical bearings', value: 'PR4.056 / 4.056 class, jumbo 4.091' },
      { label: 'Production base', value: 'Changzhou manufacturing plant' },
    ],
    sections: [
      {
        heading: 'Application background',
        paragraphs: [
          'Plate-mounted combined bearings reduce fabrication steps for OEMs. The bearing, weld location, plate thickness, hole pattern and datum geometry form one controlled assembly.',
          'AP2, AP2-LUB and AP2-Q are frequent inquiry designations. Heavier mast systems use AP3.1, AP4, AP6 or jumbo AP91-Q plate assemblies.',
        ],
      },
      {
        heading: 'How plate assemblies are quoted',
        paragraphs: [
          'Do not quote from the plate code alone. Send the plate drawing (holes, thickness, weld spec, coating) and the bearing model or envelope. Distortion control and coating requirements should be stated before production.',
          'Lubricated AP2-LUB variants need grease type and access direction. Final interchangeability depends on the approved drawing for the quoted batch.',
        ],
      },
    ],
  },
];
