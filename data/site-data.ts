import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building,
  Building2,
  FileText,
  HardHat,
  Headphones,
  Layers,
  Languages,
  Landmark,
  BriefcaseBusiness,
  Package,
  Rocket,
  ShieldCheck,
  Store,
  Stamp,
  Users,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ServiceDetail = Service & {
  label: string;
  detail: string;
  items: string[];
  documents: string[];
  image?: string;
  faqs?: { q: string; a: string }[];
};

export const navigation = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/services", "Services"],
  ["/visa-services", "Visa Services"],
  ["/pro-services", "PRO Services"],
  ["/business-setup", "Business Setup"],
  ["/corporate-services", "Corporate Services"],
  ["/contact", "Contact"],
] as const;

export const contentImages = {
  general: "/images/hero-uae-services.png",
  visa: "/images/hero-visa-services.png",
  business: "/images/hero-business-setup.png",
  corporate: "/images/hero-corporate-services.png",
} as const;

export const services: Service[] = [
  {
    slug: "visa-services",
    title: "Visa Services",
    description: "Employment, family, residence, visit, investor, partner, Green and Golden Visa assistance.",
    icon: BadgeCheck,
  },
  {
    slug: "pro-services",
    title: "PRO Services",
    description: "Corporate government procedures, employee visa processing and company immigration support.",
    icon: BriefcaseBusiness,
  },
  {
    slug: "typing-documents",
    title: "Typing & Documents",
    description: "Professional typing, document clearing, government applications and documentation support.",
    icon: FileText,
  },
  {
    slug: "mofa-attestation",
    title: "MOFA Attestation",
    description: "Assistance with educational, personal, commercial and other document attestation requirements.",
    icon: Stamp,
  },
  {
    slug: "translation-services",
    title: "Translation Services",
    description: "Arabic, English and legal translation assistance for official documents.",
    icon: Languages,
  },
  {
    slug: "business-setup",
    title: "Business Setup",
    description: "Mainland, free zone, trade license, establishment and investor-related services.",
    icon: Building2,
  },
];

export const serviceDetails: Record<string, ServiceDetail> = {
  "visa-services": {
    ...services[0],
    label: "Visa Services",
    detail: "Employment, family, residence, visit, investor, partner, Green and Golden Visa support with accurate documentation and clear communication.",
    image: contentImages.visa,
    items: ["Employment Visa", "Family Visa", "Residence Visa", "Visit Visa", "Investor & Partner Visa", "Green & Golden Visa", "Visa Renewal", "Visa Cancellation", "Change of Status", "Entry Permit", "Medical Typing", "Emirates ID"],
    documents: ["Passport copy (valid)", "Passport-size photograph (white background)", "Current visa page (if applicable)", "Emirates ID copy (if applicable)", "Sponsor or company documents (where required)"],
  },
  "pro-services": {
    ...services[1],
    label: "PRO Services",
    detail: "Reliable support for company and employee government procedures across the UAE.",
    image: contentImages.corporate,
    items: ["Employee Visa Processing", "Labour Applications", "Immigration Support", "Emirates ID Assistance", "Medical Typing", "Establishment Card", "License Renewals", "Government Documentation", "Status Change", "Permit Applications", "Document Clearing", "Corporate PRO Support"],
    documents: ["Company trade license", "Establishment card", "Passport and visa copies", "Emirates ID copies", "Employee/company supporting documents"],
  },
  "business-setup": {
    ...services[5],
    label: "Business Setup",
    detail: "Practical assistance for entrepreneurs and companies starting or expanding a business in the UAE.",
    image: contentImages.business,
    items: ["Mainland Setup", "Free Zone Setup", "Trade License", "Initial Approval", "Trade Name", "Establishment Card", "Investor Visa", "Partner Visa", "Immigration File", "Document Preparation", "License Renewal", "Business Support"],
    documents: ["Passport copies of shareholders", "Proposed business activity", "Trade name options", "Entry visa / Emirates ID where applicable", "Additional authority documents if required"],
  },
  "corporate-services": {
    slug: "corporate-services",
    title: "Corporate Services",
    description: "Ongoing government, employee and documentation support for UAE companies and employers.",
    icon: Landmark,
    label: "Corporate Services",
    detail: "Ongoing government, employee and documentation support for UAE companies and employers.",
    image: contentImages.corporate,
    items: ["Employee Documentation", "Visa Processing", "Visa Renewals", "Labour Support", "Immigration Support", "Emirates ID", "Medical Assistance", "Company Documentation", "License Support", "Government Applications", "Document Clearing", "Ongoing PRO Support"],
    documents: ["Company trade license", "Establishment and immigration cards", "Employee passport copies", "Visa / Emirates ID copies", "Relevant supporting documents"],
  },
};

const seoService = (slug: string, label: string, title: string, detail: string, image: string, items: string[], documents: string[]): ServiceDetail => ({
  slug,
  title,
  description: detail,
  icon: FileText,
  label,
  detail,
  image: /visa|change-status|emirates-id|medical-typing/.test(slug)
    ? contentImages.visa
    : /corporate|pro-services/.test(slug)
      ? contentImages.corporate
      : /business|trade-license/.test(slug)
        ? contentImages.business
        : image,
  items,
  documents,
});

