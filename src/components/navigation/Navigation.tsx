"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";
import QuoteModal from "../modal/QuoteModal";
import { data as navItems } from "./data";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="fixed z-10 top-0 md:top-4 w-full px-0 md:px-2 xl:px-4">
        <div
          style={{ backdropFilter: "blur(6px)" }}
          className="bg-cyan-800 flex items-center justify-between rounded-sm pl-4 pr-0 py-2 md:px-4 bg-opacity-60"
        >
          <div className="flex items-center">
            <Link href={"/"}>
              <Image src="/logo.png" alt="" width={80} height={80} className="mr-12 rounded" />
            </Link>
            <nav className="hidden sm:flex gap-4 items-center py-2 font-bold">
              {navItems.map((navItem) => (
                <div
                  className={`${navItem.dropdownItems ? "group relative" : ""}`}
                  key={navItem.label}
                >
                  {navItem.dropdownItems ? (
                    <button className="text-lg hover:bg-white focus-within:bg-white focus-within:bg-opacity-20 hover:bg-opacity-20 px-4 py-2 rounded flex items-center gap-2">
                      {navItem.label}{" "}
                      <span className="text-xs">
                        <HiChevronDown />
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={navItem.href}
                      className="text-lg hover:bg-white focus-within:bg-white focus-within:bg-opacity-20 hover:bg-opacity-20 px-4 py-2 rounded"
                    >
                      {navItem.label}
                    </Link>
                  )}
                  <div
                    style={{ backdropFilter: "blur(6px)" }}
                    className="absolute p-2 top-12 flex-col bg-cyan-800 bg-opacity-60 rounded flex w-max left-[50%] -translate-x-2/4 opacity-0 invisible group-hover:visible group-focus-within:visible group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500"
                  >
                    {navItem.dropdownItems &&
                      navItem.dropdownItems.map((dropdownItem) => (
                        <Link
                          href={dropdownItem.href}
                          key={dropdownItem.label}
                          className=" text-lg hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
          <button
            onClick={() => setShowModal(!showModal)}
            className="hidden sm:block text-xs px-6 py-3 mr-4 md:mr-0 rounded-sm bg-black text-white hover:invert duration-200 transition-all"
          >
            Få offert
          </button>
          <button className="block sm:hidden text-3xl hover:bg-white focus-within:bg-white focus-within:bg-opacity-20 hover:bg-opacity-20 p-2 m-2 rounded">
            <LuMenu />
          </button>
        </div>
      </header>
      {showModal ? <QuoteModal showModal={showModal} setShowModal={setShowModal} /> : undefined}
    </>
  );
};

export default Navigation;
