import useCategory from "../hooks/useCategory";

const CategorySelector = () => {
  const { data } = useCategory();
  return (
    <div>
      <select className="border">
        {data?.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
