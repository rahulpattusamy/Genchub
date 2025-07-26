import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/Navbar";
import Footer from "../components/Footer";
import NavBar2 from "../components/Header/NavBar2";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import auth from "../config/firebase-config";
import useShoppingstore from "../store/ShoppingStatus";


const Layout = () => {
   const loadCartFromLocalStorage = useShoppingstore((state) => state.loadCartFromLocalStorage);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        loadCartFromLocalStorage(); // ✅ Load cart only for logged-in user
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
    
      <NavBar />
      <Outlet />
      <div className="mt-5">
        <Footer />
      </div>
     
    <div className="block  pb-16 md:hidden">
       <NavBar2/>
    </div>
    </>
  );
};

export default Layout;
