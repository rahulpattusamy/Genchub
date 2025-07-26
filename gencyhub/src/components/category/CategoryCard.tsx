import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import categoryimages from "../CategoryImage" ;
import useProductquery from "../../store/productquerystore";
import useCategory from "../../hooks/useCategory";

const CategoryCard = () => {
  const { data } = useCategory();
  const setCategory = useProductquery((s) => s.setCategory);
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-12 dark:text-white">
        Category
      </h2>
      <div className="max-w-4xl mx-auto line-clamp-2">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={1000}
          stopOnHover={true}
          showIndicators={false}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={33.4}
          swipeable={true}
          dynamicHeight={false}
        >
          {data.map((category, index) => (
            <div
              className="card2 cursor-pointer"
              key={index}
              onClick={() => {
                setCategory(category.name);
                navigate("/product");
              }}
            >
              <img
                className="h-40 w-full hover:cursor-pointer rounded-xl hover:scale-110 transition-transform duration-300 relative md:h-48 md:w-full md:rounded-xl "
                src={categoryimages[category.slug]}
                alt=""
              />
              <p className="bg-white/10 backdrop-blur-xl border border-white/20   absolute -mt-6 rounded-b-xl w-30  md:-mt-6 md:w-55 md:rounded-b-xl ">
                <span className="  font-medium text-black dark:text-white">
                  {category.name}
                </span>
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryCard;
