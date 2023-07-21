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
        As a Computer Science major at the University of Wisconsin-Madison, I
        have a solid foundation in object-oriented programming (OOP) and data
        structures. Additionally, I have gained practical experience working
        with databases and operating systems by having taken relevant courses
        and applying that knowledge to various projects. Some of these projects
        include implementing a SQLite page cache, a JSON parser for SQLite load
        files, a simple shell, and a disk parser for an ext2 disk image.{' '}
        <b>
          You can find more of my projects, including the source code for this
          website, on my{' '}
          <motion.a
            href="https://github.com/YonkoOm"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#64ffda] sm:inline-flex hover:text-[#bfdbfe]"
            whileHover={{ scale: 1.03 }}
          >
            GitHub profile
          </motion.a>
        </b>
        .
      </p>
      <p className="mt-2 md:mt-3">
        I also have a strong background in fullstack development. On the
        frontend, I actively utilize frameworks/libraries such as
        React.js/Next.js and SvelteKit. For backend development, I have
        experience working with Node.js, Express.js, and MongoDB.
      </p>
      <p className="mt-2 md:mt-3">
        Here are the technologies I have been working with as of late:{' '}
        <span className="text-[#64ffda]">
          Java, C, Python, Rust, Lua, SQL, JavaScript (ES6+), Typescript, HTML &
          CSS, Node.js/Express.js, React.js/Next.js, and Svelte.
        </span>
      </p>
      <p className="mt-2 md:mt-3">
        You can view my resume by clicking{' '}
        <motion.a
          href="/om-moradia-resume.pdf"
          target="_blank"
          className="text-[#64ffda] sm:inline-flex hover:text-[#bfdbfe]"
          whileHover={{ scale: 1.03 }}
        >
          here
        </motion.a>
        , and connect with me on{' '}
        <motion.a
          href="https://www.linkedin.com/in/om-moradia-112133213/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-[#64ffda] sm:inline-flex hover:text-[#bfdbfe]"
          whileHover={{ scale: 1.03 }}
        >
          LinkedIn
        </motion.a>{' '}
        for further contact.
      </p>
    </Section>
  );
};

export default Skills;
