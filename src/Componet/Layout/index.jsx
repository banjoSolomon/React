import {Outlet} from "react-router-dom";
import Navbar from "../Navber/index.navber";
import Footer from "../Footer/index.footer";

const Layout = () => {
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>


    )

}
export  default Layout