export type SpecialCombinedSeries = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  image: string;
  drawings: { src: string; alt: string }[];
  intro: string;
  designNotes: string[];
  columns: { key: string; label: string }[];
  rows: Record<string, string>[];
  source: { label: string; url: string };
  downloadHref: string;
};

const loadColumns = [
  {key:'model',label:'Model'},{key:'d',label:'d mm'},{key:'D',label:'D mm'},{key:'C',label:'C mm'},
  {key:'H',label:'H / range mm'},{key:'Cr',label:'Cr kN'},{key:'C0r',label:'C0r kN'},
  {key:'Ca',label:'Ca kN'},{key:'C0a',label:'C0a kN'},{key:'speed',label:'Speed rpm'},{key:'mass',label:'Mass kg'},
];

const screwRows = [
  ['MR.961','30','62','20','37.5-39.5','39','65','-','-','900','0.52'],['MR.962','35','70.1','23','38.5-40.5','56','93','-','-','900','0.60'],
  ['MR.963','40','77.7','23','40.7-42.7','58','101.5','-','-','800','0.82'],['MR.964','45','88.9','30','48.5-51','84','133','15','22','700','1.43'],
  ['MR.965','50','101.9','28','46-48.5','91','153','18','22','700','1.70'],['MR.966','55','107.7','31','53.5-56.5','94','162','31','40','650','2.45'],
  ['MR.967','60','123','33','61.5-64.5','132','242','31','40','500','3.50'],['MR.968','60','149','43','75.5-79','179','353','68','71','400','6.50'],
].map(([model,d,D,C,H,Cr,C0r,Ca,C0a,speed,mass])=>({model,d,D,C,H,Cr,C0r,Ca,C0a,speed,mass}));

const highLoadRows = [
  ['MR.146','30','62','20','43','39','65','10','14','900','0.60'],['MR.147','35','70.1','23','48','56','93','10','14','900','0.90'],
  ['MR.148','40','77.7','23','50.5','58','101.5','14','22','800','1.05'],['MR.149','40','78.3','23','45','58','101.5','14','22','800','0.95'],
  ['MR.150','45','88.9','30','61','84','133','14','22','700','1.70'],['MR.151','50','101.9','28','50.5','91','153','18','22','700','1.85'],
  ['MR.142 / 4.0784','60','107.7','31','69','94','162','39','57','650','2.40'],['MR.152 / 4.078','55','108.55','31','58.5','94','162','39','57','650','2.80'],
  ['MR.153','60','123','37','75.8','132','242','39','57','500','4.10'],['MR.154','60','149','43','89','179','353','83','131','400','6.80'],
].map(([model,d,D,C,H,Cr,C0r,Ca,C0a,speed,mass])=>({model,d,D,C,H,Cr,C0r,Ca,C0a,speed,mass}));

const familyRows=(prefix:string,from:number,to:number,note:string)=>Array.from({length:to-from+1},(_,i)=>({model:`${prefix}${from+i}`,execution:note,verification:'Confirm base model dimensions and current controlled drawing'}));

