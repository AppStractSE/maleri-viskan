"use client";

import { companyLinks } from "@/data/navigation";
import { serviceHref, services } from "@/data/services";
import { site } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { useConsent } from "../consent/ConsentProvider";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const { openSettings } = useConsent();
  const year = new Date().getFullYear();
  const cityLine = [site.address.postalCode, site.address.city].filter(Boolean).join(" ");

  const heading = "mb-5 text-xs font-semibold tracking-[0.18em] text-brand-400 uppercase";
  const link = "text-chalk/75 transition-colors hover:text-chalk";

  return (
    <footer className="relative overflow-hidden bg-deep text-chalk">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_0%,rgb(11_180_230/0.16),transparent_60%)]"
      />
      <div className="container-site relative">
        {/* Top: brand statement and direct contact */}
        <div className="grid gap-10 border-b border-chalk/10 py-16 lg:grid-cols-12 lg:items-end lg:py-20">
          <div className="lg:col-span-7">
            <Link href="/" aria-label={`${site.name}, till startsidan`} className="inline-block">
              <Image
                src="/logo-light.png"
                alt={site.name}
                width={428}
                height={224}
                sizes="112px"
                className="h-auto w-28"
              />
            </Link>
            <p className="text-display mt-8 max-w-xl text-3xl leading-[1.15] text-balance sm:text-4xl">
              Noggrant hantverk med yrkesstolthet, i Kinna, Skene och hela Marks kommun.
            </p>
          </div>
          <div className="flex flex-col gap-1 lg:col-span-5 lg:items-end lg:text-right">
            <a
              href={site.phoneHref}
              className="text-display text-3xl whitespace-nowrap transition-colors hover:text-brand-400 sm:text-4xl"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-lg text-chalk/75 transition-colors hover:text-chalk"
            >
              {site.email}
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Tjänster">
            <h2 className={heading}>Tjänster</h2>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={serviceHref(service)} className={link}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Företaget">
            <h2 className={heading}>Företaget</h2>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className={heading}>Här finns vi</h2>
            <address className="not-italic">
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className={link}>
                {site.address.street}
                <br />
                {cityLine}
              </a>
            </address>
            <p className="mt-4 text-sm text-chalk/55">Uppdrag i {site.areaServed.join(", ").replace(/, ([^,]*)$/, " och $1")}.</p>
          </div>
          <div>
            <h2 className={heading}>Följ oss</h2>
            <SocialLinks className="text-chalk" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-chalk/10 py-8 text-sm text-chalk/55 sm:flex-row sm:items-center sm:justify-between">
          {/* Year is rendered at build time; the client may be in a newer year. */}
          <p suppressHydrationWarning>
            © {year} {site.name} · Innehar F-skattsedel
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/cookies" className="transition-colors hover:text-chalk">
              Cookies
            </Link>
            <button type="button" onClick={openSettings} className="transition-colors hover:text-chalk">
              Cookieinställningar
            </button>
            <a
              href="https://appstract.se/"
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-chalk"
            >
              Webbdesign av Appstract
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
