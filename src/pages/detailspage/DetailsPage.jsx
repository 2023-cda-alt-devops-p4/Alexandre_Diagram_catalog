import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UmlData from "../../ressources/UmlData.json";
import MeriseData from "../../ressources/MeriseData.json";
import './detailsPage.css';
import DiagramComponent from "../../components/DiagramComponent/DiagramComponent";

const DetailsPage = () => {
    const { id, json } = useParams();
    const [umlData, setUmlData] = useState({});
    const [meriseData, setMeriseData] = useState({});
    const [isuml, setisuml] = useState();

    useEffect(() => {
        if (json === "Umldata") {
            setisuml(true);
            const umltemp = UmlData.diagrams.find((diagram) => diagram.id === parseInt(id));
            setUmlData(umltemp);
        } else {
            setisuml(false);
            const merisetemp = MeriseData.diagrams.find((diagram) => diagram.id === parseInt(id));
            setMeriseData(merisetemp);
        }

    }, [id, json])

    return (

        <div className="details_container">
            <div className="details_header">
                <div className="details_header_info">
                    <h2 className="details_header_name">
                        {isuml ? umlData.name : meriseData.name}
                    </h2>
                    <p className="details_header_desc">
                        {isuml ? umlData.description : meriseData.description}
                    </p>
                    <p className="details_detail">
                        {isuml ? umlData.details : meriseData.details}
                    </p>
                </div>
                <div className="details_main_img_container">
                    <img src={isuml ? umlData.url : meriseData.url} className="details_main_img" alt="diagram exemple" />
                </div>
            </div>
            <div className="diagram_components_container">
                {isuml ?
                    umlData.components?.map((component) => (
                        <DiagramComponent
                            key={component.name}
                            name={component.name}
                            url={component.url}
                            description={component.description}
                        />
                    ))
                    : meriseData.components?.map((component) => (
                        <DiagramComponent
                            key={component.name}
                            name={component.name}
                            url={component.url}
                            description={component.description}
                        />
                    ))

                }
            </div>
        </div>
    )
}

export default DetailsPage;