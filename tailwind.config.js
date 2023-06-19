/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        /* lato: ['var(--font-lato)'],
        mplus: ['var(--font-mplus)'],
        varela: ['var(--font-varela)'] */
        mplus: ["'M PLUS Rounded 1c'", 'sans-serif'],
        coolvetica: ['Coolvetica', 'sans-serif'],
        varela: ['Varela Round'],
        lato: ['Lato', 'sans-serif']
      }
    }
  },
  plugins: []
};
