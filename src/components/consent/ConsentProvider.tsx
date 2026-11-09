"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
  useSyncExternalStore,
} from "react";
import { buttonClasses } from "../ui/Button";

type Consent = "granted" | "denied";
const STORAGE_KEY = "mv-consent-v1";
const GA_ID = "G-JM8EGK5CMP";

// Small external store over localStorage, with an in-memory fallback when storage is blocked.
let memoryValue: Consent | null = null;
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

const readStored = (): Consent | null => {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : memoryValue;
  } catch {
    return memoryValue;
  }
};

const writeStored = (value: Consent) => {
  memoryValue = value;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage blocked: the in-memory value keeps the choice for this visit.
  }
  notify();
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
};

/** "pending" on the server and during hydration, so nothing consent-gated renders before we know. */
type Snapshot = Consent | "unset" | "pending";
const getSnapshot = (): Snapshot => readStored() ?? "unset";
const getServerSnapshot = (): Snapshot => "pending";

interface ConsentContextValue {
  consent: Consent | null;
  setConsent: (value: Consent) => void;
  openSettings: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useConsent must be used inside <ConsentProvider>");
  return context;
};

/**
 * Cookie consent. Nothing that sets third-party cookies (Google Analytics, the Google Maps
 * embed) loads until the visitor has accepted.
 */
const ConsentProvider = ({ children }: { children: ReactNode }) => {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const consent: Consent | null = snapshot === "granted" || snapshot === "denied" ? snapshot : null;
  const bannerOpen = snapshot === "unset" || (snapshot !== "pending" && settingsOpen);

  const setConsent = useCallback((value: Consent) => {
    setSettingsOpen(false);
    writeStored(value);
    // Google's documented opt-out flag: stops an already loaded gtag from collecting
    // when someone withdraws consent without reloading the page.
    (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = value === "denied";
    if (value === "denied") {
      // Clear analytics cookies that may have been set earlier.
      document.cookie.split(";").forEach((cookie) => {
        const name = cookie.split("=")[0].trim();
        if (name.startsWith("_ga")) {
          document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname.replace(/^www\./, "")}`;
          document.cookie = `${name}=; Max-Age=0; path=/`;
        }
      });
    }
  }, []);

  const openSettings = useCallback(() => setSettingsOpen(true), []);

  return (
    <ConsentContext.Provider value={{ consent, setConsent, openSettings }}>
      {children}
      {consent === "granted" && <GoogleAnalytics gaId={GA_ID} />}
      {bannerOpen && (
        <div
          role="region"
          aria-label="Cookieinställningar"
          className="fixed inset-x-3 bottom-3 z-50 animate-fade-up sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-md"
        >
          <div className="rounded-card border border-line bg-paper p-5 shadow-lift sm:p-6">
            <p className="font-semibold">Får vi använda cookies?</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Vi vill använda Google Analytics för att förstå hur sidan används, och Google Maps
              för att visa var vi finns. Båda sätter cookies. Du kan ändra dig när som helst via
              länken i sidfoten.{" "}
              <Link href="/cookies" className="underline underline-offset-2 hover:text-ink">
                Läs mer
              </Link>
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                className={buttonClasses({ size: "md" })}
                onClick={() => setConsent("granted")}
              >
                Godkänn
              </button>
              <button
                type="button"
                className={buttonClasses({ variant: "secondary", size: "md" })}
                onClick={() => setConsent("denied")}
              >
                Endast nödvändiga
              </button>
            </div>
          </div>
        </div>
      )}
    </ConsentContext.Provider>
  );
};

export default ConsentProvider;
