import React, {useState,useEffect} from "react";
import {useParams } from "react-router-dom";
import UmlData from "../../ressources/UmlData.json"

const DetailsPage = (props) => {
    const { id,json } = useParams();
    const [umlData, setUmlData] = useState()

    useEffect(()=>{
        setUmlData(UmlData.diagrams.find((diagram) => diagram.id ==id))
    },[])

    return (
        <div className="details_container">
            <p>oui</p>
        </div>
    )
}

export default DetailsPage;