import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar-main">
            <ul className="navbar-items">
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/employee">Employee</Link></li>
                <li><Link to="counter">Counter</Link></li>
                <li><Link to="user">Users</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;