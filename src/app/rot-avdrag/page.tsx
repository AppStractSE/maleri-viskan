import RotCalculator from "@/components/rot/RotCalculator";
import CredentialsBand from "@/components/sections/CredentialsBand";
import CtaBand from "@/components/sections/CtaBand";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROT-avdrag för målning",
  description:
    "Med ROT-avdrag betalar du bara 70 % av arbetskostnaden för målning och tapetsering. Räkna ut hur mycket du sparar med Måleri Viskans kalkylator.",
  alternates: { canonical: "/rot-avdrag" },
};

const facts = [
  {
    title: "Ger arbetet rätt till ROT-avdrag?",
    text: "Arbetet måste utföras av ett företag med F-skattsedel. Det behöver du inte oroa dig för när du anlitar oss, eftersom vi har F-skattsedel.",
    // Shield with check
    icon: "M12 3 5 6v5c0 4.4 3 8.3 7 9.5 4-1.2 7-5.1 7-9.5V6l-7-3Zm-3 9 2 2 4-4",
  },
  {
    title: "Dubbla avdraget om ni är två",
    text: "Avdraget är 30 % av arbetskostnaden, upp till 50 000 kr per person och år. Är ni två som äger bostaden kan ni alltså få dubbla avdraget.",
    // Two people
    icon: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 8a5 5 0 0 1 10 0M16 11a3 3 0 1 0 0-6m1.5 8.5A5 5 0 0 1 20 19",
  },
  {
    title: "Låter det krångligt? Vi hjälper dig",
    text: "Vi har god kunskap om reglerna och hjälper dig räkna ut hur mycket ROT-avdrag du har rätt till i varje uppdrag. Kontakta oss så hjälper vi dig.",
    // Speech bubble
    icon: "M4 5h16v11H9l-5 4V5Zm4 5h8m-8 3h5",
  },
];

export default function RotPage() {
  return (
    <>
      <PageHero
        eyebrow="ROT-avdrag"
        title="Betala bara 70 % av arbetskostnaden"
        lead="ROT-avdraget är en skattereduktion du kan använda när du anlitar oss för renoveringsarbete i ditt hem: målning, tapetsering, spackling och mycket mer. Få arbeten passar så bra för ROT som måleri, eftersom en stor del av kostnaden är arbete."
        breadcrumbs={[{ label: "ROT-avdrag", href: "/rot-avdrag" }]}
      />

      <section className="container-site pb-20 lg:pb-28">
        <ul className="grid gap-5 md:grid-cols-3">
          {facts.map((fact) => (
            <li key={fact.title} className="rounded-card bg-brand-50 p-7 ring-1 ring-brand-100 sm:p-8">
              <span className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-deep text-brand-400">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={fact.icon} />
                </svg>
              </span>
              <h2 className="text-display text-2xl leading-tight">{fact.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{fact.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="kalkylator" className="border-t border-line">
        <div className="container-site py-20 lg:py-28">
          <SectionHeading
            eyebrow="Kalkylator"
            title="Räkna ut ditt ROT-avdrag"
            lead="En arbetskostnad på 100 000 kr ger en skattereduktion på 30 000 kr. Dra i reglagen för att se vad ditt projekt kan kosta efter avdrag."
          />
          <div className="mt-12">
            <RotCalculator />
          </div>
        </div>
      </section>

      <CredentialsBand />
      <div className="pt-20 lg:pt-28">
        <CtaBand />
      </div>
    </>
  );
}
