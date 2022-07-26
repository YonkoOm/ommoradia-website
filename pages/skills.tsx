import React from 'react';
import { motion, Variants } from 'framer-motion';
import Layout from '../components/layout';

const Skills: React.FC = () => {
  const headerVariant: Variants = {
    hidden: { opacity: 0, x: 40, transition: { duration: 0.5, delay: 0.3 } },
    enter: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
    exit: { opacity: 0, x: 40, transition: { duration: 0.5, delay: 0.3 } }
  };

  return (
    <Layout
      title="Skills - Om Moradia"
      header={
        <>
          Skills & <br /> Experience
        </>
      }
      variants={headerVariant}
      whileHover={{
        rotate: -5,
        transition: { type: 'spring', stiffness: 475, damping: 7 }
      }}
    >
      <p>
        I have experience in front-end developement, using frameworks such as
        NextJS and React. I also have experience using ExpressJS, MongoDB, and
        have been working with a GraphQL alternative for Typescript known as
        tRPC.
      </p>
      <p className="mt-2 md:mt-3">
        Aside from fullstack development, I also have interests in software
        developement and am open for any opportunities that can help increase my
        knowledge and make a positive impact.
      </p>
      <p className="mt-2 md:mt-3">
        Technologies I been working with as of late include:{' '}
        <span className="text-[#64ffda]">
          Java, C, C++, Pyton, Javascript (ES6+), Typescript, HTML, CSS, NodeJS,
          React, and Svelte.
        </span>
      </p>
      <p className="mt-2 md:mt-3">
        My resume and another place where I can be reached is on my{' '}
        <motion.a
          href="https://www.linkedin.com/in/om-moradia-112133213/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-[#64ffda] inline-flex hover:text-[#bfdbfe]"
          whileHover={{ scale: 1.03 }}
        >
          LinkedIn.
        </motion.a>
      </p>
    </Layout>
  );
};

export default Skills;
