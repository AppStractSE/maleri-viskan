import Image from 'next/image';
import Link from "next/link";
import { HiMiniHeart } from "react-icons/hi2";
import SocialMediaIcons from "../SocialMediaIcons";
import { footerData } from "./data";

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-b from-cyan-700 to-cyan-950 ">
      <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:pt-16 lg:pb-8 w-full">
        <div className="flex justify-between">
          <div className="grid grid-cols-1 gap-12 md:gap-6 md:grid-cols-2">
            {footerData.map(({ label, links }) => (
              <div key={label}>
                <h2 className="mb-6 text-xl font-semibold uppercase">{label}</h2>
                <ul className="space-y-2">
                  {links.map(({ label, href }) => (
                    <li key={label} className="text-base md:text-lg">
                      <a href={href} className="hover:underline hover:underline-offset-4">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            <Link href="/">
              <Image src="/logo.png" alt="" width={140} height={140} className="rounded" />
            </Link>
            <div className="flex justify-between text-4xl">
              <SocialMediaIcons />
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-white opacity-10 w-full my-6 sm:mx-auto lg:my-8" />
        <a
          href="https://appstract.se/"
          target="_blank"
          className="hover:underline text-sm sm:text-center flex gap-1 items-center text-white"
        >
          Made with{" "}
          <span className="text-red-500 ">
            <HiMiniHeart />
          </span>{" "}
          by Appstract © 2023
        </a>
      </div>
    </footer>
  );
};
export default Footer;
