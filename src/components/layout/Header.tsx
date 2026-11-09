"use client";

import { navigation } from "@/data/navigation";
import { serviceHref, services } from "@/data/services";
import { site } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FocusEvent, PointerEvent, useEffect, useRef, useState } from "react";
import { useQuote } from "../quote/QuoteProvider";
import { Arrow, buttonClasses } from "../ui/Button";

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

const PhoneIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      d="M5 4h3.5l1.6 4.2-2.2 1.4a11 11 0 0 0 6.5 6.5l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5C10.5 20 4 13.5 3.5 5.6A1.5 1.5 0 0 1 5 4Z"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const pathname = usePathname();
  const { openQuote } = useQuote();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const openedByHover = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = () => desktop.matches && setMobileOpen(false);
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Hover opens the services menu for mouse users; touch and keyboard use the button.
  const onServicesPointerEnter = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    clearTimeout(closeTimer.current);
    if (!servicesOpen) openedByHover.current = true;
    setServicesOpen(true);
  };
  const onServicesPointerLeave = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
      // Forget the hover so a later keyboard/touch press on the button toggles normally.
      openedByHover.current = false;
    }, 150);
  };
  const onServicesClick = () => {
    // A click right after hovering must not close the menu the hover just opened.
    if (openedByHover.current) {
      openedByHover.current = false;
      return;
    }
    setServicesOpen((open) => !open);
  };
  const closeServicesOnBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setServicesOpen(false);
  };

  const startQuote = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    openQuote();
  };

  const raised = scrolled || mobileOpen;

  const linkClass = (href: string) =>
    `relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-200 hover:bg-ink/5 ${
      isActive(pathname, href) ? "text-ink" : "text-ink-soft hover:text-ink"
    }`;

  const activeDot = (href: string) =>
    isActive(pathname, href) ? (
      <span aria-hidden className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-500" />
    ) : null;

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-chalk focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Hoppa till innehållet
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          raised
            ? "bg-chalk shadow-[0_1px_0_var(--color-line)]"
            : "bg-chalk/0"
        }`}
      >
        <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-20">
          <Link href="/" aria-label={`${site.name}, till startsidan`} className="shrink-0 rounded-md">
            <Image
              src="/logo-ink.png"
              alt={site.name}
              width={428}
              height={224}
              priority
              sizes="88px"
              className="h-auto w-[76px] lg:w-[88px]"
            />
          </Link>

          <nav aria-label="Huvudmeny" className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navigation.map((item) =>
              item.showServices ? (
                <div
                  key={item.href}
                  className="relative"
                  onPointerEnter={onServicesPointerEnter}
                  onPointerLeave={onServicesPointerLeave}
                  onBlur={closeServicesOnBlur}
                >
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={onServicesClick}
                    className={linkClass(item.href)}
                  >
                    {item.label}
                    <svg
                      aria-hidden
                      viewBox="0 0 16 16"
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {activeDot(item.href)}
                  </button>

                  <div
                    id="services-menu"
                    className={`absolute top-full left-1/2 w-[640px] -translate-x-1/2 pt-4 transition duration-200 ease-out ${
                      servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-card border border-line bg-paper shadow-lift">
                      <ul className="grid grid-cols-2 gap-1 p-3">
                        {services.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={serviceHref(service)}
                              className="group flex gap-4 rounded-xl p-3 transition-colors hover:bg-mist-50"
                            >
                              <Image
                                src={service.thumbnail}
                                alt=""
                                width={112}
                                height={112}
                                sizes="56px"
                                className="h-14 w-14 shrink-0 rounded-xl object-cover"
                              />
                              <span>
                                <span className="block font-semibold text-ink transition-colors group-hover:text-brand-600">
                                  {service.name}
                                </span>
                                <span className="mt-0.5 line-clamp-2 block text-sm leading-snug text-muted">
                                  {service.shortDescription}
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between gap-4 border-t border-line bg-mist-50 px-6 py-3.5 text-sm">
                        <span className="text-muted">Osäker på vad du behöver? Vi hjälper dig.</span>
                        <Link
                          href="/tjanster"
                          className="group/link flex shrink-0 items-center gap-2 font-semibold text-brand-600 hover:text-brand-800"
                        >
                          Alla tjänster <Arrow />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={linkClass(item.href)}
                >
                  {item.label}
                  {activeDot(item.href)}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full px-4 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink xl:flex"
            >
              <PhoneIcon />
              {site.phone}
            </a>
            <button
              type="button"
              onClick={startQuote}
              className={buttonClasses({
                className: `max-sm:px-4 ${mobileOpen ? "max-lg:invisible max-lg:opacity-0" : ""}`,
              })}
            >
              Begär offert
            </button>
            <button
              type="button"
              aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((open) => !open)}
              className="relative -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
            >
              <span
                aria-hidden
                className={`absolute h-[1.5px] w-5 rounded-full bg-current transition duration-300 ${mobileOpen ? "rotate-45" : "-translate-y-[5px]"}`}
              />
              <span
                aria-hidden
                className={`absolute h-[1.5px] w-5 rounded-full bg-current transition duration-300 ${mobileOpen ? "-rotate-45" : "translate-y-[5px]"}`}
              />
            </button>
          </div>
        </div>
      </header>

      <nav
        id="mobile-menu"
        aria-label="Mobilmeny"
        className={`fixed inset-x-0 top-16 bottom-0 z-30 flex flex-col bg-chalk transition duration-300 ease-out lg:hidden ${
          mobileOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex-1 overflow-y-auto">
          <div className="container-site max-w-xl pt-5 pb-8">
            <p className="mb-1 text-sm font-medium text-muted">Tjänster</p>
            <ul className="divide-y divide-line">
              {services.map((service) => {
                const active = isActive(pathname, serviceHref(service));
                return (
                  <li key={service.id}>
                    <Link
                      href={serviceHref(service)}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-center gap-4 py-3"
                    >
                      <Image
                        src={service.thumbnail}
                        alt=""
                        width={96}
                        height={96}
                        sizes="48px"
                        className="h-11 w-11 shrink-0 rounded-lg object-cover"
                      />
                      <span
                        className={`min-w-0 flex-1 text-lg font-semibold ${active ? "text-brand-600" : "text-ink group-hover:text-brand-600"}`}
                      >
                        {service.name}
                      </span>
                      <span className="text-mist-300 transition-colors group-hover:text-ink">
                        <Arrow />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/tjanster"
              className="group/link mt-2 inline-flex items-center gap-2 py-2 text-sm font-semibold text-brand-600"
            >
              Alla tjänster <Arrow />
            </Link>

            <ul className="mt-6 border-t border-line">
              {navigation
                .filter((item) => !item.showServices)
                .map((item) => (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className={`group flex items-center justify-between py-4 text-lg font-semibold transition-colors ${
                        isActive(pathname, item.href) ? "text-brand-600" : "text-ink hover:text-brand-600"
                      }`}
                    >
                      {item.label}
                      <span className="text-mist-300 transition-colors group-hover:text-ink">
                        <Arrow />
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Pinned actions: always visible, never pushed below the fold. */}
        <div className="border-t border-line bg-chalk pb-[max(1rem,env(safe-area-inset-bottom))]">
          <div className="container-site grid max-w-xl grid-cols-2 gap-3 pt-4">
            <a href={site.phoneHref} className={buttonClasses({ variant: "secondary" })}>
              <PhoneIcon className="h-4 w-4" />
              Ring oss
            </a>
            <button type="button" onClick={startQuote} className={buttonClasses()}>
              Begär offert
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
