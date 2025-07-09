import useCategory from "../hooks/useCategory";
import useProductquery from "../productquerystore";

const Category = () => {
  const { data } = useCategory();
  const setCategory = useProductquery(s=>s.setCategory)
  return (
    <div className="hidden lg:h-[55rem] lg:w-70 p-2 md:block  md:h-[38rem] md:w-50 bg-white shadow-2xl rounded-lg text-black">
      {data?.map((Category, index) => (
        <ul key={index}>
          <img className="" src={Category.url} alt="" />
          <button onClick={()=>{setCategory(Category.slug);}
          } className="text-xl pb-2 pl-4 md:text-xs lg:text-xl cursor-pointer">
            {Category.slug}
          </button>
        </ul>
      ))}
    </div>
  );
};

export default Category;
