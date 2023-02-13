import { IBoardItem } from "@/types";
import ingredients from "@/utility/ingredients.json";
import Image from "next/image";
import { useRef, useState } from "react";
import { BoardItem } from "./BoardItem";
import { IngredientSelect } from "./IngredientSelect";

export const CustomBoard = () => {
  const board = useRef<HTMLDivElement>(null);
  const [boardItems, setBoardItems] = useState<IBoardItem[]>([]);

  const generateBoardItem = (item: IBoardItem) => {
    setBoardItems([...boardItems, item]);
  };

  return (
    <div className="flex">
      <div
        className="relative mx-auto mr-6 flex items-start justify-center"
        ref={board}
      >
        <Image
          src="/boards/valentines.png"
          alt="valentines board"
          width={1200}
          height={950}
          draggable={false}
        />
        {boardItems.map((ingredient, i) => (
          <BoardItem
            key={i}
            board={board}
            name={ingredient.name}
            imageSrc={ingredient.imageSrc}
            width={ingredient.width}
            height={ingredient.height}
          />
        ))}
      </div>
      <div className="flex flex-col">
        <h3 className="mb-4 text-xl">Meat Select</h3>
        <IngredientSelect
          ingredients={ingredients.meat}
          generateBoardItem={generateBoardItem}
        />
      </div>
    </div>
  );
};
