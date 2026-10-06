import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { PageFrame } from "@/components/page-frame";
import { ProcessSection } from "@/components/process-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { contentImages } from "@/data/site-data";
import { pageMetadata } from "@/lib/site-meta";

export const metadata = pageMetadata({
  title: "About Advanced Solutions UAE",
  description: "Learn about Advanced Solutions, a Sharjah-based team providing professional UAE visa, PRO, typing and business services.",
  path: "/about",
  keywords: ["about Advanced Solutions", "Sharjah government services", "UAE business support"],
});

export default function AboutPage() {
  return (
    <PageFrame>
      <Hero image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80" label="About Us" title="Making UAE Services Simple & Hassle-Free" description="Advanced Solutions is a professional services team based in Sharjah, supporting individuals, families, entrepreneurs and companies across the UAE." />
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">— Who We Are</div>
            <h2 className="title">One Team for Every UAE Government &amp; Business Procedure</h2>
            <p className="subtitle">Advanced Solutions provides professional typing, document clearing, visa, PRO, attestation, translation and business support services across the UAE.</p>
            <p className="subtitle">Our goal is to simplify complicated procedures through professional guidance, accurate documentation and efficient service.</p>
            <ul className="about-pillars">{["Professional guidance on every procedure", "Accurate documentation and typing", "Clear communication at every step", "Support through phone and WhatsApp"].map((item) => <li key={item}><span className="pillar-check">✓</span> {item}</li>)}</ul>
            <a className="btn dark" href="https://wa.me/971523466554">Talk to Our Team</a>
          </div>
          <div className="photo" style={{ backgroundImage: `url(${contentImages.corporate})` }} />
        </div>
      </section>
      <WhyChooseSection />
      <ProcessSection />
      <CtaSection />
    </PageFrame>
  );
}
