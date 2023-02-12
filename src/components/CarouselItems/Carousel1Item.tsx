import { ICarouselItem } from "@/types";
import { cva } from "cva";
import Image from "next/image";

const itemStyle = cva(
  "flex flex-col flex-1 w-full items-center justify-center text-center absolute transition-all ease-linear duration-700",
  {
    variants: {
      pos: {
        enter:
          "opacity-0 -left-[30%] -top-28 -translate-x-1/2 -z-10 invisible scale-0",
        0: "opacity-100 order-1 left-[50%] top-0 -translate-x-1/2 -z-10 scale-100",
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
      0: "scale-1 opacity-100",
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

export const CarouselItem1 = ({
  title,
  desc,
  imgSrc,
  imgW,
  imgH,
  position,
}: IItem) => {
  let pos: 0 | "exit" | "enter" | null | undefined;
  switch (position) {
    case 0:
      pos = 0;
      break;
    case 1:
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
        className="my-16"
      />
      <p className={`text-base font-light ${textStyle({ pos: pos })}`}>
        {desc}
      </p>
    </div>
  );
};
