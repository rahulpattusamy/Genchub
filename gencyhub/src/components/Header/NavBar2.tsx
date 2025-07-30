import { FaRegUserCircle } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import useCarlength from "../../utils/cartLength";
import auth from "../../config/firebase-config";
import useAuthStore from "../../store/authstore";
import useShoppingstore from "../../store/ShoppingStatus";
import {  PiUserCircleCheck } from "react-icons/pi";

const NavBar2 = () => {
  const navigate = useNavigate();
  const cartlength = useCarlength();
  const wishlist = useShoppingstore((s) => s.shoppingstatus.wishlist);
  const currentUser = auth.currentUser;
  const user = useAuthStore((s) => s.user);
  

  return (
    <div>
      <header className="w-full  fixed bottom-0 left-0 z-50 flex justify-center items-center px-4 py-4 bg-red-400 p-5 text-white dark:bg-neutral-900 ">
        <div className="flex justify-around w-50 gap-13">
          <button
            onClick={() => navigate("/wishlist")}
            className="text-3xl lg:cursor-pointer relative lg:text-4xl"
          >
            <MdFavoriteBorder />
            <span className=" w-6 h-6 ml-4    lg:text-sm bg-neutral-700  rounded-3xl flex justify-center items-center text-center  -mt-9  absolute dark:bg-white dark:text-black">
              <p className="text-sm">
                {currentUser ? wishlist?.length || 0 : "0"}
              </p>
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
            <Link to="/profile">
            <button
              className="  text-4xl lg:cursor-pointer relative lg:text-3xl"
            >
              <PiUserCircleCheck />
            </button>
            </Link>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="text-3xl lg:cursor-pointer relative lg:text-4xl"

            >
              <FaRegUserCircle />
                <span className="text-sm font-normal absolute -ml-9 -mt-1 w-18">
                SIGN IN
              </span>
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar2;
