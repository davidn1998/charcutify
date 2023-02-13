import { IBoardItem } from "@/types";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

interface IProps {
  ingredients: IBoardItem[];
  generateBoardItem: (item: IBoardItem) => void;
}

export const IngredientSelect = ({
  ingredients,
  generateBoardItem,
}: IProps) => {
  const [selectedIngredient, setSelectedIngredient] = useState<IBoardItem>(
    ingredients[0]
  );
  const [query, setQuery] = useState("");

  const filteredIngredients =
    query === ""
      ? ingredients
      : ingredients.filter((ingredient) => {
          return ingredient.name.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <Combobox value={selectedIngredient} onChange={setSelectedIngredient}>
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex justify-between border-2 bg-transparent p-4">
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(ingredient: IBoardItem) => ingredient.name}
              className="mr-4 w-full rounded-sm bg-transparent focus:outline-none"
            />
            <Combobox.Button>
              <MdKeyboardArrowDown className="text-2xl" />
            </Combobox.Button>
          </div>
          <button
            onClick={() => generateBoardItem(selectedIngredient)}
            className="border-2 border-l-0 p-2 transition-all hover:bg-primary"
          >
            Generate
          </button>
        </div>
        <Combobox.Options className="mt-2 border-2 bg-transparent transition-all">
          {filteredIngredients.map((ingredient) => (
            <Combobox.Option key={ingredient.name} value={ingredient}>
              {({ active, selected }) => (
                <div
                  className={`${active ? "bg-primary" : ""}
                  flex cursor-pointer items-center p-4`}
                >
                  {selected && <FaCheck className="mr-2" />}
                  {ingredient.name}
                </div>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
};
