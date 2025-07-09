import useCategory from "../hooks/useCategory";


const CategorySelector = () => {
  const { data } = useCategory();
  return (
    <div>
      <select className="border">
        {data?.map((category, index) => (
          <option key={index} value={category.slug}>
            {category.slug}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
