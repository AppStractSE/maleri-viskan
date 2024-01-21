"use client";
import { services as servicesData } from "@/data/services";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const ContactForm = () => {
  const [chosenService, setChosenService] = useState("Vilken tjänst är du intresserad av?");
  const [showDropdown, setShowDropdown] = useState(false);

  const services = [
    "Vilken tjänst är du intresserad av?",
    ...servicesData.map((service) => service.name),
    "Annat",
  ];

  return (
    <div>
      <form
        action="#"
        className="space-y-4 w-full"
        name="contact-form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input
          type="text"
          id="name"
          className="bg-white text-black placeholder-gray-500 text-xs md:text-sm rounded-lg block w-full p-4 shadow-lg outline-2 focus:outline focus:outline-cyan-600"
          placeholder="För- och efternamn *"
          required
          name="name"
        />
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-white text-gray-500 placeholder-gray-500 text-xs md:text-sm rounded-lg w-full p-4 shadow-lg outline-2 focus:outline focus:outline-cyan-600 flex justify-between items-center gap-2"
            type="button"
          >
            {chosenService}
            <FaChevronDown />
          </button>
          <div
            className={`z-10 ${
              showDropdown ? "block" : "hidden"
            } absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-full`}
          >
            <ul
              className="text-xs md:text-sm mx-auto flex-col flex px-2.5 py-2"
              aria-labelledby="dropdownDefaultButton"
            >
              {services.map((service) => (
                <li key={service}>
                  <button
                    className="block w-full text-left py-2 px-2.5 rounded-lg text-xs md:text-sm text-black hover:bg-gray-300"
                    type="button"
                    name="service"
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
        <div className="flex gap-2 md:gap-4">
          <input
            type="email"
            name="email"
            id="email"
            className="bg-white text-black placeholder-gray-500 text-xs md:text-sm rounded-lg block w-full p-4 shadow-lg outline-2 focus:outline focus:outline-cyan-600"
            placeholder="Email *"
            required
          />
          <input
            type="tel"
            name="tel"
            id="tel"
            className="bg-white text-black placeholder-gray-500 text-xs md:text-sm rounded-lg block w-full p-4 shadow-lg outline-2 focus:outline focus:outline-cyan-600"
            placeholder="Telefonnummer"
          />
        </div>
        <textarea
          id="message"
          name="message"
          className="bg-white text-black placeholder-gray-500 text-xs md:text-sm rounded-lg block w-full p-4 shadow-lg min-h-[150px] resize-none outline-2 focus:outline focus:outline-cyan-600"
          placeholder="Meddelande *"
        />
        <button
          type="submit"
          className="bg-transparent w-full relative inline-flex items-center justify-center
        overflow-hidden text-xs md:text-sm text-white rounded-lg group bg-gradient-to-br
        from-cyan-500 to-blue-800 hover:from-black hover:to-black outline-0 shadow-lg duration-200 transition-all"
        >
          <span className="w-full relative p-4 transition-all ease-in duration-200">Skicka</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
