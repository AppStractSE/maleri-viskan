import ProjectsSection from "@/components/home/projects/ProjectsSection";
import CertSection from "@/components/sections/CertSection";
import ContactSection from "@/components/sections/ContactSection";

const page = () => {
  return (
    <>
      <ProjectsSection showAll />
      <ContactSection />
      <CertSection />
    </>
  );
};

export default page;
