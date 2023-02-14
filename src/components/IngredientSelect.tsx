import { IBoardItem, IIngredient } from "@/types";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

interface IProps {
  ingredients: IIngredient[];
  addBoardItem: (item: IIngredient) => void;
}

export const IngredientSelect = ({ ingredients, addBoardItem }: IProps) => {
  const [selectedIngredient, setSelectedIngredient] = useState<IIngredient>(
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
          <div className="flex w-2/3 justify-between border-2 bg-transparent p-4">
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
            onClick={() => addBoardItem(selectedIngredient)}
            className="w-1/3 border-2 border-l-0 p-2 transition-all hover:bg-primary"
          >
            Add
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
