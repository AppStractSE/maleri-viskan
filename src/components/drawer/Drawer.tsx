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
      className={`fixed inset-0 z-10 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out
        ${
          showDrawer
            ? "translate-x-0 opacity-100 transition-opacity duration-500"
            : "translate-x-full opacity-0 transition-all delay-500"
        }`}
    >
      <div
        className={`delay-400 absolute right-0 h-full w-screen max-w-sm transform bg-white text-black shadow-xl transition-all duration-500 ease-in-out
          ${showDrawer ? "translate-x-0" : " translate-x-full"}`}
      >
        <div className="relative flex h-full w-screen max-w-sm flex-col space-y-6 overflow-y-scroll pb-10">
          <div className="flex">
            <div className="mr-auto p-4 text-lg font-bold">
              <Image src="/logo.png" alt="" width={80} height={80} />
            </div>
            <button
              onClick={() => setShowDrawer(!showDrawer)}
              className="m-2 text-3xl hover:text-cyan-500"
            >
              <IoMdClose />
            </button>
          </div>
          {children}
        </div>
      </div>
      <div
        className="h-full w-screen"
        onClick={() => {
          setShowDrawer(!showDrawer);
        }}
      />
    </div>
  );
}
