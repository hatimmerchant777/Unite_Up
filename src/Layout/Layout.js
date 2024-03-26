import { Link,Outlet } from "react-router-dom";
import "./Layout.css"
import LoginPanel from "../Header/LoginPanel";
import Navbar from "../Header/Navbar";
import FooterLink from "../Footer/FooterLink";
import FooterPanel from "../Footer/FooterPanel";
import Education from "../Education/Education";

function Layout(){
    return(
        <>
            <div className="container-fluid">
                <LoginPanel/>
                <Navbar/>
                <Outlet/>
                <FooterLink/>
                <FooterPanel/>
            </div>
        </>
    )
}
export default Layout;