"use client";

import type { ContactPayload } from "@/app/api/contact-form/route";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { buttonClasses } from "../ui/Button";

type FormValues = Omit<ContactPayload, "website"> & { website: string };
type Status = { state: "idle" } | { state: "success" } | { state: "error"; message: string };

const serviceOptions = [...services.map((service) => service.name), "Annat"];

const inputClass =
  "block w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15 aria-[invalid=true]:border-red-700 aria-[invalid=true]:ring-red-700/10";

interface Props {
  defaultService?: string;
  /** Called after a successful submit, e.g. to let a dialog show a close button. */
  onDone?: () => void;
  /** Focus the first field on mount (used in the quote dialog). */
  autoFocus?: boolean;
}

const ContactForm = ({ defaultService = "", onDone, autoFocus }: Props) => {
  const id = useId();
  const [status, setStatus] = useState<Status>({ state: "idle" });

  // Focus the first field only for mouse/keyboard users: on phones an autofocused field pops the
  // keyboard and pushes the dialog heading out of view.
  useEffect(() => {
    if (!autoFocus || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.getElementById(`${id}-name`)?.focus();
  }, [autoFocus, id]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: serviceOptions.includes(defaultService) ? defaultService : "",
      message: "",
      website: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values: FormValues) => {
    setStatus({ state: "idle" });
    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        throw new Error(result.error ?? "Något gick fel. Försök igen.");
      }
      setStatus({ state: "success" });
      reset();
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "Något gick fel. Försök igen.",
      });
    }
  };

  if (status.state === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-6">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-100 text-brand-700">
          <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div>
          <p className="text-display text-3xl">Tack för din bokningsförfrågan!</p>
          <p className="mt-2 text-muted">Vi återkommer till dig så snart vi kan.</p>
        </div>
        <button
          type="button"
          className={buttonClasses({ variant: "secondary" })}
          onClick={() => {
            setStatus({ state: "idle" });
            onDone?.();
          }}
        >
          {onDone ? "Stäng" : "Skicka ett till"}
        </button>
      </div>
    );
  }

  const field = (name: keyof FormValues) => ({
    id: `${id}-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });

  const fieldError = (name: keyof FormValues) =>
    errors[name] ? (
      <p id={`${id}-${name}-error`} className="mt-1.5 text-sm text-red-700">
        {errors[name]?.message}
      </p>
    ) : null;

  const label = (name: keyof FormValues, text: string) => (
    <label htmlFor={`${id}-${name}`} className="mb-1.5 block text-sm font-medium text-ink-soft">
      {text}
    </label>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
      {/* Honeypot: hidden from people and assistive tech, tempting for bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Webbplats
          <input tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div>
        {label("name", "Namn")}
        <input
          {...field("name")}
          className={inputClass}
          autoComplete="name"
          placeholder="För- och efternamn"
          {...register("name", {
            required: "Ange ditt namn",
            minLength: { value: 2, message: "Namnet måste vara minst 2 tecken" },
            maxLength: { value: 80, message: "Namnet får vara högst 80 tecken" },
          })}
        />
        {fieldError("name")}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          {label("email", "E-post")}
          <input
            {...field("email")}
            type="email"
            inputMode="email"
            autoComplete="email"
            className={inputClass}
            placeholder="namn@exempel.se"
            {...register("email", {
              required: "Ange din e-postadress",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ogiltig e-postadress" },
            })}
          />
          {fieldError("email")}
        </div>
        <div>
          {label("phone", "Telefon")}
          <input
            {...field("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="070-123 45 67"
            {...register("phone", {
              required: "Ange ditt telefonnummer",
              validate: (value) => {
                const digits = value.replace(/\D/g, "").length;
                return (digits >= 8 && digits <= 15) || "Ange ett giltigt telefonnummer";
              },
            })}
          />
          {fieldError("phone")}
        </div>
      </div>

      <div>
        {label("service", "Vad gäller det?")}
        <div className="relative">
          <select
            {...field("service")}
            className={`${inputClass} appearance-none pr-10`}
            {...register("service", { required: "Välj vad din förfrågan gäller" })}
          >
            <option value="" disabled>
              Välj tjänst
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {fieldError("service")}
      </div>

      <div>
        {label("message", "Meddelande")}
        <textarea
          {...field("message")}
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Berätta kort om ditt projekt: vad ska göras, ungefärlig yta och när?"
          {...register("message", {
            required: "Skriv ett meddelande",
            minLength: { value: 10, message: "Meddelandet måste vara minst 10 tecken" },
            maxLength: { value: 2000, message: "Meddelandet får vara högst 2000 tecken" },
          })}
        />
        {fieldError("message")}
      </div>

      {status.state === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          {status.message} Du når oss också på{" "}
          <a href={site.phoneHref} className="font-semibold underline">
            {site.phone}
          </a>
          .
        </p>
      )}

      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Vi använder dina uppgifter endast för att besvara din förfrågan.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={buttonClasses({ size: "lg", className: "sm:shrink-0" })}
        >
          {isSubmitting ? "Skickar…" : "Skicka bokningsförfrågan"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
