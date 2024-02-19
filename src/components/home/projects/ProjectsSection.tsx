"use client";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  showAll?: boolean;
  showHeader?: boolean;
}

const ProjectsSection = ({ showAll, showHeader }: Props) => {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-8 lg:py-16">
        {showHeader ? (
          <div>
            <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl">
              Projekt
            </h1>
            <p className="mb-6 max-w-3xl font-medium md:text-lg lg:mb-8 lg:text-2xl">
              Vi på Måleri Viskan är stolta över att ha arbetat med många olika kunder. Vår
              dedikation till kvalitet och noggrannhet är konsekvent, oavsett projektets omfattning.
              Vårt mål är att överträffa förväntningarna och skapa en långvarig tillfredsställelse
              för våra kunder genom att leverera professionella målningstjänster.
            </p>
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-12 lg:grid-rows-2">
          {projects.slice(0, showAll ? projects.length : 5).map((project, i) => (
            <Link
              href={`/projekt/${project.id}`}
              key={i}
              className={`${
                i === 0 || i === projects.length - 1 || i === projects.length - 2
                  ? "col-span-6 row-span-2"
                  : "col-span-3"
              } group flex cursor-pointer flex-col text-white`}
            >
              <div className="relative h-full min-h-[250px] overflow-hidden rounded-sm bg-white shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex h-full flex-col justify-end bg-gradient-to-t from-[#19191989] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                  <div className="ml-auto flex w-fit items-center gap-2 p-4 text-white transition-all duration-200 lg:opacity-0 lg:group-hover:opacity-100">
                    Se mer
                    <div className="duration-400 transition-all delay-200 group-hover:translate-x-1 ">
                      <FaArrowRightLong />
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-bold text-black">{project.title}</h2>
            </Link>
          ))}
        </div>
        {showAll ? (
          <></>
        ) : (
          <Link
            href="/projekt"
            className="group ml-auto flex w-fit items-center gap-2 p-4 pr-0 transition-all duration-200"
          >
            Visa alla projekt
            <div className="duration-400 transition-all delay-200 group-hover:translate-x-1">
              <FaArrowRightLong />
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
