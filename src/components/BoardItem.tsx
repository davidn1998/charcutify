import { IBoardItem } from "@/types";
import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { RefObject } from "react";

interface IProps extends IBoardItem {
  board: RefObject<HTMLDivElement>;
}

export const BoardItem = ({ board, imageSrc, width, height }: IProps) => {
  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    background: `url(${imageSrc})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: width,
    height: height,
    cursor: "grab",
    touchAction: "none",
  }));

  const bind = useGesture(
    {
      onDrag: ({ cancel, offset: [x, y] }) => api.start({ x, y }),
    },
    {
      drag: { bounds: board },
    }
  );

  return (
    <animated.div {...bind()} style={style} className="absolute"></animated.div>
  );
};
