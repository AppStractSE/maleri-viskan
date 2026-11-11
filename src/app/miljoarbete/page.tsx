import CtaBand from "@/components/sections/CtaBand";
import FeatureRow from "@/components/sections/FeatureRow";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miljöarbete",
  description:
    "Måleri Viskan arbetar aktivt för att minska sin miljöpåverkan med svanenmärkta produkter, återanvända verktyg och överbliven färg till lägre pris.",
  alternates: { canonical: "/miljoarbete" },
};

const blocks = [
  {
    title: "Miljövänliga produkter",
    image: "/alcro.jpg",
    contain: true,
    text: "Vi minimerar vår miljöpåverkan genom att använda noggrant utvalda, svanenmärkta produkter. Vi väljer material som håller hög kvalitet och samtidigt tar hänsyn till miljön.\n\nVarje val av färg och produkt är ett medvetet steg mot en mer hållbar framtid.",
  },
  {
    title: "Återanvända verktyg och material",
    image: "/rollers.webp",
    text: "Vi återanvänder konsekvent verktyg och material. Genom att ge rollerbyglar och andra verktyg ett andra liv minskar vi avfallet och använder resurserna mer ansvarsfullt.\n\nSmå val, gjorda varje dag, gör stor skillnad över tid.",
  },
  {
    title: "Överbliven färg",
    image: "/malarburk.webp",
    text: "När du planerar ditt projekt kan du välja att använda överbliven färg från oss, till ett lägre pris. Nämn det i din bokningsförfrågan så anpassar vi projektet efter det.\n\nVi ser varje färgburk som en möjlighet att minska svinnet.",
  },
];

export default function EnvironmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Miljöarbete"
        title="Hållbar målning, ett penseldrag i taget"
        lead="Vi tar aktivt ansvar för miljön. Vårt mål är inte bara att skapa vackra ytor, utan också att minska vår påverkan på planeten."
        breadcrumbs={[{ label: "Miljöarbete", href: "/miljoarbete" }]}
        image={{ src: "/nature.jpg", alt: "Klippor och skog vid vattnet", aspect: "landscape" }}
      />
      <section className="container-site space-y-20 pb-20 lg:space-y-28 lg:pb-28">
        {blocks.map((block, index) => (
          <FeatureRow
            key={block.title}
            title={block.title}
            image={block.image}
            reverse={index % 2 === 1}
            contain={block.contain}
          >
            <p>{block.text}</p>
          </FeatureRow>
        ))}
      </section>
      <CtaBand text="Vill du använda överbliven färg i ditt projekt? Nämn det i din förfrågan." />
    </>
  );
}
