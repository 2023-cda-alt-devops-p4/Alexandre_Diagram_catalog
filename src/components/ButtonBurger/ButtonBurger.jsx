import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import './ButtonBurger.css'

const ButtonBuger = (props) => {
    
    return (
        <Menu>
            <div className="burger-link-container" >
                <Link to="/" className="burger_link">
                    <h3> HomePage</h3>
                </Link>
            </div>
            <div className="burger-link-container">
                <Link to="/Uml" className="burger_link">
                    <h3> UML</h3>
                </Link>
            </div>
            <div className="burger-link-container">
                <Link to="/Merise" className="burger_link">
                    <h3> Merise</h3>
                </Link>
            </div>

        </Menu>
    )
}

export default ButtonBuger;