import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import useProductquery from "../productquerystore";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchtext = useProductquery((s) => s.setSearchText);
  const navigate = useNavigate()
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchtext(ref.current?.value);
        navigate('/')
      }}
      action="search"
    >
    <div className="relative">
     <div className="ml-2 sm:text-black absolute pt-1.5 sm:ml-2 text-2xl">
       <CiSearch/>
     </div>
     
     <input ref={ref} className=" ring-gray-700 focus:outline-none bg-white text-black border placeholder:text-gray-800 pl-10 font-Poppins p-1.5 w-75 rounded-xl border-0.5 sm:w-100"  type="text" placeholder='Search Products' />
    </div>
    </form>
  );
};

export default SearchInput;
