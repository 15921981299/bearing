export type TechnicalReferenceColumn = { key: string; label: string };

export type TechnicalReferenceTable = {
  title: string;
  series: string;
  description: string;
  columns: TechnicalReferenceColumn[];
  rows: Record<string, string>[];
  downloadHref?: string;
  sources: { label: string; url: string; note: string }[];
  verificationNote: string;
};

const natrRows: Record<string, string>[] = [
  { model: 'NATR5-PP', d: '5', D: '16', B: '12', C: '11', d2: '12.5', Crw: '3.20', C0rw: '3.45', Curw: '0.465', speed: '14,000', mass: '0.014' },
  { model: 'NATR6-PP', d: '6', D: '19', B: '12', C: '11', d2: '15', Crw: '3.55', C0rw: '4.10', Curw: '0.560', speed: '11,000', mass: '0.019' },
  { model: 'NATR8-PP', d: '8', D: '24', B: '15', C: '14', d2: '19', Crw: '5.50', C0rw: '6.70', Curw: '0.940', speed: '7,500', mass: '0.038' },
  { model: 'NATR10-PP', d: '10', D: '30', B: '15', C: '14', d2: '23', Crw: '6.80', C0rw: '8.70', Curw: '1.240', speed: '5,500', mass: '0.064' },
  { model: 'NATR12-PP', d: '12', D: '32', B: '15', C: '14', d2: '25', Crw: '7.00', C0rw: '9.20', Curw: '1.320', speed: '4,500', mass: '0.066' },
  { model: 'NATR15-PP', d: '15', D: '35', B: '19', C: '18', d2: '27.6', Crw: '9.70', C0rw: '14.50', Curw: '1.860', speed: '3,600', mass: '0.095' },
  { model: 'NATR17-PP', d: '17', D: '40', B: '21', C: '20', d2: '31.5', Crw: '10.90', C0rw: '16.00', Curw: '2.130', speed: '2,900', mass: '0.139' },
  { model: 'NATR20-PP', d: '20', D: '47', B: '25', C: '24', d2: '36.5', Crw: '15.40', C0rw: '26.00', Curw: '3.450', speed: '2,400', mass: '0.236' },
  { model: 'NATR25-PP', d: '25', D: '52', B: '25', C: '24', d2: '41.5', Crw: '15.20', C0rw: '27.00', Curw: '3.600', speed: '1,800', mass: '0.271' },
  { model: 'NATR30-PP', d: '30', D: '62', B: '29', C: '28', d2: '51', Crw: '23.30', C0rw: '39.50', Curw: '5.300', speed: '1,300', mass: '0.444' },
  { model: 'NATR35-PP', d: '35', D: '72', B: '29', C: '28', d2: '58', Crw: '24.80', C0rw: '45.00', Curw: '6.000', speed: '1,000', mass: '0.547' },
  { model: 'NATR40-PP', d: '40', D: '80', B: '32', C: '30', d2: '66', Crw: '32.50', C0rw: '59.00', Curw: '8.400', speed: '850', mass: '0.795' },
  { model: 'NATR50-PP', d: '50', D: '90', B: '32', C: '30', d2: '76', Crw: '31.00', C0rw: '60.00', Curw: '8.500', speed: '650', mass: '0.867' },
];

const natvRows: Record<string, string>[] = [
  { model: 'NATV5-PP', d: '5', D: '16', B: '12', C: '11', d2: '12.5', design: 'Full complement' },
  { model: 'NATV6-PP', d: '6', D: '19', B: '12', C: '11', d2: '15', design: 'Full complement' },
  { model: 'NATV8-PP', d: '8', D: '24', B: '15', C: '14', d2: '19', design: 'Full complement' },
  { model: 'NATV10-PP', d: '10', D: '30', B: '15', C: '14', d2: '23', design: 'Full complement' },
  { model: 'NATV12-PP', d: '12', D: '32', B: '15', C: '14', d2: '25', design: 'Full complement' },
  { model: 'NATV15-PP', d: '15', D: '35', B: '19', C: '18', d2: '27.6', design: 'Full complement' },
  { model: 'NATV17-PP', d: '17', D: '40', B: '21', C: '20', d2: '31.5', design: 'Full complement' },
  { model: 'NATV20-PP', d: '20', D: '47', B: '25', C: '24', d2: '36.5', design: 'Full complement' },
  { model: 'NATV25-PP', d: '25', D: '52', B: '25', C: '24', d2: '41.5', design: 'Full complement' },
  { model: 'NATV30-PP', d: '30', D: '62', B: '29', C: '28', d2: '51', design: 'Full complement' },
  { model: 'NATV35-PP', d: '35', D: '72', B: '29', C: '28', d2: '58', design: 'Full complement' },
  { model: 'NATV40-PP', d: '40', D: '80', B: '32', C: '30', d2: '66', design: 'Full complement' },
  { model: 'NATV50-PP', d: '50', D: '90', B: '32', C: '30', d2: '76', design: 'Full complement' },
];

