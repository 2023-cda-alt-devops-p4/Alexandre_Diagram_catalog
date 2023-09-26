import React from "react";
import { Link } from "react-router-dom";
import './ButtonBurger.css'

const ButtonBuger = () => {
    return (
        <div className="burger-container">
            <div className="burger-homage-container">
                <Link to="/">
                    <h3> HomePage</h3>
                </Link>
            </div>
            <div className="burger-uml-container">
                <Link to="/Uml">
                    <h3> UML</h3>
                </Link>
            </div>
            <div className="burger-merise-container">
                <Link to="/Merise">
                    <h3> Merise</h3>
                </Link>
            </div>

        </div>
    )
}

export default ButtonBuger;