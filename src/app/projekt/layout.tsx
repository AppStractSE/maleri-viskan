import CertSection from "@/components/sections/CertSection";
import ContactSection from "@/components/sections/ContactSection";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Projekt | Måleri Viskan",
  description:
    "Måleri Viskan - Vi kan måleri! Vi är din lokala målare i Kinna, Skene och Marks kommun.",
};

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ContactSection />
      <CertSection />
    </>
  );
}
