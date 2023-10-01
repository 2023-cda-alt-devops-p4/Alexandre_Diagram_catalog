import React from "react"
import { Link } from "react-router-dom";
import './card.css';


const Card = (props) => {

    return (
        <div className="Card-container">
            <Link to={"/details/"+props.data+props.id} className="card-link">
                <h3 className="Card-tittle">
                    {props.name}
                </h3>
            </Link>
            {props.essential 
            ? (<div className="Card-essential">
                    <p className="Card-essential-text">* Essentiel *</p>
                </div>) 
            : null}
        </div>
    )
}

export default Card ;