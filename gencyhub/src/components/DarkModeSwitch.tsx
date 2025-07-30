import {  useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [dark]);

  return <button
      onClick={() => setDark(!dark)}
      className={`w-10 h-6 flex border border-white items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
        dark ?  'bg-gray-800':'bg-rose-400' 
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          dark ? 'translate-x-4' : 'translate-x-0'
        }`}
      ></div>
    </button>
};

export default DarkModeSwitch;
