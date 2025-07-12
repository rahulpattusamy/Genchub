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
     className="">
    <div className="relative">
     <div className="ml-2 pt-1.5 text-3xl sm:text-gray-500 absolute sm:pt-1.5 sm:ml-2 sm:text-4xl">
       <CiSearch/>
     </div>
     
     <input ref={ref} className=" border border-gray-600  focus:ring-black p-1 pl-10 md:ring-white focus:outline-none text-black bg-white md:border-white placeholder:text-gray-800 text-2xl  md:pl-10 md:p-2 rounded-4xl border-0.5 sm:w-100"  type="text" placeholder='Search Products' />
    </div>
    </form>
  );
};

export default SearchInput;
