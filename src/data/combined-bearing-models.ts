export type BearingSpec = { label: string; value: string };

export type CombinedBearingModel = {
  slug: string;
  model: string;
  family: 'Standard' | 'Precision' | 'Jumbo adjustable' | 'Radial precision';
  aliases: string[];
  image: string;
  description: string;
  application: string;
  specs: BearingSpec[];
  sourceUrl: string;
};

const img = (name: string) => `/images/combined-bearing-models/${name}.webp`;
const specs = (values: Record<string, string>): BearingSpec[] =>
  Object.entries(values).map(([label, value]) => ({ label, value }));

export const combinedBearingModels: CombinedBearingModel[] = [
  {
    slug: 'winkel-4-053', model: '4.053', family: 'Standard',
    aliases: ['JD52.5-33', 'TR050.0200', 'MR0706', '400-0053'], image: img('winkel-4-053'),
    description: 'Compact standard combined bearing for forklift masts, steel profiles and material-handling guide systems.',
    application: 'Forklift masts, stackers, telescopic columns and light-to-medium linear guide systems.',
    specs: specs({ d:'30 mm', D:'52.5 mm', H:'33 mm', h:'27 mm', B:'17 mm', S:'16 mm', A:'3 mm', r:'2 mm', T:'40 mm', FR:'5.23 kN', FA:'1.68 kN', Cr:'24 kN', C0r:'32 kN', Ca:'7 kN', C0a:'7 kN', nG:'800 rpm', Mass:'0.46 kg' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/forklift-combined-roller-bearing-winkel-4-053.html',
  },
  {
    slug: 'winkel-4-054', model: '4.054', family: 'Standard',
    aliases: ['MR0021', 'MR0430', 'JD62-37.5', 'JD62.5-37.5', '400-0054', 'TR060.0200'], image: img('winkel-4-054'),
    description: 'Standard fixed-axial combined bearing in the 62.5 mm outside-diameter class.',
    application: 'Forklift mast channels, warehouse equipment and steel-section guide assemblies.',
    specs: specs({ d:'30 mm', D:'62.5 mm', H:'37.5 mm', h:'30.5 mm', B:'20 mm', S:'20 mm', A:'2.5 mm', r:'3 mm', T:'42 mm', FR:'10.30 kN', FA:'3.20 kN', Cr:'31 kN', C0r:'35.5 kN', Ca:'11 kN', C0a:'11 kN', nG:'900 rpm', Mass:'0.53 kg' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/cnjdb-4-054-mr0021-jd62-37-5-combined-bearing.html',
  },
  {
    slug: 'winkel-4-055', model: '4.055', family: 'Standard',
    aliases: ['MR0022', 'JD70.1-44', '400-0055', 'TR070.0200'], image: img('winkel-4-055'),
    description: 'Standard combined roller bearing for radial and axial guidance in lift-truck mast profiles.',
    application: 'Forklift masts, pallet stackers, conveying frames and vertical lifting guides.',
    specs: specs({ d:'35 mm', D:'70.1 mm', H:'44 mm', h:'36 mm', B:'23 mm', S:'22 mm', A:'2.5 mm', r:'4 mm', T:'48 mm', FR:'12.4 kN', FA:'3.87 kN', Cr:'45.5 kN', C0r:'51 kN', Ca:'13 kN', C0a:'14 kN', nG:'900 rpm', Mass:'0.8 kg' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/cnjdb-4-055-mr0022-jd70-1-44-400-0055.html',
  },
  {
    slug: 'winkel-4-056', model: '4.056', family: 'Standard',
    aliases: ['MR0023', 'MR0003', 'JD77.7-48', '400-0056', 'TR080.0200'], image: img('winkel-4-056'),
    description: 'Standard combined bearing with a 77.7 mm outside diameter for medium-duty mast and guide systems.',
    application: 'Material-handling masts, lifting columns, AS/RS systems and steel guide profiles.',
    specs: specs({ d:'40 mm', D:'77.7 mm', H:'48 mm', h:'36.5 mm', B:'23 mm', S:'24 mm', A:'3 mm', r:'4 mm', T:'54 mm', FR:'12.9 kN', FA:'4 kN', Cr:'48 kN', C0r:'56.8 kN', Ca:'18 kN', C0a:'18 kN', nG:'800 rpm', Mass:'1 kg' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/cnjdb-combined-bearing-4-056-jd77-7-48-400.html',
  },
  {
    slug: 'winkel-4-058', model: '4.058', family: 'Standard',
    aliases: ['MR0025', 'MR0025G88.4', 'JD88.4-57', '400-0058', 'TR090.0200'], image: img('winkel-4-058'),
    description: 'Standard combined bearing in the 88.4 mm outside-diameter class with multiple common cross-references.',
    application: 'Forklift masts, heavy warehouse equipment, steel profiles and industrial lifting systems.',
    specs: specs({ d:'45 mm', D:'88.4 mm', H:'57 mm', h:'44 mm', B:'30 mm', S:'26 mm', A:'3.5 mm', r:'3 mm', T:'59 mm', FR:'22.4 kN', FA:'7 kN', Cr:'68 kN', C0r:'72 kN', Ca:'23 kN', C0a:'23 kN', nG:'750 rpm', Mass:'1.62 kg' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/cnjdb-4-058-mr0025g88-4-jd88-4-57-400-0058.html',
  },
  {
    slug: 'winkel-4-059', model: '4.059', family: 'Standard',
    aliases: ['JD101.2-46', '400-0059', 'HYV30201'], image: img('winkel-4-059'),
    description: 'Standard combined bearing with 101.2 mm outside diameter, available alone or with a galvanized mounting plate.',
    application: 'Forklift masts, welded plate assemblies, lifting equipment and logistics guide systems.',
    specs: specs({ d:'50 mm', D:'101.2 mm', H:'46 mm', h:'33 mm', B:'28 mm', S:'30 mm', A:'3 mm', r:'3 mm', T:'67 mm', FR:'22 kN', FA:'7 kN', Cr:'73 kN', C0r:'82 kN', Ca:'25 kN', C0a:'27 kN', nG:'700 rpm', Mass:'1.74 kg' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/winkel-standard-combined-bearings-4-059.html',
  },
  {
    slug: 'winkel-4-061', model: '4.061', family: 'Standard',
    aliases: ['JD107.7-69', 'MR0027', '400-0061'], image: img('winkel-4-061'),
    description: 'Fixed-axial standard combined bearing for higher-load steel-section and lifting applications.',
    application: 'Heavy mast channels, lifting systems, handling lines and industrial guide profiles.',
    specs: specs({ d:'60 mm', D:'107.7 mm', H:'69 mm', h:'55 mm', B:'31 mm', S:'34 mm', A:'3 mm', r:'5 mm', T:'71 mm', C:'81 kN', C0:'95 kN', Ca:'31 kN', C0a:'36 kN' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/cnjdb-standard-combined-bearings-4-061-jd107.html',
  },
  {
    slug: 'winkel-4-062', model: '4.062', family: 'Standard',
    aliases: ['JD123-72.3', 'MR0029', '400-0062'], image: img('winkel-4-062'),
    description: 'Large standard combined bearing for logistics equipment and heavy lifting guide systems.',
    application: 'Logistics systems, lifting units, industrial masts and heavy steel-section guides.',
    specs: specs({ d:'60 mm', D:'123 mm', H:'72.3 mm', h:'56 mm', B:'37 mm', S:'40 mm', A:'3 mm', r:'5 mm', T:'80 mm', C:'135 kN', C0:'242 kN', Ca:'47 kN', C0a:'90 kN' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/combined-bearings-4-062-jd123-72-3-mr0029-are.html',
  },
  {
    slug: 'winkel-4-063', model: '4.063 / 4.0063', family: 'Standard',
    aliases: ['TR010', 'MR0010', 'MR010', 'MR0030', 'JD149-78.5', '400-0063', 'TR150.0200'], image: img('winkel-4-063'),
    description: 'Large combined mast guide bearing with a 149 mm outside diameter for demanding material-handling systems.',
    application: 'Heavy forklift trucks, cranes, hoists, palletizers, AS/RS systems and vertical lift units.',
    specs: specs({ d:'60 mm', D:'149 mm', H:'78.5 mm', h:'58.5 mm', B:'45 mm', S:'50 mm', A:'5.5 mm', r:'3 mm', T:'103 / 108 mm', Material:'20CrMnTi' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/4-0063-tr010-mr0010-high-quality-combined.html',
  },
  {
    slug: 'winkel-pr4-054', model: 'PR4.054', family: 'Precision',
    aliases: ['MR001M', 'TR001M', 'DR400-0054', 'JD64.8-37.5'], image: img('winkel-pr4-054'),
    description: 'Fixed-axial precision combined roller bearing with a larger radial outer diameter than the standard 4.054 design.',
    application: 'Precision mast guides, steel sections and welded mounting-plate assemblies.',
    specs: specs({ d:'30 mm', D:'64.8 mm', H:'37.5 mm', h:'30.5 mm', B:'20 mm', S:'20 mm', A:'2.5 mm', r:'3 mm', T:'42 mm', Material:'20CrMnTi' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/pr4-054-mr001m-tr001m-fixed-axial-precision.html',
  },
  {
    slug: 'winkel-pr4-055', model: 'PR4.055', family: 'Precision',
    aliases: ['MR002M', 'TR002M', 'DR400-0055', 'JD73.8-44'], image: img('winkel-pr4-055'),
    description: 'Precision fixed-axial combined bearing commonly supplied alone or welded to an application-specific plate.',
    application: 'Precision lift guides, mast channels and AP-series plate-mounted bearing assemblies.',
    specs: specs({ d:'35 mm', D:'73.8 mm', H:'44 mm', h:'36 mm', B:'23 mm', S:'22 mm', A:'2.5 mm', r:'4 mm', T:'48 mm', Material:'20CrMnTi' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/pr4-055-mr002m-tr002m-combined-bearings.html',
  },
  {
    slug: 'winkel-pr4-056', model: 'PR4.056', family: 'Precision',
    aliases: ['DR400-0056', 'JD81.8-48', 'AP2', 'AP2-LUB', 'AP2-Q'], image: img('winkel-pr4-056'),
    description: 'Precision combined roller bearing compatible with AP2, AP2-LUB and AP2-Q mounting plate configurations.',
    application: 'Plate-mounted lift guides, steel sections and precision material-handling assemblies.',
    specs: specs({ d:'40 mm', D:'81.8 mm', H:'48 mm', h:'36.5 mm', B:'23 mm', S:'24 mm', A:'3 mm', r:'4 mm', T:'54 mm', Material:'20CrMnTi' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/pr4-056-combined-roller-bearing-welded-on-ap2.html',
  },
  {
    slug: 'winkel-4-090', model: '4.090', family: 'Jumbo adjustable',
    aliases: ['400-0090', 'JD190-84.5-KP'], image: img('winkel-4-090'),
    description: 'Jumbo eccentric-adjustable combined bearing for heavy-duty linear motion and large steel-section guides.',
    application: 'Heavy lifting equipment, steel plants, cranes and large material-handling guide systems.',
    specs: specs({ d:'100 mm', D:'190 mm', H:'84.5 mm', Hmax:'87.5 mm', h:'64.5–67.5 mm', B:'48 mm', S:'60 mm', T:'124 mm', A:'6.5–9.5 mm', r:'4 mm' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/4-090-jumbo-winkel-bearing-axial-bearing.html',
  },
  {
    slug: 'winkel-4-091', model: '4.091', family: 'Jumbo adjustable',
    aliases: ['JD220-94.5-KPD', '400-0091', 'MR0013', 'AP91-Q'], image: img('winkel-4-091'),
    description: 'Jumbo adjustable combined bearing with an eccentric axial roller for high radial and axial loads.',
    application: 'Heavy mast systems, cranes, steel equipment and large linear guide structures.',
    specs: specs({ d:'110 mm', D:'220 mm', H:'94.5 mm', Hmax:'97.5 mm', h:'74.5–77.5 mm', B:'58 mm', S:'75 mm', T:'146 mm', A:'6.5–9.5 mm', r:'5 mm', FR:'84 kN', FA:'28 kN', Cr:'326 kN', C0r:'681 kN', Ca:'138 kN', C0a:'257 kN', Mass:'17.3 kg' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/4-091-eccentric-pin-positive-and-multilateral.html',
  },
  {
    slug: 'winkel-4-092', model: '4.092', family: 'Jumbo adjustable',
    aliases: ['JD250-102-KPD', '400-0092', 'MR0014', 'AP92-Q'], image: img('winkel-4-092'),
    description: 'Large jumbo adjustable combined bearing with a 250 mm radial roller outside diameter.',
    application: 'Heavy industrial masts, steel mill handling equipment, cranes and large guide systems.',
    specs: specs({ d:'120 mm', D:'250 mm', H:'102 mm', Hmax:'105 mm', h:'77–80 mm', B:'60 mm', S:'75 mm', T:'168 mm', A:'7–10 mm', r:'5 mm', FR:'101.5 kN', FA:'33.9 kN', Cr:'369 kN', C0r:'748 kN', C0a:'257 kN', Mass:'23.9 kg' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/4-092-eccentric-pin-positive-and-multilateral.html',
  },
  {
    slug: 'winkel-4-093', model: '4.093', family: 'Jumbo adjustable',
    aliases: ['MR0015A', 'JD280-119.5-KP', '400-0093'], image: img('winkel-4-093'),
    description: 'Jumbo combined bearing for very high-load linear guide systems with adjustable axial support.',
    application: 'Steel plants, heavy cranes, large lifting columns and severe-duty handling machinery.',
    specs: specs({ d:'150 mm', D:'280 mm', H:'119.5 mm', Hmax:'123.5 mm', h:'89.5–93.5 mm', B:'72 mm', S:'90 mm', T:'188 mm', A:'7.5–11.5 mm', r:'5 mm', FR:'139.4 kN', FA:'46.5 kN', Cr:'489 kN', C0r:'1066 kN', Ca:'182 kN', C0a:'488 kN', Mass:'36 kg' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/4-093-mr0015a-jumbo-combined-bearings-are.html',
  },
  {
    slug: 'winkel-2-063', model: '2.063', family: 'Radial precision',
    aliases: ['TR120', 'MR0120'], image: img('winkel-2-063'),
    description: 'Precision radial combined bearing with a stud for steel-section guide applications.',
    application: 'Steel profiles, mast guide systems and radial-load-dominant linear guidance.',
    specs: specs({ D:'149 mm', H:'74 mm', Material:'20CrMnTi', Design:'Radial combined bearing with stud' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/stud-for-steel-sections/2-063-precision-radial-combined-bearings.html',
  },
  {
    slug: 'winkel-2-0363', model: '2.0363', family: 'Radial precision',
    aliases: ['TR111'], image: img('winkel-2-0363'),
    description: 'Compact precision radial combined bearing with stud for steel-section guidance.',
    application: 'Compact guide profiles, mast assemblies and radial-load linear systems.',
    specs: specs({ D:'62 mm', H:'62.5 mm', Material:'20CrMnTi', Design:'Radial combined bearing with stud' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/stud-for-steel-sections/tr111-2-0363-precision-radial-combined.html',
  },
  {
    slug: 'winkel-4-057', model: '4.057', family: 'Standard',
    aliases: ['JD77.7-40', '400-0057'], image: '/images/stage3-bearing-models/winkel-4-057.webp',
    description: 'Low-profile standard combined bearing with a 77.7 mm radial roller outside diameter.',
    application: 'Forklift masts, compact lift guides and steel-section linear systems.',
    specs: specs({ d:'40 mm', D:'77.7 mm', H:'40 mm', Design:'Fixed axial combined bearing', Material:'20CrMnTi' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/cnjdb-combined-bearing-4-057-jd77-7-40-400.html',
  },
  {
    slug: 'winkel-4-060', model: '4.060', family: 'Standard',
    aliases: ['JD107.7-53', '400-0060'], image: '/images/stage3-bearing-models/winkel-4-060.webp',
    description: 'Standard combined bearing with a 107.7 mm outside diameter for medium-to-heavy linear guidance.',
    application: 'Industrial masts, lifting systems, warehouse equipment and guide profiles.',
    specs: specs({ d:'60 mm', D:'107.7 mm', H:'53 mm', Design:'Fixed axial combined bearing', Material:'20CrMnTi' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/cnjdb-combined-bearings-4-060-jd107-7-53-are.html',
  },
  {
    slug: 'kres123-adjustable', model: 'KRES123', family: 'Jumbo adjustable',
    aliases: ['KRES 123', 'Eccentric Pin Combined Bearing'], image: '/images/stage3-bearing-models/kres123.webp',
    description: 'Adjustable combined roller bearing with an eccentric pin for external axial setting.',
    application: 'Steel-section guides, heavy handling equipment and adjustable mast systems.',
    specs: specs({ D:'123 mm class', Adjustment:'Eccentric pin', LoadDirection:'Combined radial and axial', Material:'Bearing steel / case-hardened steel' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/adjustable-from-outside-for-steel-sections/kres123-adjustable-combined-roller-bearings.html',
  },
  {
    slug: 'winkel-4-085', model: '4.085', family: 'Jumbo adjustable',
    aliases: ['JD180-95.7-KP', 'PR4.085'], image: '/images/stage3-bearing-models/winkel-4-085.webp',
    description: 'Axial-adjustable jumbo combined bearing for heavy-duty linear motion systems.',
    application: 'Heavy lifting equipment, steel plants and large material-handling guides.',
    specs: specs({ D:'180 mm class', H:'95.7 mm class', Adjustment:'Axial adjustable', Design:'Jumbo combined bearing' }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/axial-adjustable-jumbo-combined-bearings-4.html',
  },
  ...[
    ['winkel-4-064', '4.064', ['JD160-88', '400-0064'], 'Large standard combined bearing for high-load mast and steel-section guidance.'],
    ['winkel-4-089', '4.089', ['JD180-75', '400-0089'], 'Heavy-duty combined bearing reference for large linear guide and lifting systems.'],
    ['winkel-4-454', '4.454', ['KB4.054', '400-0454'], 'Eccentric-adjustable counterpart to the 4.054 size class.'],
    ['winkel-4-455', '4.455', ['KB4.055', '400-0455'], 'Eccentric-adjustable combined bearing for compact mast channels.'],
    ['winkel-4-456', '4.456', ['KB4.056', '400-0456'], 'Adjustable combined bearing for medium-duty guide profiles.'],
    ['winkel-4-457', '4.457', ['KB4.057', '400-0457'], 'Low-profile eccentric combined bearing for constrained guide assemblies.'],
    ['winkel-4-458', '4.458', ['KB4.058', '400-0458'], 'Adjustable combined bearing in the 88 mm radial roller class.'],
    ['winkel-4-459', '4.459', ['KB4.059', '400-0459'], 'Eccentric combined bearing for plate-mounted and mast guide systems.'],
    ['winkel-4-460', '4.460', ['KB4.060', '400-0460'], 'Adjustable heavy guide bearing in the 107 mm outside-diameter class.'],
    ['winkel-4-461', '4.461', ['KB4.061', '400-0461'], 'High-load eccentric-adjustable bearing for industrial lifting guides.'],
    ['winkel-4-462', '4.462', ['KB4.062', '400-0462'], 'Large adjustable combined bearing for logistics and steel equipment.'],
    ['winkel-4-463', '4.463', ['KB4.063', '400-0463'], 'Severe-duty adjustable combined bearing for large steel-section systems.'],
  ].map(([slug, model, aliases, description]) => ({
    slug: slug as string,
    model: model as string,
    family: (model === '4.064' || model === '4.089' ? 'Standard' : 'Jumbo adjustable') as CombinedBearingModel['family'],
    aliases: aliases as string[],
    image: '/images/industrial-bearing-product-range.webp',
    description: description as string,
    application: 'Forklift masts, stacker cranes, steel handling equipment and heavy linear guide systems.',
    specs: specs({
      Design: model === '4.064' || model === '4.089' ? 'Fixed axial combined bearing' : 'Eccentric-adjustable axial roller',
      Selection: 'Confirm current controlled drawing before ordering',
      Material: 'Case-hardened bearing steel; execution to be confirmed',
    }),
    sourceUrl: 'https://www.jadebearings.com/combined-bearing/',
  })),
];

export const combinedBearingModelBySlug = Object.fromEntries(
  combinedBearingModels.map((item) => [item.slug, item]),
);
