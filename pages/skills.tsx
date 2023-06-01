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
      header={
        <>
          Skills & <br /> Experience
        </>
      }
      variants={headerVariant}
      whileHover={{
        rotate: -5
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 6 }}
    >
      <p>
        I have experience in front-end (and some back-end) development and
        actively use React.js as well as a React framework known as Next.js. I
        also have experience using ExpressJS, working with MongoDB, and have
        been trying out a GraphQL/REST alternative known as tRPC.
      </p>
      <p className="mt-2 md:mt-3">
        Aside from fullstack development, I have a decent amount of experience
        in software development and am knowledgeable in fundamentals such as OOP
        and data structures.
      </p>
      <p className="mt-2 md:mt-3">
        Technologies I been working with as of late include:{' '}
        <span className="text-[#64ffda]">
          Java, C, C++, Python, Rust, Javascript (ES6+), Typescript, HTML, CSS,
          Node.js, React.js, Next.js, and Svelte.
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
