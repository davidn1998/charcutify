import Image from "next/image";
import Link from "next/link";
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
    </footer>
  );
};
