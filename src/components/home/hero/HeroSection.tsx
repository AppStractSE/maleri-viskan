"use client";

import QuoteModalButtonWrapper from "@/components/modal/QuoteModalWrapper";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import QuoteModal from "../../modal/QuoteModal";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section
        className="relative flex min-h-screen justify-center bg-white text-white"
        style={{
          backgroundImage: `url("/hero-header.png")`,
          backgroundSize: "cover",
          backgroundPosition: "65% 100%",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative mx-auto grid w-full max-w-screen-2xl px-4 pb-8 pt-32 lg:grid-cols-12 lg:gap-8 lg:pb-8 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-none tracking-tight shadow-black [text-shadow:1px_1px_4px_var(--tw-shadow-color)] md:text-5xl xl:text-6xl">
              Målare i Kinna, Skene och Marks kommun
            </h1>
            <p className="mb-6 max-w-2xl whitespace-pre-line md:text-lg lg:my-10 lg:text-xl">
              Välkommen till Måleri Viskan - din pålitliga målare i Kinna, Skene samt Marks Kommun!
              {"\n\n"}Vi jobbar noggrant, med yrkesstolthet, där kunden alltid är i fokus. Det
              viktigaste för oss är att du som kund blir nöjd med vårt arbete, därför är kvalité och
              rätt behandlingar centralt i vårt arbete.
            </p>

            <div className="flex gap-4 sm:mt-8">
              <Link
                href="/tjanster"
                className="flex w-fit items-center gap-2 rounded-sm border px-2 py-2.5 text-sm transition-all duration-200 hover:border-black hover:bg-black hover:text-white md:text-base lg:px-6 lg:py-3"
              >
                Läs om våra tjänster
                <FaArrowRightLong />
              </Link>
              <QuoteModalButtonWrapper
                className="w-fit justify-center rounded-sm border border-black bg-black px-2 py-2.5 text-sm text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black md:w-fit md:text-base lg:px-6 lg:py-3"
                label={"Kostnadsfri offert"}
              />
            </div>
          </div>
        </div>
      </section>
      {showModal ? <QuoteModal showModal={showModal} setShowModal={setShowModal} /> : undefined}
    </>
  );
};

export default HeroSection;
