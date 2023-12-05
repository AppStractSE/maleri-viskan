import Image from 'next/image';
import { HiMiniHeart } from 'react-icons/hi2';
import { data as footerData } from './data';

const Footer = () => {
  return (
    <footer className="p-4 py-12 md:px-16 md:pt-24 md:pb-12 bg-gradient-to-b from-cyan-700 to-cyan-950 ">
      <div className="gap-10 md:flex">
        <div>
          <a href="/">
            <Image src="/logo.png" alt="" width={140} height={140} className="rounded" />
          </a>
        </div>

        <div className="flex md:justify-center flex-1 mt-10 md:mt-0">
          <div className="grid grid-cols-3 gap-8 sm:gap-6">
            {footerData.map(({ label, links }) => (
              <div key={label}>
                <h2 className="mb-6 text-sm font-semibold uppercase">{label}</h2>
                <ul className="space-y-2">
                  {links.map(({ label, href, locality }) => (
                    <li key={label} className="mb-4 text-xs md:text-sm">
                      <a href={href} className="hover:underline">
                        {label}
                      </a>
                      <p>{locality}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-white opacity-10 w-full my-6 sm:mx-auto lg:my-8" />
      <a
        href="https://appstract.se/"
        target="_blank"
        className="hover:underline text-sm sm:text-center flex gap-1 items-center"
      >
        Made with{' '}
        <span className="text-red-500 ">
          <HiMiniHeart />
        </span>{' '}
        by Appstract © 2023
      </a>
    </footer>
  );
};
export default Footer;
