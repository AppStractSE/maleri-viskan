"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi2";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((path) => path !== "");

  return (
    <div className=" bg-white text-black">
      <div className="max-w-screen-2xl text-2xl px-4 pt-8 lg:pt-32 mx-auto w-full flex gap-2">
        <Link href="/" className="flex gap-2 items-center hover:text-cyan-600">
          <HiHome />
          Hem
        </Link>
        {pathnames.map((path, index) => (
          <span key={index}>
            {" "}
            /{" "}
            <Link
              href={`/${pathnames.slice(0, index + 1).join("/")}`}
              className={index === pathnames.length - 1 ? "text-cyan-600" : "hover:text-cyan-600"}
            >
              {path}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
