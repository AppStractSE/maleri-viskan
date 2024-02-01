"use client";
import { useState } from "react";
import QuoteModal from "./QuoteModal";

interface Props {
  label: string;
  className?: string;
}

const QuoteModalButtonWrapper = ({ label, className }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`${
          className
            ? className
            : "w-full justify-center rounded-sm bg-black px-6 py-3 text-white transition-all duration-200 hover:invert md:w-fit"
        }`}
      >
        {label}
      </button>
      <QuoteModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default QuoteModalButtonWrapper;
