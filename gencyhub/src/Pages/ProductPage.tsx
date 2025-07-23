import CategorySelector from "../components/CategorySelector";
import SearchInput from "../components/SearchInput";
import Category from "../components/CategoryList";
import ProductCard from "../components/ProductCard";
import { Toaster } from "react-hot-toast";

const ProductPage = () => {
  return (
    <>
      <div className="block mt-4 ml-1 sm:hidden">
        <SearchInput />
      </div>
      <div className="block bg-white mt-4 ml-2 sm:hidden">
        <CategorySelector />
      </div>
      <div className="grid grid-cols-12 gap-4 mt-10 ml-4">
        <div className="col-span-3 md:col-span-5 hidden sm:block lg:col-span-3">
          <Category />
        </div>

        <div className="col-span-12 md:col-span-7 lg:col-span-9">
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{style:{
            backgroundColor:"white",
            color:"#1f2937",
            fontWeight:"500",
            padding:"1px",
            marginTop:"4rem"
          },iconTheme: {
    primary: '#166534',
    secondary:'#ffffff'
  }}}
          />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
