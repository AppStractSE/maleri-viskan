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

const trust = ["MYN-auktoriserade", "MVK-certifierade för våtrum", "F-skatt och ROT-avdrag"];

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
      <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        <div className="container-site grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-24">
          <div className="lg:col-span-6 xl:col-span-6">
            <p className="eyebrow mb-6 animate-fade-up">Målerifirma i Marks kommun</p>
            <h1 className="text-display animate-fade-up text-[3.25rem] leading-[0.98] text-balance [animation-delay:60ms] sm:text-7xl xl:text-[5.5rem]">
              Målare i Kinna, Skene och Marks kommun
            </h1>
            <p className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-muted [animation-delay:120ms] sm:text-xl">
              Vi jobbar noggrant och med yrkesstolthet, där kunden alltid är i fokus. Kvalitet och
              rätt behandling för varje yta är det som gör att du blir nöjd med resultatet.
            </p>
            <div className="mt-10 flex animate-fade-up flex-wrap gap-3 [animation-delay:180ms]">
              <QuoteButton size="lg">Begär kostnadsfri offert</QuoteButton>
              <ButtonLink href="/tjanster" variant="secondary" size="lg">
                Våra tjänster <Arrow />
              </ButtonLink>
            </div>
            <ul className="mt-12 flex animate-fade-up flex-wrap gap-x-6 gap-y-3 text-sm text-ink-soft [animation-delay:240ms]">
              {trust.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4 text-brand-500" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m3.5 8.5 3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-6 lg:pl-6 xl:pl-12">
            <div className="relative aspect-[4/5] overflow-hidden rounded-panel bg-mist-100 shadow-lift sm:aspect-[5/5] lg:aspect-[4/5]">
              <Image
                src="/coat-hanger.jpg"
                alt="Arbetsjacka med Måleri Viskans logga"
                fill
                priority
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-xl bg-paper/95 p-4 pr-6 shadow-lift backdrop-blur sm:left-8 lg:-left-6">
              <Image
                src="/MVK.png"
                alt=""
                width={400}
                height={520}
                sizes="40px"
                className="h-12 w-auto"
              />
              <div>
                <p className="font-semibold">Certifierade våtrumsmålare</p>
                <p className="text-sm text-muted">Måleribranschens Våtrumskontroll</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* About */}
      <section className="bg-mist-50 py-20 lg:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="grid grid-cols-5 gap-4 lg:col-span-6">
            <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-panel bg-mist-100">
              <Image
                src="/20240119_074238.jpg"
                alt="Torbjörn från Måleri Viskan målar en vägg"
                fill
                sizes="(min-width: 1024px) 340px, 60vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
            <div className="relative col-span-2 mt-16 aspect-[3/4] overflow-hidden rounded-panel bg-mist-100">
              <Image
                src="/20240119_074402.jpg"
                alt="Torbjörn målar vid en golvlist"
                fill
                sizes="(min-width: 1024px) 220px, 40vw"
                className="object-cover object-[100%_50%]"
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow mb-4">Om oss</p>
            <h2 className="text-display text-4xl leading-[1.05] text-balance sm:text-5xl">
              Vi kan måleri, och vi kan det bra
            </h2>
            <div className="prose-copy mt-6 space-y-4">
              <p>
                Mitt namn är {site.owner}. Jag har arbetat inom branschen i många år och finslipat
                mina färdigheter för att leverera ett resultat jag är stolt över. Mitt fokus ligger
                på precision, noggrannhet och att möta varje kunds unika behov.
              </p>
              <p>
                Vi har lång erfarenhet av att måla fasader, tak, väggar, golv och mycket mer. Vi är
                ett mångsidigt måleriföretag baserat i Kinna, och arbetar i hela Marks kommun.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <QuoteButton>Begär offert</QuoteButton>
              <ButtonLink href="/kontakt" variant="secondary">
                Kontakta oss <Arrow />
              </ButtonLink>
            </div>
          </div>
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
          <ProjectCards projects={projects.slice(0, 6)} layout="bento" />
        </div>
      </section>

      <CredentialsBand />

      {/* Highlights */}
      <section className="container-site py-20 lg:py-28">
        <SectionHeading
          eyebrow="Varför Måleri Viskan"
          title="Din målare längs Viskan"
          align="center"
        />
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="group/link block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-mist-100">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover/link:scale-[1.04]"
                  />
                </div>
                <h3 className="text-display mt-6 text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
                <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-600">
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
