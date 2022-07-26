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
          className="w-fit font-varela text-[#64ffda] font-bold text-4xl md:text-[40px]"
          {...additionalAnimations}
        >
          {header}
        </motion.h1>
        <motion.div
          className="text-[#fff7ed] mt-4 font-mplus font-normal text-sm md:text-[15px] backdrop-blur-[8px]"
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
