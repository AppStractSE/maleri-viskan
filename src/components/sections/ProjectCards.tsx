import { Project, projectHref, projects as allProjects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../ui/Button";

interface Props {
  projects?: Project[];
  /** Bento layout for a short highlight (home page); a plain grid otherwise. */
  layout?: "bento" | "grid";
  /** Heading level for card titles: h2 when the cards sit directly under the page h1. */
  headingLevel?: "h2" | "h3";
}

const bentoSpans = [
  "col-span-2 lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

const ProjectCards = ({ projects = allProjects, layout = "grid", headingLevel: Heading = "h3" }: Props) => {
  const bento = layout === "bento";
  return (
    <ul
      className={
        bento
          ? "grid grid-cols-2 gap-3 sm:gap-5 lg:auto-rows-[260px] lg:grid-cols-12"
          : "grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {projects.map((project, index) => (
        <li key={project.id} className={bento ? bentoSpans[index] ?? "lg:col-span-4" : ""}>
          <Link href={projectHref(project)} className="group/link flex h-full flex-col">
            <div
              className={`relative overflow-hidden rounded-card bg-mist-100 ${
                bento ? "aspect-[4/3] lg:aspect-auto lg:h-full" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={project.image}
                alt=""
                fill
                sizes={
                  bento && index === 0
                    ? "(min-width: 1024px) 700px, (min-width: 640px) 50vw, 100vw"
                    : "(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                }
                className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover/link:scale-[1.04]"
              />
              {bento && (
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 p-3 sm:p-6">
                  <div className="flex w-full items-end justify-between gap-2 text-chalk sm:gap-4">
                    <Heading className={`text-display ${index === 0 ? "text-2xl sm:text-4xl" : "text-sm leading-tight sm:text-2xl"}`}>
                      {project.title}
                    </Heading>
                    <span className="hidden h-10 w-10 shrink-0 place-items-center rounded-full bg-chalk/15 backdrop-blur sm:grid transition-colors group-hover/link:bg-chalk group-hover/link:text-ink">
                      <Arrow />
                    </span>
                  </div>
                </div>
              )}
            </div>
            {!bento && (
              <div className="mt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <Heading className="text-display text-2xl">{project.title}</Heading>
                  <span className="shrink-0 text-sm text-muted">{project.images.length} bilder</span>
                </div>
                <p className="mt-2 line-clamp-2 text-muted">{project.description}</p>
                <span className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Se projektet <Arrow />
                </span>
              </div>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectCards;
