"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { data as services } from "./data";

const BigServices = () => {
  const [currentService, setCurrentService] = useState(services[0]);
  return (
    <div className="lg:grid lg:grid-cols-12 gap-8 xl:gap-24 border-t pt-8">
      <div className="col-span-12 w-full lg:col-span-5 transition-all duration-500">
        <div className="space-y-4">
          {services.map((service, index) => {
            const serviceGradient = {
              background: `linear-gradient(to right, ${service.colors[0]}, ${service.colors[1]})`,
            };
            return (
              <div
                style={serviceGradient}
                className={`cursor-pointer grid grid-cols-12 items-center bg-gradient-to-r text-white overflow-hidden rounded-2xl transition-all duration-500 ${
                  currentService === service
                    ? "opacity-100 shadow-lg"
                    : "opacity-50 hover:opacity-100"
                }`}
                onClick={() => setCurrentService(services[index])}
                key={service.name}
              >
                <div className="h-full col-span-4">
                  <img src={service.image} className="h-full w-full object-cover" />
                </div>
                <div className="col-span-8 p-2 lg:p-4">
                  <div className="text-center sm:text-left text-md md:text-lg lg:text-xl md:tracking-tight md:font-bold">
                    {service.name}
                  </div>
                  <p className="hidden sm:block">{service.shortDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col col-span-12 lg:col-span-7 mt-8 lg:mt-0">
        <h5 className="text-4xl tracking-tight font-bold">{currentService.name}</h5>
        <h6 className="my-8 text-lg lg:text-xl xl:text-2xl whitespace-pre-line">
          {currentService.description}
        </h6>
        <div className="flex justify-end gap-4 mt-auto">
          <Link
            href="/kontakt"
            className="px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black hover:text-white duration-200 transition-all"
          >
            Läs mer om {currentService.name.toLocaleLowerCase()}
            <FaArrowRightLong />
          </Link>

          <Link
            href="#"
            className="px-6 py-3 rounded-lg bg-black border border-black text-white hover:bg-transparent hover:text-black duration-200 transition-all"
          >
            Kostnadsfri offert
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigServices;
