import boards from "@/boards.json";
import { Carousel } from "@/components/Carousel";
import { Meta } from "@/components/Meta";
import Image from "next/image";

const index = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Meta title="charcutify" />
      <section
        id="hero"
        className="flex flex-col items-center justify-center bg-contain bg-no-repeat md:bg-[url('/bg_text.png')] md:pt-40"
      >
        <div className="md:hidden">
          <Carousel carouselItems={boards} displayNumber={1} offsetInit={0} />
        </div>
        <div className="hidden md:max-2xl:block">
          <Carousel carouselItems={boards} displayNumber={3} offsetInit={1} />
        </div>
        <div className="hidden 2xl:block">
          <Carousel carouselItems={boards} displayNumber={5} offsetInit={2} />
        </div>
        <div className="flex flex-col md:flex-row">
          <button className="m-3 rounded-bl-lg rounded-tr-lg border-2 border-primary bg-primary px-20 py-6 text-center text-[18px] font-bold tracking-[0.3em] transition-all duration-300 hover:border-white hover:bg-neutral-700 hover:text-primary">
            CUSTOMISE
          </button>
          <button className="m-3 rounded-bl-lg rounded-tr-lg border-2 px-20 py-6 text-center text-[18px] font-bold tracking-[0.3em] transition-all duration-300 hover:bg-neutral-700 hover:text-primary">
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
