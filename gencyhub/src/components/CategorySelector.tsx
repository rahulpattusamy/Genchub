import useCategory from "../hooks/useCategory";
import useProductquery from "../store/productquerystore";

const CategorySelector = () => {
  const { data } = useCategory();
  const setcategory = useProductquery((s) => s.setCategory);

  return (
    <div className="dark:bg-black">
      <select
        className=" outline-0 rounded-sm w-60 h-10 font-bold bg-red-400 text-white ml-2 "
        onChange={(e) => {
          setcategory(e.target.value);
        }}
      >
        <option className="text-black bg-white" value="">
          All Category
        </option>
        {data?.map((category, index) => (
          <option
            className="text-black bg-white"
            key={index}
            value={category.slug}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
