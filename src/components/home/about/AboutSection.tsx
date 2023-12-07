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
        <div className="space-y-8">
          {aboutData.map((data, index) => (
            <div key={index} className="mx-auto gap-8 flex columns-2">
              <div
                className={`shadow-xl flex justify-center flex-col basis-1/2 font-light ${
                  index % 2 === 0 ? "order-2" : "order-0"
                } bg-white text-black rounded-sm py-6 px-12`}
              >
                <div className="my-auto">
                  <h2 className="text-3xl tracking-tight font-bold">{data.title}</h2>
                  <p className="md:text-xl whitespace-pre-line pt-6">{data.description}</p>
                </div>
                <div
                  className={`ml-auto ${
                    data.quoteButton && data.readMoreButton ? "flex gap-4" : ""
                  }`}
                >
                  {data.quoteButton && (
                    <button className="px-6 py-3 rounded-lg bg-black border border-black text-white hover:bg-transparent hover:text-black duration-200 transition-all">
                      Kostnadsfri offert
                    </button>
                  )}
                  {data.readMoreButton && (
                    <Link
                      href="/kontakt"
                      className="px-6 py-3 rounded-lg flex items-center gap-2 border border-transparent hover:border-black hover:bg-black hover:text-white duration-200 transition-all w-fit"
                    >
                      Läs mer
                      <FaArrowRightLong />
                    </Link>
                  )}
                </div>
              </div>
              <div className="rounded-sm basis-1/2 h-[600px] overflow-hidden shadow-xl">
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
