import { projects } from "@/components/home/projects/projects";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const project = projects.find((project) => project.id === params.id);
  if (!project) redirect("/404");

  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  );
}
