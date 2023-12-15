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
          showModal ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed bg-black bg-opacity-50 inset-0 transition-all duration-500 z-50`}
      ></div>
      <div
        className={`${
          showModal ? "absolute" : "hidden"
        } h-screen inset-0 justify-center flex items-center transition-all delay-1000 duration-500`}
      >
        <div className="w-full max-w-md max-h-full fixed z-50 transition-all delay-1000 duration-500">
          <div className="p-4 bg-gradient-to-br from-cyan-700 to-cyan-900 rounded-lg shadow relative z-50 transition-all delay-1000 duration-500">
            <div className="flex justify-between mb-8 ">
              <h3 className="text-4xl font-semibold text-gray-900 dark:text-white">
                Kontakta oss för rådgivning eller offert
              </h3>
              <button
                type="button"
                onClick={() => setShowModal(!showModal)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteModal;
