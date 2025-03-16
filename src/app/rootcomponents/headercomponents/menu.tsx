"use client";

import Link from "next/link";

export default function Menu() {
  return (
    <div className="text-[0.8rem] lg:flex space-y-3 lg:space-y-0 lg:space-x-8">
      <Link href="#" className="block text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
        Home
      </Link>
      <Link href="#" className="block text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
        About
      </Link>
      <Link href="#" className="block text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
        Services
      </Link>
      <Link href="#" className="block text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
        Contact
      </Link>
    </div>
  );
}
