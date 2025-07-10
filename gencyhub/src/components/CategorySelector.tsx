import useCategory from "../hooks/useCategory";
import useProductquery from "../productquerystore";


const CategorySelector = () => {
  const { data } = useCategory();
  const setcategory = useProductquery(s=>s.setCategory)
  return (
    <div>
      <select className="border border-gray-800"onChange={(e)=> setcategory(e.target.value)} >
        {data?.map((category, index) => (
          <option className="text-gray-800" key={index} value={category.slug}>
            {category.slug}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
