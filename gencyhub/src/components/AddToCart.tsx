import useShoppingstore from "../ShoppingStatus";
import { findproduct } from "../utils/FindProduct";
import { useNavigate } from "react-router-dom";
import { BsCartCheck, BsCartPlus } from "react-icons/bs";
import { toast } from "react-hot-toast";
interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
}

interface Props {
  product: Product;
}

const AddToCart = ({ product }: Props) => {
  const setCart = useShoppingstore((s) => s.setCart);
  const cart = useShoppingstore((s) => s.shoppingstatus.cart);
  const isProductinCart = findproduct(cart, product.id);
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          !isProductinCart &&
           setCart({ ...product, quantity: 1 });
           !isProductinCart && toast.success("Added to Cart", { duration: 1300 });
          isProductinCart && navigate("/cart");
        }}
        className="btn hidden text-sm  lg:flex ml-2"
      >
        {isProductinCart ? "Go to Cart" : "Add to Cart"}
        {isProductinCart ? <BsCartCheck size={20} /> : <BsCartPlus size={20} />}
      </button>
      <button
        onClick={() => {
          !isProductinCart && setCart({ ...product, quantity: 1 });
          isProductinCart && navigate("/cart");
          cart && toast.success("Added to Cart");
        }}
        className="btn p-2 block text-xl lg:hidden ml-2"
      >
        {isProductinCart ? <BsCartCheck /> : <BsCartPlus />}
      </button>
    </div>
  );
};

export default AddToCart;
