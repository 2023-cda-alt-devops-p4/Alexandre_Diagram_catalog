import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const NavBar = () => {

    return (
        <div className="navbar-main-container">
            <div className="navbar-container">
                <div className="navbar-link-container">
                    <Link to="/" className="navbar-link">
                        <h3 className="navbar-text"> HomePage</h3>
                    </Link>
                </div>
                <div className="navbar-link-container">
                    <Link to="/Uml" className="navbar-link">
                        <h3 className="navbar-text"> UML</h3>
                    </Link>
                </div>
                <div className="navbar-link-container">
                    <Link to="/Merise" className="navbar-link">
                        <h3 className="navbar-text"> Merise</h3>
                    </Link>
                </div>

            </div>
            <hr className="navbar-hr" />
        </div>

    )
}

export default NavBar;