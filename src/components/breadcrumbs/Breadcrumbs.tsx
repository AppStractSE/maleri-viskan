"use client";
import { breadcrumbs } from "@/data/breadcrumbs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiHome } from "react-icons/hi2";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((path) => path !== "");

  const renderedBreadcrumbs = breadcrumbs
    .filter((breadcrumb) => pathname.includes(breadcrumb.path))
    .map((breadcrumb, index) => {
      const isCurrentBreadcrumb = index === pathnames.length - 1;
      const className = isCurrentBreadcrumb && "text-cyan-600";
      return (
        <React.Fragment key={breadcrumb.path}>
          <span> / </span>
          <span className={`${className}`}>
            <Link
              href={`/${pathnames.slice(0, index + 1).join("/")}`}
              className="hover:text-cyan-600"
            >
              {breadcrumb.label}
            </Link>
          </span>
        </React.Fragment>
      );
    });

  return (
    <section className="mx-auto my-4 w-full max-w-screen-2xl md:my-8">
      <div className=" bg-white text-black ">
        <div className="mx-auto flex w-full max-w-screen-2xl gap-2 px-4 text-sm md:text-lg ">
          <Link href="/" className="flex items-center gap-2 hover:text-cyan-600">
            <HiHome />
            Hem
          </Link>
          {renderedBreadcrumbs}
        </div>
      </div>
    </section>
  );
};
export default Breadcrumbs;
