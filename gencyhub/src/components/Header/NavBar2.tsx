import { FaRegUserCircle } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useCarlength from "../../utils/cartLength";
import auth from "../../config/firebase-config";
import toast from "react-hot-toast";
import { logOut } from "../../Service/auth-service";
import useAuthStore from "../../store/authstore";
import useShoppingstore from "../../store/ShoppingStatus";

const NavBar2 = () => {
  const navigate = useNavigate();
  const cartlength = useCarlength();
  const wishlist = useShoppingstore(s=>s.shoppingstatus.wishlist)
  const currentUser = auth.currentUser;
  const user = useAuthStore((s) => s.user);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err: any) {
      toast.error("Logout failed");
    }
  };

  return (
    <div>
      <header className="w-full  fixed bottom-0 left-0 z-50 flex justify-center items-center px-4 py-4 bg-red-400 p-5 text-white dark:bg-neutral-900 ">
        <div className="flex justify-around w-50 gap-13">
          <button onClick={()=>navigate('/wishlist')} className="text-3xl lg:cursor-pointer relative lg:text-4xl">
            <MdFavoriteBorder />
            <span className=" w-6 h-6 ml-4    lg:text-sm bg-neutral-700  rounded-3xl flex justify-center items-center text-center  -mt-9  absolute dark:bg-white dark:text-black">
              <p className="text-sm">{currentUser ? wishlist?.length : "0"}</p>
            </span>
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="text-3xl lg:cursor-pointer relative lg:text-4xl"
          >
            <LuShoppingCart />

            <span className=" w-6 h-6 ml-4    lg:text-sm bg-neutral-700  rounded-3xl flex justify-center items-center text-center  -mt-9  absolute dark:bg-white dark:text-black">
              <p className="text-sm">{currentUser ? cartlength : "0"}</p>
            </span>
          </button>

          {user ? (
            <button
              onClick={handleLogout}
              className="  text-lg lg:cursor-pointer relative lg:text-3xl"
            >
              {" "}
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                handleLogout;
              }}
              className="text-3xl lg:cursor-pointer relative lg:text-4xl"
            >
              <FaRegUserCircle />
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar2;
