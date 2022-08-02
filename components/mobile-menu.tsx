import React, { useState } from 'react';
import { AnimatePresence, motion, SVGMotionProps, Variants } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface Props extends SVGMotionProps<SVGElement> {
  isOpen: boolean;
}

const HamburgerMenu: React.FC<Props> = ({ isOpen, ...props }) => {
  const top: Variants = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    open: {
      rotate: -45,
      translateY: 2
    }
  };
  const middle: Variants = {
    closed: {
      opacity: 1
    },
    open: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };
  const bottom: Variants = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    open: {
      rotate: 45,
      translateY: -2
    }
  };

  const lineProps: SVGMotionProps<SVGLineElement> = {
    strokeWidth: 1.3,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: isOpen ? 'open' : 'closed',
    transition: { type: 'spring', stiffness: 400, damping: 20 }
  };

  const unitHeight = 6;
  const height = 24;
  const width = 24;
  const unitWidth = (unitHeight * width) / height;

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      stroke="#fff"
      whileHover={{ stroke: '#64ffda' }}
      {...props}
    >
      <motion.line
        x1={0}
        x2={unitWidth}
        y1={0}
        y2={0}
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1={0}
        x2={unitWidth}
        y1={2}
        y2={2}
        variants={middle}
        {...lineProps}
      />
      <motion.line
        x1={0}
        x2={unitWidth}
        y1={4}
        y2={4}
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const divContainer: Variants = {
    initial: { opacity: 0, rotateX: 90 },
    enter: { opacity: 1, rotateX: 0 },
    exit: { opacity: 0, rotateX: 90, transition: { duration: 0.3, ease: 'easeIn' } }
  };
  const linkVariant: Variants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div className="md:hidden">
      <HamburgerMenu
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-2 top-4 cursor-pointer select-none"
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={divContainer}
            transition={{ duration: 0.5, delayChildren: 0.15, staggerChildren: 0.175 }}
            className="absolute right-2 text-center text-[#fff7ed] font-varela leading-8 w-48 rounded-md bg-[#002e63]"
          >
            <nav>
              <Link href="/" passHref>
                <motion.a
                  onClick={() => setIsOpen(false)}
                  variants={linkVariant}
                  className="block rounded-md hover:bg-[#003663] hover:underline hover:underline-offset-1"
                >
                  Home
                </motion.a>
              </Link>
              <Link href="/about" passHref>
                <motion.a
                  onClick={() => setIsOpen(false)}
                  variants={linkVariant}
                  className="block rounded-sm hover:bg-[#003663] hover:underline hover:underline-offset-1"
                >
                  About
                </motion.a>
              </Link>
              <Link href="/skills" passHref>
                <motion.a
                  onClick={() => setIsOpen(false)}
                  variants={linkVariant}
                  className="block rounded-md hover:bg-[#003663] hover:underline hover:underline-offset-1"
                >
                  Skills
                </motion.a>
              </Link>
            </nav>
            <div className="text-center text-base">
              <a
                href="https://www.linkedin.com/in/om-moradia-112133213/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-[#64ffda] hover:text-[#fff7ed] py-0.5 px-1.5"
                />
              </a>
              <a
                href="https://github.com/YonkoOm"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#64ffda] hover:text-[#fff7ed] py-0.5 px-1.5"
                />
              </a>
              <a
                href="mailto:moradia@wisc.edu"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#64ffda] hover:text-[#fff7ed] py-0.5 px-1.5"
                />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
