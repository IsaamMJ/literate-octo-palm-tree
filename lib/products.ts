// OSTAR Group — product taxonomy
// Source: OSTAR catalog (extracted) + proposal
// This file is copied into each version's lib/ folder.

export type Standard =
  | "ANSI B16.5"
  | "ANSI/ASME B16.47 Series A (MSS SP44)"
  | "ANSI/ASME B16.47 Series B (API 605)"
  | "ASME B16.9"
  | "ASME B16.28"
  | "DIN 2573"
  | "DIN 2576"
  | "DIN 2533"
  | "DIN 2543"
  | "DIN 2527"
  | "DIN 2628"
  | "DIN 2631"
  | "BS 4504"
  | "KS B1503 / JIS B2220"
  | "ASTM A53"
  | "DIN 2448"
  | "JIS G3454";

export type Industry =
  | "Oil & Gas"
  | "Petrochemical"
  | "Marine & Shipbuilding"
  | "Power Generation"
  | "Construction"
  | "Ocean Engineering";

export type FlangeFace =
  | "Raised Face (RF)"
  | "Flat Face (FF)"
  | "Ring Joint (RTJ)"
  | "Tongue & Groove"
  | "Male / Female"
  | "Lap Joint";

export interface ProductVariant {
  /** e.g., "Class 150", "PN16", "10K" */
  rating: string;
  /** e.g., ["Welding Neck", "Slip-On", "Blind"] */
  types: string[];
  /** Nominal size range, human-readable */
  sizeRange: string;
  /** Standards this variant complies with */
  standards: Standard[];
  /** Notes specific to this variant */
  note?: string;
}

export interface Product {
  slug: string;
  /** Display name on cards / detail */
  name: string;
  /** One-line description used on listings */
  tagline: string;
  /** Long-form description for detail page */
  description: string;
  /** Top-level family on the products grid */
  family: "Flanges" | "Fittings" | "Pipes";
  /** Sub-grouping inside family */
  category: string;
  /** Rated standards body (e.g. "ANSI", "DIN", "BS", "JIS/KS", "ASME") */
  standardFamily: string;
  /** Detailed variants (one card may have several pressure classes/types) */
  variants: ProductVariant[];
  /** Materials offered */
  materials: string[];
  /** Face/finish options (flanges only) */
  faces?: FlangeFace[];
  /** Industries the product typically serves */
  industries: Industry[];
  /** Image placeholder slug — used to build /images/products/<slug>.jpg path */
  image: string;
}

export const company = {
  name: "OSTAR Group",
  legalChina: "Hebei Ostar Pipeline Manufacture Co., Ltd",
  legalDubai: "Ostar Industry General Trading",
  foundedFlanges: 1998,
  foundedFittings: 2002,
  dubaiSince: 2010,
  factoryAreaSqm: 880_000,
  capacityFlangesPerMonth: "1,500 tons",
  capacityFittingsPerMonth: "1,000 tons",
  certifications: [
    "ISO 9001:2000",
    "TÜV (Germany) ISO 9001:2000",
    "PED / CE Certification",
    "API 6L (U.S.A Petroleum Association)",
    "DNV (Norway) Quality Certification",
    "TS Pressure Pipeline Authentication",
    "GB/T 19001-2000 (China Classification Society)",
  ],
  awards: ["30,000 Tons Export Award (2016)"],
  industries: [
    "Oil & Gas",
    "Petrochemical",
    "Marine & Shipbuilding",
    "Power Generation",
    "Construction",
    "Ocean Engineering",
  ] as Industry[],
  markets: ["UAE", "Iran", "Oman", "Iraq", "Saudi Arabia", "Qatar", "Worldwide"],
  contact: {
    dubai: {
      label: "Dubai Office (Sales / Enquiries)",
      company: "Ostar Industry General Trading",
      address: "Dubai, United Arab Emirates",
    },
    china: {
      label: "China Factory",
      company: "Hebei Ostar Pipeline Manufacture Co., Ltd",
      address:
        "Hope New Industrial Park, Mengcun County, Cangzhou City, Hebei Province, China",
      phone: "+86 317 6885000",
      mobile: "+86 157 0317 5988",
      fax: "+86 317 6885300",
      email: "info@ostarpipeline.com",
      web: "www.ostarpipeline.com",
    },
  },
  /** WhatsApp number used for product enquiry CTAs.
   *  Placeholder uses the China mobile number; client should swap to Dubai sales WhatsApp. */
  whatsapp: "+971500000000",
  whatsappCountry: "AE",
  history: [
    { year: 1998, event: "Flange factory founded — 700 tons/year initial capacity" },
    { year: 2001, event: "Imported German precision machinery; began export" },
    { year: 2002, event: "Pipe fittings factory founded" },
    { year: 2005, event: "Added ANSI and DIN/EN standards to product line" },
    { year: 2009, event: "Partnerships with buyers in Germany, Spain, Korea, Japan" },
    { year: 2010, event: "Opened Dubai office — OSTAR Industry General Trading" },
    { year: 2012, event: "Added carbon steel flanges and tee manufacturing" },
    { year: 2016, event: "Awarded 30,000 Tons Export Recognition" },
  ],
};

