import BigCards from "@/components/cards/BigCards";
import ServicesSection from "@/components/home/services/ServicesSection";
import { services } from "@/data/services";
export default function page({ params }: { params: { id: string; label: "Tjänster" } }) {
  return (
    <>
      <ServicesSection />
      <div className="bg-white">
        <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:py-16 w-full">
          <div className="space-y-12 lg:space-y-8">
            {services.map((services, index) => (
              <BigCards
                key={index}
                title={services.name}
                description={services.description}
                image={services.image}
                quoteButton={true}
                readMoreButton={true}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
