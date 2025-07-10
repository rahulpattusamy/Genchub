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
        <div className="sm:text-black absolute pt-1.5 sm:mt-0 ml-2 text-2xl">
          <CiSearch />
        </div>
        <div>
          <input
            ref={ref}
            className=" w-79 mt- p-1  sm:bg-white text-black sm:placeholder:text-gray-800 placeholder:pl-8 font-Poppins sm:p-1.5 sm:w-100 rounded-xl border-1 border-gray-700 sm:mt-0"
            type="text"
            placeholder="Search Products"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
