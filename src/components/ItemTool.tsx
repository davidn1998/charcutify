import { useEffect, useState } from "react";
import { AiOutlineRotateLeft, AiOutlineRotateRight } from "react-icons/ai";

interface Props {
  rotateCW: () => void;
  rotateACW: () => void;
  rotation: number;
  itemHeight: number;
  itemWidth: number;
}

export const ItemTool = ({
  rotateCW,
  rotateACW,
  rotation,
  itemHeight,
  itemWidth,
}: Props) => {
  const [isRotatingCW, setIsRotatingCW] = useState<boolean>(false);
  const [isRotatingACW, setIsRotatingACW] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRotatingCW) {
      interval = setInterval(rotateCW, 50);
    }
    return () => clearInterval(interval);
  }, [rotateCW, isRotatingCW]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRotatingACW) {
      interval = setInterval(rotateACW, 50);
    }
    return () => clearInterval(interval);
  }, [rotateACW, isRotatingACW]);

  return (
    <div
      style={{
        position: "absolute",
        transform: `rotate(${-rotation}deg)`,
        top: itemHeight / 2,
        right: itemWidth / 2,
      }}
    >
      <span className="absolute left-1/2 top-1/2 z-50 flex w-auto min-w-max -translate-x-1/2 -translate-y-1/2 scale-0 cursor-pointer list-none rounded-md bg-gray-900 text-xs font-bold text-white shadow-md transition-none duration-300 group-hover:scale-100">
        <li
          className="border-2 p-2 text-lg"
          onMouseDown={() => setIsRotatingCW(true)}
          onMouseUp={() => setIsRotatingCW(false)}
        >
          <AiOutlineRotateRight />
        </li>
        <li
          className="border-2 p-2 text-lg"
          onMouseDown={() => setIsRotatingACW(true)}
          onMouseUp={() => setIsRotatingACW(false)}
        >
          <AiOutlineRotateLeft />
        </li>
      </span>
    </div>
  );
};
