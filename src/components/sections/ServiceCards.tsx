import { serviceHref, services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../ui/Button";

/** Grid of service cards with image, name and one-liner. */
const ServiceCards = ({ exclude }: { exclude?: string }) => {
  const list = services.filter((service) => service.id !== exclude);
  return (
    <ul
      className={`grid gap-4 sm:grid-cols-2 sm:gap-5 ${list.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
    >
      {list.map((service) => (
        <li key={service.id}>
          <Link
            href={serviceHref(service)}
            className="group/link relative flex h-full flex-col overflow-hidden rounded-card bg-paper shadow-soft ring-1 ring-line transition-shadow duration-300 hover:shadow-lift"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-mist-100 sm:aspect-[4/5]">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover/link:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-display text-2xl">{service.name}</h3>
              <p className="mt-2 flex-1 text-muted">{service.shortDescription}</p>
              <span className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-600">
                Läs mer <Arrow />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ServiceCards;
