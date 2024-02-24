import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import GenericHeroSection from "@/components/home/hero/GenericHeroSection";
import GoogleMapSection from "@/components/home/map/GoogleMapSection";
import ContactSection from "@/components/sections/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Måleri Viskan",
  description:
    "Måleri Viskan - Vi kan måleri! Vi är din lokala målare i Kinna, Skene och Marks kommun.",
};

const page = () => {
  return (
    <>
      <GenericHeroSection
        className=" from-violet-500 to-violet-600"
        title="Kom i kontakt med oss"
        description={`Välkommen att kontakta Måleri Viskan!\nHar du några frågor, funderingar eller ett projekt planerat för din bostad eller ditt företag, tveka inte att höra av dig för att göra idé till verklighet.`}
        quoteButton
      />
      <Breadcrumbs />
      <ContactSection
        bg="from-white to-white text-black"
        linkColors="text-cyan-600 border-cyan-600"
        invertArrow={false}
      />
      <GoogleMapSection />
    </>
  );
};

export default page;
