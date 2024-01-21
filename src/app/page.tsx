import AboutSection from "@/components/home/about/AboutSection";
import HeroSection from "@/components/home/hero/HeroSection";
import GoogleMapSection from "@/components/home/map/GoogleMapSection";
import ProjectsSection from "@/components/home/projects/ProjectsSection";
import RootDeductionSection from "@/components/home/root-deduction/RootDeductionSection";
import ServicesSection from "@/components/home/services/ServicesSection";
import CertSection from "@/components/sections/CertSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <ProjectsSection showHeader={true} showAll={false} />
      <CertSection />
      <AboutSection />
      <RootDeductionSection />
      <GoogleMapSection showForm />
    </main>
  );
}
