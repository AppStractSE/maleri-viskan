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
            : "px-6 py-3 rounded-sm bg-black text-white hover:invert duration-200 transition-all w-full justify-center md:w-fit"
        }`}
      >
        {label}
      </button>
      <QuoteModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default QuoteModalButtonWrapper;