const nntrRows: Record<string, string>[] = [
  { model: 'NNTR5512043', d: '55', D: '120', B: '43', C: '41', Crw: '170', C0rw: '260', mass: '2.7' },
  { model: 'NNTR5013065', d: '50', D: '130', B: '65', C: '63', Crw: '188', C0rw: '265', mass: '5.2' },
  { model: 'NNTR5514070', d: '55', D: '140', B: '70', C: '68', Crw: '218', C0rw: '315', mass: '6.4' },
];

const krvRows: Record<string, string>[] = [
  { model: 'KRV16-PP', D: '16', stud: '6', B: '28', C: '11', thread: 'M6x1' },
  { model: 'KRV19-PP', D: '19', stud: '8', B: '32', C: '11', thread: 'M8x1.25' },
  { model: 'KRV22-PP', D: '22', stud: '10', B: '36', C: '12', thread: 'M10x1' },
  { model: 'KRV26-PP', D: '26', stud: '10', B: '36', C: '12', thread: 'M10x1' },
  { model: 'KRV30-PP', D: '30', stud: '12', B: '40', C: '14', thread: 'M12x1.5' },
  { model: 'KRV32-PP', D: '32', stud: '12', B: '40', C: '14', thread: 'M12x1.5' },
  { model: 'KRV35-PP', D: '35', stud: '16', B: '52', C: '18', thread: 'M16x1.5' },
  { model: 'KRV40-PP', D: '40', stud: '18', B: '58', C: '20', thread: 'M18x1.5' },
  { model: 'KRV47-PP', D: '47', stud: '20', B: '66', C: '24', thread: 'M20x1.5' },
  { model: 'KRV52-PP', D: '52', stud: '20', B: '66', C: '24', thread: 'M20x1.5' },
  { model: 'KRV62-PP', D: '62', stud: '24', B: '80', C: '28', thread: 'M24x1.5' },
  { model: 'KRV72-PP', D: '72', stud: '24', B: '80', C: '28', thread: 'M24x1.5' },
  { model: 'KRV80-PP', D: '80', stud: '30', B: '100', C: '35', thread: 'M30x1.5' },
  { model: 'KRV90-PP', D: '90', stud: '30', B: '100', C: '35', thread: 'M30x1.5' },
];

const nukrRows: Record<string, string>[] = [
  { model: 'NUKR35', D: '35', stud: '16', B: '52', C: '18', thread: 'M16x1.5', Crw: '15.3', C0rw: '18.7', speed: '6,500', mass: '0.164' },
  { model: 'NUKR40', D: '40', stud: '18', B: '58', C: '20', thread: 'M18x1.5', Crw: '18.7', C0rw: '24.9', speed: '5,500', mass: '0.242' },
  { model: 'NUKR47', D: '47', stud: '20', B: '66', C: '24', thread: 'M20x1.5', Crw: '28.5', C0rw: '37.5', speed: '4,200', mass: '0.380' },
  { model: 'NUKR52', D: '52', stud: '20', B: '66', C: '24', thread: 'M20x1.5', Crw: '29.0', C0rw: '40.5', speed: '4,200', mass: '0.450' },
  { model: 'NUKR62', D: '62', stud: '24', B: '80', C: '28', thread: 'M24x1.5', Crw: '40.0', C0rw: '55.0', speed: '2,600', mass: '0.795' },
  { model: 'NUKR72', D: '72', stud: '24', B: '80', C: '28', thread: 'M24x1.5', Crw: '45.0', C0rw: '65.0', speed: '2,100', mass: '1.020' },
  { model: 'NUKR80', D: '80', stud: '30', B: '100', C: '35', thread: 'M30x1.5', Crw: '69.0', C0rw: '104.0', speed: '1,800', mass: '1.600' },
  { model: 'NUKR90', D: '90', stud: '30', B: '100', C: '35', thread: 'M30x1.5', Crw: '78.0', C0rw: '123.0', speed: '1,800', mass: '1.960' },
];

