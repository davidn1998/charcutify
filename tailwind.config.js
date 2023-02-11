const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-oswald)", ...fontFamily.sans],
      },
      colors: {
        primary: "#CA572D",
        neutral: {
          600: "#212121",
          700: "#1F1F1F",
          800: "#1C1C1C",
          900: "#151515",
        },
      },
    },
  },
  plugins: [],
};
