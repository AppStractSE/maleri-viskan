import { services } from "@/data/services";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const service = services.find((service) => service.id === params.id);
  if (!service) redirect("/404");

  return (
    <div>
      <h1>{service.name}</h1>
    </div>
  );
}
