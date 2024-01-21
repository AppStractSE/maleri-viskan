import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import BigCards from "@/components/cards/BigCards";
import GenericHeroSection from "@/components/home/hero/GenericHeroSection";
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
    <>
      <GenericHeroSection
        className={service.colorBg}
        title={service.servicePageTitle}
        description={service.shortDescription}
        quoteButton
      />
      <Breadcrumbs />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 py-8 w-full">
          <div className="space-y-12 lg:space-y-8">
            {service.features.map((feature, index) => (
              <BigCards
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
