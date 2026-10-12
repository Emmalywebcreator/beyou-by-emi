// Single source of truth for brand contact details and navigation.
// Edit the values here and they update across the whole site.

export const site = {
  name: "BEYOU by Emi",
  tagline: "Bespoke bridal & couture, made in Nigeria",

  // WhatsApp number in international format, digits only (no +, spaces or dashes).
  // PLACEHOLDER — replace with the real studio number.
  whatsappNumber: "2348000000000",
  whatsappMessage: "Hello BEYOU by Emi, I would like to enquire about a bespoke piece.",

  // PLACEHOLDER contact details — replace with the real ones.
  phone: "+234 800 000 0000",
  email: "hello@beyoubyemi.com",

  instagramHandle: "beyoubyemi_official",

  studio: {
    addressLines: ["BEYOU by Emi Studio", "Benin City, Edo State", "Nigeria"],
    hours: [
      { days: "Monday – Friday", time: "9:00am – 6:00pm" },
      { days: "Saturday", time: "10:00am – 4:00pm" },
      { days: "Sunday", time: "By appointment" },
    ],
  },

  academy: {
    name: "BEYOU Fashion Academy",
    addressLines: ["Sapele Road", "Benin City, Edo State", "Nigeria"],
  },
} as const;

// Public address of the live site, used for canonical URLs, the sitemap and
// social share previews. Set NEXT_PUBLIC_SITE_URL once the domain is live;
// on Vercel the production URL is picked up automatically until then.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const instagramUrl = `https://instagram.com/${site.instagramHandle}`;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const telUrl = `tel:${site.phone.replace(/\s/g, "")}`;

export const mainNav = [
  { href: "/collections", label: "Collections" },
  { href: "/bespoke-process", label: "Bespoke" },
  { href: "/brides", label: "Brides" },
  { href: "/about", label: "About" },
  { href: "/academy", label: "Academy" },
  { href: "/contact", label: "Contact" },
] as const;
