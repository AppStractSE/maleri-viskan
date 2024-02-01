import EnvironmentSection from "@/components/sections/EnvironmentSection";
import AboutSectionPartial from "./AboutSectionPartial";
import { data as aboutData } from "./data";

const AboutSection = () => {
  const aboutDataPartOne = aboutData.slice(0, aboutData.length / 2);
  const aboutDataPartTwo = aboutData.slice(aboutData.length / 2, aboutData.length);
  return (
    <>
      <AboutSectionPartial
        title="Måleri Viskan"
        description="Vi kan måleri och vi kan det bra. Vi har många års erfarenhet av att måla fasader,
              tak, väggar, golv och mycket mer. Vi är ett mångsidigt måleriföretag som är baserat i
              Kinna, Skene och Marks kommun."
        data={aboutDataPartOne}
      />
      <EnvironmentSection readMoreButton />
      <AboutSectionPartial data={aboutDataPartTwo} />
    </>
  );
};

export default AboutSection;
