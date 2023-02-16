import { IBoardItem } from "@/types";

type Props = {
  boardItems: IBoardItem[];
};

export const IngredientList = ({ boardItems }: Props) => {
  const ingredientCountMap = boardItems.reduce(
    (acc: Map<string, number>, ingredient: IBoardItem) => {
      const currCount = acc.get(ingredient.name) || 0;
      acc.set(ingredient.name, currCount + 1);
      return acc;
    },
    new Map<string, number>()
  );

  return (
    <div className="flex h-full w-full flex-col items-center border-2">
      <h2 className=" w-full border-b-2 p-2 text-center text-3xl">
        Current Ingredients
      </h2>
      <ul className="p-4">
        {ingredientCountMap.size === 0 && <p>No Items Added</p>}
        {Array.from(ingredientCountMap).map(([name, count], i) => {
          return (
            <li key={i}>
              {name} x{count}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
