import React from 'react';
import { motion, Variants } from 'framer-motion';
import Section from '../components/layout';

const Skills: React.FC = () => {
  const headerVariant: Variants = {
    hidden: { opacity: 0, x: 40 },
    enter: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
    exit: { opacity: 0, x: 40, transition: { duration: 0.5, delay: 0.3 } }
  };

  return (
    <Section
      title="Skills - Om Moradia"
      header="/skills and experience"
      variants={headerVariant}
      whileHover={{ rotate: -3 }}
      whileTap={{ rotate: 0 }}
      transition={{ type: 'spring', stiffness: 600, damping: 10 }}
    >
      <p>
        I have experience in front-end (and some back-end) development and
        actively use React.js, usually with framework such as Next.js. I also
        have experience using Node.js, Express.js, and working with MongoDB.
      </p>
      <p className="mt-2 md:mt-3">
        Aside from fullstack development, I have a decent amount of experience
        in software development and am knowledgeable in fundamentals such as OOP
        and data structures. I also have experience with operating systems
        through having taken a class and worked on projects such as a creating a
        simple shell as well as a process scheduler using stride schedulle (both
        written in C). I have also worked with xv6 to gain a further
        understanding of how Unix and Unix-like operating systems work.
      </p>
      <p className="mt-2 md:mt-3">
        Technologies I been working with as of late include:{' '}
        <span className="text-[#64ffda]">
          Java, C, Python, Rust, Javascript (ES6+), Typescript, HTML, CSS,
          Node.js, React.js/Next.js, and Svelte.
        </span>
      </p>
      <p className="mt-2 md:mt-3">
        My resume and another place where I can be reached is on my{' '}
        <motion.a
          href="https://www.linkedin.com/in/om-moradia-112133213/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-[#64ffda] sm:inline-flex hover:text-[#bfdbfe]"
          whileHover={{ scale: 1.03 }}
        >
          LinkedIn.
        </motion.a>
      </p>
    </Section>
  );
};

export default Skills;
