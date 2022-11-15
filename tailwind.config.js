/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto Flex", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#92AD95",
        },
        secondary: {
          DEFAULT: "#345633",
          100: "#C9D0C6",
          200: "#A5B1A1",
          300: "#80937C",
          400: "#5A7558",
        },
      },
    },
  },
  plugins: [],
};
