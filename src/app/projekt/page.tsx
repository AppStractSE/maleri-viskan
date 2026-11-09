import CtaBand from "@/components/sections/CtaBand";
import ProjectCards from "@/components/sections/ProjectCards";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekt",
  description:
    "Se ett urval av Måleri Viskans projekt: fasadmålning, badrumsrenovering, fönsterrenovering, nyproduktion och mer i Marks kommun.",
  alternates: { canonical: "/projekt" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projekt"
        title="Ett urval av vårt arbete"
        lead={
          "Vi är stolta över att ha arbetat med många olika kunder. Vår noggrannhet är densamma oavsett projektets storlek.\n\nMålet är att överträffa dina förväntningar och leverera ett resultat du är nöjd med länge."
        }
        breadcrumbs={[{ label: "Projekt", href: "/projekt" }]}
      />
      <section className="container-site pb-20 lg:pb-28">
        <ProjectCards headingLevel="h2" />
      </section>
      <CtaBand title="Har du ett liknande projekt?" />
    </>
  );
}
