import QuoteButton from "@/components/quote/QuoteButton";
import CtaBand from "@/components/sections/CtaBand";
import FeatureRow from "@/components/sections/FeatureRow";
import RotTeaser from "@/components/sections/RotTeaser";
import ServiceCards from "@/components/sections/ServiceCards";
import JsonLd from "@/components/seo/JsonLd";
import { buttonClasses } from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { featureAnchor, getService, serviceHref, services } from "@/data/services";
import { openGraphBase, site } from "@/data/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ id: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).id);
  if (!service) return {};
  const title = `${service.name} i Kinna, Skene och Marks kommun`;
  return {
    title,
    description: `${service.shortDescription} ${service.description}`.slice(0, 158),
    alternates: { canonical: serviceHref(service) },
    openGraph: { ...openGraphBase, title, url: serviceHref(service), images: [{ url: service.image, alt: service.name }] },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).id);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Tjänst"
        title={service.name}
        lead={service.description}
        breadcrumbs={[
          { label: "Tjänster", href: "/tjanster" },
          { label: service.name, href: serviceHref(service) },
        ]}
        image={{ src: service.image, alt: service.name }}
        actions={
          <>
            <QuoteButton size="lg" service={service.name}>
              Begär kostnadsfri offert
            </QuoteButton>
            <a href={site.phoneHref} className={buttonClasses({ variant: "secondary", size: "lg" })}>
              Ring {site.phone}
            </a>
          </>
        }
      >
        <nav aria-label={`Innehåll: ${service.name}`} className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {service.features.map((feature) => (
              <li key={feature.title}>
                <a
                  href={`#${featureAnchor(feature.title)}`}
                  className="inline-block rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-ink/25 hover:text-ink"
                >
                  {feature.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <section className="container-site space-y-20 py-10 lg:space-y-28 lg:py-16">
        {service.features.map((feature, index) => (
          <FeatureRow
            key={feature.title}
            id={featureAnchor(feature.title)}
            title={feature.title}
            image={feature.image}
            imageAlt={feature.title}
            reverse={index % 2 === 1}
            actions={
              <QuoteButton variant="secondary" service={service.name}>
                Begär offert
              </QuoteButton>
            }
          >
            <p>{feature.description}</p>
          </FeatureRow>
        ))}
      </section>

      <div className="mt-10 border-t border-line">
        <RotTeaser />
      </div>

      <section className="container-site pb-20 lg:pb-28">
        <SectionHeading eyebrow="Fler tjänster" title="Vi hjälper dig även med" />
        <div className="mt-10">
          <ServiceCards exclude={service.id} />
        </div>
      </section>

      <CtaBand service={service.name} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          description: service.description,
          areaServed: site.areaServed,
          provider: { "@id": `${site.url}/#business` },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: service.name,
            itemListElement: service.features.map((feature) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: feature.title },
            })),
          },
        }}
      />
    </>
  );
}