const sl1830Rows: Record<string, string>[] = [
  { model: 'SL18 3004', d: '20', D: '42', B: '16', Cr: '30.5', C0r: '26', Cur: '4.45', nG: '11,400', nB: '7,500', mass: '0.11' },
  { model: 'SL18 3005', d: '25', D: '47', B: '16', Cr: '35', C0r: '32', Cur: '5.5', nG: '9,500', nB: '6,200', mass: '0.12' },
];

const combined4058Rows: Record<string, string>[] = [
  { model: '4.058 / JD88.4-57', d: '45', D: '88.4', H: '57', B: '30', Fr: '22.4', Fa: '7', Cr: '68', C0r: '72', Ca: '23', C0a: '23', speed: '750', mass: '1.62' },
];

export const technicalReferencesByProduct: Record<string, TechnicalReferenceTable[]> = {
  'track-roller-bearings': [{
    title: 'NATR..-PP Track Roller Dimensions and Load Reference',
    series: 'NATR..-PP',
    description: 'A processed comparison table for initial model identification. Public competitor data was checked against current Schaeffler reference data; current primary-source values are shown where the publications differ.',
    columns: [
      { key: 'model', label: 'Model' }, { key: 'd', label: 'd mm' },
      { key: 'D', label: 'D mm' }, { key: 'B', label: 'B mm' },
      { key: 'C', label: 'C mm' }, { key: 'd2', label: 'd2 mm' },
      { key: 'Crw', label: 'Crw kN' }, { key: 'C0rw', label: 'C0rw kN' },
      { key: 'Curw', label: 'Curw kN' }, { key: 'speed', label: 'nDG rpm' },
      { key: 'mass', label: 'Mass kg' },
    ],
    rows: natrRows,
    downloadHref: '/downloads/natr-pp-track-roller-reference.pdf',
    sources: [
      {
        label: 'Schaeffler Aerospace Standard Products - NATR..-PP',
        url: 'https://www.schaeffler.com/remotemedien/media/_shared_media/08_media_library/01_publications/schaeffler_2/catalogue_1/downloads_6/ac1_de_en.pdf',
        note: 'Primary technical reference used for the displayed values.',
      },
      {
        label: 'Factory NATR..-PP track roller catalog',
        url: '/products/track-roller-bearings/',
        note: 'Factory production range used for model identification and RFQ review.',
      },
    ],
    verificationNote: 'Reference data only. Suffix, internal design, permissible outer-ring load, lubrication, track hardness and current manufacturer data must be verified before selection or quotation.',
  }, {
    title: 'NATV..-PP Full-Complement Track Roller Envelope Reference',
    series: 'NATV..-PP',
    description: 'NATV shares the NATR envelope for each bore class but uses a full complement of needle rollers for higher radial capacity and typically lower speed capability.',
    columns: [
      { key: 'model', label: 'Model' }, { key: 'd', label: 'd mm' },
      { key: 'D', label: 'D mm' }, { key: 'B', label: 'B mm' },
      { key: 'C', label: 'C mm' }, { key: 'd2', label: 'd2 mm' },
      { key: 'design', label: 'Design' },
    ],
    rows: natvRows,
    sources: [
      {
        label: 'Factory NATV..-PP model directory',
        url: '/products/track-roller-bearings/',
        note: 'Envelope pages for NATV5-PP through NATV50-PP used for identification and RFQ review.',
      },
      {
        label: 'Compare with NATR..-PP caged series',
        url: '/products/track-roller-bearings/natr30pp/',
        note: 'NATR uses a cage; NATV is full complement. Confirm speed, load and grease life for the application.',
      },
    ],
    verificationNote: 'Envelope dimensions support identification. Confirm load ratings, speed limits, seals and current factory drawing before selection or quotation.',
  }, {
    title: 'NNTR / RSU Support Roller Verified Sample Data',
    series: 'NNTR..-2ZL / RSU',
    description: 'Factory sample rows for initial identification of double-row support rollers. The table keeps the source designations and published units.',
    columns: [
      { key: 'model', label: 'Model' }, { key: 'd', label: 'd mm' }, { key: 'D', label: 'D mm' },
      { key: 'B', label: 'B mm' }, { key: 'C', label: 'C mm' }, { key: 'Crw', label: 'Crw kN' },
      { key: 'C0rw', label: 'C0rw kN' }, { key: 'mass', label: 'Mass kg' },
    ],
    rows: nntrRows,
    downloadHref: '/downloads/nntr-rsu-support-roller-reference.pdf',
    sources: [{ label: 'Factory NNTR / RSU series catalog', url: '/products/track-roller-bearings/', note: 'Factory catalog samples for the displayed rows.' }],
    verificationNote: 'Factory catalog data for identification. Confirm the complete -2ZL suffix, permissible outer-ring load, profile, lubrication arrangement and controlled drawing for the quoted batch.',
  }, {
    title: 'NUKR Stud Type Track Roller Dimensions and Loads',
    series: 'NUKR',
    description: 'Manufacturer-published NUKR range data covering primary dimensions, stud thread, effective radial load ratings, continuous grease speed and mass.',
    columns: [
      { key: 'model', label: 'Model' }, { key: 'D', label: 'D mm' }, { key: 'stud', label: 'Stud d1 mm' },
      { key: 'B', label: 'Overall B mm' }, { key: 'C', label: 'Ring C mm' }, { key: 'thread', label: 'Thread G' },
      { key: 'Crw', label: 'Crw kN' }, { key: 'C0rw', label: 'C0rw kN' },
      { key: 'speed', label: 'nDG rpm' }, { key: 'mass', label: 'Mass kg' },
    ],
    rows: nukrRows,
    downloadHref: '/downloads/nukr-stud-track-roller-reference.pdf',
    sources: [
      { label: 'Factory NUKR stud track roller catalog', url: '/products/track-roller-bearings/', note: 'Factory catalog values for the displayed NUKR range.' },
      { label: 'PTI NUKR technical sheet', url: 'https://pti.eu/pdf/trackrollers/NUKR.pdf', note: 'External industry reference reviewed during data comparison.' },
    ],
    verificationNote: 'Confirm seals, outer profile, hex, nut supply and current factory drawing before interchange. A/E suffixes may differ by execution.',
  }, {
    title: 'KRV..-PP Full-Complement Stud Track Roller Envelope',
    series: 'KRV..-PP',
    description: 'Factory envelope table for sealed KRV full-complement stud-type cam followers. Compare with NUKR when the outside diameter and thread class appear similar.',
    columns: [
      { key: 'model', label: 'Model' }, { key: 'D', label: 'D mm' }, { key: 'stud', label: 'Stud d1 mm' },
      { key: 'B', label: 'Overall B mm' }, { key: 'C', label: 'Ring C mm' }, { key: 'thread', label: 'Thread G' },
    ],
    rows: krvRows,
    sources: [
      { label: 'Factory KRV model directory', url: '/products/track-roller-bearings/', note: 'Envelope pages for KRV16-PP through KRV90-PP.' },
      { label: 'NUKR vs KRV selection guide', url: '/resources/nukr-vs-krv-cam-follower-selection/', note: 'Selection checks before treating NUKR and KRV as interchangeable.' },
    ],
    verificationNote: 'Envelope dimensions support identification. Confirm load ratings, speed limits, seals, outer profile and current factory drawing before quotation.',
  }, {
    title: 'NUTR25 Verified Product Reference',
    series: 'NUTR..-A',
    description: 'A current primary-source example showing the dimensional and performance fields required when expanding a NUTR quotation.',
    columns: [
      { key: 'model', label: 'Model' }, { key: 'd', label: 'd mm' }, { key: 'D', label: 'D mm' },
      { key: 'B', label: 'B mm' }, { key: 'C', label: 'C mm' }, { key: 'Crw', label: 'Crw kN' },
      { key: 'C0rw', label: 'C0rw kN' }, { key: 'speed', label: 'nDG rpm' }, { key: 'mass', label: 'Mass kg' },
    ],
    rows: [{ model: 'NUTR25', d: '25', D: '52', B: '25', C: '24', Crw: '29.0', C0rw: '41.5', speed: '4,200', mass: '0.279' }],
    sources: [
      { label: 'Schaeffler medias NUTR25', url: 'https://medias.schaeffler.us/en/product/rotary/rolling-and-plain-bearings/track-rollers%2C-yoke-type-%2C-stud-type-track-rollers/yoke-type-track-rollers/nutr25-a/p/399095', note: 'Primary product record used for all displayed values.' },
      { label: 'Factory NUTR model directory', url: '/products/track-roller-bearings/nutr25/', note: 'Model pages also cover NUTR30–40, NUTR45100 and NUTR50110 envelopes.' },
    ],
    verificationNote: 'This is one verified model example, not a complete NUTR catalogue. Confirm the optimized outer profile, labyrinth seals, inner-ring relubrication and current factory data for other sizes.',
  }],
  'full-complement-cylindrical-roller-bearings': [{
    title: 'SL18 30 Full Complement Bearing Verified Samples',
    series: 'SL18 30',
    description: 'Verified load samples for SL18 3004 / 3005. Additional SL18 2205–2206 and SL18 3006–3010 envelope pages are listed in the model directory for identification and RFQ.',
    columns: [
      { key: 'model', label: 'Model' }, { key: 'd', label: 'd mm' }, { key: 'D', label: 'D mm' },
      { key: 'B', label: 'B mm' }, { key: 'Cr', label: 'Cr kN' }, { key: 'C0r', label: 'C0r kN' },
      { key: 'Cur', label: 'Cur kN' }, { key: 'nG', label: 'Limit rpm' }, { key: 'nB', label: 'Reference rpm' },
      { key: 'mass', label: 'Mass kg' },
    ],
    rows: sl1830Rows,
    downloadHref: '/downloads/sl-full-complement-bearing-reference.pdf',
    sources: [
      { label: 'Factory SL18 series model directory', url: '/products/full-complement-cylindrical-roller-bearings/', note: 'Model pages for SL18 2205–2206 and SL18 3004–3010 plus sealed SL04 samples.' },
      { label: 'Schaeffler single-row full-complement design guidance', url: 'https://medias.schaeffler.us/en/single-row-full-complement-cylindrical-roller-bearings', note: 'Industry design reference for the SL1818, SL1822, SL1829 and SL1830 families.' },
    ],
    verificationNote: 'Confirm suffix, internal clearance, permissible axial displacement, minimum load, lubrication, speed basis and current controlled drawing before selection.',
  }],
  'combined-bearings': [{
    title: '4.058 / JD88.4-57 Combined Bearing Reference',
    series: '4.058 combined bearing',
    description: 'Factory combined radial and axial bearing example with dimensions, load ratings, speed and mass for model identification.',
    columns: [
      { key: 'model', label: 'Cross-reference' }, { key: 'd', label: 'd mm' }, { key: 'D', label: 'D mm' },
      { key: 'H', label: 'H mm' }, { key: 'B', label: 'B mm' }, { key: 'Fr', label: 'Fr kN' }, { key: 'Fa', label: 'Fa kN' },
      { key: 'Cr', label: 'Cr kN' }, { key: 'C0r', label: 'C0r kN' }, { key: 'Ca', label: 'Ca kN' },
      { key: 'C0a', label: 'C0a kN' }, { key: 'speed', label: 'nG rpm' }, { key: 'mass', label: 'Mass kg' },
    ],
    rows: combined4058Rows,
    downloadHref: '/downloads/combined-bearing-standard-series-reference.pdf',
    sources: [{ label: 'Factory 4.058 / JD88.4-57 product record', url: '/products/combined-bearings/winkel-4-058/', note: 'Factory catalog values and cross-references for this execution.' }],
    verificationNote: 'The source notes two possible outside diameters for the 4.058 / MR0025 family. The table is specifically the 88.4 mm execution; verify weld geometry, axial unit position and drawing before ordering.',
  }],
};
