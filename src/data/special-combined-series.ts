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
  lastVerified: string;
};

const columns = (items: string[]) => items.map((item) => {
  const [key, label] = item.split('|');
  return { key, label: label || key };
});

const screwColumns = columns([
  'model|Model','d|d mm','D|D mm','C|C mm','Hmin|H min mm','Hmax|H max mm','H1min|H1 min mm','H1max|H1 max mm',
  'H2|H2 mm','D1|D1 mm','C1|C1 mm','D2|D2 mm','d1|d1 mm','angle|Angle','r|r mm','R|R mm','R1|R1 mm',
  'V|V mm','V1|V1 thread','screw|Adjusting screw','Cr|Cr kN','C0r|C0r kN','Ca|Ca kN','C0a|C0a kN','speed|Speed rpm','mass|Mass kg',
]);

const highLoadColumns = columns([
  'model|Model','support|Axial support','d|d mm','D|D mm','C|C mm','H|H mm','H1|H1 mm','H2|H2 mm','D1|D1 mm',
  'C1|C1 mm','d1|d1 mm','S|S mm','angle|Angle','r|r mm','R|R mm','R1|R1 mm','D2|D2 mm','d2|d2 mm','H3|H3 mm',
  'Cr|Cr kN','C0r|C0r kN','Ca|Ca kN','C0a|C0a kN','speed|Speed rpm','mass|Mass kg',
]);

const heavyLoadColumns = columns([
  'model|Model','d|d mm','D|D mm','B|B mm','H|H mm','H1|H1 mm','C1|C1 mm','d1|d1 mm','S|S mm','r|r mm',
  'Cr|Cr kN','C0r|C0r kN','Ca|Ca kN','C0a|C0a kN','speed|Speed','mass|Mass',
]);

const screwRows = [
  ['MR.961','30','62','20','37.5','39.5','30.5','32.5','7','50','—','Ø26','42','20°','3','500','500','2.5','—','M10','39','65','—','—','900','0.52'],
  ['MR.962','35','70.1','23','38.5','40.5','31.5','33.5','7','57','—','Ø30','48','20°','3','500','500','3','M6×1','M10','56','93','—','—','900','0.60'],
  ['MR.963','40','77.7','23','40.7','42.7','31.7','33.7','9','61','—','Ø30','54','20°','3','700','700','4','M6×1','M10','58','101.5','—','—','800','0.82'],
  ['MR.964','45','88.9','30','48.5','51','36.5','39','12','68','21','Ø33','59','20°','4','700','700','4','M6×1','M10','84','133','15','22','700','1.43'],
  ['MR.965','50','101.9','28','46','48.5','33','35.5','13','77','21','Ø33','67','20°','4','850','700','2.5','M6×1','M10','91','153','18','22','700','1.70'],
  ['MR.966','55','107.7','31','53.5','56.5','41.5','44.5','12','82','30','Ø42','71','20°','4','1000','700','6','M6×1','M16','94','162','31','40','650','2.45'],
  ['MR.967','60','123','33','61.5','64.5','49.5','52','12','94','30','Ø42','78','15°','4','1000','1000','6.5','M6×1','M16','132','242','31','40','500','3.50'],
  ['MR.968','60','149','43','75.5','79','58.5','62','17','116','45','Ø63','103','15°','4','1000','1000','6.8','M6×1','M10','179','353','68','71','400','6.50'],
].map((values)=>Object.fromEntries(screwColumns.map((column,index)=>[column.key,values[index]])));

const highLoadRows = [
  ['MR.146','MR.146G2','30','62','20','43','33','10','50','16','42','5.5','20°','3','500','500','40','25','22','39','65','10','14','900','0.60'],
  ['MR.147','MR.146G2','35','70.1','23','48','40','8','57','16','48','6.5','20°','4','500','500','40','25','22','56','93','10','14','900','0.90'],
  ['MR.148','MR.148G2','40','77.7','23','50.5','39.5','11','61','21','54','7','20°','4','700','700','52','33','28','58','101.5','14','22','800','1.05'],
  ['MR.149','MR.148G2','40','78.3','23','45','34','11','61','21','54','7','20°','4','850','700','52','33','28','58','101.5','14','22','800','0.95'],
  ['MR.150','MR.148G2','45','88.9','30','61','48','13','69.5','21','59','7','20°','3','850','700','52','33','28','84','133','14','22','700','1.70'],
  ['MR.151','MR.151G2','50','101.9','28','50.5','37.5','13','77','21','67','7','20°','3','850','700','52','33','28','91','153','18','22','700','1.85'],
  ['MR.142 / 4.0784','MR.142G2','60','107.7','31','69','55','14','82','33','71','8','20°','4','1000','700','74','48','38','94','162','39','57','650','2.40'],
  ['MR.152 / 4.078','MR.142G2','55','108.55','31','58.5','44.5','14','82','33','71','8','20°','4','1000','700','74','48','38','94','162','39','57','650','2.80'],
  ['MR.153','MR.142G2','60','123','37','75.8','59.5','16.3','92','33','78','8','20°','4','1000','1000','74','48','38','132','242','39','57','500','4.10'],
  ['MR.154','MR.154G2','60','149','43','89','69','20','116','50','103','15','15°','4','1000','1000','105','72','>55','179','353','83','131','400','6.80'],
].map((values)=>Object.fromEntries(highLoadColumns.map((column,index)=>[column.key,values[index]])));

