import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="cta" id="contact-cta">
      <div className="container">
        <div className="eyebrow">We Are Ready When You Are</div>
        <h2>Need Assistance With a UAE Service?</h2>
        <p>Tell us what you need. Our team will review your requirement and guide you on the next steps.</p>
        <div className="actions">
          <a className="btn green" href="https://wa.me/971523466554"><MessageCircle size={18} /> WhatsApp Us Now</a>
          <a className="btn dark" href="tel:+971523466554"><Phone size={18} /> Call Us</a>
        </div>
      </div>
    </section>
  );
}
