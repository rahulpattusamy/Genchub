import { MdFavoriteBorder } from "react-icons/md"
import useProducts from "../hooks/useProducts"
import AddToCart from "./AddToCart"



const ProductCard = () => {
    const {data, error} = useProducts()
    if(error) return<p>{error.message}</p>
    
  return (
    <>
    
     <div className="grid grid-cols-2 items-center gap-2.5 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 ">
      {data?.products.map((product) => {
     const  ratingbg =  product.rating >=4 ? "bg-green-800":"bg-red-600"
        return (
          <div className="card" key={product.id}>
            <img
              className=" w-full h-20 object-cover  sm:w-full sm:h-45 sm:object-cover  md:w-full md:h-45 md:object-cover"
              src={product.thumbnail}
              alt=""
            />
            <div className="pt-4 pl-1.5  h-30 flex flex-col gap-1.5">
              <p className="text md:text-sm">{product.title}</p>
              <p className=" text sm:text-lg font-bold flex justify-between items-center">
                ${product.price.toFixed()}{" "}
                <button
                  onClick={() => {
                  }}
                  className="btn2 mr-2"
                >
               <MdFavoriteBorder size={20}/>
                </button>
              </p>
              <p className="border-b border-gray-600"></p>
            </div>
            <div className="flex p-2  -ml-2 justify-between  items-center">
                <AddToCart product={product}/>
                <button className={`btn ${ratingbg}`}>{product.rating}</button>
            </div>
         
          </div>
        );
      })}
    </div>

    </>
  )
}

export default ProductCard 