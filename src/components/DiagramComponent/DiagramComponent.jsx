import React from "react";
import './DiagramCompnent.css';


const DiagramComponent = (props) => {
    return (
        <div className="component_container">
            <h4 className="componant_name">
                {props.name}
            </h4>
            <div className="component-desc-container">
                <div className="component-img-container">
                    <img src={props.url} alt="component of diagram" className="component_img" />
                </div>
                <p className="component_desc">
                    {props.description}
                </p>
            </div>
            <hr/>
        </div>
    )
}

export default DiagramComponent;