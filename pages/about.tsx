import React from 'react';
import Section from '../components/layout';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const About: React.FC = () => {
  const headerVariant: Variants = {
    hidden: { opacity: 0, x: -40 },
    enter: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.5, delay: 0.3 } }
  };

  return (
    <Section
      title="About - Om Moradia"
      header="/about me"
      variants={headerVariant}
      whileHover={{
        scale: 1.1
      }}
      whileTap={{
        scale: 0.9
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 7 }}
    >
      <p>
        I am a senior studying <strong>Computer Science</strong> at the{' '}
        <motion.a
          href="https://www.wisc.edu/about/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-[#64ffda] sm:inline-flex hover:text-[#bfdbfe]"
          whileHover={{ scale: 1.01 }}
        >
          University of Wisconsin-Madison
        </motion.a>{' '}
      </p>
      <p className="mt-2 md:mt-3">
        Currently, my main focus is on continuously improving as a programmer
        and eventually reaching a level where I can solve problems efficiently
        and implement their solutions without relying too heavily on external
        sources. To reach this goal, I aim to consistently work on projects that
        can help diversify my thought process, enable me to learn different
        technologies, and further refine my{' '}
        <Link
          href="/skills"
          className="text-[#64ffda] sm:inline-flex hover:text-[#bfdbfe] hover:scale-[1.02] ease-in-out duration-[125ms]"
        >
          existing knowledge
        </Link>
        {'.'}
      </p>
      <p className="mt-2 md:mt-3">
        Apart from this, I am{' '}
        <strong>
          actively seeking software engineering positions or internships
        </strong>{' '}
        in order to advance my abilities as a programmer and be able to make a
        meaningful impact on the daily lives of ordinary people like me.
      </p>
      <p className="mt-2 md:mt-3">
        In my free time, and aside from coding, I enjoy trying different types
        of foods, watching anime and Korean dramas, and listening to music. I
        also enjoy reading the news, especially anything related to science and
        the medical field, and keeping up with what&apos;s going on in the
        everchanging programming world.
      </p>
    </Section>
  );
};

export default About;
