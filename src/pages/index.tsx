import boards from "@/boards.json";
import { Carousel } from "@/components/Carousel";
import { Meta } from "@/components/Meta";
import Image from "next/image";

const index = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Meta title="Charcutify" />
      <section
        id="hero"
        className="flex flex-col items-center justify-center bg-contain bg-[center_top] bg-no-repeat lg:bg-[url('/bg_text.png')] lg:pt-20"
      >
        <div className="container flex flex-col items-center justify-center px-8 md:mb-40 xl:flex-row">
          <div className="flex flex-1 flex-col text-center xl:w-1/3 xl:text-start">
            <h1 className="mb-8 text-7xl lg:text-8xl xl:text-9xl">
              Every Board Has A Story
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              delectus accusantium officiis expedita, deleniti ullam!
            </p>
            <div className="mt-8 flex flex-col justify-center md:flex-row">
              <button className="mr-8 mb-4 w-full rounded-bl-lg rounded-tr-lg border-2 border-primary bg-primary px-16 py-4 text-center text-[18px] font-bold tracking-[0.3em] transition-all duration-300 hover:border-white hover:bg-neutral-700 hover:text-primary md:mb-0 md:w-1/3 md:px-4 xl:w-1/2">
                CUSTOMISE
              </button>
              <button className="w-full rounded-bl-lg rounded-tr-lg border-2 px-16 py-4 text-center text-[18px] font-bold tracking-[0.3em] transition-all duration-300 hover:bg-neutral-700 hover:text-primary md:w-1/3 md:px-4 xl:w-1/2">
                PRE-MADE
              </button>
            </div>
          </div>
          <Image
            src="/boards/board1.png"
            alt="board"
            width={826}
            height={641}
            className="lg:w-2/3 xl:w-1/2"
          />
        </div>
        {boards.length >= 3 && (
          <div className={`${boards.length >= 5 && "md:hidden"}`}>
            <Carousel carouselItems={boards} displayNumber={1} offsetInit={0} />
          </div>
        )}
        {boards.length >= 5 && (
          <div
            className={`${boards.length >= 7 && "2xl:hidden"} hidden md:block`}
          >
            <Carousel carouselItems={boards} displayNumber={3} offsetInit={1} />
          </div>
        )}
        {boards.length >= 7 && (
          <div className="hidden 2xl:block">
            <Carousel carouselItems={boards} displayNumber={5} offsetInit={2} />
          </div>
        )}
        <div className="mx-auto mt-8 flex flex-col md:mx-0 md:flex-row">
          <button className="mr-8 mb-4 w-full rounded-bl-lg rounded-tr-lg border-2 border-primary bg-primary px-16 py-4 text-center text-[18px] font-bold tracking-[0.3em] transition-all duration-300 hover:border-white hover:bg-neutral-700 hover:text-primary md:mb-0 md:w-1/2">
            CUSTOMISE
          </button>
          <button className="w-full rounded-bl-lg rounded-tr-lg border-2 px-16 py-4 text-center text-[18px] font-bold tracking-[0.3em] transition-all duration-300 hover:bg-neutral-700 hover:text-primary md:w-1/2">
            PRE-MADE
          </button>
        </div>
        <Image
          src="/featured_on.png"
          alt="feautured_on"
          width={1065}
          height={82}
          className="my-24"
        />
      </section>
      <main className="container mx-auto flex flex-1 flex-col px-8"></main>
    </div>
  );
};

export default index;
