import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import QuoteModalButtonWrapper from "../modal/QuoteModalWrapper";

interface Props {
  title: string;
  description: string;
  bg?: string;
  readMoreButton?: boolean;
  quoteButton?: boolean;
  textColor?: string;
  link?: string;
  ltr?: boolean;
  overlay?: boolean;
  image?: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
}

const TextAndImage = ({
  title,
  description,
  bg,
  textColor,
  image,
  quoteButton,
  readMoreButton,
  link,
  ltr,
  overlay,
}: Props) => {
  return (
    <section className={`${bg} ${textColor} relative`}>
      {overlay ? (
        <div className="absolute inset-0 block bg-black bg-opacity-25 2xl:hidden" />
      ) : (
        <></>
      )}
      <div
        className={`relative ${overlay ? "relative" : ""} mx-auto w-full max-w-screen-2xl px-4 py-8 lg:py-24`}
      >
        <div className="mx-auto grid grid-cols-12 gap-4 lg:gap-8">
          <div className={`col-span-12 lg:col-span-6 ${ltr ? "" : "lg:col-start-7"}`}>
            <h2 className="text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl">
              {title}
            </h2>
            <p className=" mb-6 mt-6 whitespace-pre-line font-medium md:text-lg lg:max-w-2xl lg:text-xl 2xl:mb-12">
              {description}
            </p>
            <div className={`${readMoreButton && quoteButton ? "flex gap-2" : ""}`}></div>
            {readMoreButton && link && (
              <Link
                href={link}
                className={`${ltr ? "ml-auto mt-12" : "ml-auto"} flex items-center gap-2 rounded-sm bg-black px-2 py-2.5 text-sm text-white transition-all duration-200 hover:bg-white hover:text-black md:w-fit md:text-base lg:px-6 lg:py-3`}
              >
                Läs mer
                <FaArrowRightLong />
              </Link>
            )}
            {quoteButton && (
              <QuoteModalButtonWrapper
                className="w-fit justify-center rounded-sm bg-black px-2 py-2.5 text-sm  text-white transition-all duration-200 hover:bg-white hover:text-black md:w-fit md:text-base lg:px-6 lg:py-3"
                label={"Begär offert idag!"}
              />
            )}
            {image ? (
              <Image
                width={image.width}
                height={image.height}
                alt={image.alt}
                src={image.src}
                className="ml-auto max-h-[100px] w-auto rounded-md bg-white p-3 md:max-h-[150px] lg:max-h-[200px]"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextAndImage;
