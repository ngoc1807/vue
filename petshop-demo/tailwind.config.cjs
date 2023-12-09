/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "#ffb300",
      },
      textColor: {
        main: "#ffb300",
        dark: "#777777",
      },
      colors: {
        main: "#ffb300",
        dark: "#777777",
      },
    },
  },
  plugins: [],
};
