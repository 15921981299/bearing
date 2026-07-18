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
  ['MR4184','150','260','80','135','110','80','187','10','5','565','1300','165','280','Not published','Not published'],
  ['MR4185','140','300','80','140','110','86','190','10','8','550','1275','195','335','Not published','Not published'],
  ['MR4186','140','315','89','240','120','100','240','10','8','785','1690','225','390','Not published','Not published'],
  ['MR4187','140','340','89','150','120','100','240','10','8','785','1690','225','390','Not published','Not published'],
  ['MR4188','170','390','118','200','150','100','242','11','8','1075','2535','225','390','Not published','Not published'],
].map((values)=>Object.fromEntries(heavyLoadColumns.map((column,index)=>[column.key,values[index]])));

const zrsColumns = columns(['model|Model','alternate|Alternate','d|d mm','D|D mm','C|C mm','H|H mm','H1|H1 mm','H2|H2 mm','D1|D1 mm','C1|C1 mm','d1|d1 mm','S|S mm','angle|Angle','r|r mm','R|R mm','R1|R1 mm','V|V','Cr|Cr kN','C0r|C0r kN','Ca|Ca kN','C0a|C0a kN','speed|Speed rpm','mass|Mass kg']);
const zrsRows = [
 ['MR.706','—','30','52.5','19','33','27','6','43','16','40','2.5','10°','3','500','500','26.5','46','6','6','800','0.39'],
 ['MR.001','MR.021 / MR.430','30','62','20','37.5','30.5','7','50','20','42','2','20°','3','500','500','—','39','65','14','21','900','0.52'],
 ['MR.002','MR.022 / MR.1195','35','70.1','23','44','36','8','57','22','48','2','20°','3','500','500','M6×1','56','93','17','25','900','0.78'],
 ['MR.003','MR.023','40','77.7','23','48','36.5','11.5','61','24','54','2.5','20°','3','700','700','M6×1','58','101.5','21','32','800','1.02'],
 ['MR.005','MR.025','45','88.9','30','57','44','13','68','26','59','3','20°','4','700','700','M6×1','84','133','28','43','700','1.61'],
 ['MR.007','MR.027','60','107.7','31','69','55','14','82','34','71','3.5','20°','4','1000','700','M6×1','94','162','46','84','650','2.69'],
 ['MR.009','MR.029','60','123','37','72.3','56','16.3','92','40','80','4.5','20°','4','1000','1000','M6×1','132','242','53','94','500','3.88'],
 ['MR.010','MR.030','60','149','43','78.5','58.5','20','116','50','103','4.5','15°','4','1000','1000','M6×1','179','353','83','131','400','6.65'],
 ['MR.191','—','60','149','45','86','67','19','120','50','107','5','15°','4','1000','1000','1/8 GAS','179','353','83','131','400','7.15'],
].map(values=>Object.fromEntries(zrsColumns.map((column,index)=>[column.key,values[index]])));

const inclinedRows = [
 ['MR.031','MR.032','35','70.35','23','40.5','30.5','10','57','22','48','2.5','20°','4','650','500','—','56','93','17','25','900','0.47'],
 ['MR.004','MR.024','40','78.3','23','40.7','29','11.7','61','24','54','2.5','20°','4','700','700','M6×1','58','101.5','21','32','800','0.88'],
 ['MR.034','MR.035','45','89.25','30','50','37.5','12.5','68','26','59','3','20°','4','850','700','M6×1','84','133','28','43','800','1.58'],
 ['MR.006','MR.026','50','101.8','28','46','33','13','77','30','67','2.5','20°','4','850','700','M6×1','91','153','32','50','700','1.72'],
 ['MR.008','MR.028','55','108.55','31','53','38.5','14.5','82','34','71','3.5','20°','4','1000','700','M6×1','94','162','39','66','700','2.22'],
 ['MR.040','MR.041','60','123.5','33','57','42','15','94','33','78','2.5','15°','4','1000','750','M6×1','134','211','39','57','500','3.20'],
 ['MR.016','—','60','129.4','33','56.5','42.5','14','94','40','78','2.5','10°','4','1000','750','M6×1','126','200','42','73','500','3.40'],
 ['MR.011','—','80','165','36','61','46','15','130','60','113','2.5','10°','4','1000','1000','M6×1','173','306','58','111','400','6.30'],
].map(values=>Object.fromEntries(zrsColumns.map((column,index)=>[column.key,values[index]])));

