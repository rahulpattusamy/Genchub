import { Outlet } from "react-router-dom"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"


const Layout = () => {
  return (
    <>
     <NavBar/>
     <Outlet/>
     <div className="mt-90">
          <Footer/>
     </div>
  
    </>
  )
}

export default Layout