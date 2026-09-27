export type ProductItem = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  mainImage: string;
  secondImage: string;
  seoTitle: string;
  h1Title: string;
  summary: string;
  materialSlugs: string[];
  capabilitySlugs: string[];
  tolerance: string;
  leadTime: string;
  /**
   * 买家/整机厂/维修团队对该产品族使用的其他叫法与拼写变体
   * （含带空格与带连字符两种形态）。用于 "Also known as" 区块与 schema.org
   * 的 alternateName。属于识别线索，不构成互换认可。
   */
  alsoKnownAs: string[];
  seriesGroups: { label: string; references: string }[];
  selectionChecks: { label: string; detail: string }[];
  content: { partOne: string; partTwo: string };
};

const secondImage = "/images/bearing-dimensional-inspection.webp";

export const products: ProductItem[] = [
  {
    slug: "combined-bearings",
    title: "Combined Bearings",
    image: "/images/clean/combined-bearing-cutaway.webp",
    imageAlt:
      "4.058 combined roller bearing with radial and axial rollers, cutaway view",
    mainImage: "/images/clean/combined-bearing-cutaway.webp",
    secondImage,
    seoTitle: "Combined Bearings | Standard, Adjustable & Jumbo",
    h1Title: "Combined Bearings for Heavy Linear Motion",
    summary:
      "Standard, adjustable, high-load and welded-plate combined roller bearings for forklift masts, steel sections and lifting systems.",
    materialSlugs: ["bearing-steel"],
    capabilitySlugs: [],
    tolerance: "Model, dimensions and load data confirmed before quotation",
    leadTime: "Standard and drawing-based options quoted by requirement",
    alsoKnownAs: [
      "Combination bearings",
      "Combination roller bearings",
      "Combi bearings",
      "Combined roller bearings",
      "Heavy duty combined bearings",
      "Heavy-duty combined bearings",
      "Heavy duty cam followers",
      "High load roller bearings",
      "Mast guide bearings",
      "Forklift mast guide bearings",
      "Material handling guide bearings",
      "Finishing line bearings",
      "Steel section guide bearings",
      "WINKEL-type combined bearings",
    ],
    seriesGroups: [
      {
        label: "Standard combined bearings",
        references:
          "4.053, 4.054, 4.055, 4.056, 4.058, 4.059, 4.061, 4.062, 4.063",
      },
      { label: "Precision series", references: "PR4.054 through PR4.063" },
      {
        label: "Eccentric adjustable series",
        references: "4.454 through 4.463",
      },
      {
        label: "Jumbo high-load series",
        references: "4.085, 4.089, 4.090 through 4.096",
      },
      {
        label: "Welded plate assemblies",
        references: "AP0, AP1, AP2, AP2-LUB, AP2-Q, AP3.1, AP4, AP6, AP91-Q",
      },
    ],
    selectionChecks: [
      {
        label: "Identification",
        detail:
          "Complete bearing marking plus any MR, TR, JD or 400-series reference.",
      },
      {
        label: "Envelope",
        detail:
          "Outside diameter, overall width, shaft size and plate or profile geometry.",
      },
      {
        label: "Loading",
        detail: "Required radial and axial load, shock level and duty cycle.",
      },
      {
        label: "Adjustment",
        detail:
          "Fixed or eccentric axial roller and the required adjustment method.",
      },
      {
        label: "Environment",
        detail:
          "Speed, temperature, contamination, lubrication and sealing requirement.",
      },
    ],
    content: {
      partOne: `<h2>Standard and Non-Standard Combined Bearings</h2><p>We supply combined bearings — also searched as combination bearings — that carry radial and axial loads in one compact unit. Typical applications include forklift masts, telescopic columns, material-handling equipment and heavy linear guide systems.</p><h3>Combined Bearing Series and Keywords</h3><ul><li>Winkel-type standard combined bearings: 4.053, 4.054, 4.055, 4.056, 4.058, 4.059, 4.061, 4.062 and 4.063</li><li>Precision series: PR4.054–PR4.056 and PR4.058–PR4.063</li><li>Eccentric adjustable bearings: 4.454–4.463</li><li>Jumbo high-load bearings: 4.085, 4.089, 4.090–4.096</li><li>Combined bearings welded on AP0, AP1, AP2, AP2-LUB, AP2-Q, AP3.1, AP4, AP6 and AP91-Q plates</li></ul>`,
      partTwo: `<h2>Cross-Reference and Selection Support</h2><p>Common cross-reference terms include MR, TR, JD and 400-series designations, and this product family is also searched as combination bearings or combi bearings. Send the complete marking, outside diameter, width, shaft or plate details, radial load, axial load and operating temperature.</p><h3>Related Bearing Products</h3><p>Matched <a href="/products/standard-nbv-profiles/">Standard NbV profiles</a> are available for combined-bearing guide systems. For rolling tracks and cams, see <a href="/products/track-roller-bearings/">track roller bearings</a>.</p><p><a href="/contact/?product=combined-bearings">Request a combined bearing quotation</a></p>`,
    },
  },
  {
    slug: "track-roller-bearings",
    title: "Track Roller Bearings",
    image: "/images/clean/stud-track-roller.webp",
    imageAlt: "NUTR45100 yoke type track roller bearings on a mounting rail",
    mainImage: "/images/clean/stud-track-roller.webp",
    secondImage,
    seoTitle: "Track Roller Bearings | Yoke & Stud Rollers",
    h1Title: "Track Roller Bearings and Cam Followers",
    summary:
      "Yoke type and stud type track rollers for cam drives, conveyors, guideways and heavy-duty automation.",
    materialSlugs: ["bearing-steel"],
    capabilitySlugs: [],
    tolerance: "Bore or stud, OD, width, track profile and load checked",
    leadTime: "Quoted after model and quantity review",
    alsoKnownAs: [
      "Cam followers",
      "Cam follower bearings",
      "Cam follower rollers",
      "Track rollers",
      "Track roller bearings",
      "Yoke type track rollers",
      "Stud type track rollers",
      "Stud type cam followers",
      "Roller followers",
      "Idler rollers",
      "Guide rollers",
      "Needle roller track rollers",
      "Crowned roller followers",
      "PP sealed track rollers",
    ],
    seriesGroups: [
      { label: "Double-row yoke rollers", references: "NNTR, RSU" },
      { label: "Full-complement yoke rollers", references: "NUTR, PWTR" },
      {
        label: "Needle roller yoke followers",
        references: "NATR5-PP–NATR50-PP, NATV5-PP–NATV50-PP",
      },
      {
        label: "Full-complement stud followers",
        references: "KRV16-PP through KRV90-PP",
      },
      {
        label: "Stud type cam followers",
        references: "NUKR35 through NUKR110, NUKRE, CF",
      },
      {
        label: "Profiled track rollers",
        references: "LFR and drawing-based groove profiles",
      },
    ],
    selectionChecks: [
      {
        label: "Mounting",
        detail:
          "Confirm yoke bore mounting or stud mounting, including thread and shoulder details.",
      },
      {
        label: "Running surface",
        detail:
          "Crowned, convex, cylindrical, V-groove or other profiled outer ring.",
      },
      {
        label: "Envelope",
        detail:
          "Bore or stud diameter, outside diameter, outer-ring width and overall width.",
      },
      {
        label: "Track duty",
        detail:
          "Radial load, occasional axial load, speed, shock and track hardness.",
      },
      {
        label: "Lubrication",
        detail:
          "Sealed-for-life or relubricable construction and grease compatibility.",
      },
    ],
    content: {
      partOne: `<h2>Yoke Type and Stud Type Track Roller Bearings</h2><p>Track rollers use a thick-section outer ring to run directly on tracks, cams and guide surfaces. We support full-complement, caged, sealed, crowned and cylindrical outer-ring designs.</p><h3>Popular Track Roller Series</h3><ul><li>NNTR and RSU double-row yoke track rollers</li><li>NUTR and PWTR full-complement yoke rollers</li><li>NUKR, NUKRE, KR, KRV and CF stud type cam followers</li><li>NATR and NATV needle roller track rollers</li><li>LFR profiled outer-ring track rollers</li></ul>`,
      partTwo: `<h2>Model and Dimension Keywords</h2><p>Frequently requested references include NNTR50X130X65-2ZL, NNTR5013065, RSU50-130, NUTR50110, NUTR2562, NUTR45100, NUKR72, NUKR90, NUKR110 and KRV35PP.</p><h3>How to Specify a Track Roller</h3><p>Provide mounting type, bore or stud diameter, outside diameter, width, track geometry, radial load, axial load, speed, shock level and relubrication requirement.</p><p>Compare <a href="/products/special-track-roller-bearings/">special track rollers</a> or <a href="/contact/?product=track-roller-bearings">send a track roller RFQ</a>.</p>`,
    },
  },
  {
    slug: "full-complement-cylindrical-roller-bearings",
    title: "Full Complement Cylindrical Roller Bearings",
    image: "/images/clean/full-complement-cylindrical-roller.webp",
    imageAlt: "SL045010PP full complement cylindrical roller bearing",
    mainImage: "/images/clean/full-complement-cylindrical-roller.webp",
    secondImage,
    seoTitle: "Full Complement Roller Bearings | SL Series",
    h1Title: "Full Complement Cylindrical Roller Bearings",
    summary:
      "High radial-load cylindrical roller bearings for gearboxes, rope sheaves, extruders and industrial drives.",
    materialSlugs: ["bearing-steel"],
    capabilitySlugs: [],
    tolerance: "Internal clearance, locating function and lubrication reviewed",
    leadTime: "Series and quantity dependent",
    alsoKnownAs: [
      "Full complement roller bearings",
      "Full-complement cylindrical roller bearings",
      "Maximum capacity cylindrical roller bearings",
      "Non-caged cylindrical roller bearings",
      "SL series bearings",
      "SL01 / SL02 / SL04 roller bearings",
      "SL18 / SL19 single row roller bearings",
      "RSL series roller bearings",
      "Sealed full complement roller bearings",
      "Sheave and gearbox roller bearings",
    ],
    seriesGroups: [
      {
        label: "Locating and semi-locating designs",
        references: "SL01, SL02, SL04, SL05, SL06",
      },
      {
        label: "Single-row full-complement designs",
        references: "SL18 2205–2206, SL18 3004–3010, SL19, NCF",
      },
      {
        label: "Double-row and multi-row equivalents",
        references: "NNCF, NNCL and application-specific designs",
      },
      {
        label: "Sealed variants",
        references: "PP, 2RS and manufacturer-specific suffixes",
      },
    ],
    selectionChecks: [
      {
        label: "Dimensions",
        detail:
          "Confirm bore d, outside diameter D and width B from the bearing or drawing.",
      },
      {
        label: "Locating function",
        detail:
          "Determine whether the bearing must locate the shaft axially in one or both directions.",
      },
      {
        label: "Internal design",
        detail:
          "Single-row, double-row or multi-row arrangement and open or sealed construction.",
      },
      {
        label: "Operating fit",
        detail:
          "Required internal clearance, shaft and housing fits and operating temperature.",
      },
      {
        label: "Lubrication and speed",
        detail:
          "Oil or grease method, relubrication interval and limiting operating speed.",
      },
    ],
    content: {
      partOne: `<h2>High-Capacity Full Complement Roller Bearings</h2><p>Without a cage, full-complement cylindrical roller bearings contain the maximum number of rollers and provide very high radial load capacity in a compact envelope.</p><h3>SL and Equivalent Series</h3><ul><li>SL01, SL02, SL04, SL05 and SL06 series</li><li>SL18 single-row and SL19 single-row series</li><li>RSL, NCF, NJG, NNCL and NNCF designs</li><li>Open, sealed, single-row, double-row and multi-row variants</li></ul>`,
      partTwo: `<h2>Application and Selection Data</h2><p>Common uses include industrial gearboxes, cable sheaves, lifting equipment, extruders and slow-to-medium-speed heavy drives. Confirm d × D × B dimensions, axial locating requirement, internal clearance, speed and oil or grease lubrication.</p><p>For track-running outer rings, see <a href="/products/track-roller-bearings/">track roller bearings</a>. <a href="/contact/?product=full-complement-cylindrical-roller-bearings">Request an SL-series cross-reference</a>.</p>`,
    },
  },
  {
    slug: "backup-roller-bearings",
    title: "Back-up Roller Bearings",
    image: "/images/clean/backup-roller.webp",
    imageAlt: "NNTR heavy-duty support roller bearing, cutaway view",
    mainImage: "/images/clean/backup-roller.webp",
    secondImage,
    seoTitle: "Back-up Rollers for Levelers & Straighteners",
    h1Title: "Back-up Roller Bearings for Metal Processing",
    summary:
      "Back-up rollers with or without pivot for levelers, straighteners and steel coil processing lines.",
    materialSlugs: ["bearing-steel"],
    capabilitySlugs: [],
    tolerance: "Outer profile and shaft geometry confirmed from drawing",
    leadTime: "Custom design and quantity dependent",
    alsoKnownAs: [
      "Back-up rollers",
      "Back up rollers",
      "Backup roll assemblies",
      "Leveler back-up rollers",
      "Straightener support rollers",
      "Strip line support rollers",
      "Pivot back-up rollers",
      "Double back-up rolls",
      "Cluster mill support rollers",
      "Work roll support rollers",
    ],
    seriesGroups: [
      {
        label: "Without pivot",
        references: "Bore-mounted back-up rolls and NNTR-style support rollers",
      },
      {
        label: "With pivot",
        references:
          "Integrated shaft and customer-specific shaft-end executions",
      },
      {
        label: "Double back-up rolls",
        references:
          "Paired support roller arrangements for leveler applications",
      },
      {
        label: "Drawing-based designs",
        references:
          "Cylindrical or crowned outer profile, custom sealing and lubrication",
      },
    ],
    selectionChecks: [
      {
        label: "Drawing",
        detail:
          "Provide d, D, B, C, overall length, shaft ends and fixing details.",
      },
      {
        label: "Outer profile",
        detail:
          "Confirm cylindrical, crowned or application-specific roll geometry.",
      },
      {
        label: "Process load",
        detail:
          "Strip material, work-roll force, line speed and expected shock loading.",
      },
      {
        label: "Accuracy",
        detail: "Runout, profile tolerance and surface-finish requirements.",
      },
      {
        label: "Lubrication",
        detail:
          "Sealed or relubricable design, lubricant and contamination conditions.",
      },
    ],
    content: {
      partOne: `<h2>Back-up Rollers for Leveler and Straightener Machines</h2><p>Back-up roller bearings support work rolls and help maintain strip flatness in metal processing equipment. Designs are available with pivot, without pivot, as double back-up rolls and with customer-specific shaft ends.</p><h3>Design Options</h3><ul><li>Cylindrical or crowned outer-ring profile</li><li>Sealed or relubricable internal design</li><li>Custom shaft-end mounting and fixing methods</li><li>Special heat treatment for heavy rolling-line duty</li></ul>`,
      partTwo: `<h2>Required Back-up Roller Data</h2><p>Send the complete drawing or d, D, B, C and overall-length dimensions, outer profile, strip material, process force, line speed, lubrication and sealing requirements.</p><p>Heavy-duty NNTR-style rollers may also be reviewed under <a href="/products/track-roller-bearings/">track roller bearings</a>. <a href="/contact/?product=backup-roller-bearings">Send a back-up roller drawing</a>.</p>`,
    },
  },
  {
    slug: "cross-roller-bearings",
    title: "Cross Roller Bearings",
    image: "/images/clean/crossed-roller-bearing.webp",
    imageAlt: "CSF17 cross roller bearing for harmonic reducers and robotics",
    mainImage: "/images/clean/crossed-roller-bearing.webp",
    secondImage,
    seoTitle: "Cross Roller Bearings | Robotics & Rotary Tables",
    h1Title: "Precision Cross Roller Bearings",
    summary:
      "High-rigidity crossed roller bearings for robotics, harmonic reducers, rotary tables and positioning equipment.",
    materialSlugs: ["bearing-steel"],
    capabilitySlugs: [],
    tolerance: "Accuracy, clearance or preload confirmed by application",
    leadTime: "Model and precision class dependent",
    alsoKnownAs: [
      "Crossed roller bearings",
      "Cross roller bearings",
      "Crossed cylindrical roller bearings",
      "X roller bearings",
      "Harmonic reducer bearings",
      "Robot joint bearings",
      "Hollow rotary table bearings",
      "Precision index table bearings",
      "Turntable bearings",
      "Rotary positioning bearings",
    ],
    seriesGroups: [
      { label: "Harmonic reducer bearings", references: "CSF, CSG, SHF, SHG" },
      { label: "Integrated mounting-hole types", references: "RU, CRBH, CRBF" },
      {
        label: "Hollow rotary platform bearings",
        references: "AKD and application-specific rotary-table designs",
      },
      {
        label: "Requested examples",
        references: "CSF-14, CSF17, SHF-20, AKD60",
      },
    ],
    selectionChecks: [
      {
        label: "Envelope",
        detail: "Bore, outside diameter, width and mounting-hole pattern.",
      },
      {
        label: "Accuracy",
        detail: "Required runout or precision class for the rotating assembly.",
      },
      {
        label: "Internal condition",
        detail: "Clearance or preload and the permitted starting torque.",
      },
      {
        label: "Combined load",
        detail: "Radial, axial and moment load with the actual duty cycle.",
      },
      {
        label: "Assembly",
        detail:
          "Housing rigidity, bolt pattern, lubrication and installation sequence.",
      },
    ],
    content: {
      partOne: `<h2>Cross Roller Bearings for Combined Loads</h2><p>Alternating cylindrical rollers allow one compact bearing to carry radial, axial and moment loads. The arrangement provides high rigidity and rotational accuracy for precision equipment.</p><h3>Common Cross Roller Bearing Series</h3><ul><li>CSF and CSG harmonic reducer bearings</li><li>SHF and SHG crossed roller bearings</li><li>RU, CRBH, CRBF and integrated mounting-hole designs</li><li>AKD hollow rotary-platform bearings</li></ul>`,
      partTwo: `<h2>Robotics and Precision Applications</h2><p>Typical applications include robot joints, harmonic reducers, hollow rotary tables, inspection equipment and compact rotary positioning systems. Provide d × D × B, mounting-hole pattern, runout class, clearance or preload and combined-load data.</p><p>Example search references include CSF-14, CSF17, SHF-20 and AKD60. <a href="/contact/?product=cross-roller-bearings">Request a cross roller bearing quote</a>.</p>`,
    },
  },
  {
    slug: "standard-nbv-profiles",
    title: "Standard NbV Profiles",
    image: "/images/clean/steel-guide-profiles.webp",
    imageAlt: "Standard 1 NbV steel U-profile sections for combined bearings",
    mainImage: "/images/clean/steel-guide-profiles.webp",
    secondImage,
    seoTitle: "Standard NbV Profiles for Combined Bearing Systems",
    h1Title: "Standard NbV Steel Profiles",
    summary:
      "Matched steel U-profiles for combined bearings, supplied in standard or cut-to-length configurations.",
    materialSlugs: ["20mnsiv-steel"],
    capabilitySlugs: [],
    tolerance: "Profile and mating bearing confirmed together",
    leadTime: "Stock or cut-length availability confirmed by RFQ",
    alsoKnownAs: [
      "NbV profiles",
      "NBV profile rails",
      "Standard NbV steel profiles",
      "U-channel guide rails",
      "C-profile guide rails",
      "Steel guide profiles",
      "Guide profiles",
      "Combined bearing guide rails",
      "JDG profile rails",
      "Cut-to-length guide profiles",
    ],
    seriesGroups: [
      {
        label: "Light profile references",
        references: "Standard 0 NbV / JDG62; Standard 1 NbV / JDG70",
      },
      {
        label: "Medium profile references",
        references: "Standard 2 NbV / JDG78; Standard 3 NbV / JDG89",
      },
      {
        label: "Heavy profile references",
        references: "Standard 4 NbV / JDG108; JDG123, JDG150, JDG152",
      },
      {
        label: "Supply formats",
        references: "Standard fixed length or cut-to-length after confirmation",
      },
    ],
    selectionChecks: [
      {
        label: "Profile reference",
        detail:
          "NbV, JDG or drawing designation and the required section geometry.",
      },
      {
        label: "Mating bearing",
        detail:
          "Combined bearing model and required running clearance in the guide.",
      },
      {
        label: "Length",
        detail: "Finished length, cutting tolerance and end preparation.",
      },
      {
        label: "Surface condition",
        detail: "As-rolled, blasted, primed or other agreed condition.",
      },
      {
        label: "Logistics",
        detail:
          "Quantity, bundle length, destination and unloading constraints.",
      },
    ],
    content: {
      partOne: `<h2>Steel Profiles for Combined Bearings</h2><p>Standard NbV profiles form the guide track for combined-bearing linear systems used in forklift masts, telescopic columns and handling structures.</p><h3>NbV and JDG Profile References</h3><ul><li>Standard 0 NbV / JDG62</li><li>Standard 1 NbV / JDG70</li><li>Standard 2 NbV / JDG78</li><li>Standard 3 NbV / JDG89</li><li>Standard 4 NbV / JDG108</li><li>JDG123, JDG150 and JDG152 heavy profiles</li></ul>`,
      partTwo: `<h2>Profile Matching and Cut Lengths</h2><p>Profiles may be supplied in fixed lengths or cut to requirement. Confirm the NbV or JDG designation, matching <a href="/products/combined-bearings/">combined bearing model</a>, required length, quantity and surface condition.</p><p><a href="/contact/?product=standard-nbv-profiles">Request NbV profile dimensions and availability</a>.</p>`,
    },
  },
  {
    slug: "special-track-roller-bearings",
    title: "Special Track Roller Bearings",
    image: "/images/clean/stud-track-roller.webp",
    imageAlt:
      "F-93666.2 special track roller bearing for non-standard machinery",
    mainImage: "/images/clean/stud-track-roller.webp",
    secondImage,
    seoTitle: "Custom Track Rollers | Drawing-Based Bearings",
    h1Title: "Special and Custom Track Roller Bearings",
    summary:
      "Drawing-based guide rollers, profiled outer rings and modified track bearings for non-standard machinery.",
    materialSlugs: ["bearing-steel"],
    capabilitySlugs: [],
    tolerance: "Drawing and operating data required",
    leadTime: "Engineering review required",
    alsoKnownAs: [
      "Special track rollers",
      "Custom track rollers",
      "Custom cam followers",
      "Drawing-based roller bearings",
      "Non-standard track rollers",
      "V-groove guide rollers",
      "U-groove guide rollers",
      "Eccentric collar cam followers",
      "Smooth stud rollers",
      "High temperature track rollers",
    ],
    seriesGroups: [
      {
        label: "Profiled outer rings",
        references:
          "V-groove, U-groove, concave, crowned and drawing-based profiles",
      },
      {
        label: "Modified mounting",
        references:
          "Custom stud threads, smooth studs, bores and eccentric collars",
      },
      {
        label: "Environmental variants",
        references:
          "Alternative seals, lubrication holes and high-temperature grease",
      },
      {
        label: "Material variants",
        references:
          "Bearing steel and application-specific heat-treatment requirements",
      },
    ],
    selectionChecks: [
      {
        label: "Controlled drawing",
        detail:
          "Dimensioned drawing with tolerances, revisions and critical characteristics.",
      },
      {
        label: "Mating track",
        detail: "Track geometry, hardness, surface finish and alignment.",
      },
      {
        label: "Operating duty",
        detail:
          "Load direction, speed, shock, duty cycle and expected service life.",
      },
      {
        label: "Environment",
        detail:
          "Temperature, contamination, corrosion exposure and lubricant restrictions.",
      },
      {
        label: "Commercial data",
        detail:
          "Prototype and annual quantity, target delivery and destination.",
      },
    ],
    content: {
      partOne: `<h2>Non-Standard Track Rollers</h2><p>Special track rollers can incorporate profiled outer rings, modified studs, unusual widths, special seals, high-temperature grease or application-specific mounting features.</p><h3>Typical Modifications</h3><ul><li>V-groove, U-groove and crowned running surfaces</li><li>Custom stud threads and eccentric collars</li><li>Alternative seals and lubrication holes</li><li>Special bearing steel and heat-treatment requirements</li></ul>`,
      partTwo: `<h2>What to Include with the Drawing</h2><p>Provide geometry, tolerances, mating track, load direction, speed, duty cycle, temperature and contamination conditions. Also review our standard <a href="/products/track-roller-bearings/">track roller bearing range</a>.</p><p><a href="/contact/?product=special-track-roller-bearings">Submit a custom roller drawing</a>.</p>`,
    },
  },
  {
    slug: "u-channel-profile-rails",
    title: "U-Channel Profile Rails",
    image: "/images/clean/steel-guide-profiles.webp",
    imageAlt:
      "U-channel steel profile rails cut to length for combined bearing guide systems",
    mainImage: "/images/clean/steel-guide-profiles.webp",
    secondImage,
    seoTitle: "U-Channel Profile Rails | C-Profile Guide Rails",
    h1Title: "U-Channel and C-Profile Guide Rails",
    summary:
      "Steel U-channel and C-profile guide rails for combined-bearing linear systems, supplied as standard NbV/JDG sections or cut to length.",
    materialSlugs: ["20mnsiv-steel"],
    capabilitySlugs: [],
    tolerance:
      "Section reference, steel grade and cut length confirmed together",
    leadTime: "Stock section or cut-to-length availability confirmed by RFQ",
    alsoKnownAs: [
      "U-channel rails",
      "U channel guide rails",
      "C-profile guide rails",
      "C-channel rails",
      "U-profile guide rails",
      "NbV profile rails",
      "Steel guide profiles",
      "Combined bearing guide rails",
    ],
    seriesGroups: [
      {
        label: "Light sections",
        references: "Standard 0 NbV / JDG62; Standard 1 NbV / JDG70",
      },
      {
        label: "Medium sections",
        references: "Standard 2 NbV / JDG78; Standard 3 NbV / JDG89",
      },
      {
        label: "Heavy sections",
        references: "Standard 4 NbV / JDG108; JDG123, JDG150, JDG152",
      },
      {
        label: "Rail steel",
        references:
          "20MnSiV guide steel; running-surface hardness agreed per order",
      },
      {
        label: "Supply formats",
        references: "Standard fixed length or cut to length after confirmation",
      },
    ],
    selectionChecks: [
      {
        label: "Section reference",
        detail:
          "NbV, JDG or drawing designation with the required web and flange dimensions.",
      },
      {
        label: "Matched bearing",
        detail:
          "Combined bearing model plus the running clearance required in the assembled guide.",
      },
      {
        label: "Rail steel",
        detail:
          "Steel grade, running-surface condition and any hardness or heat-treatment requirement.",
      },
      {
        label: "Length and ends",
        detail:
          "Finished length, cutting tolerance, straightness, end preparation and hole or fixing details.",
      },
      {
        label: "Surface and logistics",
        detail:
          "As-rolled, blasted or primed condition, bundle length, quantity and unloading constraints.",
      },
    ],
    content: {
      partOne: `<h2>Steel U-Channel and C-Profile Guide Rails</h2><p>A U-channel or C-profile rail is the running track of a combined-bearing linear system. The radial roller runs on the rail web while the axial roller guides against the flange, so the section geometry, steel grade and straightness set both the load path and the available running clearance.</p><h3>How the Rail and Bearing Work Together</h3><ul><li>The web carries the radial load transferred by the radial roller</li><li>The flange guides the axial roller and controls lateral position</li><li>Section height and flange thickness decide the mounting envelope</li><li>Straightness and support spacing control carriage smoothness</li></ul><p>Rails are supplied as the Standard 0 to 4 NbV sections and the heavier JDG123, JDG150 and JDG152 profiles. Each section is matched to a defined range of <a href="/products/combined-bearings/">combined bearing models</a>.</p>`,
      partTwo: `<h2>Section Data, Matching and Ordering</h2><p>Our <a href="/products/standard-nbv-profiles/">Standard NbV profile range</a> lists the individual section references with article numbers, mass and matched bearing classes. Use the <a href="/tools/combined-bearing-selector/">bearing and profile matching tool</a> to check a combination, then confirm the controlled drawing.</p><h3>What to Send with an Enquiry</h3><p>Provide the section reference or section drawing, the mating bearing model, required length and quantity, rail steel, surface condition, straightness requirement and delivery destination. Cut lengths are confirmed against stock before the order is accepted.</p><p>Running clearance depends on alignment as well as section, so review the <a href="/resources/combined-bearing-rail-clearance-alignment/">rail clearance and alignment guide</a> before installation. <a href="/contact/?product=u-channel-profile-rails">Request U-channel rail dimensions and availability</a>.</p>`,
    },
  },
  {
    slug: "clamp-flanges",
    title: "Clamp Flanges",
    image: "/images/clean/adjustable-combined-bearing.webp",
    imageAlt:
      "Adjustable clamp flange and axial support hardware for a combined bearing guide",
    mainImage: "/images/clean/adjustable-combined-bearing.webp",
    secondImage,
    seoTitle: "Adjustable Clamp Flanges | Axial Support Flanges",
    h1Title: "Clamp Flanges and Adjustable Axial Supports",
    summary:
      "Clamp flanges, axial support units and adjustment washers that set and lock the axial clearance of a combined bearing guide system.",
    materialSlugs: ["bearing-steel"],
    capabilitySlugs: [],
    tolerance: "Adjustment method, range and access confirmed with the bearing",
    leadTime: "Model, adjustment design and quantity dependent",
    alsoKnownAs: [
      "Clamp flange",
      "Adjustable clamp flanges",
      "Axial support flange",
      "Axial guide flange",
      "Eccentric adjustment flange",
      "Screw adjustment flange",
      "Bearing clamp plate",
      "Shim adjustment flange",
    ],
    seriesGroups: [
      {
        label: "Eccentric pin adjustment",
        references: "4.454–4.463 eccentric adjustable combined bearings",
      },
      {
        label: "Screw adjustment (UNI 5929 / DIN 916)",
        references: "MR.961–MR.968 screw-adjustable series",
      },
      {
        label: "Shim and adapter washers",
        references: "0.3 / 0.5 / 1.0 mm adapter washers on MR.146–MR.154",
      },
      {
        label: "Externally adjustable units",
        references: "MR4180–MR4188 external adjustment range",
      },
      {
        label: "Welded clamp plates",
        references:
          "AP0, AP1, AP2, AP2-LUB, AP2-Q, AP3.1, AP4, AP6, AP91-Q, AP92-Q",
      },
    ],
    selectionChecks: [
      {
        label: "Adjustment method",
        detail:
          "Eccentric pin, adjustment screw, shim or adapter washer set, or external adjustment unit.",
      },
      {
        label: "Range and access",
        detail:
          "Total adjustment travel and the tool direction available with the carriage assembled.",
      },
      {
        label: "Axial duty",
        detail:
          "Applied axial load, shock level and whether the clamp locates in one or both directions.",
      },
      {
        label: "Locking",
        detail:
          "Locking screw, tab, pin or torque requirement after the clearance has been set.",
      },
      {
        label: "Interface",
        detail:
          "Plate hole pattern, bearing datum, weld or bolt fixing and removal access.",
      },
    ],
    content: {
      partOne: `<h2>Setting Axial Clearance in a Combined Bearing Guide</h2><p>In a combined-bearing system the radial roller carries the main load, so axial position is set separately by a clamp flange, axial support unit or adjustment washer stack. The adjustment hardware decides how accurately clearance can be set after the structure is welded or bolted.</p><h3>Adjustment Designs</h3><ul><li>Eccentric pin adjustment on the 4.454–4.463 series</li><li>Screw adjustment to UNI 5929 / DIN 916 on the MR.961–MR.968 series</li><li>Adapter and shim washers of 0.3, 0.5 and 1.0 mm on the MR.1xx high-load range</li><li>Externally adjustable MR4180–MR4188 units for large steel-section guides</li><li>Welded clamp plates that carry the bearing as a replaceable assembly</li></ul>`,
      partTwo: `<h2>Adjustment, Locking and Replacement</h2><p>Clamp hardware compensates for assembly clearance; it does not correct a distorted or mismatched guide profile. Set the adjustment at the tightest position in the travel, lock it to the approved torque and then verify clearance across the full stroke. Follow the <a href="/resources/eccentric-combined-bearing-adjustment/">eccentric bearing adjustment guide</a> for the setup sequence.</p><h3>Choosing Between Screw, Shim and Eccentric</h3><p>Screw adjustment is convenient where a tool can reach the axial support. Shim and adapter washers give a defined step change but need the assembly opened. Eccentric designs allow fine adjustment on a single bearing. Where replacement access matters, review <a href="/products/flange-plates/">welded flange plates</a> and the <a href="/solutions/adjustable-combined-bearings/">adjustable combined bearing range</a>.</p><p><a href="/contact/?product=clamp-flanges">Send the axial support drawing for review</a>.</p>`,
    },
  },
  {
    slug: "flange-plates",
    title: "Welded Flange Plates",
    image: "/images/clean/plate-mounted-combined-bearing.webp",
    imageAlt:
      "Welded AP-series flange plate carrying a plate-mounted combined bearing",
    mainImage: "/images/clean/plate-mounted-combined-bearing.webp",
    secondImage,
    seoTitle: "Welded Flange Plates | AP Series Mounting Plates",
    h1Title: "Welded Flange Plates and Mounting Plates",
    summary:
      "AP-series welded flange plates that carry a combined bearing as a replaceable unit for masts, columns and steel-section guide systems.",
    materialSlugs: ["bearing-steel"],
    capabilitySlugs: [],
    tolerance:
      "Plate drawing, datum and weld orientation confirmed before welding",
    leadTime: "Plate model or drawing and quantity dependent",
    alsoKnownAs: [
      "Flange plates",
      "Welded flange plate",
      "Welded mounting plate",
      "Bearing mounting plate",
      "AP plate assembly",
      "Welded bearing plate",
      "Plate-mounted combined bearing",
      "Weld-on bearing plate",
    ],
    seriesGroups: [
      {
        label: "Standard plate assemblies",
        references: "AP0, AP1, AP2, AP2-LUB, AP2-Q, AP3.1, AP4, AP6",
      },
      {
        label: "Jumbo plate assemblies",
        references: "AP91-Q with 4.091; AP92-Q with 4.092",
      },
      {
        label: "Plate plus bearing supply",
        references:
          "Bearing mounted, welded and verified as one supplied assembly",
      },
      {
        label: "Drawing-based plates",
        references:
          "Custom hole pattern, plate thickness, bearing datum and weld preparation",
      },
    ],
    selectionChecks: [
      {
        label: "Plate drawing",
        detail:
          "Dimensioned plate drawing with hole pattern, thickness, datums and revisions.",
      },
      {
        label: "Bearing interface",
        detail:
          "Combined bearing model, hub or bore fit and the required axial roller direction.",
      },
      {
        label: "Weld design",
        detail:
          "Weld preparation, sequence and the heat-input limit that protects the bearing.",
      },
      {
        label: "Structure",
        detail:
          "Supporting member thickness, stiffness and the applied radial, axial and moment load.",
      },
      {
        label: "Service access",
        detail:
          "Whether the bearing alone or the complete plate assembly will be replaced on site.",
      },
    ],
    content: {
      partOne: `<h2>Flange Plates for Replaceable Combined Bearings</h2><p>A welded flange plate carries the combined bearing as a separate unit, so the plate can be welded to the structure and the bearing replaced without reworking the weld. This keeps critical welding away from the rollers and hardened running surfaces and makes replacement repeatable.</p><h3>Why Use a Plate Instead of Welding the Bearing</h3><ul><li>Welding heat stays away from the bearing and its seals</li><li>Bearing datum and orientation are set by the plate, not by site work</li><li>Replacement is a bearing change rather than a structural repair</li><li>Hole pattern and plate thickness are agreed once and repeated</li></ul>`,
      partTwo: `<h2>Ordering a Plate Assembly</h2><p>AP plate assemblies can be supplied with the bearing already mounted and verified, or as plates for an existing bearing. Send the plate drawing, the bearing model or complete marking, the required axial roller direction, quantity and destination.</p><p>Plate welding and orientation are covered in the <a href="/resources/welding-combined-bearing-hub/">combined bearing welding guide</a>. For clearance setting after assembly, see <a href="/products/clamp-flanges/">clamp flanges and axial supports</a>, or review the <a href="/solutions/welded-plate-combined-bearings/">welded plate combined bearing guide</a>.</p><p><a href="/contact/?product=flange-plates">Send a flange plate drawing for quotation</a>.</p>`,
    },
  },
];
