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
      xl: '1440px',
      xxl: '2160px'
    },
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
        mplus: ['var(--font-mplus)'],
        varela: ['var(--font-varela)'],
        coolvetica: ['var(--font-coolvetica)']
      }
    }
  },
  plugins: []
};
