import { useNavigate } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import useProductquery from "../store/productquerystore";
import categoryimages from "./CategoryImage";

const CategoryCard = () => {
  const { data } = useCategory();
  const setCategory = useProductquery((s) => s.setCategory);
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-2 pl-10 pt-5 gap-y-10 md:pl-30 lg:grid-cols-4 lg:pl-40 relative">
        {data.slice(0,8).map((category, index) => (
          <div className="card2" key={index}>
            <img
              className="h-40 w-full hover:cursor-pointer rounded-xl hover:scale-110 transition-transform duration-300 relative md:h-48 md:w-full md:rounded-xl "
              src={categoryimages[category.slug]}
              alt=""
              onClick={() => {
                setCategory(category.name);
                navigate("/product");
              }}
            />
            <p className="bg-white/10 backdrop-blur-xl border border-white/20 pl-2 absolute -mt-6 rounded-b-xl w-30  md:-mt-6 md:w-55 md:rounded-b-xl">
              <span className="  font-medium text-black dark:text-white">
                {category.name}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
