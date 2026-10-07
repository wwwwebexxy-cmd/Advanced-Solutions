import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
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
              <h3 className="footer-tagline">TYPING AND<br />DOCUMENT CLEARING</h3>
              <p>Professional UAE typing, document clearing, government and business services for individuals, families and companies.</p>
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
            <div className="footer-contact">
              <h4>CONTACT</h4>
              <div className="footer-addresses">
                <div className="footer-address">
                  <strong>SHARJAH</strong>
                  <p>P.O Box 515354<br />King Abdulaziz Street,<br />Al Bu Dani Shop No. 1,<br />Near Mega Mall, Sharjah-UAE</p>
                </div>
                <div className="footer-address">
                  <strong>DUBAI</strong>
                  <p>Sheikha Mehra Building<br />M-Floor, 116, Office Number-1<br />Al Tawar, Al Qusais, Dubai</p>
                </div>
              </div>
              <div className="footer-contact-links">
                <a href="tel:+97167020888"><Phone size={15} /> +971 67 02 0888</a>
                <a href="tel:+971523466554"><Phone size={15} /> +971 52 346 6554</a>
                <a href="https://wa.me/971523521448"><MessageCircle size={15} /> +971 52 352 1448</a>
                <a href="mailto:advancedsolutionspro@gmail.com"><Mail size={15} /> advancedsolutionspro@gmail.com</a>
              </div>
              <div className="footer-socials" aria-label="Social media links">
                <a href="https://www.instagram.com/advanced_solutions_sharjah?stkn=azNqYzE1bXJlMTEw&utm_source=qr" aria-label="Instagram" title="Instagram">
                  <SiInstagram aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/share/1HfRk9VJ4i/?mibextid=wwXIfr" aria-label="Facebook" title="Facebook">
                  <SiFacebook aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="copyright"><span>© 2026 Advanced Solutions. All rights reserved.</span><span className="footer-legal"><span>Privacy Policy</span><span>Terms of Service</span></span></div>
        </div>
      </footer>
      <WhatsAppFloat />
    </>
  );
}
