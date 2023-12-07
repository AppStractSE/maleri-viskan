import AboutSection from "@/components/home/about/AboutSection";
import HeroSection from "@/components/home/hero/HeroSection";
import GoogleMapSection from "@/components/home/map/GoogleMapSection";
import ProjectsSection from "@/components/home/projects/Projects";
import RootDeductionSection from "@/components/home/root-deduction/RootDeductionSection";
import ServicesSection from "@/components/home/services/ServicesSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <RootDeductionSection />
      <GoogleMapSection />
    </main>
  );
}
