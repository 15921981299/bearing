export const partnerFacilityMedia = [
  {
    src: '/images/partner-facility/jade-bearing-cnc-machining-workshop.webp',
    width: 1024,
    height: 682,
    alt: 'CNC bearing machining workshop at Changzhou Jade Bearing partner facility',
    title: 'CNC machining workshop',
    description: 'Authorized partner image showing CNC production equipment and operators at the Changzhou facility.',
  },
  {
    src: '/images/partner-facility/jade-bearing-cnc-machining-centers.webp',
    width: 1400,
    height: 933,
    alt: 'CNC machining centers at Changzhou Jade Bearing partner facility',
    title: 'CNC machining centers',
    description: 'Authorized partner image showing machining centers and in-process bearing components.',
  },
  {
    src: '/images/partner-facility/jade-bearing-length-measuring-instrument.webp',
    width: 736,
    height: 492,
    alt: 'Universal length measuring instrument at Changzhou Jade Bearing partner facility',
    title: 'Length measurement equipment',
    description: 'Measurement-room equipment used by the manufacturing partner for dimensional verification.',
  },
  {
    src: '/images/partner-facility/jade-bearing-optical-measuring-instrument.webp',
    width: 736,
    height: 492,
    alt: 'Optical measuring instrument at Changzhou Jade Bearing partner facility',
    title: 'Optical measurement system',
    description: 'Authorized partner image of an optical measurement and profile-checking workstation.',
  },
] as const;

export const partnerEvidenceSource = {
  name: 'Changzhou Jade Bearing Co., Ltd.',
  url: 'https://www.jadebearings.com/about-us',
  disclosure: 'Facility media and capability statements are supplied by or reproduced with permission from the manufacturing partner. They do not represent a facility owned by Combined Bearing Source.',
};

export type PartnerCaseStudy = {
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

export const partnerCaseStudies: PartnerCaseStudy[] = [
  {
    slug: 'danieli-steel-equipment-bearing-reference',
    title: 'Partner Reference: Bearings for Danieli Steel Equipment',
    description: 'An attributed manufacturing-partner reference covering combined bearings and steel-equipment bearing item numbers reported for Danieli applications.',
    industry: 'Steel and metallurgical equipment',
    image: '/images/partner-facility/jade-bearing-cnc-machining-workshop.webp',
    imageWidth: 1024,
    imageHeight: 682,
    datePublished: '2026-07-16',
    sourceUrl: 'https://www.jadebearings.com/info/danieli-s-item-number-39693937.html',
    sourceLabel: 'Jade Bearings: DANIELI item number reference',
    facts: [
      { label: 'Evidence type', value: 'Manufacturing-partner application reference' },
      { label: 'Reported relationship', value: 'Approximately eight years as of the partner publication dated 2019' },
      { label: 'Application area', value: 'Steel and metallurgical equipment bearings' },
      { label: 'Example product', value: 'MR3187 combined track roller bearing' },
    ],
    sections: [
      {
        heading: 'Partner-reported application',
        paragraphs: [
          'Changzhou Jade Bearing publicly reports supplying bearing references used in Danieli steel-equipment applications. The source publication lists a large set of Danieli item numbers and states an approximately eight-year cooperation period as of October 2019.',
          'A related product reference identifies MR3187, 0.076395.D, 0.160000.V and 0.160035.C combined bearings for Danieli equipment, with an 88 mm outside dimension and 79 mm height.',
        ],
      },
      {
        heading: 'How this reference is used',
        paragraphs: [
          'This reference supports initial cross-reference research only. It does not establish current approval, stock, interchangeability or endorsement by the named equipment company.',
          'For an inquiry, provide the complete equipment item number, old-bearing marking, dimensions, quantity and application position. The selected manufacturing route and documents are confirmed before quotation.',
        ],
      },
    ],
  },
  {
    slug: 'cross-roller-bearing-oem-application-reference',
    title: 'Partner Reference: Cross Roller Bearings for Reducers',
    description: 'An attributed partner application summary for CSF and SHF cross roller bearings used in harmonic-reducer and robotics programs.',
    industry: 'Robotics and harmonic reducers',
    image: '/images/partner-facility/jade-bearing-optical-measuring-instrument.webp',
    imageWidth: 736,
    imageHeight: 492,
    datePublished: '2026-07-16',
    sourceUrl: 'https://www.jadebearings.com/about-us',
    sourceLabel: 'Jade Bearings company and capability profile',
    facts: [
      { label: 'Evidence type', value: 'Manufacturing-partner capability and application statement' },
      { label: 'Series', value: 'CSF and SHF cross roller bearings' },
      { label: 'Application', value: 'Robot harmonic reducers' },
      { label: 'Public verification', value: 'Partner reports evaluation by OEM users; underlying test report is not publicly posted' },
    ],
    sections: [
      {
        heading: 'Development and application statement',
        paragraphs: [
          'Jade reports more than two years of development work on CSF and SHF cross roller bearings for harmonic reducers and states that OEM-user testing supported the product performance claims.',
          'The public source does not provide the underlying measurement report, sample serial number, test conditions or acceptance criteria. For that reason, this page records the statement as partner-supplied application evidence rather than presenting it as an independent test report.',
        ],
      },
      {
        heading: 'Documents to request for a live project',
        paragraphs: [
          'Buyers should specify the model, precision class, clearance or preload, runout, starting torque and combined-load duty. A controlled drawing and available inspection scope should be agreed before purchase.',
          'Where a validation report is required, request the report number, tested model, sample quantity, equipment, method, measured results and approval signature as part of the RFQ.',
        ],
      },
    ],
  },
];
