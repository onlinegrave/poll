/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultColors = require('tailwindcss/colors');
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = {
  ...defaultColors,
  primary: "#282c34",
  primaryDark: "#182438"
}
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: defaultTheme,
      colors: colors
    },
  },
  plugins: [],
};
