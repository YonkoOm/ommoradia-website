import React from 'react';
import Head from 'next/head';
import { motion, Transition, Variant } from 'framer-motion';
import AnimatedText from '../components/animated-text';
import Typewriter from 'typewriter-effect';

const Home: React.FC = () => {
  const exitAnimation: Variant = {
    opacity: 0,
    y: 20,
    transition: { duration: 0.4 }
  };

  const letterHover: Variant = {
    scale: 1.2
  };

  const letterTap: Variant = {
    scale: 0.7
  };

  const letterTransition: Transition = {
    type: 'spring',
    stiffness: 500,
    damping: 8
  };

  const colorTransition: Transition = {
    delay: 1,
    duration: 5.5,
    ease: [0.7, 0.1, 0.1, 0.7],
    repeat: Infinity,
    repeatType: 'reverse'
  };

  const topLine = 'Welcome.';
  const middleLine = "I'm Om Moradia,";
  const bottomLine = 'aspiring software engineer.';

  const baseDelay = 0.4;

  return (
    <motion.div
      className="absolute my-0 mx-auto top-36 md:top-[35%] left-[10%] z-20"
      exit={exitAnimation}
    >
      <Head>
        <title>Om Moradia - Homepage</title>
      </Head>
      <h1 className="font-coolvetica font-normal text-[28px] sm:text-[36px] md:text-[40px] lg:text-[52px] leading-tight lg:leading-[57px]">
        <AnimatedText
          text={topLine}
          delay={baseDelay}
          whileHover={letterHover}
          whileTap={letterTap}
          transition={letterTransition}
          letterAnimation={{
            color: ['#fcdff5', '#9bb3fa', '#ffca28'],
            transition: colorTransition
          }}
        />
        <AnimatedText
          text={middleLine}
          delay={0.075 * (topLine.length + 1) + baseDelay}
          whileHover={letterHover}
          whileTap={letterTap}
          transition={letterTransition}
          className="hover:text-[#64ffda] text-[#fff7ed]"
        />
        <AnimatedText
          text={bottomLine}
          delay={0.075 * (topLine.length + middleLine.length + 1) + baseDelay}
          whileHover={letterHover}
          whileTap={letterTap}
          transition={letterTransition}
          letterAnimation={{
            color: ['#ffca28', '#9bb3fa', '#fcdff5'],
            transition: colorTransition
          }}
        />
      </h1>
      <h2 className="font-mplus font-normal text-[#64ffda] space-x-1.5 sm:mt-0.5 md:mt-1 text-[15px] sm:text-[20px] lg:text-[21px]">
        <Typewriter
          onInit={typewriter => {
            typewriter
              .pauseFor(2500)
              .typeString("what's up, doc?")
              .pauseFor(1500)
              .deleteAll()
              .pauseFor(400)
              .typeString('as you already know, my name is Om.')
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(400)
              .typeString("and yes... it's only two letters long.")
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(400)
              .typeString("i'm a student.")
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(400)
              .typeString('programmer.')
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(400)
              .typeString('music connoisseur.')
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(400)
              .typeString('and an anime & k-drama enthusiast.')
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(400)
              .typeString('welcome to my page :)')
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
          options={{ loop: true, deleteSpeed: 10, delay: 60 }}
        />
      </h2>
    </motion.div>
  );
};

export default Home;
