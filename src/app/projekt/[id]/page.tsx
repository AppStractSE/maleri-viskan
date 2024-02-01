"use client";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import GenericHeroSection from "@/components/home/hero/GenericHeroSection";
import { Project, projects } from "@/data/projects";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import ImageModal from "../components/ImageModal";

export default function Page({ params }: { params: { id: string } }) {
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const project = projects.find((project: Project) => project.id === params.id);
  if (!project) redirect("/404");

  const handleClick = (image: string) => {
    setCurrentImage(image);
    setShowImageModal(true);
  };
  return (
    <>
      <GenericHeroSection
        className="from-slate-500 to-slate-600"
        title={project.title}
        description={project.description}
        quoteButton
      />
      <Breadcrumbs />
      <section>
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-8">
          <div
            className="grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-3"
            style={{ gridTemplateRows: ".5fr .5fr .5fr" }}
          >
            {project.images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleClick(image)}
                className={`relative ${index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"} group cursor-pointer overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <Image
                  height={0}
                  width={0}
                  sizes="100vw"
                  alt="Enkelt, snabbt och effektivt"
                  className="h-auto w-full max-w-full rounded-sm object-contain object-center transition-all duration-500 ease-in-out group-hover:scale-105"
                  src={image}
                />
                <div className="absolute inset-0 flex h-full flex-col justify-end bg-gradient-to-t from-[#19191989] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ImageModal
        image={currentImage}
        setCurrentImage={setCurrentImage}
        images={project.images}
        showModal={showImageModal}
        setShowModal={setShowImageModal}
      />
    </>
  );
}

{
  /*               
              <div>
                <img
                  className="h-auto max-w-full rounded-sm"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-sm"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-sm"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-sm"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-sm"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-sm"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-sm"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-sm"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-sm"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-sm"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-sm"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-sm"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                  alt=""
                />
              </div> */
}
