import QuoteButton from "@/components/quote/QuoteButton";
import CtaBand from "@/components/sections/CtaBand";
import FeatureRow from "@/components/sections/FeatureRow";
import RotTeaser from "@/components/sections/RotTeaser";
import { Arrow, ButtonLink } from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import { featureAnchor, serviceHref, services } from "@/data/services";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Målning, tapetsering, spackling och fönsterrenovering i Kinna, Skene och Marks kommun. Skräddarsydda målerilösningar för privatpersoner och företag.",
  alternates: { canonical: "/tjanster" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tjänster"
        title="Måleritjänster för hem och företag"
        lead="Skräddarsydda målerilösningar för privatpersoner och företag i Kinna, Skene och Marks kommun. Oavsett om det gäller inomhus- eller utomhusmålning sätter vi alltid kunden i fokus."
        breadcrumbs={[{ label: "Tjänster", href: "/tjanster" }]}
        actions={<QuoteButton size="lg">Begär kostnadsfri offert</QuoteButton>}
      />

      <section className="container-site space-y-20 pb-20 lg:space-y-28 lg:pb-28">
        {services.map((service, index) => (
          <FeatureRow
            key={service.id}
            id={service.id}
            title={service.name}
            image={service.image}
            imageAlt={service.name}
            reverse={index % 2 === 1}
            actions={
              <>
                <ButtonLink href={serviceHref(service)}>
                  Läs mer om {service.name.toLowerCase()} <Arrow />
                </ButtonLink>
                <QuoteButton variant="secondary" service={service.name}>
                  Begär offert
                </QuoteButton>
              </>
            }
          >
            <p>{service.description}</p>
            <ul className="flex flex-wrap gap-2 pt-2">
              {service.features.map((feature) => (
                <li key={feature.title}>
                  <Link
                    href={`${serviceHref(service)}#${featureAnchor(feature.title)}`}
                    className="inline-block rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:border-ink/25 hover:text-ink"
                  >
                    {feature.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FeatureRow>
        ))}
      </section>

      <div className="border-t border-line">
        <RotTeaser />
      </div>
      <CtaBand />
    </>
  );
}
