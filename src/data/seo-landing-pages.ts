export type SeoLandingPage = {
  slug: string;
  cluster: 'Bearing Designs' | 'Applications' | 'Buyer Support';
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  sections: { heading: string; body: string; bullets: string[] }[];
  related: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
  table?: { heading: string; note?: string; columns: string[]; rows: { cells: string[]; href?: string }[] };
};

const productLinks = [
  { label: 'Combined bearing model directory', href: '/products/combined-bearings/' },
  { label: 'Standard NbV profiles', href: '/products/standard-nbv-profiles/' },
  { label: 'Request specification review', href: '/contact/?source=solution-page' },
];

const page = (
  slug: string,
  cluster: SeoLandingPage['cluster'],
  title: string,
  keyword: string,
  intro: string,
  sections: SeoLandingPage['sections'],
  related = productLinks,
): SeoLandingPage => ({
  slug,
  cluster,
  title,
  seoTitle: `${keyword} | Technical Guide`,
  description: `Technical selection guide for ${keyword.toLowerCase()}. Compare designs, dimensions, applications and RFQ data before ordering.`,
  intro,
  sections,
  related,
  faqs: [
    { question: `How do I specify ${keyword.toLowerCase()}?`, answer: 'Send the complete model, all suffixes, quantity, delivery country and a controlled drawing when available. Also state load, speed, environment and mounting details.' },
    { question: `Can you verify an equivalent ${keyword.toLowerCase()}?`, answer: 'Yes. Cross-reference numbers start the review, but interchangeability is confirmed from dimensions, internal design, adjustment, load capacity, lubrication and operating conditions.' },
    { question: 'What information is required for a quotation?', answer: 'Provide the old marking, photos or drawing, critical dimensions, application, quantity and destination. Required inspection documents should be stated before quotation.' },
  ],
});

