import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { RefObject } from "react";

type Props = {
  board: RefObject<HTMLDivElement>;
  imageSrc: string;
  width: number;
  height: number;
};

export const BoardItem = ({ board, imageSrc, width, height }: Props) => {
  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    background: `url(${imageSrc})`,
    backgroundSize: "cover",
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
