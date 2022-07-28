import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Section from '../components/layout';

const About: React.FC = () => {
  const headerVariant: Variants = {
    // figure out a better way to perform the transitions
    hidden: { opacity: 0, x: -40, transition: { duration: 0.5, delay: 0.3 } },
    enter: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.5, delay: 0.3 } }
  };

  return (
    <Section
      title="About - Om Moradia"
      header="About Me"
      variants={headerVariant}
      whileHover={{
        scale: 1.1,
        transition: { type: 'spring', stiffness: 475, damping: 12 }
      }}
    >
      <p>
        I am a third-year student at the{' '}
        <motion.a
          href="https://www.wisc.edu/about/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-[#64ffda] sm:inline-flex hover:text-[#bfdbfe]"
          whileHover={{ scale: 1.01 }}
        >
          University of Wisconsin-Madison
        </motion.a>{' '}
        studying <b>Computer Science</b>.
      </p>
      <p className="mt-2 md:mt-3">
        Currently, my main focus is to continuously become a better programmer
        by working on projects to help diversify my thought process, learn new
        technologies, and refine the ones{' '}
        <Link href="/skills" passHref>
          <motion.a
            className="text-[#64ffda] sm:inline-flex hover:text-[#bfdbfe]"
            whileHover={{ scale: 1.03 }}
          >
            I know
          </motion.a>
        </Link>
        {'.'} At the same time, I&apos;m open and actively looking for any
        software engineering internships/opportunities in hopes to gain as much
        real-world experience as possible and try to make the world a better
        place :)
      </p>
      <p className="mt-2 md:mt-3">
        In my free time and outside of coding, I enjoy trying out different
        types of food, watching anime and Korean shows, and listening to music.
        I also enjoy reading the news, especially anything science related, and
        keeping up with what&apos;s going on in the coding world.
      </p>
    </Section>
  );
};

export default About;
