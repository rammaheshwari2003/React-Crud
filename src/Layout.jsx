import {FaBars,FaSearch} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineInsertChart } from "react-icons/md";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { MdBrowserUpdated } from "react-icons/md";

const Layout=()=>{
    return(
        <>
         <div id='navbar'>
            <FaBars id="bar"/>
            {/* <FaSearch id="search" /> */}
            <div id="sign">
            Signed in as: <a to="/" >Ram Maheshwari</a>
            </div>
        </div>
        

        <div id="wrapper">  
            <div id="sidebar">
                
                <h1>Mobile</h1>
                <hr />
              
                <Link to="home"><FaHome className="icon" />Home</Link>
                <Link to="insert"><MdOutlineInsertChart className="icon" />Insert</Link>
                <Link to="display"><MdOutlineSmartDisplay className="icon" />Display</Link>
                <Link to="search"> <FaSearch className="icon" />Search</Link>
                <Link to="update"><MdBrowserUpdated className="icon" />Update</Link>
                
            </div>
            <Outlet />
        </div>
        </>
    )
}
export default Layout;