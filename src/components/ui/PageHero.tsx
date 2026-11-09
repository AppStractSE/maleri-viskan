import Image from "next/image";
import { ReactNode } from "react";
import Breadcrumbs, { Crumb } from "./Breadcrumbs";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  breadcrumbs: Crumb[];
  image?: { src: string; alt: string; position?: string };
  actions?: ReactNode;
  children?: ReactNode;
}

/** Hero used on all subpages: breadcrumbs, display heading, lead and an optional image. */
const PageHero = ({ eyebrow, title, lead, breadcrumbs, image, actions, children }: Props) => (
  <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-36 lg:pb-20">
    <div className="container-site">
      <Breadcrumbs items={breadcrumbs} />
      <div
        className={`mt-8 grid items-end gap-10 lg:mt-10 ${image ? "lg:grid-cols-12 lg:gap-14" : ""}`}
      >
        <div className={image ? "lg:col-span-7" : "max-w-4xl"}>
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="text-display animate-fade-up text-[2.6rem] leading-[1.04] text-balance hyphens-auto sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty whitespace-pre-line text-muted sm:text-xl">
              {lead}
            </p>
          )}
          {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
          {children}
        </div>
        {image && (
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-panel bg-mist-100 shadow-lift lg:aspect-[4/5]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1280px) 500px, (min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                style={image.position ? { objectPosition: image.position } : undefined}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
