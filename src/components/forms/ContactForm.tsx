"use client";
import { services as servicesData } from "@/data/services";
import { encode } from "querystring";
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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch("/forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData as any).toString(),
    })
      .then(() => alert("Thank you for your submission"))
      .catch((error) => alert(error));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-4"
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
          className="block w-full rounded-lg bg-white p-4 text-xs text-black placeholder-gray-500 shadow-lg outline-2 focus:outline focus:outline-cyan-600 md:text-sm"
          placeholder="För- och efternamn *"
          required
          name="name"
        />
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex w-full items-center justify-between gap-2 rounded-lg bg-white p-4 text-xs text-gray-500 placeholder-gray-500 shadow-lg outline-2 focus:outline focus:outline-cyan-600 md:text-sm"
            type="button"
          >
            {chosenService}
            <FaChevronDown />
          </button>
          <div
            className={`z-10 ${
              showDropdown ? "block" : "hidden"
            } absolute mt-2 w-full divide-y divide-gray-100 rounded-lg bg-white shadow-xl`}
          >
            <ul
              className="mx-auto flex flex-col px-2.5 py-2 text-xs md:text-sm"
              aria-labelledby="dropdownDefaultButton"
            >
              {services.map((service) => (
                <li key={service}>
                  <button
                    className="block w-full rounded-lg px-2.5 py-2 text-left text-xs text-black hover:bg-gray-300 md:text-sm"
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
        <input type="text" id="service" name="service" defaultValue={chosenService} hidden />
        <div className="flex gap-2 md:gap-4">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-lg bg-white p-4 text-xs text-black placeholder-gray-500 shadow-lg outline-2 focus:outline focus:outline-cyan-600 md:text-sm"
            placeholder="Email *"
            required
          />
          <input
            type="tel"
            name="tel"
            id="tel"
            className="block w-full rounded-lg bg-white p-4 text-xs text-black placeholder-gray-500 shadow-lg outline-2 focus:outline focus:outline-cyan-600 md:text-sm"
            placeholder="Telefonnummer"
          />
        </div>
        <textarea
          id="message"
          name="message"
          className="block min-h-[150px] w-full resize-none rounded-lg bg-white p-4 text-xs text-black placeholder-gray-500 shadow-lg outline-2 focus:outline focus:outline-cyan-600 md:text-sm"
          placeholder="Meddelande *"
        />
        <button
          type="submit"
          className="group relative inline-flex w-full items-center justify-center
        overflow-hidden rounded-lg bg-transparent bg-gradient-to-br from-cyan-500 to-blue-800 text-xs
        text-white shadow-lg outline-0 transition-all duration-200 hover:from-black hover:to-black md:text-sm"
        >
          <span className="relative w-full p-4 transition-all duration-200 ease-in">Skicka</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
