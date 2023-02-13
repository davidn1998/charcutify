import Link from "next/link";

export const CTAButtons = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center md:mx-0 md:flex-row">
      <Link
        href="/customise"
        className="mb-4 w-full rounded-bl-lg rounded-tr-lg border-2 border-primary bg-primary px-16 py-4 text-center text-[18px] font-bold tracking-[0.3em] transition-all duration-300 hover:border-white hover:bg-neutral-700 hover:text-primary md:mb-0 md:mr-8 md:w-1/3 md:px-4  xl:w-1/2"
      >
        CUSTOMISE
      </Link>
      <Link
        href="/premade"
        className="w-full rounded-bl-lg rounded-tr-lg border-2 px-16 py-4 text-center text-[18px] font-bold tracking-[0.3em] transition-all duration-300 hover:bg-neutral-700 hover:text-primary md:w-1/3 md:px-4 xl:w-1/2"
      >
        PREMADE
      </Link>
    </div>
  );
};
