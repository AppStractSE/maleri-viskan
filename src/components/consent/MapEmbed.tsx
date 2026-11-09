"use client";

import { site } from "@/data/site";
import { useState } from "react";
import { buttonClasses } from "../ui/Button";
import { useConsent } from "./ConsentProvider";

/** Google Maps embed that only loads after cookie consent or an explicit click. */
const MapEmbed = ({ className = "" }: { className?: string }) => {
  const { consent } = useConsent();
  const [loadOnce, setLoadOnce] = useState(false);
  const show = consent === "granted" || loadOnce;

  return (
    <div
      className={`relative overflow-hidden rounded-panel border border-line bg-mist-100 ${className}`}
    >
      {show ? (
        <iframe
          title={`Karta: ${site.name}, ${site.address.street}, ${site.address.city}`}
          src={site.mapsEmbedUrl}
          className="absolute inset-0 h-full w-full grayscale-[0.6] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(var(--color-mist-200)_1px,transparent_1px),linear-gradient(90deg,var(--color-mist-200)_1px,transparent_1px)] [background-size:32px_32px]"
          />
          <div className="relative max-w-xs">
            <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-ink text-chalk shadow-soft">
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" strokeLinejoin="round" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
            </span>
            <p className="font-semibold">
              {site.address.street}, {[site.address.postalCode, site.address.city].filter(Boolean).join(" ")}
            </p>
            <p className="mt-1 text-sm text-muted">
              Kartan visas via Google Maps, som sätter cookies.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <button type="button" className={buttonClasses()} onClick={() => setLoadOnce(true)}>
                Visa karta
              </button>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({ variant: "secondary" })}
              >
                Öppna i Google Maps
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapEmbed;
