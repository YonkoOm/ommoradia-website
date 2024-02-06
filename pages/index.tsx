import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, Transition, Variant, Variants } from 'framer-motion';
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

  const imageVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.5, delay: 0.6 } }
  };

  const topLine = 'Welcome.';
  const middleLine = "I'm Om Moradia,";
  const bottomLine = 'aspiring software engineer.';

  const baseDelay = 0.4;

  return (
    <div className="flex flex-col-reverse md:block absolute top-36 md:top-[50%] md:-translate-y-[75%] left-[10%] z-20">
      <Head>
        <title>Om Moradia - Homepage</title>
      </Head>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
        variants={imageVariant}
        className="relative mx-auto md:mx-0 mt-14 md:mt-0 md:mb-5 w-[105px] h-[105px] md:w-[120px] md:h-[120px]"
      >
        <Image src="/images/headshot.png" alt="headshot" sizes="135px" fill />
      </motion.div>
      <motion.div exit={exitAnimation}>
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
            delay={0.08 * (topLine.length + 1) + baseDelay}
            whileHover={letterHover}
            whileTap={letterTap}
            transition={letterTransition}
            className="text-[#fff7ed] hover:text-[#64ffda]"
          />
          <AnimatedText
            text={bottomLine}
            delay={0.08 * (topLine.length + middleLine.length + 1) + baseDelay}
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
    </div>
  );
};

export default Home;
