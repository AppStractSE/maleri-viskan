"use client";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import QuoteModalButtonWrapper from "../modal/QuoteModalWrapper";

interface Props {
  index: number;
  title: string;
  description: string;
  image: string;
  quoteButton?: boolean;
  readMoreButton?: boolean;
  readMoreText?: string;
  link?: string;
  id?: string;
  ref?: React.RefObject<HTMLDivElement>;
  containImage?: boolean;
  imagePos?: "left" | "right";
}

const BigCards = ({
  index,
  title,
  description,
  image,
  quoteButton,
  readMoreButton,
  link,
  readMoreText,
  id,
  ref,
  containImage,
  imagePos,
}: Props) => {
  const imagePosition = {
    left: "object-left",
    right: "object-right",
  };

  return (
    <>
      <div ref={ref} className="mx-auto grid grid-cols-12 gap-4 lg:gap-8">
        {id ? (
          <div id={id ? id : undefined} className="absolute -mt-[6rem] md:-mt-[8rem]" />
        ) : (
          <></>
        )}
        <div
          className={`order-last col-span-12 flex flex-col justify-center font-light md:col-span-6 ${
            index % 2 === 0 ? "md:order-last" : "md:order-first"
          } text-black`}
        >
          <div className="my-auto">
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <p className="max-w-xl whitespace-pre-line pt-6 md:text-xl">{description}</p>
          </div>
          {quoteButton || readMoreButton ? (
            <div className={`ml-auto mt-8 ${quoteButton && readMoreButton ? "flex gap-4" : ""}`}>
              {quoteButton && (
                <QuoteModalButtonWrapper
                  className="w-fit justify-center rounded-sm border border-black bg-black px-2 py-2.5 text-sm text-white transition-all duration-200 hover:bg-white hover:text-black md:w-fit md:text-base lg:px-6 lg:py-3"
                  label={"Kostnadsfri offert"}
                />
              )}
              {readMoreButton && link && (
                <Link
                  href={link}
                  className="flex w-fit items-center gap-2 rounded-sm border border-black px-2 py-2.5 text-sm transition-all duration-200 hover:bg-black hover:text-white md:text-base lg:px-6 lg:py-3"
                >
                  {readMoreText ? readMoreText : "Läs mer"}
                  <FaArrowRightLong />
                </Link>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="col-span-12 h-[300px] min-h-[300px] overflow-hidden rounded-sm sm:min-h-[400px] md:col-span-6 lg:h-[500px]">
          <img
            className={`h-full w-full rounded-sm ${imagePos ? imagePosition[imagePos] : "object-center"} ${containImage ? "object-contain" : "object-cover"}`}
            draggable="false"
            src={image}
            alt="Enkelt, snabbt och effektivt"
          />
        </div>
      </div>
    </>
  );
};

export default BigCards;
