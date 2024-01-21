import SocialMediaIcons from "../SocialMediaIcons";
import ContactForm from "../forms/ContactForm";

interface Props {
  bg?: string;
  invertArrow?: boolean;
  linkColors?: string;
}

const ContactSection = ({ bg, invertArrow = true, linkColors }: Props) => {
  return (
    <section className={`bg-gradient-to-b ${bg ? bg : "from-cyan-700 to-cyan-950 text-white"}`}>
      <div className="max-w-screen-2xl grid grid-cols-12 px-4 py-8 mx-auto w-full md:gap-8">
        <div className="col-span-12 lg:col-span-8 relative">
          <h2 className="text-4xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl md:max-w-xl">
            Vi är Er målarfirma i Kinna, Skene och Marks kommun
          </h2>
          <p className="max-w-2xl mt-6 font-medium md:text-lg lg:text-xl">
            Har du frågor gällande våra tjänster, eller funderar du på att påbörja ett projekt?
            Tveka inte att kontakta oss! Slå oss en signal på{" "}
            <a href="tel:+46730309666">
              <span className={`border-b ${linkColors ? linkColors : "text-cyan-400 border-cyan-400"}`}>073-030 96 66</span>
            </a>
            , skicka ett mail till{" "}
            <a href="mailto:info@maleriviskan.se">
              <span className={`border-b ${linkColors ? linkColors : "text-cyan-400 border-cyan-400"}`}>info@maleriviskan.se</span>
            </a>
            , eller fyll i formuläret så återkommer vi så snart vi kan.
          </p>
          <img
            src="/arrow_1.png"
            className={`hidden lg:block absolute rotate-45 top-28 right-10 ${
              invertArrow ? "invert" : ""
            }`}
            draggable={false}
            width={400}
          />
        </div>
        <div className="col-span-12 lg:col-span-4 max-w-md mx-auto mt-8 md:mt-0 md:ml-auto">
          <p className="max-w-2xl mb-4 md:mb-6 text-lg lg:text-2xl font-bold">
            Fyll i formuläret så kontaktar vi dig så snart vi kan!
          </p>
          <ContactForm />
        </div>
        <div className="col-span-12">
          <p className="mt-6 mb-4 font-medium md:text-lg lg:text-xl text-center lg:text-left">
            Det går även bra att nå oss på sociala medier!
          </p>
          <div className="text-4xl flex items-center gap-4 justify-center lg:justify-start">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
