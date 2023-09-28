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
        </div>
    )
}

export default Card ;