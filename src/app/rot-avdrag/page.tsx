import RotAvdragCalculator from "@/components/RotavdragCalculator";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import SmallInfoCard from "@/components/cards/SmallInfoCard";
import GenericHeroSection from "@/components/home/hero/GenericHeroSection";
import CertSection from "@/components/sections/CertSection";
import ContactSection from "@/components/sections/ContactSection";

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
        <div className="max-w-screen-2xl px-4 pb-8 mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SmallInfoCard
              title="Ger arbetet rätt till rotavdrag?"
              description="Arbetet måste utföras av ett företag som är godkänt för F-skattsedel. Det är något
                som du inte behöver oroa dig för när du anlitar oss, då vi är ett företag som
                besitter F-skattsedel."
              className="text-white bg-gradient-to-r from-cyan-600 to-cyan-800"
            />
            <SmallInfoCard
              title="Dubbla avdraget om ni är två delägare"
              description="Skatteavdraget är 30 procent på belopp upp till 166 700 kronor, alltså maximalt 50
                000 kronor per år och person. Är ni två delägare i huset/bostadsrätten kan ni alltså
                få dubbla avdraget."
              className="text-white bg-gradient-to-r from-green-600 to-green-800"
            />
            <SmallInfoCard
              title="Låter det krångligt? Vi hjälper dig!"
              description="Måleri Viskan har stor kunskap om vilka regler som gäller och kan hjälpa dig att
                räkna ut hur mycket ROT-avdrag just du har rätt till i varje uppdrag. Kontakta oss
                idag så hjälper vi dig!"
              className="text-white bg-gradient-to-r from-orange-600 to-orange-800"
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
