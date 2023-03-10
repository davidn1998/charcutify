import {
  CarouselItem1,
  CarouselItem3,
  CarouselItem5,
} from "@/components/CarouselItems";
import { ICarouselItem } from "@/types";
import { useDrag } from "@use-gesture/react";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  carouselItems: ICarouselItem[];
  displayNumber: number;
  offsetInit: number;
};

export const Carousel = ({
  carouselItems,
  displayNumber,
  offsetInit,
}: Props) => {
  const [offset, setOffset] = useState(offsetInit);
  const [disabled, setDisabled] = useState(false);

  const bind = useDrag(
    ({ active, direction: [xDir], cancel }) => {
      if (active && xDir > 0) {
        handleNext();
        cancel();
      } else if (active && xDir < 0) {
        handlePrev();
        cancel();
      }
    },
    {
      threshold: 100,
      enabled: !disabled,
    }
  );

  const handleNext = () => {
    setDisabled(true);
    let newoffset = 0;
    if (offset === carouselItems.length - 1) {
      newoffset = 0;
    } else {
      newoffset = offset + 1;
    }
    setOffset(newoffset);
    setTimeout(() => {
      setDisabled(false);
    }, 700);
  };

  const handlePrev = () => {
    setDisabled(true);
    let newoffset = 0;
    if (offset === 0) {
      newoffset = carouselItems.length - 1;
    } else {
      newoffset = offset - 1;
    }
    setOffset(newoffset);
    setTimeout(() => {
      setDisabled(false);
    }, 700);
  };

  const getPos = (currPos: number) => {
    let newPos = 0;

    if (currPos + offset >= carouselItems.length) {
      newPos = currPos + offset - carouselItems.length;
    } else {
      newPos = currPos + offset;
    }

    return newPos;
  };

  return (
    <div className="flex h-[700px] items-center justify-center">
      <button
        onClick={() => handlePrev()}
        disabled={disabled}
        className="bg-neutral-600 p-3 text-3xl transition-all duration-500 hover:bg-white hover:text-neutral-900"
      >
        <MdKeyboardArrowLeft />
      </button>
      <div
        {...bind()}
        className="relative mx-auto flex h-[400px] w-[75vw] touch-pan-y justify-center md:h-[600px]"
      >
        {carouselItems.map((item, i) => {
          let carousel = <></>;
          switch (displayNumber) {
            case 1:
              carousel = (
                <CarouselItem1
                  key={i}
                  title={item.title}
                  desc={item.desc}
                  imgSrc={item.imgSrc}
                  imgW={item.imgW}
                  imgH={item.imgH}
                  position={getPos(i)}
                />
              );
              break;
            case 3:
              carousel = (
                <CarouselItem3
                  key={i}
                  title={item.title}
                  desc={item.desc}
                  imgSrc={item.imgSrc}
                  imgW={item.imgW}
                  imgH={item.imgH}
                  position={getPos(i)}
                />
              );
              break;
            case 5:
              carousel = (
                <CarouselItem5
                  key={i}
                  title={item.title}
                  desc={item.desc}
                  imgSrc={item.imgSrc}
                  imgW={item.imgW}
                  imgH={item.imgH}
                  position={getPos(i)}
                />
              );
              break;
          }
          return carousel;
        })}
      </div>
      <button
        onClick={() => handleNext()}
        disabled={disabled}
        className="bg-neutral-600 p-3 text-3xl transition-all duration-500 hover:bg-white hover:text-neutral-900"
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};
