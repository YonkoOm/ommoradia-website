import React, { useState } from 'react';
import { motion, SVGMotionProps, Variants } from 'framer-motion';
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
    initial: { opacity: 0 },
    enter: { opacity: 1 }
  };
  const linkVariant: Variants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 }
  };

  return (
    <div className="md:hidden">
      <HamburgerMenu
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-2 top-4 cursor-pointer select-none"
      />
      {isOpen && (
        <motion.div
          initial="initial"
          animate="enter"
          variants={divContainer}
          transition={{ duration: 0.5, staggerChildren: 0.175 }}
          className="absolute right-2 text-center text-slate-200 font-varela leading-8 w-48 h-26 rounded-md bg-[#002e63]"
        >
          <nav>
            <Link href="/" passHref>
              <motion.a
                onClick={() => setIsOpen(false)}
                variants={linkVariant}
                className="block w-full rounded-md hover:bg-[#003663] hover:underline hover:underline-offset-1"
              >
                Home
              </motion.a>
            </Link>
            <Link href="/about" passHref>
              <motion.a
                onClick={() => setIsOpen(false)}
                variants={linkVariant}
                className="block w-full rounded-sm hover:bg-[#003663] hover:underline hover:underline-offset-1"
              >
                About
              </motion.a>
            </Link>
            <Link href="/skills" passHref>
              <motion.a
                onClick={() => setIsOpen(false)}
                variants={linkVariant}
                className="block w-full rounded-md hover:bg-[#003663] hover:underline hover:underline-offset-1"
              >
                Skills
              </motion.a>
            </Link>
          </nav>
          <div className="space-x-3 text-center m-0 p-0 text-base">
            <a
              href="https://www.linkedin.com/in/om-moradia-112133213/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-[#64ffda] hover:text-slate-200"
              />
            </a>
            <a
              href="https://github.com/YonkoOm"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-[#64ffda] hover:text-slate-200"
              />
            </a>
            <a href="mailto:moradia@wisc.edu">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[#64ffda] hover:text-slate-200"
              />
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenu;
