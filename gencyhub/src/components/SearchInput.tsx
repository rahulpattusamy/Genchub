import { useCallback, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import useProductquery from "../productquerystore";
import { useNavigate } from "react-router-dom";
import debounce from "lodash/debounce";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchtext = useProductquery((s) => s.setSearchText);
  const navigate = useNavigate();



  const debounced = useCallback(
    debounce((value: string) => {
      setSearchtext(value);
    }, 500),
    []
  );

  const handleChange = () => {
    if (ref.current) {
      debounced(ref.current.value);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchtext(ref.current?.value);
        navigate("/");
      }}
      action="search"
      className=""
    >
      <div className=" relative ">
        <div className="ml-1 pt-1 text-2xl  text-black  absolute sm:pt-2 sm:ml-2 sm:text-2xl">
          <CiSearch />
        </div>

        <input
          ref={ref}
          onChange={handleChange}
          className=" transition-all duration-300  border placeholder-black text-black bg-white border-gray-600  focus:ring-black  pl-8 text-lg  focus:outline-none md:rounded-4xl  md:border-white   md:text-xl md:w-100 md:pl-10 md:p-1  w-full rounded-4xl"
          type="text"
          placeholder="Search Products..."
        />
      </div>
    </form>
  );
};

export default SearchInput;
