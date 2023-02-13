import Image from "next/image";
import { useRef } from "react";
import { BoardItem } from "./BoardItem";

export const CustomBoard = () => {
  const board = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div
        className="relative mx-auto flex items-start justify-center"
        ref={board}
      >
        <Image
          src="/boards/valentines.png"
          alt="valentines board"
          width={1200}
          height={950}
        />
        <BoardItem
          board={board}
          imageSrc="/prosciutto.png"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
