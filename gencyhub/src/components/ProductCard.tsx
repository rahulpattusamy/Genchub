import { MdFavoriteBorder, MdShoppingCart } from "react-icons/md"
import useProducts from "../hooks/useProducts"


const ProductCard = () => {
    const {data, error} = useProducts()
    if(error) return<p>{error.message}</p>
  return (
     <div className="grid grid-cols-5 pl-20 pt-20 gap-y-10">
      {data?.products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img
              className="w-full h-45 object-cover"
              src={product.thumbnail}
              alt=""
            />
            <div className="pt-4 pl-1.5  h-30 flex flex-col gap-1.5">
              <p className="text">{product.title}</p>
              <p className=" text text-lg font-bold flex justify-between items-center">
                &#36;{product.price}{" "}
                <button
                  onClick={() => {
                  }}
                  className="btn2 mr-2"
                >
               <MdFavoriteBorder/>
                </button>
              </p>
              <p className="border-b mr-1 fiixed"></p>
            </div>
            <button className="btn ml-2">Add to cart <MdShoppingCart/></button>
          </div>
        );
      })}
    </div>
  )
}

export default ProductCard