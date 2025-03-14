"use client";

import { useState } from "react";
import HeaderCtas from "./headercomponents/ctas";
import HeaderLogo from "./headercomponents/logo";
import Menu from "./headercomponents/menu";
import ThemeToggle from "./themetoggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-lightmode-header-bg-color dark:bg-darkmode-header-bg-color shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <HeaderLogo />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Menu />
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <HeaderCtas />
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden py-4 px-2 space-y-3 absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          <Menu />
          <div className="flex items-center justify-center space-x-4 pt-3 border-t dark:border-gray-700">
            <ThemeToggle />
            <HeaderCtas />
          </div>
        </nav>
      )}
    </header>
  );
}
