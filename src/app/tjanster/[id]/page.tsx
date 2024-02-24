import { services } from "@/data/services";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import ServicePage from "./components/ServicePage";

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export const metadata: Metadata = {
  title: "Tjänster | Måleri Viskan",
  description:
    "Måleri Viskan - Vi kan måleri! Vi är din lokala målare i Kinna, Skene och Marks kommun.",
};

export default function Page({ params }: { params: { id: string } }) {
  const service = services.find((service) => service.id === params.id);
  if (!service) redirect("/404");
  if(service) metadata.title = service.name + " | Måleri Viskan";

  return <ServicePage service={service} />;
}
