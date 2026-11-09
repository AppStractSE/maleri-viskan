import { site } from "@/data/site";
import Image from "next/image";

const CredentialsBand = () => (
  <section className="bg-deep text-chalk">
    <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
      <div className="lg:col-span-7">
        <p className="eyebrow mb-4 text-brand-400">Trygghet</p>
        <h2 className="text-display text-4xl leading-[1.05] text-balance sm:text-5xl">
          Auktoriserade och certifierade
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-chalk/75">
          Vi är auktoriserade av Måleribranschens Yrkesnämnd (MYN), medlemmar i Måleriföretagen och
          har certifikat för våtrumsmålning. Du får ett arbete som följer branschens regler, utfört
          av yrkesfolk.
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
      </div>
      <div className="lg:col-span-4 lg:col-start-9">
        <figure className="mx-auto max-w-[260px] rounded-panel bg-white p-8 shadow-lift">
          <Image
            src="/MVK.png"
            alt="Måleribranschens Våtrumskontroll (MVK)"
            width={400}
            height={520}
            sizes="200px"
            className="h-auto w-full"
          />
          <figcaption className="mt-4 text-center text-sm text-muted">
            Certifierade för våtrumsmålning
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
);

export default CredentialsBand;
