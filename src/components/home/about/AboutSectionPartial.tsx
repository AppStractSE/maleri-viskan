import BigCards from "@/components/cards/BigCards";
import { AboutPartial } from "./data";
interface Props {
  title?: string;
  description?: string;
  data: AboutPartial[];
}
const AboutSectionPartial = ({ title, description, data }: Props) => {
  return (
    <section className="bg-gradient-to-b from-white via-white to-gray-200 bg-fixed">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-8 lg:py-16">
        <div className="text-black">
          <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mb-6 max-w-3xl font-medium md:text-lg lg:mb-8 lg:text-2xl">
              {description}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="space-y-12 lg:space-y-16">
          {data.map((data, index) => (
            <BigCards
              key={index}
              title={data.title}
              description={data.description}
              image={data.image}
              quoteButton={data.quoteButton}
              readMoreButton={data.readMoreButton}
              readMoreText={data.readMoreText}
              link={data.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionPartial;
