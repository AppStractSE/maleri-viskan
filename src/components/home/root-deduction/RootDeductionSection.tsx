import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const RootDeductionSection = () => {
  return (
    <section className="bg-black text-white bg-gradient-to-br from-fuchsia-700 to-cyan-800">
      <div className="max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 w-full mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="basis-3/4">
            <h1 className="max-w-4xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl whitespace-pre-line">
              Vill du använda ROT-avdrag?{"\n"}Vi hjälper dig!
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
              ROT-avdraget ger dig, som äger och bor i en bostad och anlitar en målare, en
              skattereduktion på 30% av arbetskostnaden, med en maximal gräns på 50 000 kronor.
            </p>
          </div>
          <div className="ml-auto">
            <Link
              href="/rot-avdrag"
              className="px-2 py-2.5 md:px-6 md:py-3 text-sm md:text-md rounded-sm flex items-center gap-2 bg-white text-black hover:bg-black hover:text-white duration-200 transition-all"
            >
              Läs mer om ROT
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RootDeductionSection;
