'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  return (
    <section className="mt-20 relative bg-primary-light dark:bg-primary-dark overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="w-full h-full bg-primary/10 dark:bg-primary/20 transform -skew-x-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Life is short and the world is wide!
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            We want to help you go on adventures you&apos;ll never forget, making the world feel like home no matter where you are.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Where would you like to go?"
              className="w-full px-6 py-4 text-lg rounded-full border-2 border-primary/20 
                focus:border-primary focus:ring-2 focus:ring-primary/50 
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400
                transition-all duration-300
                shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 
                bg-primary hover:bg-primary/90 
                text-white p-3 rounded-full 
                transition-all duration-300
                shadow-md"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Optional: Decorative elements */}
      <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
        <div className="w-48 h-48 bg-primary/5 dark:bg-primary/10 rounded-full" />
      </div>
    </section>
  );
}
