import React, { useState, useEffect } from "react"
import UmlData from "../../ressources/UmlData.json"
import './umlpage.css';

const UmlPage = () => {
    const [umlData, setUmlData] = useState(0)

    const getdata= () => {
        fetch(UmlData).then((response) =>{
            setUmlData(response)
        })
    }

    useEffect(()=>{
        getdata()
    })

    return (
        <div className="umlpage-container">
            <div className="umlpage-header">
                <h2 className="umlpage-header-tittle">

                </h2>
                <p className="umlpage-header-description">

                </p>
            </div>
            <div className="umlpage-card_container">

            </div>

        </div>
    );

}

export default UmlPage;