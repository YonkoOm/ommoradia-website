import Head from 'next/head';
import { motion, Variants } from 'framer-motion';
import AnimatedLetters from '../components/animated-letters';
import Typewriter from 'typewriter-effect';

const Home: React.FC = () => {
  const container: Variants = {
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.4 }
    }
  };

  // when using viewport instead of fixed pixels -- 6.5vw for h1 and 3.75vw for typewriter font size
  return (
    <div className="absolute my-0 mx-auto top-36 md:top-[35%] left-[10%] z-20">
      <Head>
        <title>Om Moradia - Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <motion.div variants={container} exit="exit">
        <h1 className="font-coolvetica font-normal text-white m-0 text-[28px] sm:text-[32px] md:text-5xl leading-tight md:leading-[53px]">
          <AnimatedLetters
            text="Hi,"
            delay={0.4}
            whileHover={{
              scale: 1.2
            }}
            // className="hover:text-[#fdba74]"
            className="hover:text-[#64ffda]"
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 8
            }}
            whileTap={{ scale: 0.9 }}
          />
          <AnimatedLetters
            text="I'm Om Moradia,"
            delay={0.075 * 4 + 0.4}
            whileHover={{
              scale: 1.2
            }}
            // className="hover:text-[#fdba74]"
            className="hover:text-[#64ffda]"
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 8
            }}
            whileTap={{ scale: 0.9 }}
          />
          <AnimatedLetters
            text="aspiring software engineer."
            delay={0.075 * 18 + 0.4}
            whileHover={{
              scale: 1.2
            }}
            // className="hover:text-[#fdba73]"
            className="hover:text-[#64ffda]"
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 8
            }}
            whileTap={{ scale: 0.9 }}
          />
        </h1>
        <div className="font-mplus font-normal text-[#64ffda] block sm:mt-0.5 md:mt-1 text-sm sm:text-base md:text-xl">
          <Typewriter
            onInit={typewriter => {
              typewriter
                .pauseFor(2500)
                .typeString('Student.')
                .pauseFor(2500)
                .deleteAll()
                .pauseFor(500)
                .typeString('Programmer.')
                .pauseFor(2500)
                .deleteAll()
                .pauseFor(500)
                .typeString('Enjoyer of Music.')
                .pauseFor(2500)
                .deleteAll()
                .pauseFor(500)
                .typeString('Anime & K-Drama Enthusiast.')
                .pauseFor(2500)
                .deleteAll()
                .pauseFor(500)
                .typeString('Welcome to My Page :)')
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{ loop: true, deleteSpeed: 5, delay: 80 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
