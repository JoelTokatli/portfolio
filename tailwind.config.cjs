/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/components",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fast: "'Fasthand', cursive",
      roboto: "'Roboto', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
