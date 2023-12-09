/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-delay-50": "bounce 1s linear infinite 0.3s",
        "bounce-delay-100": "bounce 1s linear infinite 0.5s",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      colors: {
        primary: {
          500: "#5EA8A9",
          400: "#68BBBC",
          300: "#95CFD0",
          200: "#D2EBEB",
          100: "#F0F8F8",
        },
        neutral: {
          500: "#34404B",
          400: "#D6D9DB",
          300: "#D6D9DB",
          200: "#F7F7F7",
          100: "#FFFFFF",
        },
        green: {
          500: "#00BC3C",
          400: "#4DD077",
          300: "#80DE9E",
          200: "#B3EBC5",
          100: "#E6F8EC",
        },
        orange: {
          500: "#FF821E",
          400: "#FF9B4B",
          300: "#FFA862",
          200: "#FFCDA5",
          100: "#FFE6D2",
        },
        blue: {
          500: "#2F6BFF",
          400: "#5989FF",
          300: "#82A6FF",
          200: "#ACC4FF",
          100: "#EAF0FF",
        },
        red: {
          500: "#F54E4E",
          400: "#F56C6C",
          300: "#FC8989",
          200: "#FBB8B8",
          100: "#FEEDED",
        },
      },
    },
  },
  plugins: [],
};
