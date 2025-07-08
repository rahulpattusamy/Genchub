import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className="relative">
      <div className="mt-5 sm:text-black absolute pt-1.5 sm:mt-0 ml-2 text-2xl">
        <CiSearch />
      </div>

      <input
        className= " w-79 mt-5 p-1  sm:bg-white text-black sm:placeholder:text-gray-800 placeholder:pl-8 font-Poppins sm:p-1.5 sm:w-100 rounded-xl border-1 border-gray-700 sm:mt-0"
        type="text"
        placeholder="Search Products"
      />
    </div>
  );
};

export default SearchInput;
