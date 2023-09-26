import React, {useState} from "react"
import './header.css';
import ButtonBuger from "../ButtonBurger/ButtonBurger";

const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
    }

    return (
        <div className="header-container">
            <div className="Header-burger-container" onClick={toggleBurger}>
                <ButtonBuger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div className="Header-tittle-container">
               <h1 className="Header-tittle">
                    Diagramme catalogue
                </h1> 
            </div>
            
        </div>
    )
}

export default Header;