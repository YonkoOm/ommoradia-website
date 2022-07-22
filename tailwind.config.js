/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      mplus: ["'M PLUS Rounded 1c'", "sans-serif"],
      coolvetica: ["Coolvetica", "sans-serif"],
      varela: ["Varela Round"],
    },
    extend: {},
  },
  plugins: [],
};
