import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  className?: string;
  pathStyling?: string;
  afterText?: string;
  children: React.ReactNode;
}

const NavLink: React.FC<Props> = ({
  href,
  className: styling,
  pathStyling,
  afterText,
  children
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      after-text={afterText}
      className={
        href === pathname && pathStyling
          ? styling?.concat(' ', pathStyling)
          : styling
      }
      style={{
        color: href === pathname ? '#64ffda' : undefined
      }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
