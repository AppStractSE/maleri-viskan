import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import GenericHeroSection from "@/components/home/hero/GenericHeroSection";
import ProjectsSection from "@/components/home/projects/ProjectsSection";

const page = () => {
  return (
    <>
      <GenericHeroSection
        className="from-slate-500 to-slate-600"
        title="Projekt"
        description={`Vi på Måleri Viskan är stolta över att ha arbetat med många olika kunder.
        Vår dedikation till kvalitet och noggrannhet är konsekvent, oavsett projektets omfattning.\n\nVårt mål är att överträffa förväntningarna och skapa en långvarig tillfredsställelse för våra kunder
        genom att leverera professionella målningstjänster.`}
        quoteButton
      />
      <Breadcrumbs />
      <ProjectsSection showAll />
    </>
  );
};

export default page;
