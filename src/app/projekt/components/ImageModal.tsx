import Image from "next/image";
import React, { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { useSwipeable } from "react-swipeable";

// ...

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  images: string[];
  image: string;
  setCurrentImage: React.Dispatch<React.SetStateAction<string>>;
}
const ImageModal = ({ showModal, setShowModal, image, images, setCurrentImage }: Props) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextImage(),
    onSwipedRight: () => handlePrevImage(),
    onSwipedDown: () => setShowModal(false),
  });

  const currentImageIndex = images.indexOf(image);
  const nextImageIndex = currentImageIndex + 1;
  const prevImageIndex = currentImageIndex - 1;

  console.log(prevImageIndex, nextImageIndex, currentImageIndex);

  const handleNextImage = () => {
    if (nextImageIndex === images.length) {
      setCurrentImage(images[0]);
    } else setCurrentImage(images[nextImageIndex]);
  };

  const handlePrevImage = () => {
    if (prevImageIndex === -1) {
      setCurrentImage(images[images.length - 1]);
    } else setCurrentImage(images[prevImageIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
      if (event.key === "ArrowRight") {
        handleNextImage();
      } else if (event.key === "ArrowLeft") {
        handlePrevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNextImage, handlePrevImage]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      <div
        {...handlers}
        onClick={() => setShowModal(!showModal)}
        className={`fixed inset-0 z-[99] bg-black bg-opacity-80 ${!showModal ? "invisible opacity-0" : "visible opacity-100"} transition-all duration-500 ease-in-out`}
      >
        <div className="relative inset-0 z-[100] h-full text-white">
          <div className="relative mx-auto h-full w-full max-w-screen-xl">
            <Image
              draggable={false}
              onClick={(e) => e.stopPropagation()}
              height={0}
              width={0}
              sizes="100vw"
              alt="Enkelt, snabbt och effektivt"
              className={`mx-auto h-full w-max object-contain object-center transition-all duration-500 ease-in-out`}
              src={image}
            />
            {/* debug for iphone */}
            <div className="absolute left-0 top-20 z-[9999]">Asd?</div>
            <div
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2"
            >
              <div
                onClick={handlePrevImage}
                className="rounded-full bg-cyan-700 bg-opacity-50 p-4 hover:bg-opacity-100"
              >
                <FaChevronLeft />
              </div>
              <div
                onClick={() => setShowModal(!showModal)}
                className="rounded-full bg-cyan-700 bg-opacity-50 p-4 hover:bg-opacity-100"
              >
                <GrClose />
              </div>
              <div
                onClick={handleNextImage}
                className="rounded-full bg-cyan-700 bg-opacity-50 p-4 hover:bg-opacity-100"
              >
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageModal;
