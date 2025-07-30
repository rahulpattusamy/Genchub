import { MdCheck, MdFavoriteBorder } from "react-icons/md";
import type { Products } from "../hooks/useProducts";
import useShoppingstore from "../store/ShoppingStatus";
import { findWishlist } from "../utils/FindProduct";
import toast from "react-hot-toast";
import useAuthStore from "../store/authstore";

interface Props {
  products: Products;
}

const WishList = ({ products }: Props) => {
  const setWishlist = useShoppingstore((s) => s.setWishlist);
  const WishList = useShoppingstore((s) => s.shoppingstatus.wishlist);
  const isWishList = findWishlist(WishList, products.id);
   const user = useAuthStore((s) => s.user);

  return (
    <div>
      <button
        onClick={() => {
          if (!user) {
            toast.error("Please login or signup", {
              duration: 1400,
            });

            return;
          }
          !isWishList && setWishlist(products);
          !isWishList && toast.success("Added to Wishlist", { duration: 1400 });
        }}
        className="btn2 mr-2"
      >
       { isWishList ? <MdCheck size={20}/>:<MdFavoriteBorder size={20} />}
      </button>
    </div>
  );
};

export default WishList;
