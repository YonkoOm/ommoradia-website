import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faGear,
  faHome,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import NavLink from './nav-link';
import MobileMenu from './mobile-menu';

const Navbar: React.FC = () => {
  return (
    <div className="w-full md:w-[60px] h-12 md:h-full md:min-h-[500px] absolute bg-black bg-opacity-30 md:bg-opacity-60 backdrop-blur-[10px] select-none z-30">
      <Link href="/">
        <a className="inline-flex md:block my-[7px] p-[7px] md:my-2 md:px-0 md:py-2">
          <motion.div
            whileHover={{ rotate: 20 }}
            className="block flex-shrink-0 mr-1 md:mx-auto h-auto w-12 md:w-[55px]"
          >
            <Image
              src="/images/mugiwara.png"
              alt="logo"
              width={75}
              height={30}
            />
          </motion.div>
          <div className="text-white text-center text-sm md:text-xs font-mplus font-bold w-full">
            Moradia
          </div>
        </a>
      </Link>
      <nav className="hidden md:block absolute w-full text-center h-[210px] leading-[51px] top-[50%] mt-[-110px]">
        <NavLink
          href="/"
          className="group text-[#fff7ed] relative block text-[22px] no-underine after:transition-all after:duration-500 after:ease-out after:opacity-0 hover:after:opacity-100 after:content-['HOME'] after:text-[9px] after:text-[#64ffda] after:absolute after:block after:bottom-0 after:w-full after:text-center after:tracking-[2px]"
        >
          <FontAwesomeIcon icon={faHome} className="group-hover:opacity-40" />
        </NavLink>
        <NavLink
          href="/about"
          className="group text-[#fff7ed] relative block text-[22px] no-underine after:transition-all after:duration-500 after:ease-out after:opacity-0 hover:after:opacity-100 after:content-['ABOUT'] after:text-[9px] after:text-[#64ffda] after:absolute after:block after:bottom-0 after:w-full after:text-center after:tracking-[2px]"
        >
          <FontAwesomeIcon
            icon={faCircleUser}
            className="group-hover:opacity-40"
          />
        </NavLink>
        <NavLink
          href="/skills"
          className="group text-[#fff7ed] relative block text-[22px] no-underine after:transition-all after:duration-500 after:ease-out after:opacity-0 hover:after:opacity-100 after:content-['SKILLS'] after:text-[9px] after:text-[#64ffda] after:absolute after:block after:bottom-0 after:w-full after:text-center after:tracking-[2px]"
        >
          <FontAwesomeIcon icon={faGear} className="group-hover:opacity-40" />
        </NavLink>
      </nav>
      <ul className="hidden absolute md:block w-full bottom-10 m-0 p-0 text-lg list-none text-center">
        <li>
          <a
            href="https://www.linkedin.com/in/om-moradia-112133213/"
            target="_blank"
            rel="noreferrer noopener"
            className="block text-[#64ffda] hover:text-slate-200 leading-5 p-2"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/YonkoOm"
            target="_blank"
            rel="noreferrer noopener"
            className="block text-[#64ffda] hover:text-slate-200 leading-5 p-2"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="mailto:moradia@wisc.edu"
            className="block text-[#64ffda] hover:text-slate-200 leading-5 p-2"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
      <MobileMenu />
    </div>
  );
};

export default Navbar;
