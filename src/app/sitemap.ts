import { projectHref, projects } from "@/data/projects";
import { serviceHref, services } from "@/data/services";
import { site } from "@/data/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/tjanster", "/projekt", "/rot-avdrag", "/miljoarbete", "/kontakt"];
  const entry = (path: string, priority: number) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly" as const,
    priority,
  });
  return [
    ...pages.map((path) => entry(path, path === "/" ? 1 : 0.8)),
    ...services.map((service) => entry(serviceHref(service), 0.9)),
    ...projects.map((project) => entry(projectHref(project), 0.6)),
  ];
}
