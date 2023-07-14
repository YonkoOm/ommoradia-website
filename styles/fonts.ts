import localFont from 'next/font/local';
import { Lato, Varela_Round, M_PLUS_Rounded_1c } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
  variable: '--font-lato'
});

const varela = Varela_Round({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-varela'
});

const mplus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-mplus'
});

const coolvetica = localFont({
  src: '../public/fonts/CoolveticaRg-Regular.woff',
  variable: '--font-coolvetica'
});

export { lato, varela, mplus, coolvetica };
