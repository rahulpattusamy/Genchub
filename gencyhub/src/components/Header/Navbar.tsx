import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle, FaShoppingBag } from "react-icons/fa";
import SearchInput from "../SearchInput";
import { useNavigate } from "react-router-dom";
import DarkModeSwitch from "../DarkModeSwitch";
import useAuthStore from "../../store/authstore";
import toast from "react-hot-toast";
import { logOut } from "../../Service/auth-service";
import auth from "../../config/firebase-config";
import useShoppingstore from "../../store/ShoppingStatus";
import useCarlength from "../../utils/cartLength";

const NavBar = () => {
  const navigate = useNavigate();
  const cartlength = useCarlength()
  const wishlist = useShoppingstore(s=>s.shoppingstatus.wishlist)
  const user = useAuthStore((s) => s.user);
  const currentUser = auth.currentUser;

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err: any) {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="w-full top-0 z-50 sticky left-0 right-0 justify-between px-4 py-4  p-5 text-white  bg-rose-400  shadow-lg dark:bg-neutral-800 ">
      <div className="max-w-full mx-auto items-center flex justify-between">
        <div>
          <h1
            onClick={() => navigate("/")}
            className="text-2xl font-bold cursor-pointer"
          >
            Genzhub
          </h1>
        </div>
        <div className="hidden md:block">
          <SearchInput />
        </div>

        <div className="flex gap-4 items-center  lg:flex shrink-0 md:gap-4 lg:gap-8">
          <button
            className="text-3xl cursor-pointer"
            onClick={() => navigate("/product")}
          >
            <FaShoppingBag />
          </button>
          <button onClick={()=>navigate('/wishlist')} className=" hidden md:block text-3xl lg:cursor-pointer relative lg:text-3xl">
            <MdFavoriteBorder />
              <span className="hidden  w-4 h-4 ml-4    lg:text-sm bg-neutral-700 lg:w-6 lg:h-6 rounded-3xl md:flex justify-center items-center text-center  -mt-9  absolute dark:bg-white dark:text-black">
              <p className="text-sm">{currentUser ? wishlist?.length || '0' : '0'}</p>
            </span>
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="hidden md:block text-3xl lg:cursor-pointer relative lg:text-3xl"
          >
            <LuShoppingCart />
            <span className="hidden  w-4 h-4 ml-4    lg:text-sm bg-neutral-700 lg:w-6 lg:h-6 rounded-3xl md:flex justify-center items-center text-center  -mt-9  absolute dark:bg-white dark:text-black">
              <p className="text-sm">{currentUser ? cartlength : '0'}</p>
            </span>
          </button>

          {user ? (
            <button
              onClick={handleLogout}
              className="hidden md:block text-3xl lg:cursor-pointer relative lg:text-3xl"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="hidden md:block text-3xl lg:cursor-pointer relative lg:text-3xl"
            >
              <FaRegUserCircle />
            </button>
          )}
          <DarkModeSwitch />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
