import CategorySelector from "../components/CategorySelector"
import ProductCard from "../components/ProductCard"
import SearchInput from "../components/SearchInput"
import Category from "./Category"


const HomePage = () => {
  return (
<>
    <div className="block mt-4 ml-1 sm:hidden">
      <SearchInput/>
    </div>
     <div className="block mt-4 ml-1 sm:hidden">
        <CategorySelector/>
    </div>
    <div className="flex sm:justify-around mt-5">
      <Category/>
     <ProductCard/>
    </div>

    </>
  )
}

export default HomePage