/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightmode: {
          text: '#181818',
          bodyBg: '#F5F5F5',
          buttonBg: '#1A3B28'
        },
        darkmode: {
          text: '#F5F5F5',
          bodyBg: '#1A3B28',
          buttonBg: '#1A3B28',
        },
      }
    },
  },
  darkMode: 'class',
  plugins: [],
} 