export const seoLandingPages: SeoLandingPage[] = [
  page('adjustable-combined-bearings','Bearing Designs','Adjustable Combined Bearings','Adjustable Combined Bearings','Eccentric and screw-adjustable combined bearings allow axial clearance to be set in steel-section guide systems.',[
    {heading:'Adjustment designs',body:'The axial roller may be positioned by an eccentric pin, external hex or screw mechanism. The adjustment range and access direction must match the assembly.',bullets:['4.454–4.463 eccentric series','KRES external-adjustment references','Jumbo 4.090–4.096 designs']},
    {heading:'Selection checks',body:'A similar radial roller diameter does not prove interchangeability. Confirm the shaft, axial roller position and minimum-to-maximum setting.',bullets:['Radial and axial load','Adjustment direction and range','Profile clearance and lubrication']},
  ], [
    { label: '4.454 eccentric', href: '/products/combined-bearings/winkel-4-454/' },
    { label: '4.458 eccentric', href: '/products/combined-bearings/winkel-4-458/' },
    { label: '4.091 jumbo adjustable', href: '/products/combined-bearings/winkel-4-091/' },
    { label: 'Combined bearing model directory', href: '/products/combined-bearings/' },
    { label: 'Request specification review', href: '/contact/?source=solution-adjustable' },
  ]),
  page('fixed-axial-combined-bearings','Bearing Designs','Fixed Axial Combined Bearings','Fixed Axial Combined Bearings','Fixed-axial designs combine a radial roller and non-adjustable axial support in one compact mast bearing.',[
    {heading:'Standard model range',body:'The standard 4.053–4.064 family serves forklift masts, lifting columns and material-handling guide systems.',bullets:['Compact fixed geometry','Radial and axial guidance','Matched steel profile selection']},
    {heading:'Replacement review',body:'Cross references from WINKEL, CR, Libe, Alfatec and JD families should be checked against the current drawing.',bullets:['d, D, H, h and B dimensions','Load ratings and speed','Seal and grease execution']},
  ]),
  {
    ...page('combined-bearing-types','Bearing Designs','Combined Bearing Types','Combined Bearing Types','Combined bearings carry radial and axial loads in one unit, but the internal construction differs by family. Compare roller-based, needle-thrust and crossed roller designs before specifying a replacement.',[
    {heading:'Roller-based combined bearings (WINKEL type)',body:'A radial cylindrical roller and an axial roller run inside a mating steel profile. This is the standard design for forklift masts, telescopic columns and heavy linear guide systems, and it is our main supply range.',bullets:['Standard 4.053–4.064 and precision PR4.xxx','Eccentric adjustable 4.454–4.463','Jumbo high-load 4.085 and 4.089–4.096']},
    {heading:'Needle roller thrust combinations (NAX / NKX type)',body:'These combine a needle radial bearing with a thrust ball or roller bearing in one housed unit for gearboxes and compact transmissions. They are a different family from profile-running combined rollers and are listed here for identification; send the complete marking for an equivalent review.',bullets:['NAX, NKX and NAXI series references','Housed mounting, not profile-running','Thrust direction and lubrication must be confirmed']},
    {heading:'Crossed roller bearings',body:'Alternating crossed rollers in one raceway carry radial, axial and moment loads with high rigidity. Typical uses are robot joints, harmonic reducers, hollow rotary platforms and precision rotary tables.',bullets:['CSF / SHF harmonic reducer bearings','RB, CRB, RU and mounting-hole types','Accuracy class and preload set by application']},
    {heading:'How to choose between types',body:'Start from the mounting arrangement, not the load alone. Profile-running combined rollers suit linear guide structures, housed needle-thrust units suit gearbox shafts, and crossed roller bearings suit precision rotation under combined moment loads.',bullets:['Profile-running or housed mounting','Load directions and moment component','Rigidity, accuracy and adjustment requirements']},
  ], [
    { label: 'Combined roller bearings', href: '/products/combined-bearings/' },
    { label: 'WINKEL cross reference', href: '/solutions/winkel-bearing-cross-reference/' },
    { label: 'Cross roller bearings', href: '/products/cross-roller-bearings/' },
    { label: 'Combined bearing model directory', href: '/products/combined-bearings/' },
    { label: 'Request type review', href: '/contact/?source=solution-bearing-types' },
  ]),
    seoTitle: 'Combined Bearing Types: Roller, Needle Thrust & Cross Roller',
    description: 'Compare combined bearing types: WINKEL-type combined roller bearings, NAX/NKX needle roller thrust bearings and crossed roller bearings, with selection guidance.',
    table: {
      heading: 'Combined bearing type comparison',
      note: 'We supply WINKEL-type combined roller bearings and crossed roller bearings. Needle-thrust combinations are listed for identification; send the complete marking for an equivalent review.',
      columns: ['Type', 'Construction', 'Typical series', 'Typical use'],
      rows: [
        { cells: ['Combined roller bearings (WINKEL type)', 'Radial + axial cylindrical rollers, profile-running', '4.053–4.096, PR4.xxx, 4.454–4.463', 'Forklift masts, heavy linear guides'], href: '/products/combined-bearings/' },
        { cells: ['Needle roller thrust bearings', 'Needle radial + thrust ball or roller, housed unit', 'NAX, NKX, NAXI', 'Gearboxes, compact transmissions'] },
        { cells: ['Crossed roller bearings', 'Alternating crossed rollers in one raceway', 'RB, CRB, CSF, SHF', 'Robotics, reducers, rotary tables'], href: '/products/cross-roller-bearings/' },
      ],
    },
  },
  page('welded-plate-combined-bearings','Bearing Designs','Welded Plate Combined Bearings','Combined Bearings Welded on Plate','Plate-mounted combined bearings reduce fabrication steps and can be supplied for AP-series or drawing-based assemblies.',[
    {heading:'Plate configurations',body:'The bearing, weld location, plate thickness, holes and datum geometry form one controlled assembly.',bullets:['AP0, AP1, AP2, AP2-LUB, AP2-Q','AP3.1, AP4, AP6 and AP91-Q','Custom laser-cut or machined plates']},
    {heading:'Drawing requirements',body:'Plate assemblies should be quoted from an approved drawing rather than bearing designation alone.',bullets:['Hole pattern and tolerances','Weld specification and distortion control','Coating and corrosion protection']},
  ], [
    { label: 'Welded-plate OEM application case', href: '/case-studies/welded-plate-combined-bearing-oem/' },
    { label: 'AP2 welded plate', href: '/products/combined-bearings/ap2-welded-plate/' },
    { label: 'AP6 heavy plate', href: '/products/combined-bearings/ap6-welded-plate/' },
    { label: 'Combined bearing model directory', href: '/products/combined-bearings/' },
    { label: 'Request plate-assembly quote', href: '/contact/?source=solution-welded-plate' },
  ]),
  page('jumbo-combined-bearings','Bearing Designs','Jumbo Combined Bearings','Jumbo Combined Bearings','Jumbo combined bearings support high radial and axial loads in cranes, steel plants and heavy lifting systems.',[
    {heading:'Heavy-duty references',body:'Common inquiry references include 4.085, 4.089 and the adjustable 4.090–4.096 series.',bullets:['Large radial roller diameters','Adjustable axial support','High-load steel-section guides']},
    {heading:'Duty data',body:'Heavy-duty selection requires more than envelope dimensions.',bullets:['Static, dynamic and shock loads','Structure stiffness and alignment','Lubrication access and contamination']},
  ], [
    { label: '4.090 jumbo', href: '/products/combined-bearings/winkel-4-090/' },
    { label: '4.091 jumbo', href: '/products/combined-bearings/winkel-4-091/' },
    { label: '4.093 jumbo', href: '/products/combined-bearings/winkel-4-093/' },
    { label: 'AP91-Q plate assembly', href: '/products/combined-bearings/ap91-q-welded-plate/' },
    { label: 'Request specification review', href: '/contact/?source=solution-jumbo' },
  ]),
  page('forklift-mast-bearings','Bearing Designs','Forklift Mast Combined Bearings','Forklift Mast Bearings','Combined roller bearings and matched channels guide forklift mast stages under radial, axial and shock loading.',[
    {heading:'Mast bearing functions',body:'The radial roller carries transverse load while the axial roller guides side thrust within the mast channel.',bullets:['Inner, intermediate and outer mast stages','Side rollers and combined rollers','Fixed and adjustable executions']},
    {heading:'Identification',body:'Machine model alone may not identify the exact bearing. Record the bearing marking and mast position.',bullets:['Old model and suffix','Roller dimensions and stud geometry','Truck capacity and mast configuration']},
  ]),
  page('combined-bearings-for-forklift-masts','Applications','Combined Bearings for Forklift Masts','Combined Bearings for Forklift Masts','Replacement support for fixed, precision and adjustable combined bearings used in forklift mast channels.',[
    {heading:'Operating conditions',body:'Mast bearings experience shock, contamination and changing load as the carriage travels.',bullets:['Rated truck capacity and load center','Lift height and mast stages','Grease access and channel condition']},
    {heading:'What to inspect',body:'Bearing replacement should include inspection of the mating profile and mounting structure.',bullets:['Track wear and indentation','Welds, shafts and retainers','Axial clearance and alignment']},
  ], [
    { label: 'Forklift mast application case', href: '/case-studies/forklift-mast-combined-bearing-replacement/' },
    { label: 'Combined bearing model directory', href: '/products/combined-bearings/' },
    { label: 'Standard NbV profiles', href: '/products/standard-nbv-profiles/' },
    { label: 'Request specification review', href: '/contact/?source=solution-forklift-masts' },
  ]),
  page('combined-bearings-for-stacker-cranes','Applications','Combined Bearings for Stacker Cranes','Combined Bearings for Stacker Cranes','Combined bearings guide warehouse stacker cranes, AS/RS masts and vertical lift structures.',[
    {heading:'Automation duty',body:'High travel cycles require predictable guidance, alignment and relubrication planning.',bullets:['Travel and lift duty cycle','Acceleration and emergency stops','Guide profile straightness']},
    {heading:'Sourcing data',body:'Provide the equipment number, old bearing, annual demand and maintenance target.',bullets:['Cross-reference and drawing','Required service interval','Planned shutdown date']},
  ]),
  page('bearings-for-steel-mill-equipment','Applications','Bearings for Steel Mill Handling Equipment','Bearings for Steel Mill Equipment','Heavy combined bearings, track rollers and back-up rollers for steel production and handling machinery.',[
    {heading:'Severe environment',body:'Scale, heat, coolant, shock and low-speed high-load duty affect material, sealing and lubrication choices.',bullets:['Temperature at the bearing','Contamination and washdown','Static load and impact']},
    {heading:'Equipment references',body:'Danieli and other machine-maker numbers should be paired with dimensions and application position.',bullets:['Machine drawing number','Assembly and position','Inspection and material documents']},
  ], [
    { label: 'Steel equipment application case', href: '/case-studies/danieli-steel-equipment-bearing-reference/' },
    { label: 'Danieli replacement support', href: '/solutions/danieli-equipment-replacement-bearings/' },
    { label: 'Back-up roller bearings', href: '/products/backup-roller-bearings/' },
    { label: 'Request specification review', href: '/contact/?source=solution-steel-mill' },
  ]),
  page('combined-bearings-for-container-stackers','Applications','Combined Bearings for Container Stackers','Combined Bearings for Container Stackers','High-load combined bearings for container handlers, reach stackers and large telescopic mast systems.',[
    {heading:'High-load guidance',body:'Container equipment combines heavy radial load, side thrust, shock and outdoor contamination.',bullets:['Rated capacity and attachment','Mast or boom position','Corrosion and sealing requirements']},
    {heading:'Maintenance replacement',body:'Send photos before removal where possible to preserve assembly context.',bullets:['Bearing marking','Profile condition','Adjustment position and hardware']},
  ]),
  page('bearings-for-vertical-guide-systems','Applications','Combined Bearings for Vertical Guide Systems','Bearings for Vertical Guide Systems','Combined bearings provide compact radial and axial guidance for elevators, lift tables and vertical material-handling systems.',[
    {heading:'Guide design',body:'The bearing and steel profile work as a system. Profile geometry, span and structural deflection influence contact.',bullets:['Fixed or adjustable bearing','NbV profile size','Preload or operating clearance']},
    {heading:'Application review',body:'State travel speed, load center and duty cycle.',bullets:['Normal and peak loads','Alignment and mounting tolerance','Lubrication interval']},
  ]),
  page('bearings-for-telescopic-forks','Applications','Bearings for Telescopic Forks','Bearings for Telescopic Forks','Compact combined bearings and guide rollers for telescopic forks, transfer units and warehouse automation.',[
    {heading:'Compact envelope',body:'Telescopic mechanisms require high capacity within narrow steel sections.',bullets:['Available profile space','Extension stroke and overlap','Moment and side load']},
    {heading:'Custom interfaces',body:'Plate, stud and eccentric features often follow an equipment-specific drawing.',bullets:['Mounting datum','Fastener or weld detail','Surface coating']},
  ]),
  page('bearings-for-heavy-duty-linear-guides','Applications','Bearings for Heavy-Duty Linear Guides','Bearings for Heavy-Duty Linear Guides','Combined bearings and steel profiles for rugged linear motion where recirculating guides are unsuitable.',[
    {heading:'System advantages',body:'Combined rollers tolerate contamination, long travel and welded structures in material-handling equipment.',bullets:['Radial and axial load in one unit','Replaceable roller assemblies','Standard and custom profiles']},
    {heading:'Engineering inputs',body:'Confirm the whole guide system rather than selecting by bearing diameter alone.',bullets:['Bearing spacing and load distribution','Track hardness and finish','Structure deflection']},
  ]),
  page('danieli-equipment-replacement-bearings','Applications','Danieli Equipment Replacement Bearings','Danieli Replacement Bearings','Cross-reference support for combined track rollers and special bearings identified by Danieli equipment numbers.',[
    {heading:'Reference matching',body:'Machine-maker numbers such as 0.xxxxxx references are matched with bearing markings and dimensions.',bullets:['Complete Danieli reference','Equipment and assembly position','Photo, drawing and measured envelope']},
    {heading:'Approval process',body:'A catalog similarity is not final approval. The proposed drawing and operating duty must be reviewed.',bullets:['Dimensional comparison','Material and heat treatment','Inspection scope']},
  ], [
    { label: 'Steel equipment application case', href: '/case-studies/danieli-steel-equipment-bearing-reference/' },
    { label: 'Track roller bearings', href: '/products/track-roller-bearings/' },
    { label: 'Combined bearing model directory', href: '/products/combined-bearings/' },
    { label: 'Request specification review', href: '/contact/?source=solution-danieli' },
  ]),
  {
    ...page('winkel-bearing-cross-reference','Buyer Support','WINKEL Bearing Cross Reference Guide','WINKEL Bearing Cross Reference','Use WINKEL, CR, Libe, Alfatec, JD, MR, TR and 400-series references to narrow a replacement search. The table below maps common WINKEL series to reviewed replacement support.',[
    {heading:'How cross references work',body:'Different brands may use distinct numbers for related dimensional families, but suffixes and executions can vary.',bullets:['WINKEL 4.xxx and PR4.xxx','CR 400-xxxx and DR400-xxxx','MR, TR and JD dimensional references']},
    {heading:'Verification sequence',body:'Start with the full marking, then compare drawing and duty before approving a replacement.',bullets:['Dimensions and mounting','Fixed or adjustable axial roller','Loads, speed and lubrication']},
  ], [
    { label: '4.054 standard', href: '/products/combined-bearings/winkel-4-054/' },
    { label: 'PR4.056 precision', href: '/products/combined-bearings/winkel-pr4-056/' },
    { label: '4.458 eccentric', href: '/products/combined-bearings/winkel-4-458/' },
    { label: '4.091 jumbo', href: '/products/combined-bearings/winkel-4-091/' },
    { label: 'Combined model directory', href: '/products/combined-bearings/' },
  ]),
    seoTitle: 'WINKEL Bearing Cross Reference & Replacement Guide',
    description: 'WINKEL bearing cross reference & replacement support: 4.0xx, PR4.xxx, 4.4xx and jumbo series with dimension review before ordering.',
    table: {
      heading: 'WINKEL model cross-reference table',
      note: 'Model numbers are identification references, not automatic interchangeability. Every replacement is confirmed against dimensions, load, mounting and operating data before quotation.',
      columns: ['WINKEL reference', 'Series / execution'],
      rows: [
        ...['4.053','4.054','4.055','4.056','4.057','4.058','4.059','4.060','4.061','4.062','4.063','4.064'].map((m) => ({ cells: [m, 'Standard fixed axial'], href: `/products/combined-bearings/winkel-${m.replace(/\./g, '-')}/` })),
        { cells: ['4.039 (JD185-95)', 'Standard fixed axial'], href: '/products/combined-bearings/winkel-4-039-jd185-95/' },
        ...['PR4.054','PR4.055','PR4.056','PR4.058','PR4.059','PR4.061','PR4.062','PR4.063'].map((m) => ({ cells: [m, 'Precision PR series'], href: `/products/combined-bearings/winkel-${m.toLowerCase().replace(/\./g, '-')}/` })),
        ...['4.454','4.455','4.456','4.457','4.458','4.459','4.460','4.461','4.462','4.463'].map((m) => ({ cells: [m, 'Eccentric adjustable'], href: `/products/combined-bearings/winkel-${m.replace(/\./g, '-')}/` })),
        ...['4.085','4.089','4.090','4.091','4.092','4.093','4.094','4.095','4.096'].map((m) => ({ cells: [m, 'Jumbo high-load'], href: `/products/combined-bearings/winkel-${m.replace(/\./g, '-')}/` })),
      ],
    },
  },
  page('bearing-export-shipping-incoterms','Buyer Support','Bearing Export Shipping and Incoterms','Bearing Export Shipping Incoterms','How overseas buyers specify packing, documents and Incoterms when ordering industrial bearings from our Changzhou plant and Shanghai export office.',[
    {heading:'Common export terms',body:'State the preferred Incoterm early so packing, freight and insurance responsibilities are clear before quotation.',bullets:['EXW Changzhou or Shanghai','FOB Shanghai / Ningbo on request','CIF / CFR to destination port','DDP only when agreed in writing']},
    {heading:'Packing and documents',body:'Export packing protects finished bearings in transit. Document scope should match what the buyer actually needs at customs and receiving.',bullets:['Anti-rust oil / VCI and carton or wooden case','Commercial invoice and packing list','Certificate of origin on request','Inspection / marking photos when specified']},
  ], [
    { label: 'China factory export RFQ', href: '/solutions/china-bearing-manufacturer-export/' },
    { label: 'RFQ checklist', href: '/resources/industrial-bearing-rfq-checklist/' },
    { label: 'Factory QC scope', href: '/certifications/' },
    { label: 'Submit shipping RFQ', href: '/contact/?source=solution-export-shipping' },
    { label: 'Contact export desk', href: '/contact/' },
  ]),
  page('combined-bearing-quality-control','Buyer Support','Combined Bearing Quality Control','Combined Bearing Quality Control','A practical inspection scope for replacement and drawing-based combined bearing orders.',[
    {heading:'Before production',body:'The quotation should identify the controlling model, drawing revision and requested documents.',bullets:['Specification review','Material and heat-treatment requirement','Inspection plan']},
    {heading:'Before shipment',body:'The agreed scope may include dimensional, visual, marking and packing checks.',bullets:['Critical dimension report','Marking and quantity photos','Corrosion protection and packing']},
  ],[{label:'Quality and verification process',href:'/certifications/'},...productLinks]),
  page('combined-bearing-materials-heat-treatment','Buyer Support','Combined Bearing Materials and Heat Treatment','Combined Bearing Materials','Material and heat treatment influence wear resistance, core toughness and service performance.',[
    {heading:'Common material approach',body:'Case-hardening steels such as 20CrMnTi are used where a hard wear surface and tougher core are required.',bullets:['Material certificate when specified','Carburizing and hardness requirements','Grinding after heat treatment']},
    {heading:'Order documentation',body:'Do not infer material from appearance or a generic catalog statement.',bullets:['Controlled specification','Lot traceability requirement','Hardness or metallographic report scope']},
  ]),
  page('combined-bearing-rfq-and-drawing-review','Buyer Support','Combined Bearing RFQ and Drawing Review','Combined Bearing RFQ','A complete technical RFQ shortens cross-reference review and reduces the risk of ordering the wrong execution.',[
    {heading:'Required identification',body:'Provide every available identifier and a clear view of the old part.',bullets:['Complete model and suffix','Machine-maker number','Photos and controlled drawing']},
    {heading:'Commercial and quality inputs',body:'Quantity, destination and documentation affect the supply plan and quotation.',bullets:['Trial and annual quantities','Delivery country and target date','Inspection, marking and packing requirements']},
  ],[
    { label: 'Industrial bearing RFQ checklist', href: '/resources/industrial-bearing-rfq-checklist/' },
    { label: 'China factory export RFQ', href: '/solutions/china-bearing-manufacturer-export/' },
    { label: 'OEM custom bearing program', href: '/solutions/oem-custom-bearing-program/' },
    { label: 'Combined bearing model directory', href: '/products/combined-bearings/' },
    { label: 'Submit RFQ', href: '/contact/?source=solution-rfq-review' },
  ]),
  page('china-bearing-manufacturer-export','Buyer Support','China Bearing Manufacturer Export RFQ','China Bearing Manufacturer Export','Factory-direct industrial bearing export from Changzhou manufacturing with Shanghai packing and international shipment support.',[
    {heading:'Factory-direct export model',body:'Production is based in Changzhou. Export sales, packing review and shipment coordination are handled through our Shanghai office for overseas buyers.',bullets:['Changzhou manufacturing plant','Shanghai export office','Model verification before quotation','Inspection and packing photos on request']},
    {heading:'What overseas buyers should send',body:'A complete technical RFQ reduces email rounds and protects lead time.',bullets:['Model / cross-reference / drawing','Quantity and destination country','Incoterm preference when known','Required documents and marking']},
  ], [
    { label: 'Submit export RFQ', href: '/contact/?source=solution-export-rfq' },
    { label: 'Export shipping & Incoterms', href: '/solutions/bearing-export-shipping-incoterms/' },
    { label: 'RFQ checklist', href: '/resources/industrial-bearing-rfq-checklist/' },
    { label: 'Factory quality scope', href: '/certifications/' },
    { label: 'Catalog downloads', href: '/downloads/' },
  ]),
  page('bearing-trade-show-inquiry','Buyer Support','Bearing Trade Show and Meeting Inquiry','Bearing Trade Show Inquiry','Follow up after a trade-show meeting, request a factory appointment, or send the product list discussed with our export team.',[
    {heading:'After a trade-show meeting',body:'Send the models or drawings discussed at the booth so we can convert the conversation into a controlled quotation.',bullets:['Booth discussion notes or product list','Target markets and annual demand','Sample or trial order quantity','WhatsApp / email for follow-up']},
    {heading:'Factory or Shanghai meeting requests',body:'Overseas buyers can request a Changzhou plant visit or Shanghai office meeting for specification review.',bullets:['Preferred visit dates','Product categories of interest','Drawing review agenda','Export packing and document needs']},
  ], [
    { label: 'Send trade-show follow-up', href: '/contact/?source=solution-trade-show' },
    { label: 'China factory export RFQ', href: '/solutions/china-bearing-manufacturer-export/' },
    { label: 'Application cases', href: '/case-studies/' },
    { label: 'Product range', href: '/products/' },
    { label: 'Contact export desk', href: '/contact/?source=solution-trade-show-contact' },
  ]),
  page('oem-custom-bearing-program','Buyer Support','OEM Custom Bearing Program','OEM Custom Bearing Manufacturer','Drawing-based OEM and private-label industrial bearing programs for combined bearings, track rollers, back-up rollers and special profiles.',[
    {heading:'What OEM programs usually include',body:'Custom work starts from a controlled drawing or an approved sample, not from a catalog code alone.',bullets:['Envelope and mounting geometry','Material and heat-treatment route','Seal, grease and marking','Inspection scope and packing']},
    {heading:'Typical OEM categories',body:'We support both catalog-near replacements and fully special executions.',bullets:['Welded-plate AP assemblies','Special track outer profiles','Back-up rollers for metal forming','Cross roller bearings for reducers']},
  ], [
    { label: 'Welded-plate OEM case', href: '/case-studies/welded-plate-combined-bearing-oem/' },
    { label: 'Cross roller OEM case', href: '/case-studies/cross-roller-bearing-oem-application-reference/' },
    { label: 'Special track rollers', href: '/products/special-track-roller-bearings/' },
    { label: 'Request OEM review', href: '/contact/?source=solution-oem-custom' },
    { label: 'Factory QC scope', href: '/certifications/' },
  ]),
];

export const seoLandingPageBySlug = Object.fromEntries(seoLandingPages.map((item) => [item.slug, item]));
