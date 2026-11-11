export const site = {
  name: "Måleri Viskan",
  url: "https://maleriviskan.se",
  tagline: "Målare i Kinna, Skene och Marks kommun",
  description:
    "Din lokala målare i Kinna, Skene och Marks kommun. Målning inne och ute, våtrum, tapetsering, spackling och fönsterrenovering. Boka nu.",
  owner: "Torbjörn Johansson",
  award: {
    title: "Årets nyföretagare i Mark 2026",
    year: 2026,
    sourceUrl: "https://se.linkedin.com/posts/foretagarna-i-mark_f%C3%B6r-en-vecka-sedan-korade-vi-%C3%A5rets-f%C3%B6retagare-activity-7521513170956472322-Sor7",
    sourceName: "Företagarna i Mark",
  },
  phone: "073-030 96 66",
  phoneHref: "tel:+46730309666",
  phoneE164: "+46730309666",
  email: "info@maleriviskan.se",
  address: {
    street: "Stationsgatan 8",
    postalCode: "511 54",
    city: "Kinna",
    region: "Västra Götalands län",
    country: "SE",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stationsgatan%208%2C%20511%2054%20Kinna",
  mapsEmbedUrl: "https://maps.google.com/maps?hl=sv&q=Stationsgatan%208%2C%20511%2054%20Kinna&z=15&output=embed",
  areaServed: ["Kinna", "Skene", "Marks kommun"],
  socials: {
    instagram: "https://instagram.com/maleriviskan",
    facebook: "https://www.facebook.com/maleriviskan",
    messenger: "https://m.me/maleriviskan",
  },
  credentials: [
    "Årets nyföretagare i Mark 2026",
    "Certifikat för våtrumsmålning (MVK)",
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
