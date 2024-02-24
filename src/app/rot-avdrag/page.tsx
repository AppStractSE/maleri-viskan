import RotAvdragCalculator from "@/components/RotavdragCalculator";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import SmallInfoCard from "@/components/cards/SmallInfoCard";
import GenericHeroSection from "@/components/home/hero/GenericHeroSection";
import CertSection from "@/components/sections/CertSection";
import ContactSection from "@/components/sections/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROT-avdrag | Måleri Viskan",
  description:
    "Måleri Viskan - Vi kan måleri! Vi är din lokala målare i Kinna, Skene och Marks kommun.",
};

const page = () => {
  return (
    <>
      <GenericHeroSection
        className="from-purple-600 to-purple-800"
        title="ROT-avdrag"
        description={`Rotavdraget är ett skatteavdrag som du kan använda dig av när du anlitar oss för att utföra renoveringsarbeten i ditt hem.
        Detta gäller för alla renoveringsarbeten som utförs i ditt hem, såsom måleriarbeten, tapetsering, golvslipning och mycket mer.`}
      />
      <Breadcrumbs />

      <section className="bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 pb-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <SmallInfoCard
              title="Ger arbetet rätt till rotavdrag?"
              titleClassName="text-3xl tracking-tight font-bold"
              description="Arbetet måste utföras av ett företag som är godkänt för F-skattsedel. Det är något
                som du inte behöver oroa dig för när du anlitar oss, då vi är ett företag som
                besitter F-skattsedel."
              containerClassName="rounded-md bg-gradient-to-r from-cyan-600 to-cyan-800 px-8 py-8 text-white"
              className="flex h-full flex-col justify-between"
            />
            <SmallInfoCard
              title="Dubbla avdraget om ni är två delägare"
              titleClassName="text-3xl tracking-tight font-bold"
              description="Skatteavdraget är 30 procent på belopp upp till 166 700 kronor, alltså maximalt 50
                000 kronor per år och person. Är ni två delägare i huset/bostadsrätten kan ni alltså
                få dubbla avdraget."
              containerClassName="rounded-md bg-gradient-to-r from-green-600 to-green-800 px-8 py-8 text-white"
              className="flex h-full flex-col justify-between"
            />
            <SmallInfoCard
              title="Låter det krångligt? Vi hjälper dig!"
              titleClassName="text-3xl tracking-tight font-bold"
              description="Måleri Viskan har stor kunskap om vilka regler som gäller och kan hjälpa dig att
                räkna ut hur mycket ROT-avdrag just du har rätt till i varje uppdrag. Kontakta oss
                idag så hjälper vi dig!"
              containerClassName="rounded-md bg-gradient-to-r from-orange-600 to-orange-800 px-8 py-8 text-white"
              className="flex h-full flex-col justify-between"
            />
          </div>
        </div>
      </section>
      <RotAvdragCalculator />
      <ContactSection />
      <CertSection />
    </>
  );
};

export default page;
