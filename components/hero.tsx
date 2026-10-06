import Link from "next/link";

type HeroProps = {
  label: string;
  title: React.ReactNode;
  description: string;
  home?: boolean;
  image?: string;
};

export function Hero({ label, title, description, home = false, image }: HeroProps) {
  const backgroundImage = image?.includes("1518684079")
    ? "/images/hero-visa-services.png"
    : image?.includes("1517245386807") || image?.includes("1600880292203") || image?.includes("1454165804606")
      ? "/images/hero-corporate-services.png"
      : image?.includes("1507679799987")
        ? "/images/hero-business-setup.png"
        : image?.includes("1486406146926") || !image
          ? "/images/hero-uae-services.png"
          : image;
  return (
    <section className={`hero ${home ? "hero-home" : ""}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(5,19,34,.93), rgba(7,25,44,.56)), url("${backgroundImage}")` }}>
      <div className="container">
        <div className="inner">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" />{label}</div>
          <h1>{title}</h1>
          <p>{description}</p>
          {home ? (
            <div className="actions" style={{ justifyContent: "flex-start" }}>
              <Link className="btn gold" href="/contact">Get a Free Consultation</Link>
              <a className="btn green" href="https://wa.me/971523466554"><span>◉</span> WhatsApp Us</a>
            </div>
          ) : (
            <div className="crumb"><Link href="/">Home</Link> &nbsp;/&nbsp; <span>{label}</span></div>
          )}
          {home && <div className="hero-trust"><span>Professional Service</span><i /> <span>Transparent Process</span><i /> <span>Dedicated Support</span></div>}
        </div>
      </div>
    </section>
  );
}
