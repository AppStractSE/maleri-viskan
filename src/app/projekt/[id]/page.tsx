import Gallery from "@/components/projects/Gallery";
import QuoteButton from "@/components/quote/QuoteButton";
import CtaBand from "@/components/sections/CtaBand";
import ProjectCards from "@/components/sections/ProjectCards";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { getProject, projectHref, projects } from "@/data/projects";
import { openGraphBase } from "@/data/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).id);
  if (!project) return {};
  return {
    title: `${project.title} – projekt`,
    description: project.description.replace(/\n+/g, " ").slice(0, 158),
    alternates: { canonical: projectHref(project) },
    openGraph: { ...openGraphBase, title: project.title, url: projectHref(project), images: [{ url: project.image, alt: project.title }] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).id);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.id === project.id);
  const others = [1, 2, 3].map((offset) => projects[(index + offset) % projects.length]);

  return (
    <>
      <PageHero
        eyebrow={`Projekt · ${project.images.length} bilder`}
        title={project.title}
        lead={project.description}
        breadcrumbs={[
          { label: "Projekt", href: "/projekt" },
          { label: project.title, href: projectHref(project) },
        ]}
        actions={<QuoteButton size="lg">Begär offert på liknande</QuoteButton>}
      />
      <section className="container-site pb-20 lg:pb-28">
        <Gallery title={project.title} images={project.images} />
      </section>
      <section className="border-t border-line">
        <div className="container-site py-20 lg:py-28">
          <SectionHeading eyebrow="Fler projekt" title="Se mer av vårt arbete" />
          <div className="mt-10">
            <ProjectCards projects={others} />
          </div>
        </div>
      </section>
      <CtaBand title="Har du ett liknande projekt?" />
    </>
  );
}
