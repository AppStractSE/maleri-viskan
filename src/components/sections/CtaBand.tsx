import { site } from "@/data/site";
import QuoteButton from "../quote/QuoteButton";
import { buttonClasses } from "../ui/Button";

interface Props {
  title?: string;
  text?: string;
  service?: string;
}

/** Closing call to action used at the bottom of subpages. */
const CtaBand = ({
  title = "Redo att sätta igång?",
  text = "Berätta om ditt projekt så återkommer vi med en kostnadsfri offert.",
  service,
}: Props) => (
  <section className="container-site pb-20 lg:pb-28">
    <div className="relative overflow-hidden rounded-panel bg-deep px-8 py-14 text-chalk sm:px-14 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,rgb(11_180_230/0.28),transparent_55%)]"
      />
      <div className="relative max-w-2xl">
        <h2 className="text-display text-4xl leading-[1.05] text-balance sm:text-5xl">{title}</h2>
        <p className="mt-4 text-lg text-chalk/75">{text}</p>
      </div>
      <div className="relative mt-9 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
        <QuoteButton variant="light" size="lg" service={service}>
          Begär offert
        </QuoteButton>
        <a href={site.phoneHref} className={buttonClasses({ variant: "outlineLight", size: "lg" })}>
          Ring {site.phone}
        </a>
      </div>
    </div>
  </section>
);

export default CtaBand;
