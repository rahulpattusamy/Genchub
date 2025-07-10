import { LuShoppingCart } from "react-icons/lu";
import useShoppingstore from "../ShoppingStatus";

interface Product{
  id: number;
  title: string;
  price: number;
  rating:number;
  thumbnail: string;
  quantity:number
}

interface Props{
     product:Product
}

const AddToCart = ({product}:Props) => {
   const setCart =   useShoppingstore(s=>s.setCart)
  return (
    <div>
      <button onClick={()=>{setCart(product);console.log(product);}
      } className="btn ml-2">
        Add to cart <LuShoppingCart />
      </button>
    </div>
  );
};

export default AddToCart;
