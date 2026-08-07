import {
  Activity,
  Award,
  Beaker,
  Building2,
  ClipboardCheck,
  Cog,
  Crosshair,
  Droplets,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Hospital,
  Landmark,
  LayoutGrid,
  Microscope,
  PackageCheck,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Zenova Biosource",
  tagline: "Empowering Healthcare with Quality and Innovation",
  url: "https://zenovabiosource.com",
  description:
    "Zenova Biosource delivers world-class laboratory, diagnostic and medical equipment trusted by hospitals, research institutions, diagnostic laboratories and government organizations.",
  email: "info@zenovabiosource.com",
  phone: "+91 70024 30314",
  phoneHref: "tel:+917002430314",
  whatsapp: "https://wa.me/917002430314",
  address:
    "Hatigaon Chariali, Ajanta Path, Guwahati, Assam, India",
  hours: "Mon – Sat · 9:00 AM – 7:00 PM IST",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  accent: string;
};

export const categories: Category[] = [
  {
    slug: "diagnostic-equipment",
    name: "Diagnostic Equipment",
    short: "Diagnostic",
    icon: Microscope,
    accent: "teal",
    description:
      "Automated analyzers, immunoassay systems and point-of-care diagnostics engineered for throughput and clinical accuracy.",
    items: [
      "Biochemistry Analyzers",
      "Hematology Analyzers",
      "Immunoassay Systems",
      "PCR & Molecular Diagnostics",
      "Urine & Electrolyte Analyzers",
      "Rapid Diagnostic Instruments",
    ],
  },
  {
    slug: "laboratory-equipment",
    name: "Laboratory Equipment",
    short: "Laboratory",
    icon: FlaskConical,
    accent: "sky",
    description:
      "Core laboratory instrumentation from centrifuges to autoclaves, built for reproducibility and dependable uptime.",
    items: [
      "Centrifuges",
      "Autoclaves & Sterilizers",
      "Incubators & Ovens",
      "Microscopes",
      "Laminar Flow Hoods",
      "Water Purification Systems",
    ],
  },
  {
    slug: "medical-equipment",
    name: "Medical Equipment",
    short: "Medical",
    icon: HeartPulse,
    accent: "teal",
    description:
      "Patient-side and critical-care equipment meeting international safety and clinical performance standards.",
    items: [
      "Patient Monitors",
      "Defibrillators & ECG",
      "Infusion & Syringe Pumps",
      "Anesthesia & Ventilation",
      "OT & ICU Equipment",
      "Imaging Accessories",
    ],
  },
  {
    slug: "consumables",
    name: "Laboratory Consumables",
    short: "Consumables",
    icon: Beaker,
    accent: "sky",
    description:
      "A complete consumables program — plasticware, glassware and disposables — with reliable supply continuity.",
    items: [
      "Pipette Tips & Pipettes",
      "Microcentrifuge Tubes",
      "Microplates & PCR Plates",
      "Petri Dishes & Cultureware",
      "Gloves & Safety Consumables",
      "Syringes & Filters",
    ],
  },
  {
    slug: "diagnostic-kits",
    name: "Diagnostic Kits",
    short: "Diagnostic Kits",
    icon: Syringe,
    accent: "teal",
    description:
      "Regulatory-compliant assay kits and reagents for clinical, research and public-health screening programs.",
    items: [
      "ELISA & Immunoassay Kits",
      "Rapid Test Kits",
      "PCR & Molecular Kits",
      "Blood Grouping Reagents",
      "Urine Strips & Chemistry",
      "Histology & Staining Kits",
    ],
  },
  {
    slug: "chemicals-reagents",
    name: "Chemicals & Reagents",
    short: "Chemicals",
    icon: Droplets,
    accent: "sky",
    description:
      "High-purity laboratory chemicals and analytical reagents with full documentation and traceability.",
    items: [
      "Analytical Reagents",
      "HPLC & Solvents",
      "Culture Media",
      "Buffer Solutions",
      "Stains & Indicators",
      "Reference Standards",
    ],
  },
  {
    slug: "surgical-hospital",
    name: "Surgical & Hospital Supplies",
    short: "Surgical",
    icon: Stethoscope,
    accent: "teal",
    description:
      "Instruments and supplies for OT, wards and emergency departments, sourced from certified manufacturers.",
    items: [
      "Surgical Instruments",
      "OT Consumables",
      "Hospital Furniture",
      "Patient Care Products",
      "Dressing & Bandaging",
      "Sterilization Supplies",
    ],
  },
  {
    slug: "infrastructure",
    name: "Laboratory Infrastructure",
    short: "Infrastructure",
    icon: Building2,
    accent: "sky",
    description:
      "Turnkey laboratory planning — from layout and furniture to HVAC, utilities and accreditation readiness.",
    items: [
      "Laboratory Design & Layout",
      "Lab Furniture & Workstations",
      "Cleanroom Solutions",
      "HVAC & Ventilation",
      "Utilities & Backups",
      "NABL Readiness Support",
    ],
  },
];

