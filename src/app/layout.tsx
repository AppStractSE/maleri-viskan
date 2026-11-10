import ConsentProvider from "@/components/consent/ConsentProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import QuoteProvider from "@/components/quote/QuoteProvider";
import JsonLd from "@/components/seo/JsonLd";
import { services } from "@/data/services";
import { site } from "@/data/site";
import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Målare i Kinna, Skene och Marks kommun`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "sv_SE",
    images: [{ url: "/tb01.png", width: 365, height: 500, alt: "Torbjörn på Måleri Viskan målar en vägg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/tb01.png`,
  description: site.description,
  telephone: site.phoneE164,
  email: site.email,
  founder: { "@type": "Person", name: site.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
  sameAs: Object.values(site.socials).filter((url) => !url.includes("m.me")),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tjänster",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.name, description: service.shortDescription },
    })),
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ConsentProvider>
          <QuoteProvider>
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </QuoteProvider>
        </ConsentProvider>
        <JsonLd data={localBusiness} />
      </body>
    </html>
  );
}
