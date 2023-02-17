import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { Meta } from "@/components/Meta";
import boards from "@/utility/carouselBoards.json";

const premade = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Meta title="Charcutify - Premade Boards" />
      <section
        id="main-carousel"
        className="flex min-h-screen flex-col items-center justify-center"
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
      <Footer />
    </div>
  );
};

export default premade;
