import Image from "next/image";
import { ReactNode } from "react";
import Breadcrumbs, { Crumb } from "./Breadcrumbs";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  breadcrumbs: Crumb[];
  image?: { src: string; alt: string; position?: string; aspect?: "portrait" | "panorama" };
  actions?: ReactNode;
  children?: ReactNode;
}

// Frame per image shape. A panorama keeps its full width when stacked and only
// crops to 3:2 in a wider side column, so it never gets zoomed into a tall frame.
const frames = {
  portrait: "aspect-[4/3] lg:aspect-[4/5]",
  panorama: "aspect-[2/1] sm:aspect-[1920/570] lg:aspect-[3/2]",
};

/** Hero used on all subpages: breadcrumbs, display heading, lead and an optional image. */
const PageHero = ({ eyebrow, title, lead, breadcrumbs, image, actions, children }: Props) => {
  const wide = image?.aspect === "panorama";
  return (
  <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-36 lg:pb-20">
    <div className="container-site">
      <Breadcrumbs items={breadcrumbs} />
      <div
        className={`grid items-end gap-10 ${breadcrumbs.length > 1 ? "mt-8 lg:mt-10" : ""} ${image ? "lg:grid-cols-12 lg:gap-14" : ""}`}
      >
        <div className={image ? (wide ? "lg:col-span-6" : "lg:col-span-7") : "max-w-4xl"}>
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="text-display animate-fade-up text-[2.25rem] leading-[1.04] text-balance min-[400px]:text-[2.6rem] sm:text-6xl lg:text-7xl">
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
          <div className={`relative ${wide ? "lg:col-span-6" : "lg:col-span-5"}`}>
            <div
              className={`relative overflow-hidden rounded-panel bg-mist-100 shadow-lift ${frames[image.aspect ?? "portrait"]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                preload
                sizes={wide ? "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw" : "(min-width: 1280px) 500px, (min-width: 1024px) 40vw, 100vw"}
                className="object-cover"
                style={{ objectPosition: image.position ?? (image.aspect === "panorama" ? "55% center" : undefined) }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
  );
};

export default PageHero;