export const brands = [
  "Abbott",
  "Mindray",
  "Thermo Fisher",
  "Roche",
  "Snibe",
  "Bio-Rad",
  "Siemens Healthineers",
  "Beckman Coulter",
];

export type Industry = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  {
    name: "Hospitals",
    description:
      "OT, ICU, pathology and radiology departments equipped end-to-end for modern patient care.",
    icon: Hospital,
  },
  {
    name: "Diagnostic Laboratories",
    description:
      "High-throughput analyzers and consumables that keep reporting accurate and on time.",
    icon: Crosshair,
  },
  {
    name: "Medical Colleges",
    description:
      "Teaching laboratories, dissection halls and skill labs built to curriculum standards.",
    icon: GraduationCap,
  },
  {
    name: "Government Departments",
    description:
      "Compliant supply and documentation for tenders, PHCs, and public-health programs.",
    icon: Landmark,
  },
  {
    name: "Research Institutes",
    description:
      "Precision instruments and reagents for reproducible research and innovation.",
    icon: Microscope,
  },
  {
    name: "Pharmaceutical Industries",
    description:
      "QC/QA lab solutions that support audits, validation and regulatory compliance.",
    icon: FlaskConical,
  },
];

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChoose: Feature[] = [
  {
    title: "Authorized OEM Partners",
    description:
      "Direct relationships with 30+ global manufacturers — genuine equipment, full warranty, original spares.",
    icon: ShieldCheck,
  },
  {
    title: "PAN-India Supply Chain",
    description:
      "Warehouses and channel partners across regions enable fast delivery to every state and union territory.",
    icon: PackageCheck,
  },
  {
    title: "Quality Assured",
    description:
      "Every product is verified, tested and documented — ISO-aligned sourcing with full traceability.",
    icon: Award,
  },
  {
    title: "Technical Expertise",
    description:
      "In-house biomedical engineers support selection, installation, calibration and troubleshooting.",
    icon: Cog,
  },
  {
    title: "Transparent Pricing",
    description:
      "Competitive, itemized quotations for tenders and institutional procurement — no hidden costs.",
    icon: ClipboardCheck,
  },
  {
    title: "Lifecycle Support",
    description:
      "AMC, CMC, validation and training programs that extend the life of your investment.",
    icon: Wrench,
  },
];

export type Product = {
  name: string;
  category: string;
  categorySlug: string;
  spec: string;
  description: string;
};

export const featuredProducts: Product[] = [
  {
    name: "Fully Automated Biochemistry Analyzer",
    category: "Diagnostic Equipment",
    categorySlug: "diagnostic-equipment",
    spec: "400 tests/hr · 60 onboard reagents",
    description:
      "Walkaway chemistry with precise dispensing, onboard QC and bi-directional LIS connectivity.",
  },
  {
    name: "5-Part Hematology Analyzer",
    category: "Diagnostic Equipment",
    categorySlug: "diagnostic-equipment",
    spec: "3-part · 60 samples/hr",
    description:
      "Compact 5-part CBC analyzer with flags, extended linearity and low maintenance footprint.",
  },
  {
    name: "Real-Time PCR Thermal Cycler",
    category: "Laboratory Equipment",
    categorySlug: "laboratory-equipment",
    spec: "6-channel · 96 wells",
    description:
      "Clinical-grade qPCR for molecular assays with precise thermal uniformity and fast ramp rates.",
  },
  {
    name: "High-Capacity Refrigerated Centrifuge",
    category: "Laboratory Equipment",
    categorySlug: "laboratory-equipment",
    spec: "15,000 rpm · 500 mL",
    description:
      "Multi-purpose benchtop centrifuge with advanced rotor safety and quiet, vibration-free operation.",
  },
  {
    name: "Portable Patient Monitor",
    category: "Medical Equipment",
    categorySlug: "medical-equipment",
    spec: "12.1\" touch · SpO₂/ECG/NIBP",
    description:
      "Critical-care monitor with smart alarm management, networking and battery backup.",
  },
  {
    name: "Touchscreen Laminar Flow Cabinet",
    category: "Laboratory Infrastructure",
    categorySlug: "infrastructure",
    spec: "Class II A2 · HEPA H14",
    description:
      "Sterile working environment for sample protection with digital airflow control.",
  },
];

export const supportSteps = [
  {
    title: "Site Survey",
    description:
      "We assess space, power, environment and workflow before recommending the right configuration.",
  },
  {
    title: "Installation",
    description:
      "Certified engineers install, commission and verify every system against manufacturer protocol.",
  },
  {
    title: "Calibration & Validation",
    description:
      "DQ/IQ/OQ/PQ support and calibration documentation to keep you accreditation-ready.",
  },
  {
    title: "Training",
    description:
      "Hands-on operator training for your team, plus application and safety orientation.",
  },
];

