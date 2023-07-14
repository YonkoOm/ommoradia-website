import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import CSS directly to prevent icons from initially appearing large
import { mplus, coolvetica, varela, lato } from '@/fonts';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; // prevent font awesome from adding its own CSS

const Website = ({ Component, pageProps, router }: AppProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/images/one-piece.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Om Moradia's Website" />
        <meta name="author" content="Om Moradia" />
        <meta property="og:site_name" content="Om Moradia" />
        <meta property="og:title" content="Om Moradia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/homepage.png" />
      </Head>
      <Navbar />
      <main
        className={`${mplus.variable} ${coolvetica.variable} ${varela.variable} ${lato.variable}`}
      >
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </main>
      {show && (
        <div className="absolute h-full w-full">
          <Spline scene="https://prod.spline.design/f2GotmeTbUgCOD5f/scene.splinecode" />
        </div>
      )}
    </>
  );
};

export default Website;