const externalColumns = columns(['model|Model','d|d mm','D|D mm','C|C mm','Hmin|H min mm','Hmax|H max mm','H1min|H1 min mm','H1max|H1 max mm','H2|H2 mm','D1|D1 mm','C1|C1 mm','d1|d1 mm','S|S mm','angle|Angle','r|r mm','R|R mm','R1|R1 mm','Cr|Cr kN','C0r|C0r kN','Ca|Ca kN','C0a|C0a kN','speed|Speed rpm','mass|Mass kg']);
const externalRows = [
 ['KRES.062','30','62','20','37.5','39','30.5','32','7','50','20','42','2','20°','3','500','500','39','65','14','21','900','0.52'],['KRES.070','35','70.1','23','44','45.5','36','37.5','8','57','20','48','2','20°','3','500','500','56','93','14','21','900','0.78'],
 ['KRES.078','40','77.7','23','48','50','36.5','38.5','11.5','61','24','53','2.5','20°','3','700','700','58','101.5','21','32','800','1.02'],['KRES.089','45','88.9','30','57','59','44','46','13','68','26','59','3','20°','4','700','700','84','133','28','43','700','1.61'],
 ['KRES.101','50','101.9','28','46','48.5','33','35.5','13','77','26','67','2.5','20°','4','850','700','91','153','30','35','700','1.75'],['KRES.108','60','107.7','31','69','71.5','55','57.5','14','82','34','71','3.5','20°','4','1000','700','94','162','33','47','650','2.69'],
 ['KRES.123','60','123','37','72.3','75.3','56','59','16.3','92','40','80','4.5','20°','4','1000','700','132','242','53','94','500','3.88'],['KRES.149','60','149','43','78.5','81.5','58.5','61.5','20','116','50','103','4.5','15°','4','1000','700','179','353','68','71','400','6.65'],
].map(values=>Object.fromEntries(externalColumns.map((column,index)=>[column.key,values[index]])));

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
    slug:'mr4180-mr4183-heavy-load-series',title:'MR4180-MR4188 Heavy-Load Adjustable Combined Bearings',seoTitle:'MR4180-MR4188 Heavy-Load Adjustable Combined Bearings',
    description:'MR4180 through MR4188 heavy-load combined bearing dimensions, radial and axial load ratings, materials, drawing and RFQ data.',
    image:'/images/special-combined-series/mr418-heavy-load-main.jpg',drawings:[{src:'/images/special-combined-series/mr418-heavy-load-drawing.png',alt:'MR4180 to MR4183 heavy-load adjustable combined bearing technical drawing'}],
    intro:'These large combined bearings are adjusted externally for heavy steel-section guidance. The published range covers 170 to 390 mm outside diameters.',
    designNotes:['Outer ring: UNI 16CrNi4 case-hardened and tempered, 62 ±2 HRC','Inner ring and rolling elements: UNI 100Cr6 hardened and tempered','Main stud: weldable Fe52C','Speed and mass are not published in the source table; confirm them on the controlled quotation drawing'],
    columns:heavyLoadColumns,rows:heavyLoadRows,source:{label:'Authorized Jade MR418 heavy-load technical sheet',url:'https://www.jadebearings.com/combined-bearing/steel-sections/combined-bearings-for-heavy-loads-adjustable-from.html'},downloadHref:'/downloads/mr4180-mr4188-heavy-load-combined-bearings.pdf',lastVerified:'2026-07-18',
  },
  {
    slug:'steel-section-zrs-series',title:'MR.001-MR.191 Steel-Section ZRS Combined Bearings',seoTitle:'Steel-Section ZRS Combined Bearings | MR.001-MR.191',
    description:'Complete ZRS steel-section combined bearing dimensions, load ratings, speed, mass and MR cross-references for mast and industrial guide systems.',
    image:'/images/special-combined-series/zrs-series.jpg',drawings:[],intro:'ZRS executions combine radial and axial guidance for straight steel sections, with fixed axial geometry and published MR alternate references.',
    designNotes:['MR.706 and MR.001 are non-relubricable executions','MR.430 is the requested 62.5 mm OD alternative to MR.021','MR.1195 is the relubricable alternative to MR.002','DIN 620 P0 tolerance and ISO 76 / ISO 281 rating basis'],
    columns:zrsColumns,rows:zrsRows,source:{label:'Authorized Jade ZRS steel-section technical sheet',url:'https://www.jadebearings.com/combined-bearing/steel-sections-zrs-execution/combined-bearings-for-steel-sections-zrs-execution.html'},downloadHref:'/downloads/zrs-steel-section-combined-bearings.pdf',lastVerified:'2026-07-18',
  },
  {
    slug:'inclined-section-zrs-series',title:'MR.004-MR.041 Inclined-Section ZRS Combined Bearings',seoTitle:'Inclined-Section ZRS Combined Bearings | MR Series',
    description:'Inclined steel-section ZRS combined bearing dimensions, loads, speed, mass and alternate MR references for angled guide profiles.',
    image:'/images/special-combined-series/inclined-zrs-series.jpg',drawings:[],intro:'Inclined-section executions change the radial and axial roller relationship to match angled steel guide profiles.',
    designNotes:['MR.031 is a non-relubricable execution','MR.016 and MR.011 use a non-tapered outer profile','Confirm the profile angle and axial roller position before replacement','DIN 620 P0 tolerance and ISO 76 / ISO 281 rating basis'],
    columns:zrsColumns,rows:inclinedRows,source:{label:'Authorized Jade inclined ZRS technical sheet',url:'https://www.jadebearings.com/combined-bearing/inclined-sections-zrs-execution/combined-bearings-for-inclined-sections.html'},downloadHref:'/downloads/inclined-zrs-combined-bearings.pdf',lastVerified:'2026-07-18',
  },
  {
    slug:'external-adjustable-kres-series',title:'KRES.062-KRES.149 Externally Adjustable Combined Bearings',seoTitle:'KRES.062-KRES.149 Externally Adjustable Bearings',
    description:'KRES externally adjustable combined bearing dimensions, adjustment ranges, load ratings, speed and mass for steel-section guide systems.',
    image:'/images/special-combined-series/external-adjustable-series.jpg',drawings:[],intro:'The eccentric stud is adjusted from outside the guide assembly, allowing axial clearance correction without removing the main bearing.',
    designNotes:['KRES.101 has a tapered outer profile','Eccentric stud: UNI 16CrNi4 case-hardened and tempered','Confirm tool access and adjustment direction in the assembly','DIN 620 P0 tolerance and ISO 76 / ISO 281 rating basis'],
    columns:externalColumns,rows:externalRows,source:{label:'Authorized Jade externally adjustable technical sheet',url:'https://www.jadebearings.com/combined-bearing/adjustable-from-outside-for-steel-sections/combined-bearings-adjustable-from-outside-for.html'},downloadHref:'/downloads/kres-external-adjustable-combined-bearings.pdf',lastVerified:'2026-07-18',
  },
  {
    slug:'radial-stud-combined-bearing-series',title:'2-Series Radial Combined Bearings With Stud',seoTitle:'2-Series Radial Combined Bearings With Stud',
    description:'2-series radial combined bearing identification range for steel sections, including TR111, TR120, MR0120 and precision radial references.',
    image:'/images/combined-bearing-models/winkel-2-063.webp',drawings:[],intro:'Radial combined bearings with stud are used where the axial guide element is separate or the assembly requires radial guidance only.',
    designNotes:['Published family references include 2.054, 2.055, 2.056, 2.058, 2.061, 2.062 and 2.063','2.0363 / TR111 is a special 62 mm OD, 62.5 mm height reference','2.063 / TR120 / MR0120 is a 149 mm OD, 74 mm height reference','Confirm all remaining dimensions and load ratings from the controlled drawing'],
    columns:columns(['model|Model','crossReference|Cross-reference','D|Published OD','H|Published height','verification|Verification']),rows:[
      {model:'2.0363',crossReference:'TR111',D:'62 mm',H:'62.5 mm',verification:'Confirm controlled drawing'},
      {model:'2.054-2.062',crossReference:'Precision radial family',D:'See model drawing',H:'See model drawing',verification:'Confirm each model envelope'},
      {model:'2.063',crossReference:'TR120 / MR0120',D:'149 mm',H:'74 mm',verification:'Confirm controlled drawing'},
    ],source:{label:'Authorized Jade radial stud series references',url:'https://www.jadebearings.com/combined-bearing/'},downloadHref:'/downloads/radial-stud-combined-bearing-series.pdf',lastVerified:'2026-07-18',
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
