import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css'

const NavBar = () => {

    return (
        <div className="navbar-container">
            <div className="navbar-homage-container">
                <Link to="/">
                    <h3> HomePage</h3>
                </Link>
            </div>
            <div className="navbar-uml-container">
                <Link to="/Uml">
                    <h3> UML</h3>
                </Link>
            </div>
            <div className="navbar-merise-container">
                <Link to="/Merise">
                    <h3> Merise</h3>
                </Link>
            </div>

        </div>
    )
}

export default NavBar;