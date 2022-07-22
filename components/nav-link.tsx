import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string;
  className: string;
  children: React.ReactNode;
}

// potentially add a activeColor and inActiveColor prop
const NavLink: React.FC<Props> = ({ href, children, ...props }) => {
  const { asPath } = useRouter();
  // green-bright: #64ffda
  // orange-400: #fb923c
  // grass-teal: #88ccca
  return (
    <Link href={href}>
      <a {...props} style={{ color: href === asPath ? "#64ffda" : undefined }}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
