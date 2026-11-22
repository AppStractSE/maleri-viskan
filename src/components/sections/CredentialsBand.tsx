import { site } from "@/data/site";
import { buttonClasses } from "@/components/ui/Button";

const CredentialsBand = () => (
  <section className="bg-deep text-chalk">
    <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
      <div className="min-w-0 lg:col-span-7">
        <p className="eyebrow mb-4 text-brand-400">Utmärkelse</p>
        <h2 className="text-display text-3xl leading-[1.08] text-balance sm:text-4xl">
          {site.award.title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg text-chalk/75">
          Vi är otroligt stolta och glada över att ha blivit utsedda till Årets nyföretagare i
          Mark 2026. Ett stort tack till alla kunder som har gett oss förtroendet, det är ni som
          gör det möjligt. Vi fortsätter att måla hem och lokaler i hela Marks kommun, med samma
          noggrannhet som alltid.
        </p>
        <a
          href={site.award.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses({ variant: "outlineLight", className: "mt-10 min-h-11 max-w-full whitespace-normal text-left" })}
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
          <p className="text-display text-6xl text-brand-400 sm:text-7xl">{site.award.year}</p>
          <p className="mt-5 text-lg font-semibold">Årets nyföretagare</p>
          <p className="mt-2 text-chalk/75">Mark · Torbjörn Johansson</p>
          <p className="mt-1 text-chalk/75">Måleri Viskan</p>
        </div>
      </div>
    </div>
  </section>
);

export default CredentialsBand;
