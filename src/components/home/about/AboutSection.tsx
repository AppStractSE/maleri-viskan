import BigCards from "@/components/cards/BigCards";
import { data as aboutData } from "./data";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-white via-white to-gray-200 bg-fixed">
      <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:py-16 w-full">
        <div className="text-black">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Måleri Viskan
          </h1>
          <p className="max-w-3xl mb-6 font-light lg:mb-8 md:text-lg lg:text-2xl">
            Vi kan måleri och vi kan det bra. Vi har många års erfarenhet av att måla fasader, tak,
            väggar, golv och mycket mer. Vi är ett måleriföretag som är baserat i Sjuhärad, Mark och
            Kinna.
          </p>
        </div>
        <div className="space-y-12 lg:space-y-8">
          {aboutData.map((data, index) => (
            <BigCards
              key={index}
              title={data.title}
              description={data.description}
              image={data.image}
              quoteButton={data.quoteButton}
              readMoreButton={data.readMoreButton}
              link={data.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
