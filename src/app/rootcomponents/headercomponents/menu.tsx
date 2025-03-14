"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Menu() {
  return (
    <div className="flex flex-row justify-between items-center align-center px-[1rem]">
      <button
        className="lg:hidden hover:cursor-pointer"
        onClick={() => {
          const menu = document.getElementById("menu");
          if (menu) {
            menu.classList.toggle("hidden");
          }
        }}
      >
        <GiHamburgerMenu className="text-darkmode-bg-color dark:text-lightmode-bg-color" />
      </button>

      <ul
        className="absolute lg:relative bg-lightmode-bg-color lg:bg-transparent lg:border-0 border-2 border-text-darkmode-bg-color rounded hidden flex-col gap-[5rem] lg:flex lg:flex-row lg:align-center"
        id="menu"
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </ul>
    </div>
  );
}