export const procurementPoints = [
  "GeM (Government e-Marketplace) registered supplier",
  "Tender documentation, BOQs and technical specifications",
  "Compliant quotations with transparent GST invoicing",
  "Supply across hospitals, PHCs, medical colleges and ministries",
  "Warranty, AMC and spares commitment for institutional buyers",
  "After-sales service network with documented SLAs",
];

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export const stats: Stat[] = [
  { label: "Equipment Installed", value: 5200, suffix: "+" },
  { label: "Products Supplied", value: 15000, suffix: "+" },
  { label: "OEM Partners", value: 30, suffix: "+" },
  { label: "Institutions Served", value: 1800, suffix: "+" },
];

export const certifications = [
  "ISO 9001:2015",
  "ISO 13485:2016",
  "GeM Registered",
  "CE Marked Products",
  "GMP Certified Sources",
  "MSME / Udyam",
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Zenova handled our entire lab setup from layout to commissioning. The quality of equipment and the documentation support were exceptional.",
    name: "Dr. Anjali Menon",
    role: "Director, Diagnostics Laboratory, Kochi",
  },
  {
    quote:
      "Their team understood our research requirements better than any supplier we had worked with. Calibration and AMC support have been flawless.",
    name: "Prof. Rakesh Sharma",
    role: "Head of Research, Institute of Life Sciences",
  },
  {
    quote:
      "Government tenders are demanding — Zenova's documentation, pricing and delivery discipline made the entire process seamless for us.",
    name: "Dr. S. Venkatesan",
    role: "Chief Medical Officer, District Hospital",
  },
];

export const timeline = [
  {
    year: "2006",
    title: "Foundation",
    description:
      "Zenova Biosource begins as a regional supplier of laboratory equipment with a single service van and a promise of reliability.",
  },
  {
    year: "2011",
    title: "OEM Partnerships",
    description:
      "Authorized distribution agreements with leading global diagnostic and laboratory brands across India.",
  },
  {
    year: "2015",
    title: "Infrastructure Division",
    description:
      "Launch of turnkey laboratory infrastructure services — design, furniture, HVAC and cleanroom build-out.",
  },
  {
    year: "2019",
    title: "Government Procurement",
    description:
      "Onboarding as a GeM-registered supplier, serving public-health programs and government institutions nationwide.",
  },
  {
    year: "2023",
    title: "Pan-India Service Network",
    description:
      "Service hubs and trained engineers now cover all major regions with documented SLAs and AMC programs.",
  },
  {
    year: "2026",
    title: "Expanding Capability",
    description:
      "New product lines, deeper OEM portfolio and digital quotation platform for institutional buyers.",
  },
];

export type Leader = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const leadership: Leader[] = [
  {
    name: "Vikram Malhotra",
    role: "Founder & Managing Director",
    bio: "25+ years in laboratory instrumentation and healthcare distribution across India.",
    initials: "VM",
  },
  {
    name: "Priya Raghavan",
    role: "Head of Operations",
    bio: "Builds the supply chain and service network that keeps 5,000+ installations running.",
    initials: "PR",
  },
  {
    name: "Dr. Arjun Nair",
    role: "Director, Technical Services",
    bio: "Leads validation, calibration and application support for clinical and research labs.",
    initials: "AN",
  },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Installation",
    icon: Cog,
    description:
      "Professional installation, commissioning and site integration by certified engineers.",
    points: ["Site survey", "Uncrating & assembly", "Commissioning & demo"],
  },
  {
    title: "Calibration",
    icon: Activity,
    description:
      "Preventive and corrective calibration with documented certificates for audited facilities.",
    points: ["Factory-traceable", "Certified reports", "Scheduled programs"],
  },
  {
    title: "AMC — Annual Maintenance",
    icon: ShieldCheck,
    description:
      "Guaranteed uptime with scheduled preventive maintenance and priority response.",
    points: ["Preventive visits", "Priority breakdowns", "Spares support"],
  },
  {
    title: "CMC — Comprehensive Contract",
    icon: ClipboardCheck,
    description:
      "Full-coverage contract including parts, labor and consumables for complete cost certainty.",
    points: ["All-inclusive parts", "Labor included", "Annual cost cap"],
  },
  {
    title: "Validation & IQ/OQ/PQ",
    icon: LayoutGrid,
    description:
      "Installation, operational and performance qualification aligned to NABL and GLP requirements.",
    points: ["DQ/IQ/OQ/PQ docs", "NABL-ready", "Audit support"],
  },
  {
    title: "Training & Application Support",
    icon: GraduationCap,
    description:
      "Hands-on operator training and application protocols to get the most from your instruments.",
    points: ["On-site training", "Protocols & SOPs", "Remote support"],
  },
  {
    title: "Technical Helpdesk",
    icon: Wrench,
    description:
      "A dedicated helpline for troubleshooting, spare identification and rapid dispatch.",
    points: ["Phone & chat", "Remote diagnostics", "Spare dispatch"],
  },
];
