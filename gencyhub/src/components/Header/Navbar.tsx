import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle, FaShoppingBag } from "react-icons/fa";
import SearchInput from "../SearchInput";
import { useNavigate } from "react-router-dom";
import useCarlength from "../../utils/cartLength";
import DarkModeSwitch from "../DarkModeSwitch";

const NavBar = () => {
  const navigate = useNavigate();
  const cartlength = useCarlength();
  return (
    <header className="w-full top-0 z-50 sticky left-0 right-0 justify-between px-4 py-4  p-5 text-white bg-red-400  shadow-lg dark:bg-neutral-900 ">
      <div className="max-w-full mx-auto items-center flex justify-between">
        <div>

          <h1 onClick={()=>navigate("/")} className="text-2xl lg:text-4xl cursor-pointer">GenZhub</h1>
        </div>
        <div className="hidden md:block">
          <SearchInput />
        </div>

        <div className="flex gap-4  lg:flex shrink-0 md:gap-8">
           <button className="text-3xl cursor-pointer" onClick={()=>navigate('/product')}><FaShoppingBag/></button>
          <button className=" hidden md:block text-3xl lg:cursor-pointer relative lg:text-4xl">
            <MdFavoriteBorder />
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="hidden md:block text-3xl lg:cursor-pointer relative lg:text-4xl"
          >
            <LuShoppingCart />
          </button>
          <span className="hidden  w-6 h-6 m-15  md:ml-20 lg:text-sm bg-black lg:w-8 lg:h-8 rounded-3xl md:flex justify-center items-center text-center lg:ml-38 -mt-2  absolute dark:bg-white dark:text-black">
            <p className="text-sm">{cartlength}</p>
          </span>

          <button className="hidden md:block text-3xl lg:cursor-pointer relative lg:text-4xl">
            <FaRegUserCircle />
          </button>
          <DarkModeSwitch />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
