import CategorySelector from "../components/CategorySelector"
import SearchInput from "../components/SearchInput"
import Category from "../components/Category"
import ProductCard from "../components/ProductCard"


const HomePage = () => {
  return (
<>
    <div className="block  bg-white mt-4 ml-1 sm:hidden">
      <SearchInput/>
    </div>
     <div className="block bg-white mt-4 ml-2 sm:hidden">
        <CategorySelector/>
    </div>
    <div className="grid grid-cols-12 gap-4 mt-10 ml-10 px-4">
      <div className="col-span-3 md:col-span-5 hidden sm:block lg:col-span-3">
        <Category/>
      </div>
      <div className="col-span-12 items-center md:col-span-7 lg:col-span-9">
         <ProductCard/>
      </div>
     
    </div>

    </>
  )
}

export default HomePage