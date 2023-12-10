import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import BigCards from "@/components/cards/BigCards";
import GenericHeroSection from "@/components/home/hero/GenericHeroSection";
import QuoteModalButtonWrapper from "@/components/modal/QuoteModalWrapper";
import { services } from "@/data/services";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const service = services.find((service) => service.id === params.id);
  if (!service) redirect("/404");

  return (
    <>
      <GenericHeroSection>
        <>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            {service.servicePageTitle}
          </h1>
          <p className=" max-w-6xl text-lg md:text-xl mt-6 mb-24">
            {service.shortDescription} {service.shortDescription} {service.shortDescription}
          </p>
          <div className="flex">
            <QuoteModalButtonWrapper label="Kontakta oss" />
          </div>
        </>
      </GenericHeroSection>
      <section className="bg-white py-12">
        <Breadcrumbs />
      </section>
      <div className="bg-white">
        <div className="max-w-screen-2xl px-4 pb-8 mx-auto w-full">
          <div className="space-y-12 lg:space-y-8">
            <BigCards
              title="Anlita en professionell målare i Stockholm"
              description="Många väljer att måla själva. Medan det absolut
                kan verka enkelt att slänga upp lite färg på väggen, så måste vi dock ändå som
                professionella målare slå ett slag för själva hantverket måleri, som innefattar mer än att
                bara stryka färg med en pensel eller roller. Vill man ha ett så bra resultat som möjligt så
                spelar underarbetet en mycket stor roll. Att känna till vilka metoder och material som
                fungerar bäst beroende på underlaget, och framför allt att vara mycket noggrann med hela
                underarbetet och skapa en jämn och ren yta för färgen att fastna på, är ofta det som skiljer
                en fackmannamässig målning från ett “hemmajobb”."
              image={service.image}
              quoteButton={true}
              index={0}
            />
            <BigCards
              title="Anlita en professionell målare i Stockholm"
              description="Många väljer att måla själva. Medan det absolut
                kan verka enkelt att slänga upp lite färg på väggen, så måste vi dock ändå som
                professionella målare slå ett slag för själva hantverket måleri, som innefattar mer än att
                bara stryka färg med en pensel eller roller. Vill man ha ett så bra resultat som möjligt så
                spelar underarbetet en mycket stor roll. Att känna till vilka metoder och material som
                fungerar bäst beroende på underlaget, och framför allt att vara mycket noggrann med hela
                underarbetet och skapa en jämn och ren yta för färgen att fastna på, är ofta det som skiljer
                en fackmannamässig målning från ett “hemmajobb”."
              image={service.image}
              quoteButton={true}
              index={1}
            />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:py-16 w-full">
          <div className="space-y-12 lg:space-y-8">
            {service.features.map((feature, index) => (
              <BigCards
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                quoteButton={true}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
