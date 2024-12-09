"use client";
import { services as servicesData } from "@/data/services";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface IContactForm {
  FullName: string;
  Email: string;
  PhoneNumber: string;
  Message: string;
  ServiceName: string;
}

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const services = [...servicesData.map((service) => service.name), "Annat"];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid, isSubmitted },
  } = useForm({
    defaultValues: {
      FullName: "",
      Email: "",
      ServiceName: "",
      PhoneNumber: "",
      Message: "",
    },
    mode: "onTouched",
  });

  function generateEmailHTML(data: IContactForm) {
    const formattedMessage = data.Message.replace(/\n/g, "<br>");
    return `<div><p><strong>Namn:</strong></p><p>${data.FullName}</p><p><strong>Email:</strong></p><p><a href="mailto:${data.Email}">${data.Email}</a></p><p><strong>Telefon:</strong></p><p><a href="tel:${data.PhoneNumber}">${data.PhoneNumber}</a></p><p><strong>Intresserad av tjänst:</strong></p><p>${data.ServiceName}</p><p><strong>Meddelande:</strong></p><p>${formattedMessage}</p></div>`;
  }

  const onSubmit = async (data: IContactForm) => {
    const formData = {
      name: data.FullName,
      email: data.Email,
      subject: `Kontaktformulär: ${data.ServiceName} - ${data.FullName}`,
      message: data.Message,
      messageHtml: generateEmailHTML(data),
    };

    toast
      .promise(
        fetch("/api/contact-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }),
        {
          loading: "Skickar meddelande...",
          success: "Meddelande skickat! Vi återkommer så snart vi kan.",
          error: "Något gick fel med att skicka meddelandet. Försök igen.",
        },
        {
          style: {
            minWidth: "250px",
          },
          position: "bottom-center",
          className: "!bg-night-500 !text-vanilla-powder-500",
          success: {
            duration: 8000,
            icon: "🎉",
          },
        }
      )
      .catch((error) => {
        console.log(error.message);
      })
      .then(() => {
        setSubmitted(true);
        setTimeout(() => {
          reset();
        }, 250);
      });
  };

  const baseClasses =
    "block w-full text-black rounded-md bg-white outline outline-1 outline-gray-500 p-2.5 text-base placeholder-gray-500 focus:outline focus:outline-sky-500 ";
  const errorClass =
    " !outline !outline-1 !outline-offset-0 !outline-red-700 !placeholder:text-red-500 ";
  const errorTextBaseClass =
    " !text-red-500 text-xs tracking-widest transition-all duration-500 ease-in-out ";
  const errorTextHiddenClasses = " opacity-0 max-h-0 ";
  const errorTextVisibleClasses = " pb-2 mt-1 opacity-100 max-h-full ";

  return (
    <div className="relative mt-4">
      <form onSubmit={handleSubmit(onSubmit)} name="contact-form">
        <input type="hidden" name="required-field" value="contact-form" />
        <div className="mb-3 w-full">
          <input
            className={baseClasses.concat(" ").concat(errors["FullName"] ? errorClass : "")}
            type="text"
            placeholder="För- och efternamn *"
            {...register("FullName", {
              required: "Fullständigt namn krävs",
              minLength: {
                value: 2,
                message: "Namnet måste vara minst 2 tecken",
              },
              maxLength: {
                value: 50,
                message: "Namnet får vara högst 50 tecken",
              },
            })}
          />
          <p
            role="alert"
            className={errorTextBaseClass
              .concat(" ")
              .concat(errors["FullName"] ? errorTextVisibleClasses : errorTextHiddenClasses)}
          >
            {errors.FullName?.message}
          </p>
        </div>
        <div className="flex gap-3">
          <div className="mb-3 w-full">
            <input
              className={baseClasses.concat(" ").concat(errors["Email"] ? errorClass : "")}
              type="email"
              placeholder="Email *"
              {...register("Email", {
                required: "E-post krävs",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Ogiltig e-postadress",
                },
              })}
            />
            <p
              role="alert"
              className={errorTextBaseClass
                .concat(" ")
                .concat(errors["Email"] ? errorTextVisibleClasses : errorTextHiddenClasses)}
            >
              {errors.Email?.message}
            </p>
          </div>
          <div className="w-full">
            <input
              className={baseClasses.concat(" ").concat(errors["PhoneNumber"] ? errorClass : "")}
              type="tel"
              placeholder="Telefonnummer *"
              {...register("PhoneNumber", {
                onChange: (e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                },
                required: "Telefonnummer krävs",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Ange ett nummer",
                },
                minLength: {
                  value: 10,
                  message: "Telefonnumret måste vara minst 10 tecken",
                },
                maxLength: {
                  value: 15,
                  message: "Telefonnumret får vara högst 15 tecken",
                },
              })}
            />
            <p
              role="alert"
              className={errorTextBaseClass
                .concat(" ")
                .concat(errors["PhoneNumber"] ? errorTextVisibleClasses : errorTextHiddenClasses)}
            >
              {errors.PhoneNumber?.message}
            </p>
          </div>
        </div>
        <div className="mb-3 w-full">
          <select
            className={baseClasses.concat(" ").concat(errors["ServiceName"] ? errorClass : "")}
            {...register("ServiceName", {
              required: "Välj den tjänst du är intresserad av",
            })}
            value={selectedService ?? ""}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="" disabled className="text-black/50">
              Vilken tjänst är du intresserad av? *
            </option>
            {services.map((service) => (
              <option key={service} value={service} className="text-black">
                {service}
              </option>
            ))}
          </select>
          <p
            role="alert"
            className={errorTextBaseClass
              .concat(" ")
              .concat(errors["ServiceName"] ? errorTextVisibleClasses : errorTextHiddenClasses)}
          >
            {errors.ServiceName?.message}
          </p>
        </div>
        <div className="mb-3">
          <textarea
            maxLength={500}
            placeholder="Meddelande *"
            className={"contactform min-h-[150px] resize-none transition-all duration-200 ease-in-out focus-visible:min-h-[200px]"
              .concat(" ")
              .concat(baseClasses)
              .concat(" ")
              .concat(errors["Message"] ? errorClass : "")}
            {...register("Message", {
              required: "Meddelande krävs",
              minLength: {
                value: 10,
                message: "Meddelandet måste vara minst 10 tecken",
              },
              maxLength: {
                value: 500,
                message: "Meddelandet får vara högst 500 tecken",
              },
            })}
          ></textarea>
          <p
            role="alert"
            className={errorTextBaseClass
              .concat(" ")
              .concat(errors["Message"] ? errorTextVisibleClasses : errorTextHiddenClasses)}
          >
            {errors.Message?.message}
          </p>
        </div>
        <button
          disabled={isSubmitting || submitted}
          type="submit"
          className="block w-full rounded-md bg-blue-600 p-4 text-base text-white hover:bg-blue-500"
        >
          Skicka
        </button>
      </form>

      <div
        className={"absolute inset-0 left-0 top-0 -m-2 overflow-hidden rounded backdrop-blur-sm transition-all delay-75 duration-500 ease-in-out lg:backdrop-blur-sm"
          .concat(" ")
          .concat(submitted ? "visible opacity-100" : "invisible opacity-0")}
      >
        <div
          className={"flex h-full transform flex-col items-center justify-center space-y-4 bg-white/50 transition-all duration-500 ease-in-out"
            .concat(" ")
            .concat(submitted ? "translate-y-0" : "translate-y-[125%]")}
        >
          <h6 className="text-black text-3xl lg:text-center lg:text-2xl">Tack för ditt meddelande!</h6>
          <p className="text-black text-balance whitespace-pre-line text-xl lg:text-center lg:text-xl">
            Vi kommer att kontakta dig inom kort.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setTimeout(() => {
                reset();
              }, 250);
            }}
            className="block w-fit place-self-center rounded-lg bg-blue-500 px-6 py-2.5 text-white hover:bg-blue-400"
          >
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
