import React, { useState, useEffect } from "react"
import UmlData from "../../ressources/UmlData.json"
import './umlpage.css';
import Card from "../../components/Card/Card";

const UmlPage = () => {
    const [umlData, setUmlData] = useState()

    useEffect(()=>{
        setUmlData(UmlData)
    },[])
    return (
        <div className="umlpage-container">
            <div className="umlpage-header">
                <h2 className="umlpage-header-tittle">
                    {umlData?.tittle}
                </h2>
                <p className="umlpage-header-description">
                    {umlData?.description}
                </p>
            </div>
            <div className="umlpage-card_container">
                {umlData?.diagrams.map((diagram) => (
                    <Card key={diagram.id} name={diagram.name} id={diagram.id} />
                ))}
            </div>

        </div>
    );

}

export default UmlPage;