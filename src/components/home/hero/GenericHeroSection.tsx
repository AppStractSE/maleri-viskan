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
        className={`flex justify-center bg-gradient-to-r pt-20 text-white lg:pt-28 ${className} break-words`}
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl">
            {title}
          </h1>
          <p className="mb-12 mt-6 max-w-3xl whitespace-pre-line text-lg md:text-xl">
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
