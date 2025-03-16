"use client";

import Link from "next/link";

export default function Menu() {
  return (
    <div className="text-[0.8rem] text-lightmode-headertext-color dark:text-darkmode-headertext-color hover:text-lightmode-headertext-hover-color dark:hover:text-darkmode-headertext-hover-color active:text-lightmode-headertext-active-color dark:active:text-darkmode-headertext-active-color lg:flex space-y-3 lg:space-y-0 lg:space-x-8">
      <Link href="#" className="block">
        Home
      </Link>
      <Link href="#" className="block">
        About
      </Link>
      <Link href="#" className="block">
        Services
      </Link>
      <Link href="#" className="block">
        Contac
      </Link>
    </div>
  );
}
