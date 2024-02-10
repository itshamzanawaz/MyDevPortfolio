"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded-full p-2 px-3 ${pathName === link.url && "bg-black text-white"} hover:scale-125 transition-all`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
