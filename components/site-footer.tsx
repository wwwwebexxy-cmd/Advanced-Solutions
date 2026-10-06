import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Brand } from "./brand";
import { WhatsAppFloat } from "./whatsapp-float";

export function SiteFooter() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Brand dark />
              <h3 className="gold">Clearing the Path<br />to Your Success...</h3>
              <p>Professional UAE government and business services for individuals, families and companies.</p>
            </div>
            <div>
              <h4>SERVICES</h4>
              <Link href="/visa-services">Visa Services</Link>
              <Link href="/pro-services">PRO Services</Link>
              <Link href="/business-setup">Business Setup</Link>
              <Link href="/corporate-services">Corporate Services</Link>
              <Link href="/services">MOFA Attestation</Link>
              <Link href="/services">Translation Services</Link>
            </div>
            <div>
              <h4>QUICK LINKS</h4>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div>
              <h4>CONTACT</h4>
              <p><MapPin size={15} /> &nbsp; Sharjah, UAE</p>
              <p><Phone size={15} /> &nbsp; +971 52 346 6554</p>
              <p><MessageCircle size={15} /> &nbsp; +971 52 346 6554</p>
              <p><Mail size={15} /> &nbsp; info@advancedsolutions.ae</p>
            </div>
          </div>
          <div className="copyright"><span>© 2026 Advanced Solutions. All rights reserved.</span><span className="footer-legal"><span>Privacy Policy</span><span>Terms of Service</span></span></div>
        </div>
      </footer>
      <WhatsAppFloat />
    </>
  );
}
