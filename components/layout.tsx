import React from 'react';
import Head from 'next/head';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

interface Props extends HTMLMotionProps<'div'> {
  title: string;
  header: React.ReactNode;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({
  title,
  header,
  children,
  ...additionalAnimations
}) => {
  const pageVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <div className="absolute w-[85%] md:w-[70%] lg:w-[40%] my-0 mx-auto top-36 md:top-[30%] left-[10%] z-10">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <motion.div initial="hidden" animate="enter" exit="exit">
        <motion.h1
          className="w-fit font-varela font-bold text-[#64ffda]  text-[32px] md:text-[40px] leading-8 md:leading-none"
          {...additionalAnimations}
        >
          {header}
        </motion.h1>
        <motion.div
          className="text-[#fff7ed] p-3 -ml-3 mt-1 font-mplus font-normal text-[13px] md:text-[14px] backdrop-blur-[8px]"
          variants={pageVariant}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Layout;
