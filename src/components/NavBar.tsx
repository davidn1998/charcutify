import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";

type NavLink = {
  label: string;
  path: string;
};

export const NavBar = ({}) => {
  const navLinksLeft: NavLink[] = [{ label: "customise", path: "/customise" }];
  const navLinksRight: NavLink[] = [{ label: "premade", path: "/boards" }];

  return (
    <nav className="mb-32 mt-6 flex h-24 items-center justify-center text-xl tracking-widest">
      <ul className="flex w-1/2 list-none flex-col items-center lg:hidden">
        <Link href="/" className="mx-8 mb-4">
          <Image
            priority
            src="/logos/logo-no-background.png"
            alt="logo"
            width={216}
            height={85}
          />
        </Link>
        <NavLink label={"customise"} path={"/customise"} />
        <NavLink label={"premade"} path={"/premade"} />
      </ul>
      <ul className="hidden w-1/2 list-none items-center lg:flex">
        <NavLink label={"customise"} path={"/customise"} />
        <Link href="/" className="mx-8">
          <Image
            priority
            src="/logos/logo-no-background.png"
            alt="logo"
            width={216}
            height={85}
          />
        </Link>
        <NavLink label={"premade"} path={"/premade"} />
      </ul>
    </nav>
  );
};
