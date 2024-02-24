import RotavdragCalculator from "@/components/RotavdragCalculator";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import BigCards from "@/components/cards/BigCards";
import GenericHeroSection from "@/components/home/hero/GenericHeroSection";
import { services } from "@/data/services";

export default function page() {
  return (
    <>
      <GenericHeroSection
        className="from-stone-700 to-stone-800"
        title="Tjänster"
        description={`Omfattande målningstjänster hos Måleri Viskan – din pålitliga lokala målare i Kinna, Skene och Marks kommun.
          Vi specialiserar oss på att tillhandahålla skräddarsydda målerilösningar för både privatpersoner och företag.\n\nOavsett om det gäller inomhus- eller utomhusmålning sätter vi alltid kunden i fokus.`}
        quoteButton
      />
      <Breadcrumbs />
      <section className="bg-white">
        <div className="mx-auto my-8 w-full max-w-screen-2xl px-4">
          <div className="space-y-12 lg:space-y-16">
            {services.map((services, index) => (
              <BigCards
                key={index}
                title={services.name}
                description={services.description}
                image={services.image}
                quoteButton={true}
                readMoreButton={true}
                link={services.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <RotavdragCalculator />
    </>
  );
}
