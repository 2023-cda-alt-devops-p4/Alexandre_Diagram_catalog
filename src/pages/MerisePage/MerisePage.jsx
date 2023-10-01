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
        <div className="Merisepage-container">
            <div className="Merisepage-header">
                <h2 className="Merisepage-header-tittle">
                    {meriseData?.tittle}
                </h2>
                <p className="Merisepage-header-description">
                    {meriseData?.description}
                </p>
            </div>
            <div className="Merisepage-card_container">
                {meriseData?.diagrams.map((diagram) => (
                    <Card key={diagram.id} name={diagram.name} id={diagram.id} data={"MeriseData/"} essential={diagram.essential} />
                ))}
            </div>

        </div>
    );

}

export default MerisePage;