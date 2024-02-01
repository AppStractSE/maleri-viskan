import { FaPhone } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import ContactForm from "../forms/ContactForm";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const QuoteModal = ({ showModal, setShowModal }: Props) => {
  return (
    <>
      <div
        onClick={() => setShowModal(!showModal)}
        className={`${
          showModal ? "visible opacity-100" : "invisible opacity-0"
        } fixed inset-0 z-50 bg-black bg-opacity-50 transition-all duration-500`}
      />
      <div
        className={`${
          showModal ? "absolute" : "hidden"
        } inset-0 flex h-screen items-center justify-center transition-all delay-1000 duration-500`}
      >
        <div className="fixed z-50 max-h-full w-full max-w-md overflow-auto p-2 transition-all delay-1000 duration-500 md:p-0">
          <div className="relative z-50 rounded-lg bg-gradient-to-br from-cyan-700 to-cyan-900 p-6 shadow transition-all delay-1000 duration-500">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Kontakta oss för rådgivning eller offert
              </h3>
              <div
                onClick={() => setShowModal(!showModal)}
                className="-mr-4 cursor-pointer p-2 text-3xl text-white hover:text-cyan-300"
                data-modal-hide="default-modal"
              >
                <IoMdClose />
                <span className="sr-only">Close modal</span>
              </div>
            </div>
            <div className="mb-4 space-y-2 text-sm text-white md:text-base">
              <div className="flex items-center gap-2 hover:text-cyan-300">
                <FaPhone />
                <a href="tel:+46730309666" className="hover:underline hover:underline-offset-4">
                  073-030 96 66
                </a>
              </div>
              <div className="flex items-center gap-2 hover:text-cyan-300">
                <LuMail />
                <a
                  href="mailto:info@maleriviskan.se"
                  className="hover:underline hover:underline-offset-4"
                >
                  info@maleriviskan.se
                </a>
              </div>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Fyll i formuläret så kontaktar vi dig så snart vi kan!
            </h4>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteModal;
