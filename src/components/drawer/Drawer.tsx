import Image from "next/image";
import { IoMdClose } from "react-icons/io";
interface Props {
  children: React.ReactNode;
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Drawer({ children, showDrawer, setShowDrawer }: Props) {
  return (
    <div
      className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out
        ${
          showDrawer
            ? "transition-opacity opacity-100 duration-500 translate-x-0"
            : "transition-all delay-500 opacity-0 translate-x-full"
        }`}
    >
      <div
        className={`w-screen max-w-sm right-0 absolute bg-white text-black h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform
          ${showDrawer ? "translate-x-0" : " translate-x-full"}`}
      >
        <div className="relative w-screen max-w-sm pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="flex">
            <div className="p-4 font-bold text-lg mr-auto">
              <Image src="/logo.png" alt="" width={80} height={80} />
            </div>
            <button
              onClick={() => setShowDrawer(!showDrawer)}
              className="text-3xl hover:text-cyan-500 m-2"
            >
              <IoMdClose />
            </button>
          </div>
          {children}
        </div>
      </div>
      <div
        className="w-screen h-full"
        onClick={() => {
          setShowDrawer(!showDrawer);
        }}
      />
    </div>
  );
}
