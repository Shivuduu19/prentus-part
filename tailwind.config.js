/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'bmLLL': { 'min': '1200px', 'max': '1439px' },
        'amLL': { 'min': '1200px' },
        'bmL4k': { 'min': '1400px', 'max': '1919px' }
      }
    },
  },
  plugins: [],
};
