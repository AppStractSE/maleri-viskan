import ContactForm from "../../forms/ContactForm";

const GoogleMapSection = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300 overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          style={{ filter: "grayscale(1) contrast(1.1) opacity(.8)" }}
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=sv&amp;q=Kinna+Måleri%20Viskan&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className=" max-w-screen-2xl px-5 py-24 mx-auto flex">
        <div
          style={{ backdropFilter: "blur(6px)" }}
          className="lg:w-1/3 md:w-1/2 bg-cyan-950 bg-opacity-10 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative shadow-md"
        >
          <h1 className="max-w-4xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl whitespace-pre-line">
            Här finns vi!
          </h1>
          <p className="leading-relaxed mb-5 text-gray-700">
            Vill du komma i kontakt med oss? Fyll i formuläret så återkommer vi till dig så snart vi
            kan.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default GoogleMapSection;
