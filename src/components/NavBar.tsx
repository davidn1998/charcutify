import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";

type NavLink = {
  label: string;
  path: string;
};

export const NavBar = ({}) => {
  const navLinksLeft: NavLink[] = [
    { label: "customise", path: "/customise" },
    { label: "premade", path: "/boards" },
  ];
  const navLinksRight: NavLink[] = [
    { label: "about", path: "/about" },
    { label: "contact", path: "/contact" },
  ];

  return (
    <nav className="mb-32 mt-6 flex h-24 items-center justify-center text-xl tracking-widest">
      <ul className="flex w-3/4 list-none flex-col items-center lg:flex-row">
        {navLinksLeft.map((navLink, i) => (
          <NavLink key={i} label={navLink.label} path={navLink.path} />
        ))}
        <Link href="/" className="mx-8">
          <Image
            src="/logos/logo-no-background.png"
            alt="logo"
            width={216}
            height={85}
          />
        </Link>
        {navLinksRight.map((navLink, i) => (
          <NavLink key={i} label={navLink.label} path={navLink.path} />
        ))}
      </ul>
    </nav>
  );
};
