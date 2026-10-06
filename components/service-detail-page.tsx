import Link from "next/link";
import { Check, FileCheck, MessageCircle } from "lucide-react";
import { seoServiceDetails, serviceDetails } from "@/data/site-data";
import { Hero } from "./hero";
import { ProcessSection } from "./process-section";
import { FaqSection } from "./faq-section";
import { CtaSection } from "./cta-section";
import { siteName, siteUrl } from "@/lib/site-meta";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = serviceDetails[slug] ?? seoServiceDetails[slug];
  if (!service) return null;
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.detail,
    url: `${siteUrl}/${slug}`,
    image: new URL(service.image ?? "/images/hero-uae-services.png", siteUrl).toString(),
    provider: {
      "@type": "LocalBusiness",
      name: siteName,
      url: siteUrl,
      telephone: "+971523466554",
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
      <Hero image={service.image} label={service.label} title={service.title} description={service.detail} />
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">— Overview</div>
            <h2 className="title">What We Can Help With</h2>
            <div className="checks">
              {service.items.map((item) => <div className="check" key={item}><Check size={16} className="gold" /> &nbsp; {item}</div>)}
            </div>
            <ProcessSection compact />
          </div>
          <div>
            <div className="photo" style={{ backgroundImage: `url(${service.image ?? "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"})` }} />
            <div className="docbox" style={{ marginTop: 25 }}>
              <h3><FileCheck size={21} className="gold" /> Documents Required</h3>
              <ul>{service.documents.map((document) => <li key={document}><Check size={15} className="gold" /> &nbsp; {document}</li>)}</ul>
            </div>
            <Link className="btn green" style={{ display: "flex", marginTop: 25 }} href="/contact"><MessageCircle size={18} /> Check Requirement</Link>
          </div>
        </div>
      </section>
      <FaqSection questions={[`Can you assist with ${service.title.toLowerCase()}?`, "How long does the process take?", "Can I start through WhatsApp?"]} />
      <CtaSection />
    </>
  );
}