export const specialCombinedSeries: SpecialCombinedSeries[] = [
  {
    slug:'screw-adjustable-mr96-series',title:'MR.961-MR.968 Screw-Adjustable Combined Bearings',seoTitle:'MR.961-MR.968 Screw-Adjustable Combined Bearings',
    description:'Complete MR.961 through MR.968 screw-adjustable combined bearing dimensions, radial and axial load ratings, speed, mass, materials and drawings.',
    image:'/images/special-combined-series/screw-adjustable-main.jpg',drawings:[{src:'/images/special-combined-series/screw-adjustable-drawing-1.png',alt:'MR.961-MR.968 screw adjustable combined bearing technical drawing'},{src:'/images/special-combined-series/screw-adjustable-drawing-2.png',alt:'Screw adjustable combined bearing section and dimensions'}],
    intro:'The axial support is set by a UNI 5929 / DIN 916 screw. The series covers 62 to 149 mm radial roller outside diameters.',
    designNotes:['Outer rings: UNI 16NiCr4 case-hardened and tempered, 62 ±2 HRC','Inner rings and rolling elements: UNI 100Cr6 hardened and tempered','Main stud: weldable Fe52C','Tolerance and clearance basis: DIN 620, class P0; load ratings: ISO 76 and ISO 281'],
    columns:loadColumns,rows:screwRows,source:{label:'Authorized Jade MR.96 technical sheet',url:'https://www.jadebearings.com/combined-bearing/adjustable-by-screw-for-steel-sections/combined-bearings-adjustable-by-screw-for-steel.html'},downloadHref:'/downloads/mr96-screw-adjustable-combined-bearings.pdf',
  },
  {
    slug:'high-load-axial-support-series',title:'MR.142 / MR.146-MR.154 High-Load Axial-Support Bearings',seoTitle:'High-Load Axial-Support Combined Bearings | MR.142-MR.154',
    description:'MR.142, MR.146 through MR.154 high-load combined bearing dimensions, loads, speed, mass, material and shim adjustment data.',
    image:'/images/special-combined-series/high-load-main.jpg',drawings:[{src:'/images/special-combined-series/high-load-drawing.png',alt:'High-load combined bearing with axial support technical drawing'}],
    intro:'A separate hardened axial support carries side load. Adapter washers of 0.3, 0.5 and 1.0 mm set the axial position.',
    designNotes:['Axial support: UNI 40NiCrMo4 hardened and tempered','Outer ring: UNI 16NiCr4 case-hardened; rolling elements: UNI 100Cr6','MR.142 cross-references 4.0784 / JD107.7-69-KZ','MR.152 cross-references 4.078 / JD108.55-58.5-KZ / 400-0078'],
    columns:loadColumns,rows:highLoadRows,source:{label:'Authorized Jade high-load technical sheet',url:'https://www.jadebearings.com/combined-bearing/high-lloads/combined-bearings-for-high-loads.html'},downloadHref:'/downloads/high-load-axial-support-combined-bearings.pdf',
  },
  {
    slug:'high-temperature-4-series',title:'4.054HT-4.063HT High-Temperature Combined Bearings',seoTitle:'4.054HT-4.063HT High-Temperature Combined Bearings',
    description:'High-temperature combined bearing replacement range covering 4.054HT through 4.063HT with base model and profile matching guidance.',
    image:'/images/combined-bearing-models/winkel-4-054.webp',drawings:[],intro:'HT executions retain the base dimensional family but require temperature-specific grease, seals and material confirmation.',
    designNotes:['Published family range: 4.054HT-4.063HT','Environmental temperature capability must be confirmed for the quoted execution','Do not approve an HT replacement from base dimensions alone','Confirm grease, seals, relubrication interval and actual bearing temperature'],
    columns:[{key:'model',label:'HT model'},{key:'execution',label:'Execution'},{key:'verification',label:'Required verification'}],rows:Array.from({length:10},(_,i)=>({model:`4.${String(54+i).padStart(3,'0')}HT`,execution:'High-temperature execution of corresponding base family',verification:'Confirm grease, seals, temperature rating and current controlled drawing'})),
    source:{label:'Authorized Jade combined bearing range',url:'https://www.jadebearings.com/combined-bearing/'},downloadHref:'/downloads/high-temperature-combined-bearing-series.pdf',
  },
  {
    slug:'precision-adjustable-pr4-series',title:'PR4.454-PR4.463 Precision Adjustable Combined Bearings',seoTitle:'PR4.454-PR4.463 Precision Adjustable Combined Bearings',
    description:'Precision eccentric-adjustable combined bearing replacement range from PR4.454 through PR4.463 with cross-reference and drawing review guidance.',
    image:'/images/combined-bearing-models/winkel-pr4-056.webp',drawings:[],intro:'The PR4.45x series combines the precision radial roller class with eccentric axial adjustment.',
    designNotes:['Published family range: PR4.454-PR4.463','Precision outer diameter differs from the standard 4.45x execution','Confirm eccentric adjustment range and axial roller position','Plate-mounted versions require the complete AP drawing'],
    columns:[{key:'model',label:'PR model'},{key:'execution',label:'Execution'},{key:'verification',label:'Required verification'}],rows:familyRows('PR4.',454,463,'Precision eccentric-adjustable execution'),
    source:{label:'Authorized Jade combined bearing range',url:'https://www.jadebearings.com/combined-bearing/'},downloadHref:'/downloads/pr4-precision-adjustable-series.pdf',
  },
  {
    slug:'shim-adjustable-4-078-series',title:'4.078 / 4.0784 Shim-Adjustable Combined Bearings',seoTitle:'4.078 and 4.0784 Shim-Adjustable Combined Bearings',
    description:'4.078, 4.0784, MR.152 and MR.142 combined bearing dimensions, load ratings, speed, mass and shim-adjustment references.',
    image:'/images/special-combined-series/high-load-main.jpg',drawings:[{src:'/images/special-combined-series/high-load-drawing.png',alt:'4.078 and 4.0784 shim-adjustable combined bearing drawing'}],intro:'The axial position is adjusted with adapter washers between the main stud and axial support.',
    designNotes:['4.078 cross references MR.152 / JD108.55-58.5-KZ / 400-0078','4.0784 cross references MR.142 / JD107.7-69-KZ','Available washer thicknesses: 0.3, 0.5 and 1.0 mm','Confirm tapered or cylindrical outer profile'],
    columns:loadColumns,rows:highLoadRows.filter(row=>row.model.includes('MR.142')||row.model.includes('MR.152')),
    source:{label:'Authorized Jade shim-adjustable data',url:'https://www.jadebearings.com/combined-bearing/axial-support/'},downloadHref:'/downloads/4-078-shim-adjustable-combined-bearings.pdf',
  },
];
