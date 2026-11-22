import { Arrow, ButtonLink } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sidan finns inte",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[70vh] flex-col items-start justify-center pt-32 pb-20">
      <p className="eyebrow mb-5">404</p>
      <h1 className="text-display max-w-2xl text-4xl leading-[1.05] text-balance sm:text-5xl">
        Sidan finns inte, men väggarna står kvar
      </h1>
      <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
        Länken kan vara gammal eller felstavad. Gå tillbaka till startsidan eller se våra tjänster.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/" size="lg">
          Till startsidan
        </ButtonLink>
        <ButtonLink href="/tjanster" variant="secondary" size="lg">
          Våra tjänster <Arrow />
        </ButtonLink>
      </div>
    </section>
  );
}
