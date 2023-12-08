import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import GoogleMapSection from "@/components/home/map/GoogleMapSection";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Måleri Viskan | Målerifirma i Sjuhärad, Mark och Kinna",
  description: "Måleri Viskan - Vi kan måleri! Vi är din lokala målare i Sjuhärad, Mark och Kinna.",
};

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Breadcrumbs />
      {children}
      <GoogleMapSection />
    </>
  );
}
