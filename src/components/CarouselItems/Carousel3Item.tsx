import { ICarouselItem } from "@/types";
import { cva } from "cva";
import Image from "next/image";

const itemStyle = cva(
  "flex flex-col items-center text-center w-1/2 absolute transition-all ease-linear duration-700",
  {
    variants: {
      pos: {
        enter:
          "opacity-0 -left-[30%] -top-28 -translate-x-1/2 -z-10 invisible scale-0",
        0: "opacity-25 order-1 left-[10%] -top-16 -translate-x-1/2 -z-10 scale-75",
        1: "opacity-100 order-2 left-[50%] top-0 -translate-x-1/2 -z-10 scale-125",
        2: "opacity-25 order-3 left-[90%] -top-16 -translate-x-1/2 -z-10 scale-75",
        exit: "opacity-0 left-[110%] -top-28 -translate-x-1/2 -z-10 invisible duration-500 scale-0",
      },
    },
    defaultVariants: {
      pos: "enter",
    },
  }
);

const textStyle = cva("transition-all duration-500", {
  variants: {
    pos: {
      enter: "hidden scale-0 opacity-0",
      0: "scale-0 opacity-0",
      1: "scale-1 opacity-100",
      2: "scale-0 opacity-0",
      exit: "hidden scale-0 opacity-0",
    },
  },
  defaultVariants: {
    pos: "enter",
  },
});

interface IItem extends ICarouselItem {
  position: number;
}

export const CarouselItem3 = ({
  title,
  desc,
  imgSrc,
  imgW,
  imgH,
  position,
}: IItem) => {
  let pos: 0 | 1 | 2 | "exit" | "enter" | null | undefined;
  switch (position) {
    case 0:
      pos = 0;
      break;
    case 1:
      pos = 1;
      break;
    case 2:
      pos = 2;
      break;
    case 3:
      pos = "exit";
      break;
    default:
      pos = "enter";
      break;
  }

  return (
    <div className={itemStyle({ pos: pos })}>
      <h1 className={`text-4xl tracking-widest ${textStyle({ pos: pos })}`}>
        {title}
      </h1>
      <Image
        src={imgSrc}
        alt="board"
        width={imgW}
        height={imgH}
        className="my-24"
      />
      <p className={`text-base font-light ${textStyle({ pos: pos })}`}>
        {desc}
      </p>
    </div>
  );
};
