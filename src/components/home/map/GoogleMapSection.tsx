import { FaPhone } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import ContactForm from "../../forms/ContactForm";

interface Props {
  showForm?: boolean;
}

const GoogleMapSection = ({ showForm }: Props) => {
  return (
    <section className="body-font relative min-h-[450px] text-gray-600">
      <div className="absolute inset-0 overflow-hidden bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          style={{ filter: "grayscale(1) contrast(1.1) opacity(.8)" }}
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=sv&amp;q=Kinna+Måleri%20Viskan&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      {showForm ? (
        <>
          <div className=" mx-auto flex max-w-screen-2xl px-5 py-24">
            <div
              style={{ backdropFilter: "blur(2px)" }}
              className="relative mt-10 flex w-full flex-col rounded-sm bg-white bg-opacity-10 p-8 shadow-lg md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3"
            >
              <h1 className="mb-4 max-w-4xl whitespace-pre-line text-4xl font-bold leading-none tracking-tight text-cyan-700 md:text-5xl xl:text-6xl">
                Här finns vi!
              </h1>
              <p className="mb-5 leading-relaxed text-cyan-700">
                Vill du komma i kontakt med oss? Fyll i formuläret så återkommer vi till dig så
                snart vi kan.
              </p>
              <div className="mb-4 space-y-2 text-sm text-cyan-700 md:text-base">
                <div className="flex items-center gap-2 hover:text-cyan-600">
                  <FaPhone />
                  <a href="tel:+46730309666" className="hover:underline hover:underline-offset-4">
                    073-030 96 66
                  </a>
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-600">
                  <LuMail />
                  <a
                    href="mailto:info@maleriviskan.se"
                    className="hover:underline hover:underline-offset-4"
                  >
                    info@maleriviskan.se
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default GoogleMapSection;
