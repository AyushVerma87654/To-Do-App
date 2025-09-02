/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        danc: ["Dancing Script", "cursive"],
        any: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
