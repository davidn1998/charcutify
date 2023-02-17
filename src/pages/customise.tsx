import { CustomBoard } from "@/components/CustomBoard";
import Image from "next/image";
import Link from "next/link";

const customise = () => {
  return (
    <main className="mx-auto flex flex-1 flex-col items-center px-8">
      <div className="2xl:hidden">
        <h1 className="mb-16 text-4xl">
          The customisation tool is unavailable at your current screen size.
        </h1>
        <p className="mb-16 text-xl">
          Please use a device with a bigger screen to access the customisation
          tool.
        </p>
        <p className="mb-16 text-xl">
          Alternatively, browse our{" "}
          <Link
            className="cursor-pointer text-primary hover:text-neutral-500"
            href="/premade"
          >
            premade boards
          </Link>
        </p>
        <Image
          src="/customise_screen.png"
          alt="customise_screen"
          width={1000}
          height={500}
        />
      </div>
      <div className="mb-36 hidden w-full flex-1 flex-col items-center 2xl:flex">
        <h1 className="mb-16 text-4xl">CUSTOMISE</h1>
        <CustomBoard />
      </div>
    </main>
  );
};

export default customise;
