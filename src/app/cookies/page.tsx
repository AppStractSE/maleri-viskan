import CookieSettingsButton from "@/components/consent/CookieSettingsButton";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Så använder Måleri Viskan cookies på maleriviskan.se.",
  alternates: { canonical: "/cookies" },
  robots: { index: false },
};

const rows = [
  {
    name: "mv-consent-v1",
    provider: "Måleri Viskan",
    purpose: "Sparar ditt val om cookies. Lagras i webbläsarens lokala lagring.",
    type: "Nödvändig",
  },
  {
    name: "_ga, _ga_*",
    provider: "Google Analytics",
    purpose: "Anonym statistik över hur sidan används, så att vi kan förbättra den.",
    type: "Statistik (kräver samtycke)",
  },
  {
    name: "NID m.fl.",
    provider: "Google Maps",
    purpose: "Sätts av Googles karttjänst när kartan visas.",
    type: "Tredje part (kräver samtycke)",
  },
];

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Integritet"
        title="Cookies"
        lead="En cookie är en liten textfil som sparas i din webbläsare. Vi använder bara cookies för statistik och karta om du har godkänt det."
        breadcrumbs={[{ label: "Cookies", href: "/cookies" }]}
        actions={<CookieSettingsButton />}
      />
      <section className="container-site pb-20 lg:pb-28">
        <div className="overflow-x-auto rounded-card border border-line bg-paper">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-line bg-mist-50 text-xs tracking-wider text-muted uppercase">
              <tr>
                <th className="px-6 py-4 font-semibold">Namn</th>
                <th className="px-6 py-4 font-semibold">Leverantör</th>
                <th className="px-6 py-4 font-semibold">Syfte</th>
                <th className="px-6 py-4 font-semibold">Typ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map((row) => (
                <tr key={row.name}>
                  <td className="px-6 py-4 font-mono text-xs">{row.name}</td>
                  <td className="px-6 py-4">{row.provider}</td>
                  <td className="px-6 py-4 text-muted">{row.purpose}</td>
                  <td className="px-6 py-4">{row.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-2xl text-muted">
          Du kan när som helst ändra ditt val via knappen ovan eller länken Cookieinställningar i
          sidfoten. Du kan också radera cookies i din webbläsares inställningar.
        </p>
      </section>
    </>
  );
}
