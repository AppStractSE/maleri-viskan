"use client";
import QuoteModalButtonWrapper from "@/components/modal/QuoteModalWrapper";
import { services } from "@/data/services";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbPointFilled } from "react-icons/tb";

const ServicesSection = () => {
  const [currentService, setCurrentService] = useState(services[0]);
  return (
    <>
      <section className="bg-white text-black">
        <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 w-full">
          <div className="grid lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                Tjänster
              </h1>
              <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
                Upptäck omfattande målningstjänster hos Måleri Viskan – din pålitliga lokala målare
                i Sjuhärad, Mark och Kinna. Vi specialiserar oss på att tillhandahålla skräddarsydda
                målerilösningar för både privatpersoner och företag. Oavsett om det gäller inomhus-
                eller utomhusmålning sätter vi alltid kunden i fokus.
              </p>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-12 gap-8 xl:gap-24 border-t pt-8">
            <div className="col-span-12 w-full lg:col-span-5 transition-all duration-500">
              <div className="space-y-4">
                {services.map((service, index) => {
                  const serviceGradient = {
                    background: `linear-gradient(to right, ${service.colors[0]}, ${service.colors[1]})`,
                  };
                  return (
                    <div key={service.name}>
                      <div
                        style={serviceGradient}
                        className={`cursor-pointer grid grid-cols-12 items-center bg-gradient-to-r text-white overflow-hidden rounded-sm transition-all duration-500 ${
                          currentService === service
                            ? "opacity-100 shadow-lg"
                            : "opacity-50 hover:opacity-100"
                        }`}
                        onClick={() => setCurrentService(services[index])}
                      >
                        <div className="h-full col-span-4">
                          <img src={service.image} className="h-full w-full object-cover" />
                        </div>
                        <div className="col-span-8 p-2 lg:px-4 lg:py-6">
                          <div className="text-center sm:text-left text-xl md:text-2xl md:tracking-tight font-bold">
                            {service.name}
                          </div>
                          <p className="hidden sm:block">{service.shortDescription}</p>
                        </div>
                      </div>
                      {currentService === service && (
                      <div className="flex flex-col col-span-12 lg:col-span-7 mt-8 lg:mt-0 lg:hidden">
                        <h6 className="mb-8 text-lg lg:text-xl xl:text-2xl whitespace-pre-line">
                          {currentService.description}
                        </h6>
                        {currentService.features.map((feature) => (
                          <div className="flex items-center gap-2" key={feature.title}>
                            <TbPointFilled />
                            {feature.title}
                          </div>
                        ))}
                        <div className="flex flex-wrap w-full justify-end gap-4 mt-8 md:mt-auto">
                          <Link
                            href={`/tjanster/${currentService.id}`}
                            className="px-6 py-3 rounded-sm flex items-center gap-2 hover:bg-black hover:text-white duration-200 transition-all w-full justify-center md:w-fit"
                          >
                            Läs mer om {currentService.name.toLocaleLowerCase()}
                            <FaArrowRightLong />
                          </Link>

                          <QuoteModalButtonWrapper label="Kostnadsfri offert" />
                        </div>
                      </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hidden lg:flex flex-col col-span-12 lg:col-span-7 mt-8 lg:mt-0">
              <h5 className="text-4xl tracking-tight font-bold">{currentService.name}</h5>
              <h6 className="my-8 text-lg lg:text-xl xl:text-2xl whitespace-pre-line">
                {currentService.description}
              </h6>
              {currentService.features.map((feature) => (
                <div className="flex items-center gap-2" key={feature.title}>
                  <TbPointFilled />
                  {feature.title}
                </div>
              ))}
              <div className="flex flex-wrap w-full justify-end gap-4 mt-8 md:mt-auto">
                <Link
                  href={`/tjanster/${currentService.id}`}
                  className="px-6 py-3 rounded-sm flex items-center gap-2 hover:bg-black hover:text-white duration-200 transition-all w-full justify-center md:w-fit"
                >
                  Läs mer om {currentService.name.toLocaleLowerCase()}
                  <FaArrowRightLong />
                </Link>

                <QuoteModalButtonWrapper label="Kostnadsfri offert" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
