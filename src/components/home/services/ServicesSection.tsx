"use client";
import QuoteModal from "@/components/modal/QuoteModal";
import { Service, services } from "@/data/services";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ServicesSection = () => {
  const [currentService, setCurrentService] = useState<Service>(services[0]);
  const [mobileCurrentService, setMobileCurrentService] = useState<null | Service>(null);
  const [showModal, setShowModal] = useState(false);

  const scrollRefs = useRef<HTMLDivElement[]>([]);
  const handleMobileScroll = (index: number) => {
    if (mobileCurrentService === services[index]) {
      setMobileCurrentService(null);
    } else {
      setMobileCurrentService(null);
      setTimeout(() => {
        setMobileCurrentService(services[index]);
        if (window.innerWidth < 1024) handleRefScroll(index);
      }, 500);
    }
  };
  const handleRefScroll = (index: number) => {
    if (scrollRefs.current[index]) {
      const contentContainer = scrollRefs.current[index];

      if (contentContainer) {
        const topOffset = contentContainer.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: topOffset - 10, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <section className="bg-white text-black">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-8 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="grid lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl">
                Tjänster
              </h1>
              <p className="mb-6 max-w-2xl font-medium md:text-lg lg:mb-8 lg:text-xl">
                Omfattande målningstjänster hos Måleri Viskan – din pålitliga lokala målare i Kinna,
                Skene och Marks kommun. Vi specialiserar oss på att tillhandahålla skräddarsydda
                målerilösningar för både privatpersoner och företag. Oavsett om det gäller inomhus-
                eller utomhusmålning sätter vi alltid kunden i fokus.
              </p>
            </div>
          </div>
          <div className="gap-8 border-t pt-8 lg:grid lg:grid-cols-12 xl:gap-24">
            <div className="col-span-12 w-full transition-all duration-500 lg:col-span-5">
              <div className="space-y-4">
                {services.map((service, index) => {
                  const serviceGradient = {
                    background: `linear-gradient(to right, ${service.colors[0]}, ${service.colors[1]})`,
                  };
                  return (
                    <div key={service.name} className="relative">
                      <div
                        className="absolute left-0 top-[-100%] h-1 w-1"
                        ref={(ref) => {
                          if (ref) scrollRefs.current[index] = ref;
                        }}
                      />
                      <div
                        style={serviceGradient}
                        className={`grid cursor-pointer grid-cols-12 items-center overflow-hidden rounded-sm bg-gradient-to-r text-white transition-all duration-500
                        ${
                          mobileCurrentService === service
                            ? "opacity-100 shadow-lg"
                            : "opacity-50 hover:opacity-100"
                        }
                        ${currentService === service && "lg:opacity-100 lg:shadow-lg"}
                        `}
                        onClick={() => {
                          setCurrentService(services[index]);
                          handleMobileScroll(index);
                        }}
                      >
                        <div className="col-span-4 h-full">
                          <img
                            src={service.smallImage}
                            className="aspect-video h-full w-full object-cover"
                          />
                        </div>
                        <div className="col-span-8 p-2 lg:px-4 lg:py-6">
                          <div className="text-center text-xl font-bold sm:text-left md:text-2xl md:tracking-tight">
                            {service.name}
                          </div>
                          <p className="hidden sm:block">{service.shortDescription}</p>
                        </div>
                      </div>
                      <div
                        className={`col-span-12 flex transform flex-col transition-all ease-in-out lg:hidden ${
                          mobileCurrentService === service
                            ? "duration-400 delay-400 visible max-h-full opacity-100"
                            : "invisible max-h-0 opacity-0 delay-200 duration-200"
                        }`}
                      >
                        <h6 className="my-8 whitespace-pre-line text-lg lg:text-xl xl:text-2xl">
                          {service.description}
                        </h6>
                        <div className="mt-8 flex w-full flex-wrap justify-end md:mt-auto">
                          <Link
                            href={`/tjanster/${service.id}`}
                            className="flex w-full items-center justify-center gap-2 rounded-sm border border-black px-6 py-3 transition-all duration-200 hover:bg-black hover:text-white md:w-fit"
                          >
                            Läs mer om {service.name.toLocaleLowerCase()}
                            <FaArrowRightLong />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-span-12 mt-8 hidden flex-col lg:col-span-7 lg:mt-0 lg:flex">
              <h5 className="text-4xl font-bold tracking-tight">{currentService.name}</h5>
              <h6 className="my-8 whitespace-pre-line text-lg lg:text-xl xl:text-2xl">
                {currentService.description}
              </h6>
              <div className="mt-8 flex w-full flex-wrap justify-end gap-4 md:mt-32">
                <Link
                  href={`/tjanster/${currentService.id}`}
                  className="flex w-full items-center justify-center gap-2 rounded-sm border border-black px-6 py-3 transition-all duration-200 hover:bg-black hover:text-white md:w-fit"
                >
                  Läs mer om {currentService.name.toLocaleLowerCase()}
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal ? <QuoteModal showModal={showModal} setShowModal={setShowModal} /> : null}
    </>
  );
};

export default ServicesSection;
