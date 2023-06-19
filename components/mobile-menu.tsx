import React, { useState } from 'react';
import {
  AnimatePresence,
  motion,
  SVGMotionProps,
  Variants
} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavLink from './nav-link';

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

  const svgVariant: Variants = {
    hover: { stroke: '#64ffda' }
  };

  const unitHeight = 6;
  const height = 24;
  const width = 22;
  const unitWidth = (unitHeight * width) / height;

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      stroke="#fff"
      variants={svgVariant}
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

  const menu: Variants = {
    initial: { opacity: 0, rotateX: 90 },
    enter: { opacity: 1, rotateX: 0 },
    exit: {
      opacity: 0,
      rotateX: 90,
      transition: { duration: 0.3, ease: 'easeIn' }
    }
  };
  const link: Variants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const bgColor = isOpen ? 'bg-[#1e2057]' : 'bg-[#0f102a] hover:bg-[#101840]';

  const liveLinkStyle =
    "after:absolute after:w-[1.5px] after:h-full after:left-0 after:bg-gradient-to-b after:from-transparent after:via-[#64ffda] after:content-['']";

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden inline-block float-right mr-2 mt-1.5">
      <motion.div
        className={`px-1.5 py-0.5 border ${bgColor} rounded-md border-blue-500 shadow shadow-gray-400 cursor-pointer select-none`}
        onClick={() => setIsOpen(isOpen => !isOpen)}
        whileHover="hover"
      >
        <HamburgerMenu isOpen={isOpen} className="mt-1.5" />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={menu}
            transition={{
              duration: 0.5,
              delayChildren: 0.15,
              staggerChildren: 0.175
            }}
            className="absolute right-2 mt-1.5 text-center text-[#fff7ed] text-[15px] font-varela leading-8 w-44 rounded-s-md bg-gray-900 shadow-depth"
          >
            <nav>
              <motion.div onClick={closeMenu} variants={link}>
                <NavLink
                  href="/"
                  className="block relative rounded-md hover:bg-slate-800"
                  pathStyling={liveLinkStyle}
                >
                  Home
                </NavLink>
              </motion.div>
              <motion.div onClick={closeMenu} variants={link}>
                <NavLink
                  href="/about"
                  className="block relative rounded-md hover:bg-slate-800"
                  pathStyling={liveLinkStyle}
                >
                  About
                </NavLink>
              </motion.div>
              <motion.div onClick={closeMenu} variants={link}>
                <NavLink
                  href="/skills"
                  className="block relative rounded-md hover:bg-slate-800"
                  pathStyling={liveLinkStyle}
                >
                  Skills
                </NavLink>
              </motion.div>
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
