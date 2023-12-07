"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import QuoteModal from "../../modal/QuoteModal";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section
        className="bg-white text-white h-screen flex justify-center relative"
        style={{
          backgroundImage: `url("https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "50% 100%",
        }}
      >
        <div className="absolute bg-black opacity-50 inset-0" />
        <div className="relative grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 w-full">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl [text-shadow:1px_1px_4px_var(--tw-shadow-color)] shadow-black">
              Målare i Kinna och Marks kommun
            </h1>
            <p className="max-w-2xl mb-6 lg:my-10 md:text-lg lg:text-xl whitespace-pre-line">
              Välkommen till Måleri Viskan – din pålitliga målare i Sjuhärad, Mark och Kinna.
              {"\n"}
              Vi är experter på måleritjänster för både privatpersoner och företag, både inomhus och
              utomhus.{"\n"}
              {"\n"}Med över 10 års erfarenhet är vi specialiserade på att förnya fasader och tak
              genom målning och renovering. Våra tjänster inkluderar tapetsering, spackling,
              fasadmålning, takmålning samt målning av kök och badrum.{"\n"}
              {"\n"}Lita på oss för att förvandla ditt hem eller företag med professionella och
              pålitliga måleritjänster. Kontakta oss för att få en offert kostnadsfritt!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/kontakt"
                className="px-6 py-3 rounded-lg border flex items-center gap-2 hover:bg-white hover:text-black duration-200 transition-all"
              >
                Läs om våra tjänster
                <FaArrowRightLong />
              </Link>
              <button
                onClick={() => setShowModal(!showModal)}
                className="px-6 py-3 rounded-lg bg-black text-white hover:invert duration-200 transition-all"
              >
                Kostnadsfri offert
              </button>
            </div>
          </div>
        </div>
      </section>
      {showModal ? <QuoteModal showModal={showModal} setShowModal={setShowModal} /> : undefined}
    </>
  );
};

export default HeroSection;
