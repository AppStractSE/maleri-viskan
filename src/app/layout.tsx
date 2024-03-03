import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.scss";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Måleri Viskan | Målerifirma i Kinna, Skene och Marks kommun",
  description: "Vi kan måleri! Din lokala målare i Kinna, Skene och Marks kommun. Vi erbjuder professionella målningstjänster - hemma och för företag. Kontakta oss för offert idag!",
  openGraph: {
    siteName: "Måleri Viskan",
    type: "website",
    url: "https://maleriviskan.se",
    locale: "sv_SE",
  },
  alternates: {
    canonical: "https://maleriviskan.se",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="favicon.png" type="image/png" />
      </head>
      <body>
      <GoogleAnalytics gaId="G-JM8EGK5CMP" />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
