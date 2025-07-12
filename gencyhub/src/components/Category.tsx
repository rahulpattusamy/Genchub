import { useNavigate } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import useProductquery from "../productquerystore";
import categoryimages from "./CategoryImage";
const Category = () => {
  const { data } = useCategory();
  const setCategory = useProductquery(s=>s.setCategory)
  return (
    <div className="hidden lg:h-[55rem] lg:w-70 p-2 md:block  md:h-[38rem] md:w-70 text-black ">
       <button>All Category</button>
      {data?.map((Category, index) => (
        
        <ul key={index} className="flex items-center w-80 py-1">
          
          <img className="h-10 w-10 rounded-xl" src={categoryimages[Category.slug]} alt="" />
          <button onClick={()=>{setCategory(Category.slug); console.log(Category.slug)}
          } className="  pb-2 pl-4 md:text-2xl cursor-pointer text-black ">
            {Category.name}
          </button>
        </ul>
      ))}
    </div>
  );
};

export default Category;
