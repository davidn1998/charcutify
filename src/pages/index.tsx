import { Carousel } from "@/components/Carousel";
import { CTAButtons } from "@/components/CTAButtons";
import { FeaturedBar } from "@/components/FeaturedBar";
import { Footer } from "@/components/Footer";
import { InstructionStep } from "@/components/InstructionStep";
import { Meta } from "@/components/Meta";
import boards from "@/utility/carouselBoards.json";
import instructions from "@/utility/instructions.json";
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
            <p className="mb-8 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              delectus accusantium officiis expedita, deleniti ullam!
            </p>
            <CTAButtons />
          </div>
          <Image
            priority
            src="/premade_boards/board1.png"
            alt="board"
            width={826}
            height={641}
            className="lg:w-2/3 xl:w-1/2"
          />
        </div>
      </section>
      <section
        id="main-carousel"
        className="flex flex-col items-center justify-center"
      >
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
      </section>
      <main className="container mx-auto mb-36 flex flex-1 flex-col items-center px-8">
        <FeaturedBar />
        <div>
          {instructions.map((instruction, i) => {
            return (
              <InstructionStep
                key={i}
                step={instruction.step}
                title={instruction.title}
                desc={instruction.desc}
                images={instruction.images}
                reverse={i % 2 !== 0}
              />
            );
          })}
        </div>
        <div className="relative mx-auto flex items-center justify-center">
          <Image
            src="/final_board.png"
            alt="final_board"
            width={993}
            height={774}
          />
          <h1 className="absolute text-center text-4xl font-bold leading-normal tracking-widest opacity-60 sm:text-6xl md:text-7xl lg:text-8xl">
            VISUALISE YOUR CUSTOM CREATION
          </h1>
        </div>
        <section className="container mt-16 flex w-full flex-col items-center justify-center xl:w-1/2">
          <CTAButtons />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default index;
