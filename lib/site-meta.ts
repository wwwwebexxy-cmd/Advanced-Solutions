import type { Metadata } from "next";
import type { ServiceDetail } from "@/data/site-data";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://advancedsolutions.ae";
export const siteName = "Advanced Solutions";
export const siteDescription = "Professional UAE visa, PRO, typing, attestation, translation and business setup services across the UAE.";

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/hero-uae-services.png",
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = new URL(path, siteUrl).toString();
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName,
      locale: "en_AE",
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function serviceMetadata(service: ServiceDetail, slug: string): Metadata {
  return pageMetadata({
    title: service.title,
    description: service.detail,
    path: `/${slug}`,
    image: service.image,
    keywords: [service.title, ...service.items, "UAE services", "Sharjah services"],
  });
}
