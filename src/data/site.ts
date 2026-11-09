export const site = {
  name: "Måleri Viskan",
  url: "https://maleriviskan.se",
  tagline: "Målare i Kinna, Skene och Marks kommun",
  description:
    "Din lokala målare i Kinna, Skene och Marks kommun. Målning inne och ute, våtrum, tapetsering, spackling och fönsterrenovering. Begär en kostnadsfri offert.",
  owner: "Torbjörn Johansson",
  phone: "073-030 96 66",
  phoneHref: "tel:+46730309666",
  phoneE164: "+46730309666",
  email: "info@maleriviskan.se",
  address: {
    street: "Stationsgatan 8",
    // TODO: confirm the postal code for Stationsgatan 8 before launch.
    postalCode: "",
    city: "Kinna",
    region: "Västra Götalands län",
    country: "SE",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stationsgatan%208%2C%20Kinna",
  mapsEmbedUrl: "https://maps.google.com/maps?hl=sv&q=Stationsgatan%208%2C%20Kinna&z=15&output=embed",
  areaServed: ["Kinna", "Skene", "Marks kommun"],
  socials: {
    instagram: "https://instagram.com/maleriviskan",
    facebook: "https://www.facebook.com/maleriviskan",
    messenger: "https://m.me/maleriviskan",
  },
  credentials: [
    "Auktoriserade av Måleribranschens Yrkesnämnd (MYN)",
    "Certifikat för våtrumsmålning (MVK)",
    "Medlemmar i Måleriföretagen",
    "Innehar F-skattsedel",
  ],
} as const;

/**
 * Shared Open Graph fields. Next.js replaces (not merges) a parent's openGraph object, so pages
 * that set their own openGraph spread this in to keep site name, locale and type.
 */
export const openGraphBase = {
  siteName: site.name,
  locale: "sv_SE",
  type: "website" as const,
};
