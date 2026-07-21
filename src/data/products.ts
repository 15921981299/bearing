export type ProductItem = {
  slug: string; title: string; image: string; imageAlt: string; mainImage: string; secondImage: string;
  seoTitle: string; h1Title: string; summary: string; materialSlugs: string[];
  capabilitySlugs: string[]; tolerance: string; leadTime: string;
  seriesGroups: { label: string; references: string }[];
  selectionChecks: { label: string; detail: string }[];
  content: { partOne: string; partTwo: string };
};

const secondImage = '/images/bearing-dimensional-inspection.webp';

export const products: ProductItem[] = [
  {
    slug:'combined-bearings', title:'Combined Bearings', image:'/images/combined-bearing-models/winkel-4-058.webp', imageAlt:'4.058 combined roller bearing with radial and axial rollers, cutaway view', mainImage:'/images/combined-bearing-models/winkel-4-058.webp', secondImage,
    seoTitle:'Combined Bearings | Standard, Adjustable & Jumbo', h1Title:'Combined Bearings for Heavy Linear Motion',
    summary:'Standard, adjustable, high-load and welded-plate combined roller bearings for forklift masts, steel sections and lifting systems.',
    materialSlugs:['bearing-steel'], capabilitySlugs:[], tolerance:'Model, dimensions and load data confirmed before quotation', leadTime:'Standard and drawing-based options quoted by requirement',
    seriesGroups:[
      {label:'Standard combined bearings',references:'4.053, 4.054, 4.055, 4.056, 4.058, 4.059, 4.061, 4.062, 4.063'},
      {label:'Precision series',references:'PR4.054 through PR4.063'},
      {label:'Eccentric adjustable series',references:'4.454 through 4.463'},
      {label:'Jumbo high-load series',references:'4.085, 4.089, 4.090 through 4.096'},
      {label:'Welded plate assemblies',references:'AP0, AP1, AP2, AP2-LUB, AP2-Q, AP3.1, AP4, AP6, AP91-Q'},
    ],
    selectionChecks:[
      {label:'Identification',detail:'Complete bearing marking plus any MR, TR, JD or 400-series reference.'},
      {label:'Envelope',detail:'Outside diameter, overall width, shaft size and plate or profile geometry.'},
      {label:'Loading',detail:'Required radial and axial load, shock level and duty cycle.'},
      {label:'Adjustment',detail:'Fixed or eccentric axial roller and the required adjustment method.'},
      {label:'Environment',detail:'Speed, temperature, contamination, lubrication and sealing requirement.'},
    ],
    content:{partOne:`<h2>Standard and Non-Standard Combined Bearings</h2><p>We supply combined bearings — also searched as combination bearings — that carry radial and axial loads in one compact unit. Typical applications include forklift masts, telescopic columns, material-handling equipment and heavy linear guide systems.</p><h3>Combined Bearing Series and Keywords</h3><ul><li>Winkel-type standard combined bearings: 4.053, 4.054, 4.055, 4.056, 4.058, 4.059, 4.061, 4.062 and 4.063</li><li>Precision series: PR4.054–PR4.056 and PR4.058–PR4.063</li><li>Eccentric adjustable bearings: 4.454–4.463</li><li>Jumbo high-load bearings: 4.085, 4.089, 4.090–4.096</li><li>Combined bearings welded on AP0, AP1, AP2, AP2-LUB, AP2-Q, AP3.1, AP4, AP6 and AP91-Q plates</li></ul>`,partTwo:`<h2>Cross-Reference and Selection Support</h2><p>Common cross-reference terms include MR, TR, JD and 400-series designations, and this product family is also searched as combination bearings or combi bearings. Send the complete marking, outside diameter, width, shaft or plate details, radial load, axial load and operating temperature.</p><h3>Related Bearing Products</h3><p>Matched <a href="/products/standard-nbv-profiles/">Standard NbV profiles</a> are available for combined-bearing guide systems. For rolling tracks and cams, see <a href="/products/track-roller-bearings/">track roller bearings</a>.</p><p><a href="/contact/?product=combined-bearings">Request a combined bearing quotation</a></p>`}
  },
  {
    slug:'track-roller-bearings', title:'Track Roller Bearings', image:'/images/extended-bearing-models/nutr45100.webp', imageAlt:'NUTR45100 yoke type track roller bearings on a mounting rail', mainImage:'/images/extended-bearing-models/nutr45100.webp', secondImage,
    seoTitle:'Track Roller Bearings | Yoke & Stud Rollers', h1Title:'Track Roller Bearings and Cam Followers',
    summary:'Yoke type and stud type track rollers for cam drives, conveyors, guideways and heavy-duty automation.',
    materialSlugs:['bearing-steel'], capabilitySlugs:[], tolerance:'Bore or stud, OD, width, track profile and load checked', leadTime:'Quoted after model and quantity review',
    seriesGroups:[
      {label:'Double-row yoke rollers',references:'NNTR, RSU'},
      {label:'Full-complement yoke rollers',references:'NUTR, PWTR'},
      {label:'Needle roller yoke followers',references:'NATR5-PP–NATR50-PP, NATV5-PP–NATV50-PP'},
      {label:'Full-complement stud followers',references:'KRV16-PP through KRV90-PP'},
      {label:'Stud type cam followers',references:'NUKR35 through NUKR110, NUKRE, CF'},
      {label:'Profiled track rollers',references:'LFR and drawing-based groove profiles'},
    ],
    selectionChecks:[
      {label:'Mounting',detail:'Confirm yoke bore mounting or stud mounting, including thread and shoulder details.'},
      {label:'Running surface',detail:'Crowned, convex, cylindrical, V-groove or other profiled outer ring.'},
      {label:'Envelope',detail:'Bore or stud diameter, outside diameter, outer-ring width and overall width.'},
      {label:'Track duty',detail:'Radial load, occasional axial load, speed, shock and track hardness.'},
      {label:'Lubrication',detail:'Sealed-for-life or relubricable construction and grease compatibility.'},
    ],
    content:{partOne:`<h2>Yoke Type and Stud Type Track Roller Bearings</h2><p>Track rollers use a thick-section outer ring to run directly on tracks, cams and guide surfaces. We support full-complement, caged, sealed, crowned and cylindrical outer-ring designs.</p><h3>Popular Track Roller Series</h3><ul><li>NNTR and RSU double-row yoke track rollers</li><li>NUTR and PWTR full-complement yoke rollers</li><li>NUKR, NUKRE, KR, KRV and CF stud type cam followers</li><li>NATR and NATV needle roller track rollers</li><li>LFR profiled outer-ring track rollers</li></ul>`,partTwo:`<h2>Model and Dimension Keywords</h2><p>Frequently requested references include NNTR50X130X65-2ZL, NNTR5013065, RSU50-130, NUTR50110, NUTR2562, NUTR45100, NUKR72, NUKR90, NUKR110 and KRV35PP.</p><h3>How to Specify a Track Roller</h3><p>Provide mounting type, bore or stud diameter, outside diameter, width, track geometry, radial load, axial load, speed, shock level and relubrication requirement.</p><p>Compare <a href="/products/special-track-roller-bearings/">special track rollers</a> or <a href="/contact/?product=track-roller-bearings">send a track roller RFQ</a>.</p>`}
  },
  {
    slug:'full-complement-cylindrical-roller-bearings', title:'Full Complement Cylindrical Roller Bearings', image:'/images/extended-bearing-models/sl045010pp.webp', imageAlt:'SL045010PP full complement cylindrical roller bearing', mainImage:'/images/extended-bearing-models/sl045010pp.webp', secondImage,
    seoTitle:'Full Complement Roller Bearings | SL Series', h1Title:'Full Complement Cylindrical Roller Bearings',
    summary:'High radial-load cylindrical roller bearings for gearboxes, rope sheaves, extruders and industrial drives.',
    materialSlugs:['bearing-steel'], capabilitySlugs:[], tolerance:'Internal clearance, locating function and lubrication reviewed', leadTime:'Series and quantity dependent',
    seriesGroups:[
      {label:'Locating and semi-locating designs',references:'SL01, SL02, SL04, SL05, SL06'},
      {label:'Single-row full-complement designs',references:'SL18 2205–2206, SL18 3004–3010, SL19, NCF'},
      {label:'Double-row and multi-row equivalents',references:'NNCF, NNCL and application-specific designs'},
      {label:'Sealed variants',references:'PP, 2RS and manufacturer-specific suffixes'},
    ],
    selectionChecks:[
      {label:'Dimensions',detail:'Confirm bore d, outside diameter D and width B from the bearing or drawing.'},
      {label:'Locating function',detail:'Determine whether the bearing must locate the shaft axially in one or both directions.'},
      {label:'Internal design',detail:'Single-row, double-row or multi-row arrangement and open or sealed construction.'},
      {label:'Operating fit',detail:'Required internal clearance, shaft and housing fits and operating temperature.'},
      {label:'Lubrication and speed',detail:'Oil or grease method, relubrication interval and limiting operating speed.'},
    ],
    content:{partOne:`<h2>High-Capacity Full Complement Roller Bearings</h2><p>Without a cage, full-complement cylindrical roller bearings contain the maximum number of rollers and provide very high radial load capacity in a compact envelope.</p><h3>SL and Equivalent Series</h3><ul><li>SL01, SL02, SL04, SL05 and SL06 series</li><li>SL18 single-row and SL19 single-row series</li><li>RSL, NCF, NJG, NNCL and NNCF designs</li><li>Open, sealed, single-row, double-row and multi-row variants</li></ul>`,partTwo:`<h2>Application and Selection Data</h2><p>Common uses include industrial gearboxes, cable sheaves, lifting equipment, extruders and slow-to-medium-speed heavy drives. Confirm d × D × B dimensions, axial locating requirement, internal clearance, speed and oil or grease lubrication.</p><p>For track-running outer rings, see <a href="/products/track-roller-bearings/">track roller bearings</a>. <a href="/contact/?product=full-complement-cylindrical-roller-bearings">Request an SL-series cross-reference</a>.</p>`}
  },
  {
    slug:'backup-roller-bearings', title:'Back-up Roller Bearings', image:'/images/extended-bearing-models/nntr5013065.webp', imageAlt:'NNTR heavy-duty support roller bearing, cutaway view', mainImage:'/images/extended-bearing-models/nntr5013065.webp', secondImage,
    seoTitle:'Back-up Rollers for Levelers & Straighteners', h1Title:'Back-up Roller Bearings for Metal Processing',
    summary:'Back-up rollers with or without pivot for levelers, straighteners and steel coil processing lines.',
    materialSlugs:['bearing-steel'], capabilitySlugs:[], tolerance:'Outer profile and shaft geometry confirmed from drawing', leadTime:'Custom design and quantity dependent',
    seriesGroups:[
      {label:'Without pivot',references:'Bore-mounted back-up rolls and NNTR-style support rollers'},
      {label:'With pivot',references:'Integrated shaft and customer-specific shaft-end executions'},
      {label:'Double back-up rolls',references:'Paired support roller arrangements for leveler applications'},
      {label:'Drawing-based designs',references:'Cylindrical or crowned outer profile, custom sealing and lubrication'},
    ],
    selectionChecks:[
      {label:'Drawing',detail:'Provide d, D, B, C, overall length, shaft ends and fixing details.'},
      {label:'Outer profile',detail:'Confirm cylindrical, crowned or application-specific roll geometry.'},
      {label:'Process load',detail:'Strip material, work-roll force, line speed and expected shock loading.'},
      {label:'Accuracy',detail:'Runout, profile tolerance and surface-finish requirements.'},
      {label:'Lubrication',detail:'Sealed or relubricable design, lubricant and contamination conditions.'},
    ],
    content:{partOne:`<h2>Back-up Rollers for Leveler and Straightener Machines</h2><p>Back-up roller bearings support work rolls and help maintain strip flatness in metal processing equipment. Designs are available with pivot, without pivot, as double back-up rolls and with customer-specific shaft ends.</p><h3>Design Options</h3><ul><li>Cylindrical or crowned outer-ring profile</li><li>Sealed or relubricable internal design</li><li>Custom shaft-end mounting and fixing methods</li><li>Special heat treatment for heavy rolling-line duty</li></ul>`,partTwo:`<h2>Required Back-up Roller Data</h2><p>Send the complete drawing or d, D, B, C and overall-length dimensions, outer profile, strip material, process force, line speed, lubrication and sealing requirements.</p><p>Heavy-duty NNTR-style rollers may also be reviewed under <a href="/products/track-roller-bearings/">track roller bearings</a>. <a href="/contact/?product=backup-roller-bearings">Send a back-up roller drawing</a>.</p>`}
  },
  {
    slug:'cross-roller-bearings', title:'Cross Roller Bearings', image:'/images/stage3-bearing-models/csf17.webp', imageAlt:'CSF17 cross roller bearing for harmonic reducers and robotics', mainImage:'/images/stage3-bearing-models/csf17.webp', secondImage,
    seoTitle:'Cross Roller Bearings | Robotics & Rotary Tables', h1Title:'Precision Cross Roller Bearings',
    summary:'High-rigidity crossed roller bearings for robotics, harmonic reducers, rotary tables and positioning equipment.',
    materialSlugs:['bearing-steel'], capabilitySlugs:[], tolerance:'Accuracy, clearance or preload confirmed by application', leadTime:'Model and precision class dependent',
    seriesGroups:[
      {label:'Harmonic reducer bearings',references:'CSF, CSG, SHF, SHG'},
      {label:'Integrated mounting-hole types',references:'RU, CRBH, CRBF'},
      {label:'Hollow rotary platform bearings',references:'AKD and application-specific rotary-table designs'},
      {label:'Requested examples',references:'CSF-14, CSF17, SHF-20, AKD60'},
    ],
    selectionChecks:[
      {label:'Envelope',detail:'Bore, outside diameter, width and mounting-hole pattern.'},
      {label:'Accuracy',detail:'Required runout or precision class for the rotating assembly.'},
      {label:'Internal condition',detail:'Clearance or preload and the permitted starting torque.'},
      {label:'Combined load',detail:'Radial, axial and moment load with the actual duty cycle.'},
      {label:'Assembly',detail:'Housing rigidity, bolt pattern, lubrication and installation sequence.'},
    ],
    content:{partOne:`<h2>Cross Roller Bearings for Combined Loads</h2><p>Alternating cylindrical rollers allow one compact bearing to carry radial, axial and moment loads. The arrangement provides high rigidity and rotational accuracy for precision equipment.</p><h3>Common Cross Roller Bearing Series</h3><ul><li>CSF and CSG harmonic reducer bearings</li><li>SHF and SHG crossed roller bearings</li><li>RU, CRBH, CRBF and integrated mounting-hole designs</li><li>AKD hollow rotary-platform bearings</li></ul>`,partTwo:`<h2>Robotics and Precision Applications</h2><p>Typical applications include robot joints, harmonic reducers, hollow rotary tables, inspection equipment and compact rotary positioning systems. Provide d × D × B, mounting-hole pattern, runout class, clearance or preload and combined-load data.</p><p>Example search references include CSF-14, CSF17, SHF-20 and AKD60. <a href="/contact/?product=cross-roller-bearings">Request a cross roller bearing quote</a>.</p>`}
  },
  {
    slug:'standard-nbv-profiles', title:'Standard NbV Profiles', image:'/images/stage3-bearing-models/standard-1-nbv.webp', imageAlt:'Standard 1 NbV steel U-profile sections for combined bearings', mainImage:'/images/stage3-bearing-models/standard-1-nbv.webp', secondImage,
    seoTitle:'Standard NbV Profiles for Combined Bearing Systems', h1Title:'Standard NbV Steel Profiles',
    summary:'Matched steel U-profiles for combined bearings, supplied in standard or cut-to-length configurations.',
    materialSlugs:['20mnsiv-steel'], capabilitySlugs:[], tolerance:'Profile and mating bearing confirmed together', leadTime:'Stock or cut-length availability confirmed by RFQ',
    seriesGroups:[
      {label:'Light profile references',references:'Standard 0 NbV / JDG62; Standard 1 NbV / JDG70'},
      {label:'Medium profile references',references:'Standard 2 NbV / JDG78; Standard 3 NbV / JDG89'},
      {label:'Heavy profile references',references:'Standard 4 NbV / JDG108; JDG123, JDG150, JDG152'},
      {label:'Supply formats',references:'Standard fixed length or cut-to-length after confirmation'},
    ],
    selectionChecks:[
      {label:'Profile reference',detail:'NbV, JDG or drawing designation and the required section geometry.'},
      {label:'Mating bearing',detail:'Combined bearing model and required running clearance in the guide.'},
      {label:'Length',detail:'Finished length, cutting tolerance and end preparation.'},
      {label:'Surface condition',detail:'As-rolled, blasted, primed or other agreed condition.'},
      {label:'Logistics',detail:'Quantity, bundle length, destination and unloading constraints.'},
    ],
    content:{partOne:`<h2>Steel Profiles for Combined Bearings</h2><p>Standard NbV profiles form the guide track for combined-bearing linear systems used in forklift masts, telescopic columns and handling structures.</p><h3>NbV and JDG Profile References</h3><ul><li>Standard 0 NbV / JDG62</li><li>Standard 1 NbV / JDG70</li><li>Standard 2 NbV / JDG78</li><li>Standard 3 NbV / JDG89</li><li>Standard 4 NbV / JDG108</li><li>JDG123, JDG150 and JDG152 heavy profiles</li></ul>`,partTwo:`<h2>Profile Matching and Cut Lengths</h2><p>Profiles may be supplied in fixed lengths or cut to requirement. Confirm the NbV or JDG designation, matching <a href="/products/combined-bearings/">combined bearing model</a>, required length, quantity and surface condition.</p><p><a href="/contact/?product=standard-nbv-profiles">Request NbV profile dimensions and availability</a>.</p>`}
  },
  {
    slug:'special-track-roller-bearings', title:'Special Track Roller Bearings', image:'/images/extended-bearing-models/f-93666-2.webp', imageAlt:'F-93666.2 special track roller bearing for non-standard machinery', mainImage:'/images/extended-bearing-models/f-93666-2.webp', secondImage,
    seoTitle:'Custom Track Rollers | Drawing-Based Bearings', h1Title:'Special and Custom Track Roller Bearings',
    summary:'Drawing-based guide rollers, profiled outer rings and modified track bearings for non-standard machinery.',
    materialSlugs:['bearing-steel'], capabilitySlugs:[], tolerance:'Drawing and operating data required', leadTime:'Engineering review required',
    seriesGroups:[
      {label:'Profiled outer rings',references:'V-groove, U-groove, concave, crowned and drawing-based profiles'},
      {label:'Modified mounting',references:'Custom stud threads, smooth studs, bores and eccentric collars'},
      {label:'Environmental variants',references:'Alternative seals, lubrication holes and high-temperature grease'},
      {label:'Material variants',references:'Bearing steel and application-specific heat-treatment requirements'},
    ],
    selectionChecks:[
      {label:'Controlled drawing',detail:'Dimensioned drawing with tolerances, revisions and critical characteristics.'},
      {label:'Mating track',detail:'Track geometry, hardness, surface finish and alignment.'},
      {label:'Operating duty',detail:'Load direction, speed, shock, duty cycle and expected service life.'},
      {label:'Environment',detail:'Temperature, contamination, corrosion exposure and lubricant restrictions.'},
      {label:'Commercial data',detail:'Prototype and annual quantity, target delivery and destination.'},
    ],
    content:{partOne:`<h2>Non-Standard Track Rollers</h2><p>Special track rollers can incorporate profiled outer rings, modified studs, unusual widths, special seals, high-temperature grease or application-specific mounting features.</p><h3>Typical Modifications</h3><ul><li>V-groove, U-groove and crowned running surfaces</li><li>Custom stud threads and eccentric collars</li><li>Alternative seals and lubrication holes</li><li>Special bearing steel and heat-treatment requirements</li></ul>`,partTwo:`<h2>What to Include with the Drawing</h2><p>Provide geometry, tolerances, mating track, load direction, speed, duty cycle, temperature and contamination conditions. Also review our standard <a href="/products/track-roller-bearings/">track roller bearing range</a>.</p><p><a href="/contact/?product=special-track-roller-bearings">Submit a custom roller drawing</a>.</p>`}
  }
];
