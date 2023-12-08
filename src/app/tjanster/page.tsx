import ServicesSection from "@/components/home/services/ServicesSection";

export default function page({ params }: { params: { id: string; label: "Tjänster" } }) {
  return <ServicesSection />;
}
