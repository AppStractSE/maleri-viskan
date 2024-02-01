"use client";
import RotAvdragCalculator from "@/components/RotavdragCalculator";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import BigCards from "@/components/cards/BigCards";
import SmallInfoCard from "@/components/cards/SmallInfoCard";
import GenericHeroSection from "@/components/home/hero/GenericHeroSection";
import { Service } from "@/data/services";
import { useRef } from "react";

interface Props {
  service: Service;
}

const ServicePage = ({ service }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const normalizeString = (str: string) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replaceAll(" ", "");
  };

  const justifyContent =
    service.features.length > 4
      ? "justify-start xl:justify-center"
      : "justify-start md:justify-center";

  return (
    <>
      <GenericHeroSection
        className={service.colorBg}
        title={service.servicePageTitle}
        description={service.shortDescription}
        quoteButton
      />
      <Breadcrumbs />
      <section className="bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 pt-4 lg:pb-4">
          <div
            className={`flex gap-2 overflow-auto pb-4 lg:gap-4 lg:pb-0 2xl:overflow-visible ${justifyContent}`}
          >
            {service.features.map((feature, index) => (
              <SmallInfoCard
                key={index}
                onClick={() => handleClick(normalizeString(feature.title))}
                image={feature.smallImage}
                title={feature.title}
                titleClassName="text-base md:text-lg 2xl:text-xl tracking-tight font-bold"
                className={`flex flex-col items-center justify-center rounded-b-sm rounded-t-none bg-slate-50 px-2 py-3 text-sm`}
                containerClassName="min-w-[200px] max-w-[450px] rounded-sm 2xl:shadow-xl 2xl:hover:shadow-2xl"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-8">
          <div className="space-y-12 lg:space-y-8">
            {service.features.map((feature, index) => (
              <BigCards
                ref={ref}
                id={normalizeString(feature.title)}
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <RotAvdragCalculator />
    </>
  );
};

export default ServicePage;
