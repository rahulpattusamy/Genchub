import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/Navbar";
import Footer from "../components/Footer";
import NavBar2 from "../components/Header/NavBar2";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      
      <div className="mt-120">
        <Footer />
      </div>
    <div className="block  pb-16 md:hidden">
       <NavBar2/>
    </div>
    </>
  );
};

export default Layout;
