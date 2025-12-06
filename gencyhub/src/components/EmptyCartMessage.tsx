import { Link } from "react-router-dom";
import cartimg from "../assets/shopping.png"

const EmptycartMessage = () => {
  return (
    <div className=" flex flex-col items-center mt-20">
     
      <div>
        <img className="h-60" src={cartimg} alt="" />
      </div>
      
      <div className="text-center mt-3">
        <h1 className="text-black text-3xl dark:text-white">Hey, it feels so light!</h1>
        <p className="text-gray-400 text-lg font-sans mt-1 dark:text-white">
          There is nothing in your cart. Let's add some items
        </p> 
        <Link to="/">
        <button className="bg-gray-700 p-2 rounded-sm text-white text-sm mt-3 hover:bg-gray-800 transition transform active:scale-110 cursor-pointer">
          Shop now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptycartMessage;