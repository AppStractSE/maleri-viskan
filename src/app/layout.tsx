import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Måleri Viskan | Målerifirma i Sjuhärad, Mark och Kinna",
  description: "Måleri Viskan - Vi kan måleri! Vi är din lokala målare i Sjuhärad, Mark och Kinna.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
