import useCategory from "../hooks/useCategory";

const Category = () => {
  const { data } = useCategory();
  console.log(data);
  return (
    <div className="hidden lg:h-[55rem] lg:w-70 p-2 md:block  md:h-[38rem] md:w-50 bg-white shadow-2xl rounded-lg text-black">
      {data?.map((Category, index) => (
        <ul key={index}>
          <button className="text-xl pb-2 pl-4 md:text-xs lg:text-xl">{(Category)}</button>
        </ul>
      ))}
    </div>
  );
};

export default Category;
