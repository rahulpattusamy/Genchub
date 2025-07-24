import useShoppingstore from "../store/ShoppingStatus";
import { findproduct } from "../utils/FindProduct";
import { useNavigate } from "react-router-dom";
import { BsCartCheck, BsCartPlus } from "react-icons/bs";
import { toast } from "react-hot-toast";
import type { Products } from "../hooks/useProducts";
import useAuthStore from "../store/authstore";
import { logOut } from "../Service/auth-service";

interface Props {
  product: Products;
}

const AddToCart = ({ product }: Props) => {
  const setCart = useShoppingstore((s) => s.setCart);
  const cart = useShoppingstore((s) => s.shoppingstatus.cart);
  const isProductinCart = findproduct(cart, product.id);
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  return (
    <div>
      <button
        onClick={() => {
          if (!user) {
            toast.error("Please login or signup", {
              duration: 1500,
            });

            return; 
          }
          !isProductinCart && setCart({ ...product, quantity: 1 });
          !isProductinCart &&
            toast.success("Added to Cart", { duration: 1300 });
          isProductinCart && navigate("/cart");
          isProductinCart && logOut()
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
