import { Link, Outlet } from "react-router-dom";

import Nav from "./Nav";

const SideBar=()=>{
    return(
        <>
        <Nav />
        <div id="wrapper">
            <div id="sidebar">
                <h1>Admin</h1>
                <hr />
                <Link to="home">Home</Link>
                <Link to="insert">Insert</Link>
                <Link to="display">Display</Link>
                <Link to="search">Search</Link>
                <Link to="Update">Update</Link>
            </div>
            <Outlet />
        </div>
        
        </>
    )
}
export default SideBar;