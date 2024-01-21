"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import QuoteModal from "../modal/QuoteModal";

interface Props {
  index: number;
  title: string;
  description: string;
  image: string;
  quoteButton?: boolean;
  readMoreButton?: boolean;
  link?: string;
}

const BigCards = ({ index, title, description, image, quoteButton, readMoreButton, link }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="mx-auto gap-4 lg:gap-8 grid grid-cols-12">
        <div
          className={`order-last flex justify-center flex-col col-span-12 md:col-span-6 font-light ${
            index % 2 === 0 ? "md:order-last" : "md:order-first"
          } text-black`}
        >
          <div className="my-auto">
            <h2 className="text-3xl tracking-tight font-bold">{title}</h2>
            <p className="md:text-xl whitespace-pre-line pt-6 max-w-xl">{description}</p>
          </div>
          <div className={`ml-auto mt-8 ${quoteButton && readMoreButton ? "flex gap-4" : ""}`}>
            {quoteButton && (
              <button
                onClick={() => setShowModal(true)}
                className="px-2 py-2.5 lg:px-6 lg:py-3 text-sm md:text-md rounded-sm bg-black border border-black text-white hover:bg-transparent hover:text-black duration-200 transition-all"
              >
                Kostnadsfri offert
              </button>
            )}
            {readMoreButton && link && (
              <Link
                href={link}
                className="px-2 py-2.5 lg:px-6 lg:py-3 text-sm md:text-md rounded-sm flex items-center gap-2 border border-black hover:bg-black hover:text-white duration-200 transition-all w-fit"
              >
                Läs mer
                <FaArrowRightLong />
              </Link>
            )}
          </div>
        </div>
        <div className="rounded-md min-h-[300px] h-[300px] sm:min-h-[400px] lg:h-[500px] overflow-hidden col-span-12 md:col-span-6">
          <img
            className="h-full w-full object-cover object-center rounded-md"
            draggable="false"
            src={image}
            alt="Enkelt, snabbt och effektivt"
          />
        </div>
      </div>
      {showModal ? <QuoteModal showModal={showModal} setShowModal={setShowModal} /> : undefined}
    </>
  );
};

export default BigCards;
