import { site } from "@/data/site";
import { ReactNode } from "react";
import MapEmbed from "../consent/MapEmbed";
import ContactForm from "../forms/ContactForm";
import SocialLinks from "../layout/SocialLinks";

interface Props {
  title?: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2";
  showMap?: boolean;
  defaultService?: string;
}

const methods = [
  {
    label: "Ring oss",
    value: site.phone,
    href: site.phoneHref,
    icon: "M5 4h3.5l1.6 4.2-2.2 1.4a11 11 0 0 0 6.5 6.5l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5C10.5 20 4 13.5 3.5 5.6A1.5 1.5 0 0 1 5 4Z",
  },
  {
    label: "Mejla oss",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: "M3.5 6.5h17v11h-17zM3.5 7l8.5 6.5L20.5 7",
  },
  {
    label: "Här finns vi",
    value: `${site.address.street}, ${site.address.city}`,
    href: site.mapsUrl,
    icon: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
    external: true,
  },
];

const ContactSection = ({
  title = "Vi är er målarfirma i Kinna, Skene och Marks kommun",
  lead = "Har du frågor om våra tjänster, eller funderar du på att påbörja ett projekt? Hör av dig, så återkommer vi så snart vi kan.",
  as: Tag = "h2",
  showMap = true,
  defaultService,
}: Props) => {
  // Keep heading levels sequential: the form title sits one level below the section title.
  const FormHeading = Tag === "h1" ? "h2" : "h3";
  return (
  <section
    id="kontakt"
    className={`container-site ${Tag === "h1" ? "pt-8 pb-20 lg:pt-10 lg:pb-28" : "py-20 lg:py-28"}`}
  >
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <p className="eyebrow mb-4">Kontakt</p>
        <Tag className="text-display text-4xl leading-[1.05] text-balance sm:text-5xl">{title}</Tag>
        <p className="mt-5 text-lg leading-relaxed text-muted">{lead}</p>

        <ul className="mt-10 space-y-3">
          {methods.map((method) => (
            <li key={method.label}>
              <a
                href={method.href}
                {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-4 rounded-xl border border-line bg-paper/60 p-4 transition-colors hover:border-ink/20 hover:bg-paper"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-chalk">
                  <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
                    <path d={method.icon} />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm text-muted">{method.label}</span>
                  <span className="block font-semibold text-ink">{method.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-4 text-ink">
          <span className="text-sm text-muted">Följ oss</span>
          <SocialLinks />
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="rounded-panel bg-paper p-6 shadow-soft ring-1 ring-line sm:p-10">
          <FormHeading className="text-display text-2xl sm:text-3xl">Boka nu</FormHeading>
          <p className="mt-2 mb-7 text-muted">Vi utför jobb i hela Marks kommun. Skicka en bokningsförfrågan så kontaktar vi dig för att planera arbetet.</p>
          <ContactForm defaultService={defaultService} />
        </div>
      </div>
    </div>
    {showMap && <MapEmbed className="mt-16 h-[360px] lg:h-[440px]" />}
  </section>
  );
};

export default ContactSection;
