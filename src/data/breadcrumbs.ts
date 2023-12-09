import { projects } from "./projects";
import { services } from "./services";

const serviceBreadcrumbs = services.map((service) => ({ path: service.id, label: service.name }));
const projectBreadcrumbs = projects.map((project) => ({ path: project.id, label: project.title }));

export const breadcrumbs = [
  { path: "tjanster", label: "Tjänster" },
  { path: "projekt", label: "Projekt" },
  { path: "kontakt", label: "Kontakt" },
  { path: "rot-avdrag", label: "Rotavdrag" },
  ...serviceBreadcrumbs,
  ...projectBreadcrumbs,
];