export const seoServiceDetails: Record<string, ServiceDetail> = {
  "employment-visa-uae": seoService("employment-visa-uae", "Employment Visa UAE", "Employment Visa Services in UAE", "Complete employment visa assistance — from entry permit to residence visa stamping — for companies hiring employees and individuals starting work in the UAE.", "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80", ["Entry Permit", "Status Change", "Medical Typing", "Emirates ID", "Residence Visa", "Visa Cancellation"], ["Passport copy (valid for 6+ months)", "Passport-size photograph (white background)", "Company trade license copy (sponsor)", "Offer letter or labour approval details", "Current visa page or entry stamp"]),
  "family-visa-uae": seoService("family-visa-uae", "Family Visa UAE", "Family Visa Services in UAE", "Bring your family to the UAE with confidence. We assist with spouse, children and parent residence visas, guiding you through eligibility, documents and each step of the process.", "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80", ["Spouse Visa", "Children Visa", "Parents Visa", "Entry Permit", "Residence Visa", "Renewal & Cancellation"], ["Sponsor passport, visa and Emirates ID copies", "Attested marriage certificate", "Attested birth certificates", "Family passport copies and photographs", "Tenancy contract and salary proof"]),
  "residence-visa-uae": seoService("residence-visa-uae", "Residence Visa UAE", "Residence Visa Services in UAE", "New residence visas, renewals and status changes — handled with accurate typing, correct documentation and clear guidance at every step.", "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=80", ["New Residence Visa", "Residence Visa Renewal", "Medical Typing", "Emirates ID", "Status Change", "Visa Cancellation"], ["Passport copy (valid)", "Passport-size photograph", "Entry permit or current visa page", "Sponsor documents", "Emirates ID copy for renewals"]),
  "visit-visa-uae": seoService("visit-visa-uae", "Visit Visa UAE", "Visit Visa Services in UAE", "Visit visa assistance for family, friends and business visitors — new applications, extensions and status changes handled quickly and professionally.", "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=2000&q=80", ["30 / 60 / 90-Day Visit Visas", "Visit Visa Extension", "Multiple Entry Options", "Family & Friend Visits", "Status Change", "Application Typing"], ["Visitor passport copy", "Passport-size photograph", "Sponsor Emirates ID and visa copy", "Relationship proof", "Travel details where required"]),
  "visa-renewal-uae": seoService("visa-renewal-uae", "Visa Renewal UAE", "Visa Renewal Services in UAE", "Renew residence and dependent visas on time, without the stress. We manage typing, medical, Emirates ID and renewal processing with clear communication throughout.", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80", ["Residence Visa Renewal", "Dependent Visa Renewal", "Employee Visa Renewal", "Medical Typing", "Emirates ID Renewal", "Grace Period Guidance"], ["Passport copy", "Current residence visa page", "Emirates ID copy", "Passport-size photograph", "Sponsor documents"]),
  "visa-cancellation-uae": seoService("visa-cancellation-uae", "Visa Cancellation UAE", "Visa Cancellation Services in UAE", "Cancelling an employment, family or residence visa? We handle the cancellation process correctly so you can exit, transfer or change status without complications.", "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80", ["Employment Visa Cancellation", "Family Visa Cancellation", "Residence Visa Cancellation", "Company Card Cancellation", "Status Change After Cancellation", "Exit & Transfer Guidance"], ["Passport copy", "Current visa page", "Emirates ID copy", "Sponsor or company documents", "Cancellation request details"]),
  "change-status-uae": seoService("change-status-uae", "Change Status UAE", "Change Status Services in UAE", "Moving from a visit visa to a residence visa, or between visa categories? We assist with in-country status change procedures and the related documentation.", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80", ["Visit to Residence Status Change", "In-Country Status Change", "Status Change After Cancellation", "Entry Permit Status Update", "Visa Transfer Guidance", "Related Documentation"], ["Passport copy", "Current visa or entry permit", "New sponsor documents", "Passport-size photograph", "Previous cancellation paper"]),
  "emirates-id-services": seoService("emirates-id-services", "Emirates ID Services", "Emirates ID Typing & Services in UAE", "Fast, accurate Emirates ID application typing — new applications, renewals, replacements and data updates, coordinated with your visa process.", "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=80", ["New Emirates ID Typing", "Emirates ID Renewal", "Replacement of Lost ID", "Data Update & Correction", "Urgent Service Guidance", "Biometrics Appointment Guidance"], ["Passport copy", "Residence visa or entry permit", "Passport-size photograph", "Previous Emirates ID copy", "Application details form"]),
  "medical-typing-uae": seoService("medical-typing-uae", "Medical Typing UAE", "Medical Typing Services in UAE", "Medical fitness test typing for residence visas and renewals — fast, accurate applications with guidance on approved medical centres and next steps.", "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80", ["Medical Fitness Test Typing", "Visa Medical Applications", "Renewal Medical Typing", "Employee Medical Typing", "Urgent / VIP Typing Options", "Result Follow-Up Guidance"], ["Passport copy", "Visa page or entry permit", "Passport-size photograph", "Emirates ID copy", "Sponsor details"]),
  "corporate-pro-services-uae": seoService("corporate-pro-services-uae", "Corporate PRO Services UAE", "Corporate PRO Services in UAE", "Your outsourced PRO department. We manage routine government procedures, employee documentation and immigration requirements so your team can focus on the business.", "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80", ["Dedicated PRO Support", "Bulk Employee Visa Processing", "Immigration & Labour Procedures", "Trade License & Card Renewals", "Company Document Attestation", "Compliance & Renewal Tracking"], ["Trade license copy", "Establishment card copy", "Employee passport copies", "Authorisation letter", "Company contact details"]),
  "mainland-business-setup-uae": seoService("mainland-business-setup-uae", "Mainland Business Setup UAE", "Mainland Business Setup in UAE", "Start your mainland company with professional guidance — trade name, initial approval, licensing, documentation and investor visas handled by one team.", "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=80", ["Mainland Trade License", "Trade Name Reservation", "Initial Approval & Documentation", "Establishment Card", "Investor & Partner Visas", "License Renewal & Amendments"], ["Shareholder passport copies", "Passport-size photographs", "Proposed trade names", "Business activity details", "Existing visa or Emirates ID"]),
  "free-zone-business-setup-uae": seoService("free-zone-business-setup-uae", "Free Zone Business Setup UAE", "Free Zone Business Setup in UAE", "Set up in the right UAE free zone for your activity and budget. We guide you through selection, formation, licensing, visas and renewals.", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80", ["Free Zone Selection Guidance", "Company Formation", "Free Zone Trade License", "Investor & Employee Visas", "Establishment Card", "License Renewals"], ["Shareholder passport copies", "Passport-size photographs", "Proposed company names", "Business activity description", "Existing visa or Emirates ID"]),
  "trade-license-services-uae": seoService("trade-license-services-uae", "Trade License Services UAE", "Trade License Services in UAE", "New trade licenses, renewals, amendments and cancellations — for mainland and free zone companies, handled with accurate documentation and clear timelines.", "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80", ["New Trade License", "Trade License Renewal", "Activity Amendment", "Trade Name Change", "License Cancellation", "Approvals & Permits"], ["Current trade license copy", "Owner and partner passport copies", "Tenancy contract", "Proposed changes or activity details", "Establishment card copy"]),
};

export const processSteps = [
  ["01", "Contact Us", "Tell us what service you need."],
  ["02", "Requirement Check", "Our team reviews your requirement."],
  ["03", "Prepare Documents", "We help prepare the required documents and applications."],
  ["04", "Complete the Process", "We assist with the relevant processing and keep you informed."],
] as const;

export const trustItems = [
  { title: "Experienced Team", text: "Professional assistance for UAE documentation and government procedures.", icon: Users },
  { title: "Complete Solutions", text: "Multiple services under one roof.", icon: Layers },
  { title: "Transparent Service", text: "Clear communication about requirements and procedures.", icon: ShieldCheck },
  { title: "Dedicated Support", text: "Easy access through phone and WhatsApp.", icon: Headphones },
] as const;

export const industries = [
  { title: "Manpower Companies", text: "Employee visa and documentation support.", icon: Users },
  { title: "Facilities Management", text: "Ongoing employee processing and government support.", icon: Building },
  { title: "Construction Companies", text: "Employee and company documentation assistance.", icon: HardHat },
  { title: "Trading Companies", text: "Business and government service support.", icon: Package },
  { title: "SMEs", text: "Flexible corporate administration support.", icon: Store },
  { title: "Entrepreneurs", text: "Business setup and government services.", icon: Rocket },
] as const;

export const benefits = [
  ["01", "Professional Team", "Experienced assistance for UAE government and business procedures."],
  ["02", "One-Stop Solution", "Multiple services under one roof."],
  ["03", "Clear Communication", "We explain the process and requirements clearly."],
  ["04", "Convenient Support", "Contact our team through WhatsApp or phone."],
  ["05", "Corporate Solutions", "Ongoing support for companies and employers."],
  ["06", "Customer Focused", "We focus on reliable service and long-term relationships."],
] as const;

export const corporateChecklist = ["Employee Visa", "Emirates ID", "Medical", "Immigration", "Documentation", "Government Services"];

export const testimonials = [
  { quote: "Professional service and very helpful team. They explained everything clearly and handled the documentation smoothly.", name: "Customer", role: "Sample review" },
  { quote: "Quick response on WhatsApp and clear guidance on the visa process. Everything was handled step by step.", name: "Customer", role: "Sample review" },
  { quote: "They support our company with employee documentation and government procedures. Reliable and easy to work with.", name: "Customer", role: "Sample review" },
];

export const generalFaqs = [
  "What services does Advanced Solutions provide?",
  "Do you provide corporate PRO services?",
  "Can you assist with family visas?",
  "Do you provide MOFA attestation assistance?",
  "Can you help with business setup?",
  "Can I send my documents through WhatsApp?",
  "How long does a service take?",
  "Do you handle applications for companies with multiple employees?",
];
