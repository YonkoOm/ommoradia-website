import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import { AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Om Moradia's Website" />
        <meta name="author" content="Om Moradia" />
        <meta property="og:site_name" content="Om Moradia" />
        <meta property="og:title" content="Om Moradia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/homepage.png" />
      </Head>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      {show && (
        <div className="absolute h-full w-full">
          <Spline scene="https://prod.spline.design/f2GotmeTbUgCOD5f/scene.splinecode" />
        </div>
      )}
    </>
  );
};

export default MyApp;