const heavyLoadRows = [
  ['MR4180','70','170','51','109.7','84.7','49.7','98','11.2','4','195','360','85','130','Not published','Not published'],
  ['MR4181','80','185','47','100','75','49.7','115','15','3','235','440','85','130','Not published','Not published'],
  ['MR4182','110','220','60','115','90','70','150','13.5','5','365','720','105','230','Not published','Not published'],
  ['MR4183','130','260','60','120','95','80','184','18.5','5','475','1000','165','280','Not published','Not published'],
].map((values)=>Object.fromEntries(heavyLoadColumns.map((column,index)=>[column.key,values[index]])));

const familyRows=(prefix:string,from:number,to:number,note:string)=>Array.from({length:to-from+1},(_,i)=>({model:`${prefix}${from+i}`,execution:note,verification:'Confirm base model dimensions and current controlled drawing'}));

export const specialCombinedSeries: SpecialCombinedSeries[] = [
  {
    slug:'screw-adjustable-mr96-series',title:'MR.961-MR.968 Screw-Adjustable Combined Bearings',seoTitle:'MR.961-MR.968 Screw-Adjustable Combined Bearings',
    description:'Complete MR.961 through MR.968 screw-adjustable combined bearing dimensions, radial and axial load ratings, speed, mass, materials and drawings.',
    image:'/images/special-combined-series/screw-adjustable-main.jpg',drawings:[{src:'/images/special-combined-series/screw-adjustable-drawing-1.png',alt:'MR.961-MR.968 screw adjustable combined bearing technical drawing'},{src:'/images/special-combined-series/screw-adjustable-drawing-2.png',alt:'Screw adjustable combined bearing section and dimensions'}],
    intro:'The axial support is set by a UNI 5929 / DIN 916 screw. The series covers 62 to 149 mm radial roller outside diameters.',
    designNotes:['Outer rings: UNI 16NiCr4 case-hardened and tempered, 62 ±2 HRC','Inner rings and rolling elements: UNI 100Cr6 hardened and tempered','Main stud: weldable Fe52C','Tolerance and clearance basis: DIN 620, class P0; load ratings: ISO 76 and ISO 281'],
    columns:screwColumns,rows:screwRows,source:{label:'Authorized Jade MR.96 technical sheet',url:'https://www.jadebearings.com/combined-bearing/adjustable-by-screw-for-steel-sections/combined-bearings-adjustable-by-screw-for-steel.html'},downloadHref:'/downloads/mr96-screw-adjustable-combined-bearings.pdf',lastVerified:'2026-07-18',
  },
  {
    slug:'high-load-axial-support-series',title:'MR.142 / MR.146-MR.154 High-Load Axial-Support Bearings',seoTitle:'High-Load Axial-Support Combined Bearings | MR.142-MR.154',
    description:'MR.142, MR.146 through MR.154 high-load combined bearing dimensions, loads, speed, mass, material and shim adjustment data.',
    image:'/images/special-combined-series/high-load-main.jpg',drawings:[{src:'/images/special-combined-series/high-load-drawing.png',alt:'High-load combined bearing with axial support technical drawing'}],
    intro:'A separate hardened axial support carries side load. Adapter washers of 0.3, 0.5 and 1.0 mm set the axial position.',
    designNotes:['Axial support: UNI 40NiCrMo4 hardened and tempered','Outer ring: UNI 16NiCr4 case-hardened; rolling elements: UNI 100Cr6','MR.142 cross-references 4.0784 / JD107.7-69-KZ','MR.152 cross-references 4.078 / JD108.55-58.5-KZ / 400-0078'],
    columns:highLoadColumns,rows:highLoadRows,source:{label:'Authorized Jade high-load technical sheet',url:'https://www.jadebearings.com/combined-bearing/high-lloads/combined-bearings-for-high-loads.html'},downloadHref:'/downloads/high-load-axial-support-combined-bearings.pdf',lastVerified:'2026-07-18',
  },
  {
    slug:'mr4180-mr4183-heavy-load-series',title:'MR4180-MR4183 Heavy-Load Adjustable Combined Bearings',seoTitle:'MR4180-MR4183 Heavy-Load Adjustable Combined Bearings',
    description:'MR4180, MR4181, MR4182 and MR4183 heavy-load combined bearing dimensions, radial and axial load ratings, materials, drawing and RFQ data.',
    image:'/images/special-combined-series/mr418-heavy-load-main.jpg',drawings:[{src:'/images/special-combined-series/mr418-heavy-load-drawing.png',alt:'MR4180 to MR4183 heavy-load adjustable combined bearing technical drawing'}],
    intro:'These large combined bearings are adjusted externally for heavy steel-section guidance. Published outside diameters cover 170 to 260 mm in the selected MR4180-MR4183 range.',
    designNotes:['Outer ring: UNI 16CrNi4 case-hardened and tempered, 62 ±2 HRC','Inner ring and rolling elements: UNI 100Cr6 hardened and tempered','Main stud: weldable Fe52C','Speed and mass are not published in the source table; confirm them on the controlled quotation drawing'],
    columns:heavyLoadColumns,rows:heavyLoadRows,source:{label:'Authorized Jade MR418 heavy-load technical sheet',url:'https://www.jadebearings.com/combined-bearing/steel-sections/combined-bearings-for-heavy-loads-adjustable-from.html'},downloadHref:'/downloads/mr4180-mr4183-heavy-load-combined-bearings.pdf',lastVerified:'2026-07-18',
  },
  {
    slug:'high-temperature-4-series',title:'4.054HT-4.063HT High-Temperature Combined Bearings',seoTitle:'4.054HT-4.063HT High-Temperature Combined Bearings',
    description:'High-temperature combined bearing replacement range covering 4.054HT through 4.063HT with base model and profile matching guidance.',
    image:'/images/combined-bearing-models/winkel-4-054.webp',drawings:[],intro:'HT executions retain the base dimensional family but require temperature-specific grease, seals and material confirmation.',
    designNotes:['Published family range: 4.054HT-4.063HT','Environmental temperature capability must be confirmed for the quoted execution','Do not approve an HT replacement from base dimensions alone','Confirm grease, seals, relubrication interval and actual bearing temperature'],
    columns:[{key:'model',label:'HT model'},{key:'execution',label:'Execution'},{key:'verification',label:'Required verification'}],rows:Array.from({length:10},(_,i)=>({model:`4.${String(54+i).padStart(3,'0')}HT`,execution:'High-temperature execution of corresponding base family',verification:'Confirm grease, seals, temperature rating and current controlled drawing'})),
    source:{label:'Authorized Jade combined bearing range',url:'https://www.jadebearings.com/combined-bearing/'},downloadHref:'/downloads/high-temperature-combined-bearing-series.pdf',lastVerified:'2026-07-18',
  },
  {
    slug:'precision-adjustable-pr4-series',title:'PR4.454-PR4.463 Precision Adjustable Combined Bearings',seoTitle:'PR4.454-PR4.463 Precision Adjustable Combined Bearings',
    description:'Precision eccentric-adjustable combined bearing replacement range from PR4.454 through PR4.463 with cross-reference and drawing review guidance.',
    image:'/images/combined-bearing-models/winkel-pr4-056.webp',drawings:[],intro:'The PR4.45x series combines the precision radial roller class with eccentric axial adjustment.',
    designNotes:['Published family range: PR4.454-PR4.463','Precision outer diameter differs from the standard 4.45x execution','Confirm eccentric adjustment range and axial roller position','Plate-mounted versions require the complete AP drawing'],
    columns:[{key:'model',label:'PR model'},{key:'execution',label:'Execution'},{key:'verification',label:'Required verification'}],rows:familyRows('PR4.',454,463,'Precision eccentric-adjustable execution'),
    source:{label:'Authorized Jade combined bearing range',url:'https://www.jadebearings.com/combined-bearing/'},downloadHref:'/downloads/pr4-precision-adjustable-series.pdf',lastVerified:'2026-07-18',
  },
  {
    slug:'shim-adjustable-4-078-series',title:'4.078 / 4.0784 Shim-Adjustable Combined Bearings',seoTitle:'4.078 and 4.0784 Shim-Adjustable Combined Bearings',
    description:'4.078, 4.0784, MR.152 and MR.142 combined bearing dimensions, load ratings, speed, mass and shim-adjustment references.',
    image:'/images/special-combined-series/high-load-main.jpg',drawings:[{src:'/images/special-combined-series/high-load-drawing.png',alt:'4.078 and 4.0784 shim-adjustable combined bearing drawing'}],intro:'The axial position is adjusted with adapter washers between the main stud and axial support.',
    designNotes:['4.078 cross references MR.152 / JD108.55-58.5-KZ / 400-0078','4.0784 cross references MR.142 / JD107.7-69-KZ','Available washer thicknesses: 0.3, 0.5 and 1.0 mm','Confirm tapered or cylindrical outer profile'],
    columns:highLoadColumns,rows:highLoadRows.filter(row=>row.model.includes('MR.142')||row.model.includes('MR.152')),
    source:{label:'Authorized Jade shim-adjustable data',url:'https://www.jadebearings.com/combined-bearing/axial-support/'},downloadHref:'/downloads/4-078-shim-adjustable-combined-bearings.pdf',lastVerified:'2026-07-18',
  },
];
