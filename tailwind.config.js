/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        todoLight: "#eae2b7",
        todoYellow: "#fcbf49",
        todoOrange: "#f77f00",
        todoRed: "#d62828",
        todoDark: "#003049",
      },
    },
  },
  plugins: [],
};
