import { IBoardItem, IIngredient } from "@/types";
import ingredients from "@/utility/ingredients.json";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { BoardItem } from "./BoardItem";
import { IngredientSelect } from "./IngredientSelect";

export const CustomBoard = () => {
  const [newID, setNewID] = useState(0);
  const board = useRef<HTMLDivElement>(null);
  const bin = useRef<HTMLDivElement>(null);
  const [boardItems, setBoardItems] = useState<IBoardItem[]>([]);

  const addBoardItem = (item: IIngredient) => {
    const boardItem: IBoardItem = {
      id: newID,
      name: item.name,
      imageSrc: item.imageSrc,
      width: item.width,
      height: item.height,
    };
    setNewID(newID + 1);
    setBoardItems([...boardItems, boardItem]);
  };

  const deleteBoardItem = (index: number) => {
    let filtered = boardItems.filter((_, i) => i !== index);
    setBoardItems(filtered);
  };

  return (
    <div
      className="relative flex w-full items-start justify-center"
      ref={board}
    >
      <div className="flex h-full w-full flex-col items-center border-2">
        <h2 className=" w-full border-b-2 p-2 text-center text-3xl">
          Current Ingredients
        </h2>
        <ul className="p-4">
          {boardItems.length === 0 && <p>No Items Added</p>}
          {boardItems.map((item, i) => {
            return <li key={i}>{item.name}</li>;
          })}
        </ul>
      </div>
      <Image
        src="/boards/valentines.png"
        alt="valentines board"
        width={1200}
        height={950}
        draggable={false}
        className="mx-8"
      />
      {boardItems.map((ingredient, i) => {
        return (
          <BoardItem
            key={ingredient.id}
            id={ingredient.id}
            board={board}
            bin={bin}
            name={ingredient.name}
            imageSrc={ingredient.imageSrc}
            width={ingredient.width}
            height={ingredient.height}
            deleteBoardItem={() => deleteBoardItem(i)}
          />
        );
      })}
      <div className="flex w-full flex-col content-end">
        <h3 className="mb-4 text-xl text-primary">Meat Select</h3>
        <IngredientSelect
          ingredients={ingredients.meat}
          addBoardItem={addBoardItem}
        />
        <h3 className="mt-8 mb-4 text-xl text-primary">Cheese Select</h3>
        <IngredientSelect
          ingredients={ingredients.cheese}
          addBoardItem={addBoardItem}
        />
        <h3 className="mt-8 mb-4 text-xl text-primary">Starch Select</h3>
        <IngredientSelect
          ingredients={ingredients.starch}
          addBoardItem={addBoardItem}
        />
        <h3 className="mt-8 mb-4 text-xl text-primary">Produce Select</h3>
        <IngredientSelect
          ingredients={ingredients.produce}
          addBoardItem={addBoardItem}
        />
        <div className="mx-auto mt-16 w-auto" ref={bin}>
          <FaTrash className="text-8xl" />
        </div>
      </div>
    </div>
  );
};
