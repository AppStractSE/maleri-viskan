"use client";

import { useId, useState } from "react";
import QuoteButton from "../quote/QuoteButton";

export const ROT_RATE = 0.3;
export const ROT_MAX_PER_PERSON = 50_000;

const kr = (value: number) => `${Math.round(value).toLocaleString("sv-SE")} kr`;

interface SliderProps {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

const Slider = ({ label, hint, value, min, max, step, onChange }: SliderProps) => {
  const id = useId();
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="font-semibold">
          {label}
        </label>
        <output htmlFor={id} className="text-display text-2xl tabular-nums">
          {kr(value)}
        </output>
      </div>
      <p className="mt-1 text-sm text-muted">{hint}</p>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--fill": `${percent}%` } as React.CSSProperties}
        className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-[linear-gradient(to_right,var(--color-brand-500)_var(--fill),var(--color-mist-200)_var(--fill))] [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-paper [&::-moz-range-thumb]:bg-brand-600 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-paper [&::-webkit-slider-thumb]:bg-brand-600 [&::-webkit-slider-thumb]:shadow-soft"
      />
    </div>
  );
};

const RotCalculator = () => {
  const [applicants, setApplicants] = useState(1);
  const [labour, setLabour] = useState(40_000);
  const [material, setMaterial] = useState(5_000);

  const cap = applicants * ROT_MAX_PER_PERSON;
  const deduction = Math.min(labour * ROT_RATE, cap);
  const capped = labour * ROT_RATE > cap;
  const labourAfter = labour - deduction;
  const total = labourAfter + material;

  return (
    <div className="grid overflow-hidden rounded-panel bg-paper shadow-soft ring-1 ring-line lg:grid-cols-12">
      <div className="space-y-9 p-7 sm:p-10 lg:col-span-7">
        <fieldset>
          <legend className="font-semibold">Antal som delar på avdraget</legend>
          <p className="mt-1 text-sm text-muted">
            Är ni två som äger och bor i bostaden kan ni båda göra avdrag.
          </p>
          <div className="mt-4 inline-flex rounded-full bg-mist-100 p-1">
            {[1, 2].map((count) => (
              <label key={count} className="cursor-pointer">
                <input
                  type="radio"
                  name="applicants"
                  value={count}
                  checked={applicants === count}
                  onChange={() => setApplicants(count)}
                  className="peer sr-only"
                />
                <span className="block rounded-full px-5 py-2 text-sm font-semibold text-muted transition-colors peer-checked:bg-ink peer-checked:text-chalk peer-focus-visible:outline-2 peer-focus-visible:outline-brand-500">
                  {count === 1 ? "1 person" : "2 personer"}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <Slider
          label="Arbetskostnad"
          hint="Det vi tar för själva arbetet, inklusive moms. Avdraget räknas på denna del."
          value={labour}
          min={5_000}
          max={400_000}
          step={1_000}
          onChange={setLabour}
        />
        <Slider
          label="Materialkostnad"
          hint="Färg, tapet och annat material. Här ges inget avdrag."
          value={material}
          min={0}
          max={50_000}
          step={500}
          onChange={setMaterial}
        />
      </div>

      <div className="flex flex-col bg-deep p-7 text-chalk sm:p-10 lg:col-span-5">
        <p className="eyebrow text-brand-400">Ditt ROT-avdrag</p>
        <p aria-live="polite" className="text-display mt-3 text-6xl text-brand-500 tabular-nums">
          −{kr(deduction)}
        </p>
        {capped && (
          <p className="mt-2 text-sm text-brand-200">
            Maxbeloppet {kr(cap)} är nått{applicants === 2 ? " för er två" : ""}.
          </p>
        )}
        <dl className="mt-8 space-y-3 border-t border-chalk/10 pt-6 text-chalk/80">
          <div className="flex justify-between gap-4">
            <dt>Arbetskostnad efter avdrag</dt>
            <dd className="tabular-nums">{kr(labourAfter)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Material</dt>
            <dd className="tabular-nums">{kr(material)}</dd>
          </div>
          <div className="flex justify-between gap-4 border-t border-chalk/10 pt-3 text-lg font-semibold text-chalk">
            <dt>Du betalar totalt</dt>
            <dd className="tabular-nums">{kr(total)}</dd>
          </div>
        </dl>
        <p className="mt-4 text-xs text-chalk/50">
          Ungefärlig beräkning inklusive moms. Avdraget gäller per person och år och delas med
          eventuella andra ROT-arbeten under samma år.
        </p>
        <div className="mt-auto pt-8">
          <QuoteButton variant="light" size="lg" className="w-full">
            Begär offert
          </QuoteButton>
        </div>
      </div>
    </div>
  );
};

export default RotCalculator;
