import { useNavigate } from "react-router-dom";
import categoryimages from "../components/CategoryImage"
import useCategory from "../hooks/useCategory";
import useProductquery from "../productquerystore";

const HomePage = () => {
     const { data } = useCategory();
  const setCategory = useProductquery((s) => s.setCategory);
 const navigate =  useNavigate()
  return (
     <>
     <p className=" ml-10 mt-5 md:block text-xl font-medium absolute md:mt-5 md:ml-21 dark:text-white">Product Category</p>
    <div className="grid grid-cols-2 pl-10 pt-20 gap-y-10 md:p-20 lg:grid-cols-4 lg:p-20 relative">
      {data.map((category, index)=>
      <div className="card2" key={index}>
      <img
            className="h-40 w-full hover:cursor-pointer rounded-xl hover:scale-110 transition-transform duration-300 relative md:h-48 md:w-full md:rounded-xl "
            src={categoryimages[category.slug]}
            alt=""
            onClick={()=>{setCategory(category.name);
            navigate('/product')}
            }
          />
         <p className="bg-white/10 backdrop-blur-xl border border-white/20 pl-2 absolute -mt-6 rounded-b-xl w-30  md:-mt-6 md:w-55 md:rounded-b-xl"><span className="  font-medium text-black dark:text-white">{category.name}</span></p>
          </div>)}
    </div>
    </>
  )
}

export default HomePage