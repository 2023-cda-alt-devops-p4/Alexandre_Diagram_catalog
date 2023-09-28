import React, { useState, useEffect } from "react"
import MeriseData from "../../ressources/MeriseData.json"
import './MerisePage.css';
import Card from "../../components/Card/Card";

const MerisePage = () => {
    const [meriseData, setmeriseData] = useState()

    useEffect(()=>{
        setmeriseData(MeriseData)
    },[])
    return (
        <div className="umlpage-container">
            <div className="umlpage-header">
                <h2 className="umlpage-header-tittle">
                    {meriseData?.tittle}
                </h2>
                <p className="umlpage-header-description">
                    {meriseData?.description}
                </p>
            </div>
            <div className="umlpage-card_container">
                {meriseData?.diagrams.map((diagram) => (
                    <Card key={diagram.id} name={diagram.name} id={diagram.id} />
                ))}
            </div>

        </div>
    );

}

export default MerisePage;