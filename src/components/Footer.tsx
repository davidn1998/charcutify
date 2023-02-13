import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";
type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="flex w-full justify-around bg-gradient-to-b from-neutral-900 to-primary py-16">
      <div>
        <Link href="/" className="mx-8">
          <Image
            src="/logos/logo-no-background.png"
            alt="logo"
            width={108}
            height={42}
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <h4 className="mb-4 text-xl">charcutify</h4>
        <ul>
          <li className="mb-1 font-light transition-all hover:text-neutral-400">
            <Link href="/">Home</Link>
          </li>
          <li className="mb-1 font-light transition-all hover:text-neutral-400">
            <Link href="/about">About</Link>
          </li>
          <li className="mb-1 font-light transition-all hover:text-neutral-400">
            <Link href="/customise">Customise</Link>
          </li>
          <li className="mb-1 font-light transition-all hover:text-neutral-400">
            <Link href="/premade">Premade</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h4 className="mb-4 text-xl">company</h4>
        <ul>
          <li className="mb-1 font-light transition-all hover:text-neutral-400">
            <Link href="/api/boards" target="_blank">
              API
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h4 className="mb-4 text-xl">contact</h4>
        <ul>
          <li className="mb-4 font-light">help@charcutify.com</li>
          <li className="mb-1 flex justify-between text-3xl font-light">
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
