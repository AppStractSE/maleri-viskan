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
      <section className="relative overflow-hidden bg-mist-50 pt-24 sm:pt-28 lg:pt-32">
        <div className="container-site grid items-center gap-8 pb-12 sm:gap-12 sm:pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-20">
          <div className="lg:col-span-6 xl:col-span-6">
            <p className="eyebrow mb-4 animate-fade-up sm:mb-6">Målerifirma i Marks kommun</p>
            <h1 className="text-display animate-fade-up text-[clamp(2.25rem,10vw,3rem)] leading-[1.05] text-balance [animation-delay:60ms] sm:text-6xl lg:text-7xl xl:text-[4.75rem]">
              Målare i Kinna, Skene och Marks kommun
            </h1>
            <p className="mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-muted [animation-delay:120ms] sm:mt-7 sm:text-lg">
              Vi jobbar noggrant och med yrkesstolthet, där kunden alltid är i fokus. Kvalitet och
              rätt behandling för varje yta är det som gör att du blir nöjd med resultatet.
            </p>
            <div className="mt-6 flex animate-fade-up flex-wrap gap-3 [animation-delay:180ms] sm:mt-8">
              <QuoteButton size="lg">Begär kostnadsfri offert</QuoteButton>
              <ButtonLink href="/tjanster" variant="secondary" size="lg">
                Våra tjänster <Arrow />
              </ButtonLink>
            </div>
            <ul className="mt-6 flex animate-fade-up flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft [animation-delay:240ms] sm:mt-9">
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
            <div className="relative aspect-[5/4] overflow-hidden rounded-panel bg-mist-100 sm:aspect-square lg:aspect-[5/6]">
              <Image
                src="/coat-hanger.jpg"
                alt="Arbetsjacka med Måleri Viskans logga"
                fill
                preload
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[center_65%] lg:object-center"
              />
            </div>
            <div className="relative mx-3 -mt-6 flex items-center gap-3 rounded-xl border border-line bg-paper p-3 shadow-soft sm:absolute sm:-bottom-6 sm:left-8 sm:mx-0 sm:mt-0 sm:gap-4 sm:p-4 sm:pr-6 lg:-left-6">
              <Image
                src="/MVK.png"
                alt=""
                width={400}
                height={520}
                sizes="40px"
                className="h-12 w-auto"
              />
              <div>
                <p className="text-sm font-semibold sm:text-base">Certifierade våtrumsmålare</p>
                <p className="text-xs text-muted sm:text-sm">Måleribranschens Våtrumskontroll</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-line py-16 sm:py-20 lg:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="grid grid-cols-2 items-start gap-3 sm:gap-5 lg:col-span-6">
            <div className="relative aspect-[365/500] overflow-hidden rounded-panel bg-mist-100">
              <Image
                src="/tb01.png"
                alt="Torbjörn från Måleri Viskan målar en vägg"
                fill
                sizes="(min-width: 1280px) 280px, (min-width: 1024px) 23vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[365/500] overflow-hidden rounded-panel bg-mist-100 sm:mt-12">
              <Image
                src="/tb02.png"
                alt="Torbjörn maskerar golvlisten inför målning"
                fill
                sizes="(min-width: 1280px) 280px, (min-width: 1024px) 23vw, 45vw"
                className="object-cover"
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
