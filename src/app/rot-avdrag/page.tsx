import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import BigCards from "@/components/cards/BigCards";
import { services } from "@/data/services";

const page = () => {
  return (
    <>
      <section className="bg-white text-black">
        <div className="max-w-screen-2xl mx-auto pt-24 md:pt-32 w-full">
          <Breadcrumbs />
        </div>
      </section>
      <section className="bg-white text-black">
        <div className="max-w-screen-2xl mx-auto px-4 py-8 w-full">
          <div>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Rotavdrag
            </h1>
            <p className="max-w-5xl mb-6 font-light lg:mb-8 md:text-lg lg:text-2xl whitespace-pre-line">
              Rotavdraget är ett skatteavdrag som du kan använda dig av när du anlitar oss för att
              utföra renoveringsarbeten i ditt hem. Det gäller för alla privatpersoner som äger sin
              bostad och som betalar skatt i Sverige.{`\n\n`}Rotavdraget innebär att du kan dra av
              halva arbetskostnaden för renoveringen, upp till 75 000 kr per år. Detta gäller för
              alla renoveringsarbeten som utförs i ditt hem, såsom måleriarbeten, tapetsering,
              golvslipning och mycket mer.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <div className="max-w-screen-2xl px-4 pb-8 mx-auto w-full">
          <div className="space-y-12 lg:space-y-8">
            <BigCards
              title="Ger arbetet rätt till rotavdrag?"
              description={`Arbetet måste utföras av ett företag som är godkänt för F-skattsedel.\nDet är något som du inte behöver oroa dig för när du anlitar oss, då vi är ett företag som besitter F-skattsedel.`}
              image={services[0].image}
              quoteButton={true}
              index={0}
            />
            <BigCards
              title="Dubbla avdraget om ni är två delägare"
              description="Skatteavdraget är 30 procent på belopp upp till 166 700 kronor, alltså maximalt 50 000 kronor per år.
              ROT-avdraget är kopplat till den enskilda individen.
              Är ni två delägare i huset/bostadsrätten kan ni alltså få en skattereduktion på maximalt 2x50 000 om arbetskostnaden är 330 000 kronor, beroende på bl a er inkomst."
              image={services[0].image}
              quoteButton={true}
              index={1}
            />
            <BigCards
              title="Låter det krångligt? Vi hjälper dig!"
              description="Måleri Viskan har stor kunskap om vilka regler som gäller och kan hjälpa dig att räkna ut hur mycket ROT-avdrag just du har rätt till i varje uppdrag. Kontakta oss idag så hjälper vi dig!"
              image={services[0].image}
              quoteButton={true}
              index={2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
