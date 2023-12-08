"use client";
import { projects } from "@/data/projects";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  showAll?: boolean;
}

const ProjectsSection = ({ showAll }: Props) => {
  return (
    <section className="bg-white text-black">
      <div className="max-w-screen-2xl px-4 pt-8 pb-12 mx-auto lg:gap-8 xl:gap-0 lg:py-16 w-full">
        <div>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Projekt
          </h1>
          <p className="max-w-3xl mb-6 font-light lg:mb-8 md:text-lg lg:text-2xl">
            Vi på Måleri Viskan är stolta över att ha arbetat med många olika kunder. Vår dedikation
            till kvalitet och noggrannhet är konsekvent, oavsett projektets omfattning. Vårt mål är
            att överträffa förväntningarna och skapa en långvarig tillfredsställelse för våra kunder
            genom att leverera professionella målningstjänster.
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-4 lg:grid-rows-2">
          {projects.slice(0, showAll ? projects.length : 5).map((project, i) => (
            <Link
              href={`/projekt/${project.id}`}
              key={i}
              className={`${
                i === 0 || i === projects.length - 1 || i === projects.length - 2
                  ? "row-span-2 col-span-6"
                  : "col-span-3"
              } text-white flex flex-col group cursor-pointer`}
            >
              <div
                className={`min-h-[250px] h-full bg-cover bg-no-repeat bg-center text-white rounded-sm shadow-lg`}
                style={{
                  backgroundImage: `url('${project.image}')`,
                }}
              >
                <div className="flex flex-col justify-end h-full bg-gradient-to-t from-[#1919199f]">
                  <div className="flex opacity-0 group-hover:opacity-100 items-center p-4 gap-2 text-white duration-200 transition-all w-fit ml-auto">
                    Läs mer
                    <div className="group-hover:translate-x-1 transition-all duration-400 delay-200 ">
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
            className="flex items-center p-4 pr-0 gap-2 duration-200 transition-all w-fit ml-auto group"
          >
            Visa alla projekt
            <div className="group-hover:translate-x-1 transition-all duration-400 delay-200">
              <FaArrowRightLong />
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
