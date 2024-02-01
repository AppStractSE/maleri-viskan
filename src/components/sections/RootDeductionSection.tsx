import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const RootDeductionSection = () => {
  return (
    <>
      {/* <TextAndImage
        title="Vill du använda ROT-avdrag?
      Vi hjälper dig!"
        description={`ROT-avdraget ger dig, som äger och bor i en bostad och anlitar en målare, en skattereduktion på 30% av arbetskostnaden, med en maximal gräns på 50 000 kronor.`}
        bg="bg-gradient-to-r from-cyan-600 to-cyan-800"
        textColor="text-white"
        readMoreButton
        link="/rot-avdrag"
        // image={{
        //   src: "/299575258_816421113053334_2744583150717171665_n.jpg",
        //   alt: "Certifikat för Måleribranschens Våtrumskontroll",
        //   height: 250,
        //   width: 250,
        // }}
      /> */}

      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-8 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="basis-2/4">
              <h1 className="mb-6 text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl ">
                Vill du använda ROT-avdrag?{"\n"}Vi hjälper dig!
              </h1>
              <p className="mb-6 mt-6 whitespace-pre-line font-medium md:text-lg lg:max-w-2xl lg:text-xl 2xl:mb-12">
                ROT-avdraget ger dig, som äger och bor i en bostad och anlitar en målare, en
                skattereduktion på 30% av arbetskostnaden, med en maximal gräns på 50 000 kronor.
                Använd vår ROT-avdragskalkylator för att räkna ut hur mycket du kan spara.
              </p>
            </div>
            <div className="ml-auto">
              <Link
                href="/rot-avdrag"
                className="flex items-center gap-2 rounded-sm bg-black px-2 py-2.5 text-base text-white transition-all duration-200 hover:invert md:px-6 md:py-3 md:text-xl"
              >
                Räkna ut ROT-avdrag
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RootDeductionSection;
