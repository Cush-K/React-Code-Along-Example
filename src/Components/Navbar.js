import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <div className="burger-menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className="menu">
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/About">About Us</Link> </li>
                <li><Link to="/projects/:id">Project Details</Link> </li>
               
            </ul>
        </nav>
    )
}

export default Navbar;