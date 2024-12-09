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
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-12 px-4 py-8 md:gap-8 lg:py-16">
        <div className="relative col-span-12 lg:col-span-8">
          <h2 className="text-4xl font-bold leading-none tracking-tight md:max-w-xl md:text-4xl xl:text-5xl">
            Vi är Er målarfirma i Kinna, Skene och Marks kommun
          </h2>
          <p className="mt-6 max-w-2xl font-medium md:text-lg lg:text-xl">
            Har du frågor gällande våra tjänster, eller funderar du på att påbörja ett projekt?
            Tveka inte att kontakta oss! Slå oss en signal på{" "}
            <a href="tel:+46730309666">
              <span
                className={`border-b ${linkColors ? linkColors : "border-cyan-400 text-cyan-400"}`}
              >
                073-030 96 66
              </span>
            </a>
            , skicka ett mail till{" "}
            <a href="mailto:info@maleriviskan.se">
              <span
                className={`border-b ${linkColors ? linkColors : "border-cyan-400 text-cyan-400"}`}
              >
                info@maleriviskan.se
              </span>
            </a>
            , eller fyll i formuläret så återkommer vi så snart vi kan.
          </p>
          <img
            src="/arrow_1.png"
            className={`absolute right-10 top-28 hidden rotate-45 lg:block ${
              invertArrow ? "invert" : ""
            }`}
            draggable={false}
            width={400}
          />
        </div>
        <div className="col-span-12 mx-auto mt-8 max-w-md md:ml-auto md:mt-0 lg:col-span-4 border bg-white shadow p-4 rounded-xl">
          <p className="mb-4 max-w-2xl text-lg font-bold md:mb-6 lg:text-2xl text-black">
            Fyll i formuläret så kontaktar vi dig så snart vi kan!
          </p>
          <ContactForm />
        </div>
        <div className="col-span-12">
          <p className="mb-4 mt-6 text-center font-medium md:text-lg lg:text-left lg:text-xl">
            Det går även bra att nå oss på sociala medier!
          </p>
          <div className="flex items-center justify-center gap-4 text-4xl lg:justify-start">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
