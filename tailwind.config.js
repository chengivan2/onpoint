/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F8F8F8',
          DEFAULT: '#D8D8D8',
          dark: '#181818',
        },
        secondary: {
          light: '#FFFFFF',
          DEFAULT: '#242424',
          dark: '#000000',
        },
      }
    },
  },
  darkMode: 'class',
  plugins: [],
} 