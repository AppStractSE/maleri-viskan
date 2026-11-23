import QuoteButton from "@/components/quote/QuoteButton";
import ContactSection from "@/components/sections/ContactSection";
import CredentialsBand from "@/components/sections/CredentialsBand";
import ProjectCards from "@/components/sections/ProjectCards";
import RotTeaser from "@/components/sections/RotTeaser";
import ServiceCards from "@/components/sections/ServiceCards";
import { Arrow, ButtonLink } from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const highlights = [
  {
    title: "Rätt färg för varje yta",
    text: "Väggar, tak, golv, möbler eller snickerier: vi hjälper dig välja rätt färg och tar hänsyn till rummets ljus och stil, så att resultatet blir som du tänkt dig.",
    image: "/målning.jpg",
    href: "/tjanster/malning",
    cta: "Om målning",
  },
  {
    title: "Alltid kvalitativa produkter",
    text: "Vi använder noggrant utvalda färger och material som är slitstarka, lättskötta och ger ett långvarigt resultat, i ett brett utbud av kulörer och glansgrader.",
    image: "/kvalitativa-produkter.jpg",
    href: "/tjanster",
    cta: "Våra tjänster",
  },
  {
    title: "Hållbar målning",
    text: "Vi tar ansvar för miljön med svanenmärkta produkter, återanvända verktyg och överbliven färg till ett lägre pris. Ett penseldrag i taget.",
    image: "/rollers.webp",
    href: "/miljoarbete",
    cta: "Vårt miljöarbete",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mist-50 pt-24 sm:pt-28 lg:pt-32">
        <div className="container-site grid items-center gap-8 pb-12 sm:gap-12 sm:pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-20">
          <div className="lg:col-span-6 xl:col-span-6">
            <p className="eyebrow mb-4 animate-fade-up sm:mb-6">Målerifirma i Marks kommun</p>
            <h1 className="text-display animate-fade-up text-[clamp(2.25rem,10vw,3rem)] leading-[1.05] text-balance [animation-delay:60ms] sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              Målare i Kinna, Skene och Marks kommun
            </h1>
            <p className="mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-muted [animation-delay:120ms] sm:mt-7 sm:text-lg">
              Vi jobbar noggrant och med yrkesstolthet, där kunden alltid är i fokus. Kvalitet och
              rätt behandling för varje yta är det som gör att du blir nöjd med resultatet.
            </p>
            <div className="mt-6 flex animate-fade-up flex-wrap gap-3 [animation-delay:180ms] sm:mt-8">
              <QuoteButton size="lg">Boka nu</QuoteButton>
              <ButtonLink href="/tjanster" variant="secondary" size="lg">
                Våra tjänster <Arrow />
              </ButtonLink>
            </div>
          </div>

          <div className="relative lg:col-span-6 lg:pl-6 xl:pl-12">
            <div className="relative aspect-[9/10] overflow-hidden rounded-panel bg-mist-100">
              <Image
                src="/torbjorn-lokalen.jpg"
                alt="Torbjörn sitter på trappan utanför Måleri Viskans lokal i Kinna"
                fill
                preload
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[60%_45%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-line py-16 sm:py-20 lg:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Large portrait plus a smaller, lower square for an asymmetric pair. */}
          <div className="grid grid-cols-5 items-end gap-3 sm:gap-5 lg:col-span-6">
            <div className="relative col-span-3 aspect-[365/500] overflow-hidden rounded-panel bg-mist-100">
              <Image
                src="/tb01.png"
                alt="Torbjörn från Måleri Viskan målar en vägg"
                fill
                sizes="(min-width: 1280px) 340px, (min-width: 1024px) 28vw, 58vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 mb-6 aspect-square overflow-hidden rounded-panel bg-mist-100 sm:mb-10">
              <Image
                src="/coat-hanger.jpg"
                alt="Arbetsjacka med Måleri Viskans logga"
                fill
                sizes="(min-width: 1280px) 220px, (min-width: 1024px) 18vw, 38vw"
                className="object-cover object-[60%_center]"
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow mb-4">Om oss</p>
            <h2 className="text-display text-3xl leading-[1.08] text-balance sm:text-4xl">
              Vi kan måleri, och vi kan det bra
            </h2>
            <div className="prose-copy mt-6 space-y-4">
              <p>
                Jag heter {site.owner} och har jobbat som målare i många år. Det jag bryr mig mest
                om är att jobbet blir rätt gjort: noggrant förarbete, ett snyggt resultat och en yta
                som håller länge.
              </p>
              <p>
                Fasader, tak, väggar, golv och det mesta däremellan. Vi utgår från Kinna, jobbar i
                hela Marks kommun och lyssnar alltid in vad just du vill ha.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <QuoteButton>Boka nu</QuoteButton>
              <ButtonLink href="/kontakt" variant="secondary">
                Kontakta oss <Arrow />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CredentialsBand />

      {/* Services */}
      <section className="container-site py-20 lg:py-28">
        <SectionHeading
          eyebrow="Tjänster"
          title="Allt inom måleri, inne som ute"
          lead="Skräddarsydda målerilösningar för privatpersoner och företag. Oavsett om det gäller inomhus- eller utomhusmålning sätter vi alltid kunden i fokus."
          aside={
            <ButtonLink href="/tjanster" variant="secondary">
              Alla tjänster <Arrow />
            </ButtonLink>
          }
        />
        <div className="mt-12">
          <ServiceCards />
        </div>
      </section>

      {/* Projects */}
      <section className="container-site py-20 lg:py-28">
        <SectionHeading
          eyebrow="Projekt"
          title="Ett urval av vårt arbete"
          lead="Vi är stolta över att ha arbetat med många olika kunder. Vår noggrannhet är densamma oavsett projektets storlek."
          aside={
            <ButtonLink href="/projekt" variant="secondary">
              Alla projekt <Arrow />
            </ButtonLink>
          }
        />
        <div className="mt-12">
          <ProjectCards projects={projects} layout="bento" />
        </div>
      </section>

      {/* Highlights */}
      <section className="container-site py-20 lg:py-28">
        <SectionHeading
          eyebrow="Varför Måleri Viskan"
          title="Din målare längs Viskan"
          align="center"
        />
        {/* Subgrid lines up image, title, text and link across the three cards. */}
        <ul className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3 md:gap-y-0">
          {highlights.map((item) => (
            <li key={item.title} className="md:row-span-4 md:grid md:grid-rows-subgrid">
              <Link href={item.href} className="group/link block md:row-span-4 md:grid md:grid-rows-subgrid">
                <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-mist-100">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover/link:scale-[1.04]"
                  />
                </div>
                <h3 className="text-display mt-5 text-xl sm:text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
                <span className="mt-4 flex items-center gap-2 self-start text-sm font-semibold text-brand-600">
                  {item.cta} <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-line">
        <RotTeaser />
      </div>

      <div className="border-t border-line">
        <ContactSection />
      </div>
    </>
  );
}
