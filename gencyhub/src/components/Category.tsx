import { useState } from "react";
import useCategory from "../hooks/useCategory";
import useProductquery from "../productquerystore";
import categoryimages from "./CategoryImage";
const Category = () => {
  const { data } = useCategory();
  const setCategory = useProductquery((s) => s.setCategory);

  const [isActive, setActive] = useState("");
  return (
    <div className="hidden lg:h-[55rem] lg:w-70 p-2 md:block  md:h-[38rem] md:w-70 text-black  ">
      <button
        className={`pb-2  md:text-2xl cursor-pointer dark:text-white ${
          isActive === "All Category" ? "font-bold" : "font-medium"
        }`}
        onClick={() => {
          setCategory("");
          setActive("All Category");
        }}
      >
        All Category
      </button>
      {data?.map((Category, index) => (
        <ul key={index} className="flex items-center w-80 py-1">
          <img
            className="h-10 w-10 rounded-xl"
            src={categoryimages[Category.slug]}
            alt=""
          />
          <button
            onClick={() => {
              setCategory(Category.slug);
              setActive(Category.name);
            }}
            className={`pb-2 pl-4 md:text-xl text-gray-800 dark:text-white cursor-pointer  ${
              isActive === Category.name ? "font-bold" : "font-medium"
            }`}
          >
            {Category.name}
          </button>
        </ul>
      ))}
    </div>
  );
};

export default Category;
