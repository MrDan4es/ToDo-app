/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        todoLight: "#ccc5b9",
        todoYellow: "#fcbf49",
        todoBlue: "#00a8e8",
        todoRed: "#d62828",
        todoDark: "#252422",
      },
    },
  },
  plugins: [],
};
