/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Add other file paths as needed
  ],
  plugins: [require('tailwindcss-motion')],
  corePlugins: {
    preflight: false, // Optional: if you want to disable default styles
  },
};
