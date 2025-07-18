import {  useEffect, useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

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

  return <button className="text-3xl lg:text-3xl" onClick={()=>setDark(!dark)}>
     {dark? <BsSun/> : <BsMoonStars/>}
  </button>;
};

export default DarkModeSwitch;
