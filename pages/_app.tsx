import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import { AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full absolute">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <div className="absolute overflow-hidden h-full w-full">
        {show && (
          <Spline scene="https://prod.spline.design/f2GotmeTbUgCOD5f/scene.splinecode" />
        )}
      </div>
    </div>
  );
};

export default MyApp;
