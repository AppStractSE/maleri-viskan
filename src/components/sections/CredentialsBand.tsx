import { site } from "@/data/site";
import { buttonClasses } from "@/components/ui/Button";

const CredentialsBand = () => (
  <section className="bg-deep text-chalk">
    <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
      <div className="min-w-0 lg:col-span-7">
        <p className="eyebrow mb-4 text-brand-400">Lokalt engagemang</p>
        <h2 className="text-display text-4xl leading-[1.05] text-balance sm:text-5xl">
          {site.award.title}
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-chalk/75">
          Torbjörn Johansson på Måleri Viskan har utsetts till Årets nyföretagare i Mark 2026.
          Vi utför måleriarbeten åt privatpersoner och företag i hela Marks kommun.
        </p>
        <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {site.credentials.map((credential) => (
            <li key={credential} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-500/20 text-brand-400">
                <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m3.5 8.5 3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-chalk/90">{credential}</span>
            </li>
          ))}
        </ul>
        <a
          href={site.award.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses({ variant: "outlineLight", className: "mt-8 min-h-11 max-w-full whitespace-normal text-left" })}
        >
          <span className="min-w-0 whitespace-normal">Se utmärkelsen hos {site.award.sourceName}</span>
          <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 3.5h5.5V9M16.5 3.5 9 11M8 4.5H4.5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V12" />
          </svg>
          <span className="sr-only">(öppnas i ny flik)</span>
        </a>
      </div>
      <div className="min-w-0 lg:col-span-4 lg:col-start-9">
        <div className="rounded-panel border border-chalk/20 p-8 text-center sm:p-10">
          <p className="text-display text-7xl text-brand-400 sm:text-8xl">{site.award.year}</p>
          <p className="mt-5 text-lg font-semibold">Årets nyföretagare</p>
          <p className="mt-2 text-chalk/75">Mark · Torbjörn Johansson</p>
          <p className="mt-1 text-chalk/75">Måleri Viskan</p>
        </div>
      </div>
    </div>
  </section>
);

export default CredentialsBand;