export const products: Product[] = [
  // ============ FLANGES — ANSI B16.5 ============
  {
    slug: "ansi-b16-5-flanges",
    name: "ANSI B16.5 Forged Flanges",
    tagline:
      "The global B2B reference for refinery, pipeline and process plant flanges — Class 150 through Class 1500.",
    description:
      "Forged steel flanges manufactured to the ANSI/ASME B16.5 dimensional standard. Available as Slip-On, Welding Neck, Socket Welding, Threaded, Lap Joint and Blind, in pressure classes from 150 through 1500. Raised-face is standard for all classes except Lap Joint (flat face). Supplied to Oil & Gas, petrochemical and power plants worldwide since 1998.",
    family: "Flanges",
    category: "ANSI / ASME",
    standardFamily: "ANSI",
    variants: [
      {
        rating: "Class 150",
        types: ["Slip-On", "Welding Neck", "Socket Welding", "Threaded", "Lap Joint", "Blind"],
        sizeRange: '1/2" — 24"',
        standards: ["ANSI B16.5"],
        note: "All except Lap Joint supplied with 0.06\" raised face. Lap Joint is flat face.",
      },
      {
        rating: "Class 300",
        types: ["Slip-On", "Welding Neck", "Socket Welding", "Threaded", "Lap Joint", "Blind"],
        sizeRange: '1/2" — 24"',
        standards: ["ANSI B16.5"],
      },
      {
        rating: "Class 600",
        types: ["Slip-On", "Welding Neck", "Socket Welding", "Threaded", "Lap Joint", "Blind"],
        sizeRange: '1/2" — 24"',
        standards: ["ANSI B16.5"],
      },
      {
        rating: "Class 900",
        types: ["Slip-On", "Welding Neck", "Threaded", "Lap Joint", "Blind"],
        sizeRange: '1/2" — 24"',
        standards: ["ANSI B16.5"],
      },
    ],
    materials: [
      "Carbon Steel (A105)",
      "Alloy Steel (A182 F11 / F22)",
      "Stainless Steel (A182 F304 / F304L / F316 / F316L)",
      "Duplex / Super Duplex",
    ],
    faces: [
      "Raised Face (RF)",
      "Flat Face (FF)",
      "Tongue & Groove",
      "Male / Female",
    ],
    industries: ["Oil & Gas", "Petrochemical", "Power Generation", "Construction"],
    image: "ansi-b16-5",
  },
  {
    slug: "ansi-b16-5-ring-joint-flanges",
    name: "ANSI B16.5 Ring Joint Flanges",
    tagline:
      "High-integrity sealing for high-pressure, high-temperature service — Class 150 through Class 1500.",
    description:
      "ANSI B16.5 Ring Joint Flanges (RTJ) for installations where bolted seal integrity is non-negotiable — refinery overheads, wellheads, high-pressure separators. Octagonal and oval ring groove geometries available; tabulated ring numbers (R-series) per ASME B16.20.",
    family: "Flanges",
    category: "ANSI / ASME",
    standardFamily: "ANSI",
    variants: [
      {
        rating: "Class 150",
        types: ["Welding Neck", "Slip-On", "Threaded"],
        sizeRange: '1" — 24"',
        standards: ["ANSI B16.5"],
      },
      {
        rating: "Class 300 / 400 / 600",
        types: ["Welding Neck", "Slip-On", "Threaded"],
        sizeRange: '1" — 24"',
        standards: ["ANSI B16.5"],
      },
      {
        rating: "Class 900",
        types: ["Welding Neck", "Blind"],
        sizeRange: '1/2" — 24"',
        standards: ["ANSI B16.5"],
      },
      {
        rating: "Class 1500",
        types: ["Welding Neck", "Blind"],
        sizeRange: '1/2" — 24"',
        standards: ["ANSI B16.5"],
      },
    ],
    materials: [
      "Carbon Steel (A105)",
      "Alloy Steel (A182 F5 / F11 / F22)",
      "Stainless Steel (A182 F304 / F316)",
    ],
    faces: ["Ring Joint (RTJ)"],
    industries: ["Oil & Gas", "Petrochemical"],
    image: "ansi-rtj",
  },
  {
    slug: "asme-b16-47-series-a-flanges",
    name: "ASME B16.47 Series A Flanges (MSS SP44)",
    tagline:
      'Large-diameter forged flanges, 26" through 60" — Class 150 to Class 900.',
    description:
      "Large-bore line pipe flanges to ASME B16.47 Series A (formerly MSS SP44). Manufactured for pipeline mainline service, refinery interconnects, and large process headers. Welding Neck and Blind types in pressure classes 150 through 900.",
    family: "Flanges",
    category: "Large Diameter",
    standardFamily: "ASME",
    variants: [
      {
        rating: "Class 150",
        types: ["Welding Neck", "Blind"],
        sizeRange: '26" — 60"',
        standards: ["ANSI/ASME B16.47 Series A (MSS SP44)"],
      },
      {
        rating: "Class 300",
        types: ["Welding Neck", "Blind"],
        sizeRange: '26" — 60"',
        standards: ["ANSI/ASME B16.47 Series A (MSS SP44)"],
      },
      {
        rating: "Class 600",
        types: ["Welding Neck", "Blind"],
        sizeRange: '26" — 60"',
        standards: ["ANSI/ASME B16.47 Series A (MSS SP44)"],
      },
      {
        rating: "Class 900",
        types: ["Welding Neck", "Blind"],
        sizeRange: '26" — 60"',
        standards: ["ANSI/ASME B16.47 Series A (MSS SP44)"],
      },
    ],
    materials: [
      "Carbon Steel (A105 / A350 LF2)",
      "Alloy Steel (A182 F11 / F22)",
      "Stainless Steel (A182 F304 / F316)",
    ],
    faces: ["Raised Face (RF)", "Ring Joint (RTJ)"],
    industries: ["Oil & Gas", "Petrochemical", "Power Generation"],
    image: "asme-b16-47-a",
  },
  {
    slug: "asme-b16-47-series-b-flanges",
    name: "ASME B16.47 Series B Flanges (API 605)",
    tagline:
      'Compact-pattern large-diameter flanges — Class 75, 150, 300 to API 605.',
    description:
      "ASME B16.47 Series B (formerly API 605) large-diameter flanges in Welding Neck and Blind types. Lighter and more compact than Series A — preferred where weight or bolt-load reduction matters.",
    family: "Flanges",
    category: "Large Diameter",
    standardFamily: "ASME",
    variants: [
      {
        rating: "Class 75",
        types: ["Welding Neck", "Blind"],
        sizeRange: '26" — 60"',
        standards: ["ANSI/ASME B16.47 Series B (API 605)"],
      },
      {
        rating: "Class 150",
        types: ["Welding Neck", "Blind"],
        sizeRange: '26" — 60"',
        standards: ["ANSI/ASME B16.47 Series B (API 605)"],
      },
      {
        rating: "Class 300",
        types: ["Welding Neck", "Blind"],
        sizeRange: '26" — 60"',
        standards: ["ANSI/ASME B16.47 Series B (API 605)"],
      },
    ],
    materials: [
      "Carbon Steel (A105 / A350 LF2)",
      "Alloy Steel (A182 F11 / F22)",
      "Stainless Steel (A182 F304 / F316)",
    ],
    faces: ["Raised Face (RF)"],
    industries: ["Oil & Gas", "Petrochemical"],
    image: "asme-b16-47-b",
  },
  // ============ FLANGES — DIN ============
  {
    slug: "din-flanges",
    name: "DIN Flanges",
    tagline:
      "European-standard flanges in PN6 through PN25 — built for German, Spanish and Northern European projects.",
    description:
      "DIN flanges manufactured to the original German pressure-rating system: PN6, PN10, PN16 and PN25. Slip-On, Welding Neck and Blind variants per DIN 2527 / 2628 / 2631 with face geometries per DIN 2533 / 2543 / 2573 / 2576. OSTAR has supplied these to European buyers since 2005.",
    family: "Flanges",
    category: "DIN / EN",
    standardFamily: "DIN",
    variants: [
      {
        rating: "PN6",
        types: ["Slip-On", "Welding Neck", "Blind"],
        sizeRange: "DN 10 — DN 600",
        standards: ["DIN 2573", "DIN 2527", "DIN 2631"],
      },
      {
        rating: "PN10",
        types: ["Slip-On", "Welding Neck", "Blind"],
        sizeRange: "DN 10 — DN 600",
        standards: ["DIN 2576", "DIN 2527", "DIN 2631"],
      },
      {
        rating: "PN16",
        types: ["Slip-On", "Welding Neck", "Blind"],
        sizeRange: "DN 10 — DN 1200",
        standards: ["DIN 2533", "DIN 2527", "DIN 2631"],
      },
      {
        rating: "PN25",
        types: ["Slip-On", "Welding Neck", "Blind"],
        sizeRange: "DN 10 — DN 600",
        standards: ["DIN 2543", "DIN 2527", "DIN 2628"],
        note: "Slip-On (SO) flanges supplied without raised face.",
      },
    ],
    materials: [
      "Carbon Steel (P250GH / S235JR)",
      "Stainless Steel (X5CrNi18-10 / 1.4301, 1.4404)",
    ],
    faces: ["Raised Face (RF)", "Flat Face (FF)"],
    industries: ["Petrochemical", "Construction", "Power Generation"],
    image: "din-flanges",
  },
  // ============ FLANGES — BS 4504 ============
  {
    slug: "bs-4504-flanges",
    name: "BS 4504 Flanges",
    tagline:
      "British/European-standard flanges in PN6 through PN40 — Codes 101 through 125.",
    description:
      "BS 4504 (now ISO 7005-1) circular flanges for pipes, valves and fittings. Supplied across the full BS 4504 code series: 101 (Plate slip-on for welding), 102 (Welding neck), 105 (Blind/blank), 111 (Slip-on hub), 112 (Loose plate for stub end), 113 (Lap joint stub end), 121 (Hub for socket welding), 125 (Hub for screwing). Pressure ratings PN6 to PN40.",
    family: "Flanges",
    category: "BS / EN",
    standardFamily: "BS",
    variants: [
      {
        rating: "PN6",
        types: ["Code 101", "Code 102", "Code 105", "Code 111", "Code 112", "Code 113", "Code 121", "Code 125"],
        sizeRange: "10 NB — 600 NB",
        standards: ["BS 4504"],
      },
      {
        rating: "PN10",
        types: ["Code 101", "Code 102", "Code 105", "Code 111", "Code 112", "Code 113", "Code 121", "Code 125"],
        sizeRange: "10 NB — 600 NB",
        standards: ["BS 4504"],
      },
      {
        rating: "PN16",
        types: ["Code 101", "Code 102", "Code 105", "Code 111", "Code 112", "Code 113", "Code 121", "Code 125"],
        sizeRange: "10 NB — 1200 NB",
        standards: ["BS 4504"],
      },
      {
        rating: "PN25",
        types: ["Code 101", "Code 102", "Code 105", "Code 111", "Code 112", "Code 113", "Code 121", "Code 125"],
        sizeRange: "10 NB — 1200 NB",
        standards: ["BS 4504"],
      },
      {
        rating: "PN40",
        types: ["Code 101", "Code 102", "Code 105", "Code 111", "Code 112", "Code 113", "Code 121", "Code 125"],
        sizeRange: "10 NB — 600 NB",
        standards: ["BS 4504"],
      },
    ],
    materials: [
      "Carbon Steel",
      "Stainless Steel (304 / 316)",
    ],
    faces: ["Raised Face (RF)", "Flat Face (FF)"],
    industries: ["Marine & Shipbuilding", "Construction", "Power Generation"],
    image: "bs-4504",
  },
  // ============ FLANGES — JIS / KS ============
  {
    slug: "jis-ks-flanges",
    name: "JIS / KS Flanges",
    tagline:
      "Japanese and Korean standard flanges — 5K, 10K, 16K, 20K, 30K. Trusted by Japanese yards since 2009.",
    description:
      "Flanges to KS B1503 / JIS B2220 — the Japanese Industrial Standard pressure-rating system. Available in 5K, 10K, 16K, 20K and 30K pressure classes. Types include SOP (Slip-On Plate), SOH (Slip-On Hub), WN (Welding Neck), TR (Threaded) and BL (Blind). Type A, B and C drilling patterns supported where the standard specifies.",
    family: "Flanges",
    category: "JIS / KS",
    standardFamily: "JIS",
    variants: [
      {
        rating: "5K",
        types: ["SOP", "SOH", "Welding Neck", "Threaded", "Blind"],
        sizeRange: "DN 10 — DN 1500",
        standards: ["KS B1503 / JIS B2220"],
      },
      {
        rating: "10K",
        types: ["SOP", "SOH", "Welding Neck", "Threaded", "Blind"],
        sizeRange: "DN 10 — DN 1500",
        standards: ["KS B1503 / JIS B2220"],
      },
      {
        rating: "16K",
        types: ["SOP", "SOH", "Welding Neck", "Threaded", "Blind"],
        sizeRange: "DN 10 — DN 600",
        standards: ["KS B1503 / JIS B2220"],
      },
      {
        rating: "20K",
        types: ["SOH", "Welding Neck", "Blind"],
        sizeRange: "DN 10 — DN 600",
        standards: ["KS B1503 / JIS B2220"],
        note: "20K flanges with smaller nominal size do not use Slip-On or Hub welding.",
      },
      {
        rating: "30K",
        types: ["Welding Neck", "Blind"],
        sizeRange: "DN 10 — DN 600",
        standards: ["KS B1503 / JIS B2220"],
      },
    ],
    materials: [
      "Carbon Steel (SS400 / S25C)",
      "Stainless Steel (SUS304 / SUS316)",
    ],
    faces: ["Raised Face (RF)", "Flat Face (FF)"],
    industries: ["Marine & Shipbuilding", "Petrochemical", "Power Generation"],
    image: "jis-ks",
  },
  // ============ FITTINGS ============
  {
    slug: "butt-weld-elbows-returns",
    name: "Butt-Weld Elbows & Returns",
    tagline:
      'Long-radius and short-radius elbows, 45°, 90° and 180° — 1/2" through 48".',
    description:
      "Butt-welding elbows and return bends to ASME/ANSI B16.9 (long radius) and ASME/ANSI B16.28 (short radius). Manufactured in 45°, 90° and 180° geometries for all line pipe sizes. Full dimensional compliance with center-to-end and back-to-face values per the standard.",
    family: "Fittings",
    category: "Elbows & Returns",
    standardFamily: "ASME",
    variants: [
      {
        rating: "All schedules",
        types: ["45° Elbow", "90° Elbow LR", "90° Elbow SR", "180° Return LR", "180° Return SR"],
        sizeRange: '1/2" — 48"',
        standards: ["ASME B16.9", "ASME B16.28"],
      },
    ],
    materials: [
      "Carbon Steel (A234 WPB / WPC)",
      "Alloy Steel (A234 WP11 / WP22 / WP5)",
      "Stainless Steel (A403 WP304 / WP304L / WP316 / WP316L)",
    ],
    industries: ["Oil & Gas", "Petrochemical", "Power Generation", "Construction"],
    image: "elbows",
  },
  {
    slug: "butt-weld-tees-crosses",
    name: "Butt-Weld Tees & Crosses",
    tagline:
      'Equal and reducing tees and crosses — 1/2" through 48", ASME B16.9.',
    description:
      "Butt-welding tees and crosses to ASME/ANSI B16.9. Supplied as Straight Tees, Reducing Tees, Straight Crosses and Reducing Outlet Crosses. Center-to-end and center-to-outlet values tabulated per the standard.",
    family: "Fittings",
    category: "Tees & Crosses",
    standardFamily: "ASME",
    variants: [
      {
        rating: "All schedules",
        types: ["Straight Tee", "Reducing Tee", "Straight Cross", "Reducing Outlet Cross"],
        sizeRange: '1/2" — 48"',
        standards: ["ASME B16.9"],
      },
    ],
    materials: [
      "Carbon Steel (A234 WPB)",
      "Alloy Steel (A234 WP11 / WP22)",
      "Stainless Steel (A403 WP304 / WP316)",
    ],
    industries: ["Oil & Gas", "Petrochemical", "Power Generation"],
    image: "tees",
  },
  {
    slug: "butt-weld-reducers",
    name: "Butt-Weld Reducers",
    tagline:
      'Concentric and eccentric reducers — sized 3/4" × 1/2" through 48" × 44".',
    description:
      "Butt-welding reducers to ASME/ANSI B16.9 in concentric (axially symmetric) and eccentric (offset) geometries. Used wherever a line transitions between two pipe sizes — concentric in vertical runs and eccentric to maintain a constant pipe bottom in horizontal runs.",
    family: "Fittings",
    category: "Reducers",
    standardFamily: "ASME",
    variants: [
      {
        rating: "All schedules",
        types: ["Concentric Reducer", "Eccentric Reducer"],
        sizeRange: '3/4" × 1/2" — 48" × 44"',
        standards: ["ASME B16.9"],
      },
    ],
    materials: [
      "Carbon Steel (A234 WPB)",
      "Alloy Steel (A234 WP11 / WP22)",
      "Stainless Steel (A403 WP304 / WP316)",
    ],
    industries: ["Oil & Gas", "Petrochemical", "Construction"],
    image: "reducers",
  },
  {
    slug: "butt-weld-caps",
    name: "Butt-Weld Caps",
    tagline:
      'End closures to ASME B16.9 — 1/2" through 36", carbon, alloy and stainless.',
    description:
      "Butt-welding pipe caps for terminating pipe runs. Manufactured to ASME/ANSI B16.9 with wall thickness up to and beyond 22 mm; end-bevel preparation per the standard for full strength weld joints.",
    family: "Fittings",
    category: "Caps",
    standardFamily: "ASME",
    variants: [
      {
        rating: "All schedules",
        types: ["Butt-Weld Cap"],
        sizeRange: '1/2" — 36"',
        standards: ["ASME B16.9"],
      },
    ],
    materials: [
      "Carbon Steel (A234 WPB)",
      "Alloy Steel (A234 WP11 / WP22)",
      "Stainless Steel (A403 WP304 / WP316)",
    ],
    industries: ["Oil & Gas", "Petrochemical", "Power Generation"],
    image: "caps",
  },
  // ============ PIPES ============
  {
    slug: "seamless-welded-pipes",
    name: "Seamless & Welded Steel Pipes",
    tagline:
      'Line pipe and process pipe — 1/2" through 60", schedules SCH5 through XXS.',
    description:
      "Steel pipes to ASTM A53, DIN 2448 and JIS G3454 — covering virtually every line-pipe and process-pipe requirement. Outside diameter and wall-thickness tabulated against the major standards from SCH5 through XXS. Supplied seamless or welded depending on size and grade.",
    family: "Pipes",
    category: "Line Pipe",
    standardFamily: "Multiple",
    variants: [
      {
        rating: "SCH 5 — XXS",
        types: ["Seamless", "ERW Welded", "LSAW Welded"],
        sizeRange: "DN 6 — DN 1600",
        standards: ["ASTM A53", "DIN 2448", "JIS G3454"],
      },
    ],
    materials: [
      "Carbon Steel (A53 Grade B / A106 / API 5L)",
      "Alloy Steel (A335 P11 / P22)",
      "Stainless Steel (A312 TP304 / TP316)",
    ],
    industries: ["Oil & Gas", "Petrochemical", "Power Generation", "Construction"],
    image: "pipes",
  },
];

/** Helper: get product by slug */
export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Helper: list of unique families */
export const families = Array.from(new Set(products.map((p) => p.family)));

/** Helper: products by family */
export function productsByFamily(family: Product["family"]): Product[] {
  return products.filter((p) => p.family === family);
}

/** Build a WhatsApp enquiry URL for a given product */
export function whatsappEnquiryUrl(productName: string): string {
  const msg = `Hello OSTAR — I'd like to enquire about: ${productName}. Could you share specs, lead time, and quote?`;
  const number = company.whatsapp.replace(/[^0-9]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}
