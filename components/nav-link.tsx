import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  href: string;
  className: string;
  children: React.ReactNode;
}

const NavLink: React.FC<Props> = ({ href, children, ...props }) => {
  const { asPath } = useRouter();
  return (
    <Link
      href={href}
      {...props}
      style={{ color: href === asPath ? '#64ffda' : undefined }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
