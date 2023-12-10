"use client";

import { useState } from "react";
import QuoteModal from "../../modal/QuoteModal";

interface Props {
  children?: React.ReactNode;
}

const GenericHeroSection = ({ children }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section
        className={`text-white flex justify-center pt-20 lg:pt-28 bg-gradient-to-br from-slate-900 to-cyan-700`}
      >
        <div className="max-w-screen-2xl px-4 py-8 mx-auto w-full">
          <div className="">{children}</div>
        </div>
      </section>
      {showModal ? <QuoteModal showModal={showModal} setShowModal={setShowModal} /> : undefined}
    </>
  );
};

export default GenericHeroSection;
