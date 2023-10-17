/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      "neutral-white": "hsl(0, 0%, 100%)",
      "neutral-light": "hsl(270, 3%, 87%)",
      "neutral-grayish": "hsl(279, 6%, 55%)",
      "neutral-violet": "hsl(278, 68%, 11%)",

      "primary-red": "hsl(0, 100%, 66%)",
      "primary-default": "hsl(249, 99%, 64%)",
      "primary-active": "hsl(278, 94%, 30%)",
    },
    extend: {},
    screens: {
      mobile: "375px",
      desktop: "1440px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
