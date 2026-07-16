export type ProductItem = {
  slug: string; title: string; image: string; mainImage: string; secondImage: string;
  seoTitle: string; h1Title: string; summary: string; materialSlugs: string[];
  capabilitySlugs: string[]; tolerance: string; leadTime: string;
  content: { partOne: string; partTwo: string };
};

const image = '/images/industrial-bearing-product-range.webp';
const secondImage = '/images/bearing-dimensional-inspection.webp';

export const products: ProductItem[] = [
  {
    slug:'combined-bearings', title:'Combined Bearings', image, mainImage:image, secondImage,
    seoTitle:'Combined Bearing Manufacturer | Standard & Adjustable Bearings', h1Title:'Combined Bearings for Heavy Linear Motion',
    summary:'Standard, adjustable, high-load and welded-plate combined roller bearings for forklift masts, steel sections and lifting systems.',
    materialSlugs:['bearing-steel'], capabilitySlugs:[], tolerance:'Model, dimensions and load data confirmed before quotation', leadTime:'Standard and drawing-based options quoted by requirement',
    content:{partOne:`<h2>Standard and Non-Standard Combined Bearings</h2><p>We supply combined bearings that carry radial and axial loads in one compact unit. Typical applications include forklift masts, telescopic columns, material-handling equipment and heavy linear guide systems.</p><h3>Combined Bearing Series and Keywords</h3><ul><li>Winkel-type standard combined bearings: 4.053, 4.054, 4.055, 4.056, 4.058, 4.059, 4.061, 4.062 and 4.063</li><li>Precision series: PR4.054–PR4.063</li><li>Eccentric adjustable bearings: 4.454–4.463</li><li>Jumbo high-load bearings: 4.090–4.096</li><li>Combined bearings welded on AP0, AP1, AP2, AP3.1, AP4 and AP6 plates</li></ul>`,partTwo:`<h2>Cross-Reference and Selection Support</h2><p>Common cross-reference terms include MR, TR, JD and 400-series designations. Send the complete marking, outside diameter, width, shaft or plate details, radial load, axial load and operating temperature.</p><h3>Related Bearing Products</h3><p>Matched <a href="/products/standard-nbv-profiles/">Standard NbV profiles</a> are available for combined-bearing guide systems. For rolling tracks and cams, see <a href="/products/track-roller-bearings/">track roller bearings</a>.</p><p><a href="/contact/?product=combined-bearings">Request a combined bearing quotation</a></p>`}
  },
  {
    slug:'track-roller-bearings', title:'Track Roller Bearings', image, mainImage:image, secondImage,
    seoTitle:'Track Roller Bearing Supplier | Yoke & Stud Type Rollers', h1Title:'Track Roller Bearings and Cam Followers',
    summary:'Yoke type and stud type track rollers for cam drives, conveyors, guideways and heavy-duty automation.',
    materialSlugs:['bearing-steel'], capabilitySlugs:[], tolerance:'Bore or stud, OD, width, track profile and load checked', leadTime:'Quoted after model and quantity review',
    content:{partOne:`<h2>Yoke Type and Stud Type Track Roller Bearings</h2><p>Track rollers use a thick-section outer ring to run directly on tracks, cams and guide surfaces. We support full-complement, caged, sealed, crowned and cylindrical outer-ring designs.</p><h3>Popular Track Roller Series</h3><ul><li>NNTR and RSU double-row yoke track rollers</li><li>NUTR and PWTR full-complement yoke rollers</li><li>NUKR, NUKRE, KR, KRV and CF stud type cam followers</li><li>NATR and NATV needle roller track rollers</li><li>LFR profiled outer-ring track rollers</li></ul>`,partTwo:`<h2>Model and Dimension Keywords</h2><p>Frequently requested references include NNTR50X130X65-2ZL, NNTR5013065, RSU50-130, NUTR50110, NUTR2562, NUTR45100, NUKR72, NUKR90, NUKR110 and KRV35PP.</p><h3>How to Specify a Track Roller</h3><p>Provide mounting type, bore or stud diameter, outside diameter, width, track geometry, radial load, axial load, speed, shock level and relubrication requirement.</p><p>Compare <a href="/products/special-track-roller-bearings/">special track rollers</a> or <a href="/contact/?product=track-roller-bearings">send a track roller RFQ</a>.</p>`}
  },
  {
    slug:'full-complement-cylindrical-roller-bearings', title:'Full Complement Cylindrical Roller Bearings', image, mainImage:image, secondImage,
    seoTitle:'Full Complement Cylindrical Roller Bearing Supplier | SL Series', h1Title:'Full Complement Cylindrical Roller Bearings',
    summary:'High radial-load cylindrical roller bearings for gearboxes, rope sheaves, extruders and industrial drives.',
    materialSlugs:['bearing-steel'], capabilitySlugs:[], tolerance:'Internal clearance, locating function and lubrication reviewed', leadTime:'Series and quantity dependent',
    content:{partOne:`<h2>High-Capacity Full Complement Roller Bearings</h2><p>Without a cage, full-complement cylindrical roller bearings contain the maximum number of rollers and provide very high radial load capacity in a compact envelope.</p><h3>SL and Equivalent Series</h3><ul><li>SL01, SL02, SL04, SL05 and SL06 series</li><li>SL18 single-row and SL19 single-row series</li><li>RSL, NCF, NJG, NNCL and NNCF designs</li><li>Open, sealed, single-row, double-row and multi-row variants</li></ul>`,partTwo:`<h2>Application and Selection Data</h2><p>Common uses include industrial gearboxes, cable sheaves, lifting equipment, extruders and slow-to-medium-speed heavy drives. Confirm d × D × B dimensions, axial locating requirement, internal clearance, speed and oil or grease lubrication.</p><p>For track-running outer rings, see <a href="/products/track-roller-bearings/">track roller bearings</a>. <a href="/contact/?product=full-complement-cylindrical-roller-bearings">Request an SL-series cross-reference</a>.</p>`}
  },
  {
    slug:'backup-roller-bearings', title:'Back-up Roller Bearings', image, mainImage:image, secondImage,
    seoTitle:'Back-up Roller Bearing Manufacturer | Leveler & Straightener Rolls', h1Title:'Back-up Roller Bearings for Metal Processing',
    summary:'Back-up rollers with or without pivot for levelers, straighteners and steel coil processing lines.',
    materialSlugs:['bearing-steel'], capabilitySlugs:[], tolerance:'Outer profile and shaft geometry confirmed from drawing', leadTime:'Custom design and quantity dependent',
    content:{partOne:`<h2>Back-up Rollers for Leveler and Straightener Machines</h2><p>Back-up roller bearings support work rolls and help maintain strip flatness in metal processing equipment. Designs are available with pivot, without pivot, as double back-up rolls and with customer-specific shaft ends.</p><h3>Design Options</h3><ul><li>Cylindrical or crowned outer-ring profile</li><li>Sealed or relubricable internal design</li><li>Custom shaft-end mounting and fixing methods</li><li>Special heat treatment for heavy rolling-line duty</li></ul>`,partTwo:`<h2>Required Back-up Roller Data</h2><p>Send the complete drawing or d, D, B, C and overall-length dimensions, outer profile, strip material, process force, line speed, lubrication and sealing requirements.</p><p>Heavy-duty NNTR-style rollers may also be reviewed under <a href="/products/track-roller-bearings/">track roller bearings</a>. <a href="/contact/?product=backup-roller-bearings">Send a back-up roller drawing</a>.</p>`}
  },
  {
    slug:'cross-roller-bearings', title:'Cross Roller Bearings', image, mainImage:image, secondImage,
    seoTitle:'Cross Roller Bearing Supplier | Robotics & Rotary Tables', h1Title:'Precision Cross Roller Bearings',
    summary:'High-rigidity crossed roller bearings for robotics, harmonic reducers, rotary tables and positioning equipment.',
    materialSlugs:['bearing-steel'], capabilitySlugs:[], tolerance:'Accuracy, clearance or preload confirmed by application', leadTime:'Model and precision class dependent',
    content:{partOne:`<h2>Cross Roller Bearings for Combined Loads</h2><p>Alternating cylindrical rollers allow one compact bearing to carry radial, axial and moment loads. The arrangement provides high rigidity and rotational accuracy for precision equipment.</p><h3>Common Cross Roller Bearing Series</h3><ul><li>CSF and CSG harmonic reducer bearings</li><li>SHF and SHG crossed roller bearings</li><li>RU, CRBH, CRBF and integrated mounting-hole designs</li><li>AKD hollow rotary-platform bearings</li></ul>`,partTwo:`<h2>Robotics and Precision Applications</h2><p>Typical applications include robot joints, harmonic reducers, hollow rotary tables, inspection equipment and compact rotary positioning systems. Provide d × D × B, mounting-hole pattern, runout class, clearance or preload and combined-load data.</p><p>Example search references include CSF-14, CSF17, SHF-20 and AKD60. <a href="/contact/?product=cross-roller-bearings">Request a cross roller bearing quote</a>.</p>`}
  },
  {
    slug:'standard-nbv-profiles', title:'Standard NbV Profiles', image, mainImage:image, secondImage,
    seoTitle:'Standard NbV Profiles for Combined Bearing Systems', h1Title:'Standard NbV Steel Profiles',
    summary:'Matched steel U-profiles for combined bearings, supplied in standard or cut-to-length configurations.',
    materialSlugs:['20mnsiv-steel'], capabilitySlugs:[], tolerance:'Profile and mating bearing confirmed together', leadTime:'Stock or cut-length availability confirmed by RFQ',
    content:{partOne:`<h2>Steel Profiles for Combined Bearings</h2><p>Standard NbV profiles form the guide track for combined-bearing linear systems used in forklift masts, telescopic columns and handling structures.</p><h3>NbV and JDG Profile References</h3><ul><li>Standard 0 NbV / JDG62</li><li>Standard 1 NbV / JDG70</li><li>Standard 2 NbV / JDG78</li><li>Standard 3 NbV / JDG89</li><li>Standard 4 NbV / JDG108</li><li>JDG123, JDG150 and JDG152 heavy profiles</li></ul>`,partTwo:`<h2>Profile Matching and Cut Lengths</h2><p>Profiles may be supplied in fixed lengths or cut to requirement. Confirm the NbV or JDG designation, matching <a href="/products/combined-bearings/">combined bearing model</a>, required length, quantity and surface condition.</p><p><a href="/contact/?product=standard-nbv-profiles">Request NbV profile dimensions and availability</a>.</p>`}
  },
  {
    slug:'special-track-roller-bearings', title:'Special Track Roller Bearings', image, mainImage:image, secondImage,
    seoTitle:'Special Track Roller Bearing Manufacturer | Custom Guide Rollers', h1Title:'Special and Custom Track Roller Bearings',
    summary:'Drawing-based guide rollers, profiled outer rings and modified track bearings for non-standard machinery.',
    materialSlugs:['bearing-steel'], capabilitySlugs:[], tolerance:'Drawing and operating data required', leadTime:'Engineering review required',
    content:{partOne:`<h2>Non-Standard Track Rollers</h2><p>Special track rollers can incorporate profiled outer rings, modified studs, unusual widths, special seals, high-temperature grease or application-specific mounting features.</p><h3>Typical Modifications</h3><ul><li>V-groove, U-groove and crowned running surfaces</li><li>Custom stud threads and eccentric collars</li><li>Alternative seals and lubrication holes</li><li>Special bearing steel and heat-treatment requirements</li></ul>`,partTwo:`<h2>What to Include with the Drawing</h2><p>Provide geometry, tolerances, mating track, load direction, speed, duty cycle, temperature and contamination conditions. Also review our standard <a href="/products/track-roller-bearings/">track roller bearing range</a>.</p><p><a href="/contact/?product=special-track-roller-bearings">Submit a custom roller drawing</a>.</p>`}
  }
];
