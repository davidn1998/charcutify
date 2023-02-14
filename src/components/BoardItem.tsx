import { IBoardItem } from "@/types";
import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import Image from "next/image";
import { RefObject, useRef } from "react";

interface IProps extends IBoardItem {
  board: RefObject<HTMLDivElement>;
  bin: RefObject<HTMLDivElement>;
  deleteBoardItem: () => void;
}

export const BoardItem = ({
  board,
  bin,
  name,
  imageSrc,
  width,
  height,
  deleteBoardItem,
}: IProps) => {
  const boardItem = useRef<HTMLDivElement>(null);

  function elementsOverlap(
    el1: HTMLDivElement | null,
    el2: HTMLDivElement | null
  ) {
    if (!el1 || !el2) {
      return false;
    }

    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }

  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
    cursor: "grab",
    touchAction: "none",
  }));

  const bind = useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) => {
        const overlap = elementsOverlap(boardItem?.current, bin?.current);
        let scaleX = 1;
        let scaleY = 1;
        if (overlap) {
          scaleX = 0.3;
          scaleY = 0.3;
          if (!active) {
            deleteBoardItem();
          }
        }
        api.start({ x, y, scaleX, scaleY });
      },
    },
    {
      drag: { bounds: board },
    }
  );

  return (
    <animated.div
      {...bind()}
      style={style}
      className="absolute"
      ref={boardItem}
    >
      <Image
        src={imageSrc}
        alt={name}
        width={width}
        height={height}
        draggable={false}
      />
    </animated.div>
  );
};
