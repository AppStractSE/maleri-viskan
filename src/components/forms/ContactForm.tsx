import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { data as servicesData } from "../services/data";

const ContactForm = () => {
  const [chosenService, setChosenService] = useState("Vilken tjänst är du intresserad av?");
  const [showDropdown, setShowDropdown] = useState(false);

  const services = [
    "Vilken tjänst är du intresserad av?",
    ...servicesData.map((service) => service.name),
  ];

  return (
    <form action="#" className="space-y-4">
      <input
        type="text"
        id="name"
        className="bg-white text-black placeholder-gray-500 text-sm rounded-lg block w-full p-4 shadow-lg outline-2 focus:outline focus:outline-cyan-600"
        placeholder="För- och efternamn *"
        required
      />
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-white text-gray-500 placeholder-gray-500 text-sm rounded-lg w-full p-4 shadow-lg outline-2 focus:outline focus:outline-cyan-600 flex items-center gap-2"
          type="button"
        >
          {chosenService}
          <FaChevronDown />
        </button>
        <div
          className={`z-10 ${
            showDropdown ? "block" : "hidden"
          } absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-xl left-[50%] -translate-x-2/4 w-[20rem] `}
        >
          <ul
            className="text-sm mx-auto justify-center flex-col flex px-2.5 py-2"
            aria-labelledby="dropdownDefaultButton"
          >
            {services.map((service) => (
              <li key={service}>
                <button
                  className="block w-full py-2 px-2.5 rounded-lg text-sm text-black hover:bg-gray-300"
                  type="button"
                  onClick={() => {
                    setChosenService(service);
                    setShowDropdown(false);
                  }}
                >
                  {service}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-4">
        <input
          type="email"
          id="email"
          className="bg-white text-black placeholder-gray-500 text-sm rounded-lg block w-full p-4 shadow-lg outline-2 focus:outline focus:outline-cyan-600"
          placeholder="Email *"
          required
        />
        <input
          type="tel"
          id="tel"
          className="bg-white text-black placeholder-gray-500 text-sm rounded-lg block w-full p-4 shadow-lg outline-2 focus:outline focus:outline-cyan-600"
          placeholder="Telefonnummer"
        />
      </div>
      <textarea
        id="message"
        className="bg-white text-black placeholder-gray-500 text-sm rounded-lg block w-full p-4 shadow-lg min-h-[150px] resize-none outline-2 focus:outline focus:outline-cyan-600"
        placeholder="Meddelande *"
      />
      <button
        type="submit"
        className="bg-transparent w-full relative inline-flex items-center justify-center
              overflow-hidden text-sm text-white rounded-lg group bg-gradient-to-br
              from-cyan-500 to-blue-800 hover:from-black hover:to-black outline-0 shadow-lg duration-200 transition-all"
      >
        <span className="w-full relative p-4 transition-all ease-in duration-200">Skicka</span>
      </button>
    </form>
  );
};

export default ContactForm;
