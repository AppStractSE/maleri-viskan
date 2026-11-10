import { serviceHref, services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../ui/Button";

/** Grid of service cards with image, name and one-liner. */
const ServiceCards = ({ exclude }: { exclude?: string }) => {
  const list = services.filter((service) => service.id !== exclude);
  return (
    <ul
      className={`grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 ${list.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
    >
      {list.map((service) => (
        <li key={service.id}>
          <Link
            href={serviceHref(service)}
            className="group/link relative flex h-full overflow-hidden rounded-card bg-paper shadow-soft ring-1 ring-line transition-shadow duration-300 hover:shadow-lift sm:flex-col"
          >
            {/* Compact row card on phones, tall image card from sm up. */}
            <div className="relative w-24 shrink-0 self-stretch overflow-hidden bg-mist-100 min-[400px]:w-28 sm:aspect-[4/5] sm:w-auto">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, (min-width: 400px) 112px, 96px"
                className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover/link:scale-[1.04]"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:justify-start sm:p-6">
              <h3 className="text-display text-lg wrap-anywhere min-[375px]:text-xl sm:text-2xl">{service.name}</h3>
              <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted sm:mt-2 sm:line-clamp-none sm:text-base">{service.shortDescription}</p>
              <span className="mt-2 flex items-center gap-2 text-sm font-semibold text-brand-600 sm:mt-5">
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
