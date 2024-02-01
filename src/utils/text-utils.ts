import { Project } from "../data/projects";
export const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export async function generateStaticParams(projects: Project[]) {
  return projects.map((project) => ({
    id: project.id,
  }));
}
