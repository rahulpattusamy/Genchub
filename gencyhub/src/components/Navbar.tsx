import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const navigate = useNavigate()
  return (
    <header className="flex sticky top-0 z-50  shrink-0 items-center justify-between  bg-red-400 p-3 text-white">
      <div>
        
         <h1 className="font-Poppins text-2xl cursor-pointer">GencHub</h1>
        
       
      </div>
      <div className="hidden md:block">
       <SearchInput/>
      </div>
      
      <div className="flex shrink-0 gap-8  text-3xl">
        <button className="cursor-pointer relative">
          
          <MdFavoriteBorder />
          
        </button>
         <span className="text-sm bg-gray-700 w-5 text-center rounded-2xl ml-5 -mt-1  absolute">
          0
        </span>
        <button onClick={()=>navigate('/cart')} className="cursor-pointer relative">
            <LuShoppingCart />
          
        </button>
        <span className="text-sm bg-gray-700 w-5 text-center rounded-2xl ml-20 -mt-1  absolute">
          0
        </span>

        <button className="cursor-pointer">
          <FaRegUserCircle />
        </button>
      </div>
    </header>
  );
};

export default NavBar;