"use client";
import RotavdragCalculator from "@/components/RotavdragCalculator";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import BigCards from "@/components/cards/BigCards";
import ContactForm from "@/components/forms/ContactForm";
import GenericHeroSection from "@/components/home/hero/GenericHeroSection";
import TextAndImage from "@/components/sections/TextAndImage";
import { services } from "@/data/services";
export default function page() {
  return (
    <>
      <GenericHeroSection
        bg="from-slate-600 to-teal-300"
        title="Tjänster"
        description={`Upptäck omfattande målningstjänster hos Måleri Viskan – din pålitliga lokala målare i Sjuhärad, Mark och Kinna.
          Vi specialiserar oss på att tillhandahålla skräddarsydda målerilösningar för både privatpersoner och företag.\n\nOavsett om det gäller inomhus- eller utomhusmålning sätter vi alltid kunden i fokus.`}
        quoteButton
      />
      <section className="max-w-screen-2xl mx-auto pt-24 md:pt-32 w-full">
        <Breadcrumbs />
      </section>
      <section className="bg-white">
        <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:py-16 w-full">
          <div className="space-y-12 lg:space-y-8">
            {services.map((services, index) => (
              <BigCards
                key={index}
                title={services.name}
                description={services.description}
                image={services.image}
                quoteButton={true}
                readMoreButton={true}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-cyan-700 to-cyan-950 text-white">
        <div className="max-w-screen-2xl grid grid-cols-12 px-4 py-8 mx-auto lg:py-16 w-full">
          <div className="col-span-8">
            <h2 className="text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Vi är Er målarfirma i Sjuhärad, Mark och Kinna
            </h2>
            <p className="max-w-2xl mt-6 font-light md:text-lg lg:text-xl">
              Har du frågor gällande våra tjänster, eller funderar du på att påbörja ett projekt?
              Tveka inte att kontakta oss! Slå oss en signal på{" "}
              <a href="tel:0766444117">
                <span className="text-cyan-400 border-cyan-400 border-b">076-644 41 17</span>
              </a>
              , skicka ett mail till{" "}
              <a href="mailto:info@maleriviskan.se">
                <span className="text-cyan-400 border-cyan-400 border-b">info@maleriviskan.se</span>
              </a>
              , eller fyll i formuläret så återkommer vi så snart vi kan.
            </p>
          </div>
          <div className="col-span-4">
            <p className="max-w-2xl mb-6 md:text-lg lg:text-2xl font-bold">
              Vill du komma i kontakt med oss? Fyll i formuläret!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
      {/* <section className="bg-black text-white">
        <div className="max-w-screen-2xl mx-auto lg:py-16 w-full">
        <h2 className="text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Auktorisering och certifikat
            </h2>
            <p className="max-w-2xl mt-6 mb-12 font-light md:text-lg lg:text-xl">
              Vi är auktoriserade av Måleribranschens Yrkesnämnd (MYN) och innehar F-skattsedel.
              Vi är även medlemmar i Måleriföretagen och innehar certifikat för våtrumsmålning.
            </p>
        <div className="max-w-screen-lg flex justify-center px-4 py-8 mx-auto">
          <div className="px-2">
        <img src="https://s3.eu-west-2.amazonaws.com/byggservice/photos/images/000/008/181/medium/MKV.png?1601034160" />
          </div>
          <div className="px-2">
        <img src="https://s3.eu-west-2.amazonaws.com/byggservice/photos/images/000/008/181/medium/MKV.png?1601034160" />
          </div>
          <div className="px-2">
        <img src="https://s3.eu-west-2.amazonaws.com/byggservice/photos/images/000/008/181/medium/MKV.png?1601034160" />
          </div>
        </div>
        </div>
      </section> */}
      <TextAndImage
        title="Auktorisering och certifikat"
        description="Vi är auktoriserade av Måleribranschens Yrkesnämnd (MYN) och innehar F-skattsedel. Vi är även medlemmar i Måleriföretagen och innehar certifikat för våtrumsmålning."
        image={{
          src: "/MKV.png",
          alt: "Certifikat för Måleribranschens Våtrumskontroll",
          height: 250,
          width: 250,
        }}
        bg="bg-black"
        textColor="text-white"
      />
      <RotavdragCalculator />
    </>
  );
}
