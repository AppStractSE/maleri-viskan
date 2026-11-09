import { Arrow, ButtonLink } from "../ui/Button";

const RotTeaser = () => (
  <section className="container-site py-20 lg:py-28">
    <div className="grid items-center gap-10 rounded-panel bg-brand-50 p-6 ring-1 ring-brand-100 sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
      <div className="min-w-0 lg:col-span-7">
        <p className="eyebrow mb-4">ROT-avdrag</p>
        <h2 className="text-display text-4xl leading-[1.05] text-balance sm:text-5xl">
          Betala bara 70&nbsp;% av arbetskostnaden
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          Äger och bor du i bostaden får du en skattereduktion på 30&nbsp;% av arbetskostnaden, upp
          till 50&nbsp;000&nbsp;kr per person och år. Målning och tapetsering passar extra bra,
          eftersom det mesta av kostnaden är arbete.
        </p>
        <ButtonLink href="/rot-avdrag#kalkylator" size="lg" className="mt-9">
          Räkna på ditt projekt <Arrow />
        </ButtonLink>
      </div>
      <div className="min-w-0 rounded-card bg-paper p-5 shadow-soft ring-1 ring-brand-100 sm:p-9 lg:col-span-5">
        <dl>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-5">
            <dt className="text-muted">Arbetskostnad</dt>
            <dd className="text-display text-2xl sm:text-3xl">100&nbsp;000&nbsp;kr</dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-5">
            <dt className="text-muted">ROT-avdrag 30&nbsp;%</dt>
            <dd className="text-display text-2xl text-brand-600 sm:text-3xl">−30&nbsp;000&nbsp;kr</dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pt-5">
            <dt className="font-semibold">Du betalar</dt>
            <dd className="text-display text-3xl sm:text-4xl">70&nbsp;000&nbsp;kr</dd>
          </div>
        </dl>
        <p className="mt-5 text-xs text-muted">Exempel för en person. Materialkostnad tillkommer.</p>
      </div>
    </div>
  </section>
);

export default RotTeaser;
