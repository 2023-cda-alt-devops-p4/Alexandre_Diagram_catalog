import React from "react";
import './DiagramCompnent.css';


const DiagramComponent = (props) => {
    return (
        <div className="component_container">
            <p className="componant_name">
                {props.name}
            </p>
            <img src={props.url} alt="component of diagram" className="component_img"/>
            <p className="component_desc">
                {props.description}
            </p>
        </div>
    )
}

export default DiagramComponent ;