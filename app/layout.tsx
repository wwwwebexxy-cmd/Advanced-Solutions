import type { Metadata } from "next";
import "./globals.css";
import { siteDescription, siteName, siteUrl } from "@/lib/site-meta";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | UAE Government & Business Services`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: ["UAE government services", "visa services UAE", "PRO services UAE", "business setup UAE", "Sharjah typing services", "Emirates ID services"],
  authors: [{ name: siteName }],
  creator: siteName,
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} | UAE Government & Business Services`,
    description: siteDescription,
    locale: "en_AE",
    images: [{ url: "/images/hero-uae-services.png", width: 2048, height: 762, alt: "UAE government and business services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | UAE Government & Business Services`,
    description: siteDescription,
    images: ["/images/hero-uae-services.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: siteName,
    url: siteUrl,
    image: `${siteUrl}/images/hero-uae-services.png`,
    logo: `${siteUrl}/logo.png`,
    description: siteDescription,
    telephone: "+971523466554",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sharjah",
      addressCountry: "AE",
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    availableLanguage: ["English", "Arabic"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971523466554",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    description: siteDescription,
    publisher: { "@id": `${siteUrl}/#business` },
    inLanguage: "en-AE",
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
