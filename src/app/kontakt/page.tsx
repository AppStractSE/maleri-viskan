import ContactSection from "@/components/sections/ContactSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta Måleri Viskan för att boka målare. Ring 073-030 96 66, mejla info@maleriviskan.se eller fyll i formuläret.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32">
      <div className="container-site">
        <Breadcrumbs items={[{ label: "Kontakt", href: "/kontakt" }]} />
      </div>
      <ContactSection
        as="h1"
        title="Kom i kontakt med oss"
        lead="Har du frågor, funderingar eller ett projekt planerat för din bostad eller ditt företag? Hör av dig, så gör vi idé till verklighet."
      />
    </div>
  );
}
