import { services } from "@/data/services";
import { redirect } from "next/navigation";
import ServicePage from "./components/ServicePage";

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const service = services.find((service) => service.id === params.id);
  if (!service) redirect("/404");

  return <ServicePage service={service} />;
}
