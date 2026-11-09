"use client";

import { site } from "@/data/site";
import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import ContactForm from "../forms/ContactForm";

interface QuoteContextValue {
  /** Opens the quote dialog, optionally with a service preselected. */
  openQuote: (service?: string) => void;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) throw new Error("useQuote must be used inside <QuoteProvider>");
  return context;
};

/** One quote dialog for the whole site, opened from any "Begär offert" button. */
const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [service, setService] = useState<string>();
  // Remount the form each time the dialog opens so it starts fresh with the right service.
  const [formKey, setFormKey] = useState(0);

  const openQuote = useCallback((nextService?: string) => {
    setService(nextService);
    setFormKey((key) => key + 1);
    dialogRef.current?.showModal();
  }, []);

  const close = useCallback(() => dialogRef.current?.close(), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const lock = () => (document.documentElement.style.overflow = dialog.open ? "hidden" : "");
    const observer = new MutationObserver(lock);
    observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });
    return () => {
      observer.disconnect();
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <QuoteContext.Provider value={{ openQuote }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="quote-title"
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-panel bg-chalk p-0 text-ink shadow-lift backdrop:bg-transparent open:animate-fade-up"
      >
        <div className="p-6 sm:p-9">
          <div className="mb-6 flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow mb-3">Kostnadsfri offert</p>
              <h2 id="quote-title" className="text-display text-3xl leading-tight sm:text-4xl">
                Berätta om ditt projekt
              </h2>
              <p className="mt-3 text-muted">Vi återkommer så snart vi kan.</p>
              <p className="mt-1 text-muted">
                Bråttom?{" "}
                <a
                  href={site.phoneHref}
                  className="font-semibold whitespace-nowrap text-ink underline underline-offset-4 hover:text-brand-700"
                >
                  Ring {site.phone}
                </a>
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Stäng"
              className="-mt-1 -mr-2 grid h-10 w-10 shrink-0 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5"
            >
              <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="m3.5 3.5 9 9m0-9-9 9" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <ContactForm key={formKey} defaultService={service} onDone={close} autoFocus />
        </div>
      </dialog>
    </QuoteContext.Provider>
  );
};

export default QuoteProvider;
