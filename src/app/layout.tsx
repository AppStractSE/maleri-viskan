import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Måleri Viskan | Målerifirma i Kinna, Skene och Marks kommun",
  description:
    "Måleri Viskan - Vi kan måleri! Vi är din lokala målare i Kinna, Skene och Marks kommun.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="favicon.png" type="image/png" />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
