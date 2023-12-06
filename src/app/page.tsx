"use client";
import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import GoogleMap from "@/components/map/GoogleMap";
import QuoteModal from "@/components/modal/QuoteModal";
import RootDeduction from "@/components/root-deduction/RootDeduction";
import Services from "@/components/services/Services";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <main className="">
        <Hero />
        <section className="bg-white text-black">
          <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 w-full">
            <div className="grid lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                  Tjänster
                </h1>
                <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
                  Välkommen till Måleri Viskan! Din lokala målare i Sjuhärad, Mark och Kinna. Vi
                  erbjuder alla typer av måleritjänster för både privatpersoner och företag, både
                  inomhus och utomhus. Kunden är alltid i fokus och vi lämnar alltid 5 års garanti
                  på våra arbeten.
                </p>
              </div>
            </div>
            <Services />
          </div>
        </section>
        <section className="bg-black text-white bg-gradient-to-br from-fuchsia-700 to-cyan-800">
          <RootDeduction />
        </section>
        <section className="bg-gradient-to-br from-gray-100 to-gray-400 bg-fixed">
          <About />
        </section>
        <section className="text-gray-600 body-font relative">
          <GoogleMap />
        </section>
      </main>
      {showModal ? <QuoteModal showModal={showModal} setShowModal={setShowModal} /> : undefined}
    </>
  );
}
