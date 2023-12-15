import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import GoogleMapSection from "@/components/home/map/GoogleMapSection";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Måleri Viskan | Målerifirma i Sjuhärad, Mark och Kinna",
  description: "Måleri Viskan - Vi kan måleri! Vi är din lokala målare i Sjuhärad, Mark och Kinna.",
};

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="bg-white text-black">
        <div className="max-w-screen-2xl mx-auto pt-24 md:pt-32 w-full">
          <Breadcrumbs />
        </div>
      </section>
      {children}
      <GoogleMapSection />
    </>
  );
}
