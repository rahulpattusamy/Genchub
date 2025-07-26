import { FaRegUserCircle } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useCarlength from "../../utils/cartLength";
import auth from "../../config/firebase-config";
import toast from "react-hot-toast";
import { logOut } from "../../Service/auth-service";
import useAuthStore from "../../store/authstore";

const NavBar2 = () => {
  const navigate = useNavigate();
  const cartlength = useCarlength();
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
          <button className="text-3xl lg:cursor-pointer relative lg:text-4xl">
            <MdFavoriteBorder />
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="text-3xl lg:cursor-pointer relative lg:text-4xl"
          >
            <LuShoppingCart />
          </button>
          <span className="w-6 h-6 ml-5  md:ml-20 lg:text-sm bg-gray-700 lg:w-8 lg:h-8 rounded-3xl flex justify-center items-center text-center lg:ml-22 -mt-2  absolute dark:bg-white dark:text-black">
            <p className="text-sm">{currentUser ? cartlength : "0"}</p>
          </span>

          {user ? (
            <button
              onClick={handleLogout}
              className="  text-lg lg:cursor-pointer relative lg:text-3xl"
            > Logout
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
