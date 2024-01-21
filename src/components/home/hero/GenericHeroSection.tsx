"use client";

import QuoteModalButtonWrapper from "@/components/modal/QuoteModalWrapper";
import { useState } from "react";
import QuoteModal from "../../modal/QuoteModal";

interface Props {
  title: string;
  description: string;
  quoteButton?: boolean;
  className?: string;
}

const GenericHeroSection = ({ title, description, className }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section
        className={`text-white flex justify-center pt-20 lg:pt-28 bg-gradient-to-r ${className}`}
      >
        <div className="max-w-screen-2xl px-4 py-8 mx-auto w-full">
          <h1 className="mb-6 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg md:text-xl mt-6 mb-12 whitespace-pre-line">
            {description}
          </p>
          <div className="flex">
            <QuoteModalButtonWrapper label="Kontakta oss" />
          </div>
        </div>
      </section>
      {showModal ? <QuoteModal showModal={showModal} setShowModal={setShowModal} /> : undefined}
    </>
  );
};

export default GenericHeroSection;
