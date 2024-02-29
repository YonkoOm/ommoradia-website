'use client';
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
import { mplus } from '@/fonts';

const Navbar: React.FC = () => {
  const internalLinks = [
    {
      name: 'HOME',
      path: '/',
      icon: faHome
    },
    {
      name: 'ABOUT',
      path: '/about',
      icon: faCircleUser
    },
    {
      name: 'SKILLS',
      path: '/skills',
      icon: faGear
    }
  ];
  const externalLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/om-moradia-112133213/',
      icon: faLinkedin
    },
    {
      name: 'GitHub',
      href: 'https://github.com/YonkoOm',
      icon: faGithub
    },
    {
      name: 'Email',
      href: 'mailto:moradia@wisc.edu',
      icon: faEnvelope
    }
  ];

  return (
    <div className="w-full md:w-[60px] h-12 md:h-full md:min-h-screen absolute bg-black/30 md:bg-black/60 backdrop-blur-[10px] select-none z-30">
      <Link
        href="/"
        className="inline-flex md:block my-[7px] p-[7px] md:my-2 md:px-0 md:py-2"
      >
        <motion.div
          whileHover={{ rotate: 20 }}
          className="md:block relative mr-1 md:mx-auto my-auto w-12 md:w-14 h-5 md:h-[22px]"
        >
          <Image
            src="/images/mugiwara.png"
            alt="straw hat logo"
            sizes="60px"
            fill
            priority
          />
        </motion.div>
        <div
          className={`md:block text-[#fff7ed] text-center text-sm md:text-xs ${mplus.variable} font-mplus font-bold mt-1`}
        >
          Moradia
        </div>
      </Link>
      <nav className="hidden md:block absolute w-full text-center leading-[51px] top-[50%] -mt-[110px]">
        {internalLinks.map(link => (
          <NavLink
            key={link.name}
            href={link.path}
            afterText={link.name}
            className="group text-[#fff7ed] relative block text-[22px] no-underline after:transition-all after:duration-700 after:ease-out after:opacity-0 hover:after:opacity-100 after:content-[attr(after-text)] after:text-[9px] after:text-[#64ffda] after:absolute after:block after:bottom-0 after:w-full after:text-center after:tracking-[1.75px]"
          >
            <FontAwesomeIcon
              icon={link.icon}
              className="group-hover:opacity-40"
            />
          </NavLink>
        ))}
      </nav>
      <ul className="hidden absolute md:block w-full leading-5 bottom-10 m-0 p-0 text-lg list-none text-center">
        {externalLinks.map(link => (
          <li key={link.name}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="block text-[#64ffda] hover:text-[#fff7ed] py-2"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          </li>
        ))}
      </ul>
      <MobileMenu />
    </div>
  );
};

export default Navbar;
