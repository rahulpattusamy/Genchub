import { useCallback, useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import useProductquery from "../productquerystore";
import { useNavigate } from "react-router-dom";
import debounce from "lodash/debounce";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchtext = useProductquery((s) => s.setSearchText);
  const navigate = useNavigate();

  const PlaceholderList = [
    "Groceries",
    "Laptops",
    "Shoes",
    "Smartphones",
    "shirts",
    "Watches",
    "sunglasses",
  ];

  const [isText, setText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((p) => (p + 1 >= PlaceholderList.length ? 0 : p + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
          placeholder={PlaceholderList[isText]}
        />
      </div>
    </form>
  );
};

export default SearchInput;
