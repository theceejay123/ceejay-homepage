/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto Flex", "sans-serif"],
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 300ms ease-in-out",
      },
      colors: {
        primary: {
          DEFAULT: "#92AD95",
          400: "#A6BCA7",
          300: "#B9CBB9",
          200: "#CED9CD",
          100: "#E2E8E0",
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
