import { site } from "@/data/site";
import Link from "next/link";
import JsonLd from "../seo/JsonLd";

export interface Crumb {
  label: string;
  href: string;
}

/** Visible breadcrumbs plus BreadcrumbList structured data. "Hem" is added automatically. */
const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  const all = [{ label: "Hem", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Brödsmulor" className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((crumb, index) => {
            const last = index === all.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-ink">
                    {crumb.label}
                  </span>
                ) : (
                  <>
                    <Link href={crumb.href} className="transition-colors hover:text-ink">
                      {crumb.label}
                    </Link>
                    <span aria-hidden className="text-mist-300">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.label,
            item: `${site.url}${crumb.href === "/" ? "" : crumb.href}`,
          })),
        }}
      />
    </>
  );
};

export default Breadcrumbs;
