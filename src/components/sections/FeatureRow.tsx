import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  image: string;
  imageAlt?: string;
  reverse?: boolean;
  actions?: ReactNode;
  /** Use object-contain for product shots on a white background. */
  contain?: boolean;
}

/** Alternating image + text row used on service, environment and services pages. */
const FeatureRow = ({ id, eyebrow, title, children, image, imageAlt = "", reverse, actions, contain }: Props) => (
  <article id={id} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16 [&>*]:min-w-0">
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-panel lg:col-span-6 ${
        contain ? "bg-white" : "bg-mist-100"
      } ${reverse ? "lg:col-start-7 lg:row-start-1" : "lg:col-start-1"}`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
        className={contain ? "object-contain p-8" : "object-cover"}
      />
    </div>
    <div className={`lg:col-span-5 ${reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-display text-3xl leading-[1.1] text-balance sm:text-4xl">{title}</h2>
      <div className="prose-copy mt-5 space-y-4 whitespace-pre-line">{children}</div>
      {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
    </div>
  </article>
);

export default FeatureRow;
