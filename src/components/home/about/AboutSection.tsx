import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { data as aboutData } from "./data";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-white via-white to-gray-200 bg-fixed">
      <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:py-16 w-full">
        <div className="text-black">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
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
            <div key={index} className="mx-auto gap-4 lg:gap-8 grid grid-cols-12">
              <div
                className={`shadow-xl flex justify-center flex-col col-span-12 sm:col-span-6 font-light min-h-[300px] sm:min-h-[400px] lg:h-[600px] ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-0"
                } bg-white text-black rounded-sm p-4 lg:py-6 lg:px-12`}
              >
                <div className="my-auto">
                  <h2 className="text-3xl tracking-tight font-bold">{data.title}</h2>
                  <p className="md:text-xl whitespace-pre-line pt-6">{data.description}</p>
                </div>
                <div
                  className={`ml-auto mt-8 ${
                    data.quoteButton && data.readMoreButton ? "flex gap-4" : ""
                  }`}
                >
                  {data.quoteButton && (
                    <button className="px-2 py-2.5 lg:px-6 lg:py-3 text-sm md:text-md rounded-sm bg-black border border-black text-white hover:bg-transparent hover:text-black duration-200 transition-all">
                      Kostnadsfri offert
                    </button>
                  )}
                  {data.readMoreButton && (
                    <Link
                      href="/kontakt"
                      className="px-2 py-2.5 lg:px-6 lg:py-3 text-sm md:text-md rounded-sm flex items-center gap-2 border border-transparent hover:border-black hover:bg-black hover:text-white duration-200 transition-all w-fit"
                    >
                      Läs mer
                      <FaArrowRightLong />
                    </Link>
                  )}
                </div>
              </div>
              <div className="rounded-sm min-h-[300px] sm:min-h-[400px] lg:h-[600px] overflow-hidden col-span-12 sm:col-span-6 shadow-xl">
                <img
                  className="h-full w-full object-cover"
                  draggable="false"
                  src={data.image}
                  alt="Enkelt, snabbt och effektivt"
                />
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </section>
  );
};

export default AboutSection;
