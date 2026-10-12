import type { Metadata } from "next";
import { instagramUrl, site, siteUrl, telUrl } from "@/lib/site";

export const homeDescription =
  "BEYOU by Emi is a Nigerian bespoke bridal and fashion house creating traditional wedding and aso-ebi attire, evening gowns and couture bridal pieces.";

// Pages in sub-folders don't inherit the root opengraph-image once they set their
// own openGraph fields, so the image is referenced explicitly for every page.
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} — bespoke bridal & couture`,
};

const openGraphDefaults = {
  siteName: site.name,
  locale: "en_NG",
  type: "website",
} as const;

/**
 * Metadata for a page: title, description, canonical URL and matching social
 * preview text. The share image comes from app/opengraph-image.tsx.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  /** Canonical path. Omit for site-wide defaults. */
  path?: string;
}): Metadata {
  const socialTitle = title ? `${title} — ${site.name}` : `${site.name} — Bespoke Bridal & Couture`;

  return {
    ...(title && { title }),
    description,
    ...(path && { alternates: { canonical: path } }),
    openGraph: {
      ...openGraphDefaults,
      title: socialTitle,
      description,
      images: [shareImage],
      ...(path && { url: path }),
    },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [shareImage] },
  };
}

/** Business details for Google (structured data), rendered on the home page. */
export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: site.name,
  description: "Bespoke bridal and fashion house creating traditional wedding and aso-ebi attire, evening gowns and couture bridal pieces.",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  logo: `${siteUrl}/apple-icon`,
  telephone: telUrl.replace("tel:", ""),
  email: site.email,
  priceRange: "₦₦₦₦",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Benin City",
    addressRegion: "Edo State",
    addressCountry: "NG",
  },
  sameAs: [instagramUrl],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
  ],
};
