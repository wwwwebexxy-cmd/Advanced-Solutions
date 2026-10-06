import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { PageFrame } from "@/components/page-frame";
import { ContactCard } from "@/components/contact-card";
import { Clock } from "lucide-react";
import { pageMetadata } from "@/lib/site-meta";

export const metadata = pageMetadata({
  title: "Contact Advanced Solutions UAE",
  description: "Contact Advanced Solutions in Sharjah for UAE visa, PRO, typing, documentation and business setup support.",
  path: "/contact",
  image: "/images/hero-corporate-services.png",
  keywords: ["contact UAE government services", "Advanced Solutions Sharjah", "UAE visa WhatsApp"],
});

export default function ContactPage() {
  return (
    <PageFrame>
      <Hero image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80" label="Contact" title="Talk to Our Team" description="Tell us what you need — our team will review your requirement and guide you on the next steps." />
      <section className="section">
        <div className="container center">
          <div className="eyebrow">— Get In Touch</div>
          <h2 className="title">Reach Us the Easy Way</h2>
          <p className="subtitle">No forms, no waiting. Message us on WhatsApp or call directly.</p>
          <div className="contact-cards">
            <ContactCard type="whatsapp" title="WhatsApp" description="Fastest way to reach our team. Send your requirement and documents anytime." label="WhatsApp Us" href="https://wa.me/971523466554" />
            <ContactCard type="phone" title="Phone" description="Call us directly on +971 52 346 6554 during working hours." label="Call Now" href="tel:+971523466554" />
            <ContactCard type="office" title="Office" description="Sharjah, UAE — serving clients across all Emirates." label="Get Directions" href="https://maps.google.com/?q=Sharjah,UAE" />
          </div>
          <div className="contact-note"><Clock size={16} className="gold" /> WhatsApp messages are welcome anytime — we respond as soon as possible.</div>
        </div>
      </section>
      <CtaSection />
    </PageFrame>
  );
}
