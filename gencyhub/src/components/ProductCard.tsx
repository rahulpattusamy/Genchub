import { MdFavoriteBorder, MdShoppingCart } from "react-icons/md"
import useProducts from "../hooks/useProducts"



const ProductCard = () => {
    const {data, error} = useProducts()
    if(error) return<p>{error.message}</p>
  return (
    <>
     <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-10">
      {data?.products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img
              className=" w-full h-20 object-cover  sm:w-full sm:h-45 sm:object-cover  md:w-full md:h-45 md:object-cover"
              src={product.thumbnail}
              alt=""
            />
            <div className="pt-4 pl-1.5  h-30 flex flex-col gap-1.5">
              <p className="text">{product.title}</p>
              <p className=" text sm:text-lg font-bold flex justify-between items-center">
                &#36;{product.price}{" "}
                <button
                  onClick={() => {
                  }}
                  className="btn2 mr-2"
                >
               <MdFavoriteBorder/>
                </button>
              </p>
              <p className="border-b mt-2 fiixed"></p>
            </div>
            <button className="btn ml-2">Add to cart <MdShoppingCart/></button>
          </div>
        );
      })}
    </div>

    </>
  )
}

export default ProductCard 