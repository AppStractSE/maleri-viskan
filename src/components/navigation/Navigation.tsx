"use client";

import { navigation } from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";
import MobileMenuDrawer from "../drawer/MobileMenuDrawer";
import QuoteModal from "../modal/QuoteModal";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <header className="fixed top-0 z-10 w-full px-0 text-white md:top-4 md:px-2 xl:px-4">
        <div
          style={{ backdropFilter: "blur(6px)" }}
          className="flex items-center justify-between bg-cyan-800 bg-opacity-60 px-4 md:rounded-sm md:px-4 md:py-2"
        >
          <div className="flex items-center">
            <Link href={"/"}>
              <Image src="/logo.png" alt="" width={80} height={80} className="mr-12 rounded" />
            </Link>
            <nav className="hidden items-center gap-4 py-2 font-bold sm:flex">
              {navigation.map((navItem) => (
                <div
                  className={`${navItem.dropdownItems ? "group relative" : ""}`}
                  key={navItem.label}
                >
                  {navItem.dropdownItems ? (
                    <button className="flex items-center gap-2 rounded px-4 py-2 text-xs focus-within:bg-white focus-within:bg-opacity-20 hover:bg-white hover:bg-opacity-20 md:text-sm lg:text-lg">
                      {navItem.label}{" "}
                      <span className="text-xs">
                        <HiChevronDown />
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={navItem.href}
                      className="rounded px-4 py-2 text-xs focus-within:bg-white focus-within:bg-opacity-20 hover:bg-white hover:bg-opacity-20 md:text-sm lg:text-lg"
                    >
                      {navItem.label}
                    </Link>
                  )}
                  <div
                    style={{ backdropFilter: "blur(6px)" }}
                    className="invisible absolute left-[50%] top-12 flex w-max -translate-x-2/4 flex-col rounded bg-cyan-800 bg-opacity-60 p-2 opacity-0 transition-all duration-500 group-focus-within:invisible group-focus-within:opacity-0 group-hover:visible group-hover:opacity-100"
                  >
                    {navItem.dropdownItems &&
                      navItem.dropdownItems.map((dropdownItem) => (
                        <Link
                          href={dropdownItem.href}
                          key={dropdownItem.label}
                          className=" rounded px-4 py-2 text-xs hover:bg-white hover:bg-opacity-20 md:text-sm lg:text-lg"
                          onClick={() => setShowDrawer(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setShowModal(!showModal)}
              className="rounded-lg bg-black px-3 py-2.5 text-xs text-white transition-all duration-200 hover:invert md:px-6 md:py-3"
            >
              Begär offert
            </button>
            <button
              onClick={() => setShowDrawer(!showDrawer)}
              className="m-2 -mr-2.5 block rounded  p-2 text-3xl focus-within:bg-white focus-within:bg-opacity-20 hover:bg-white hover:bg-opacity-20 sm:hidden"
            >
              <LuMenu />
            </button>
          </div>
        </div>
      </header>
      {showModal ? <QuoteModal showModal={showModal} setShowModal={setShowModal} /> : undefined}
      <MobileMenuDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </>
  );
};

export default Navigation;
