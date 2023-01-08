import React from "react";
import { useNavigate } from "react-router-dom";
import { searchNasaImagesByPage } from "../../apis/nasa-api";
import { useState, useEffect } from "react";

const ImageDetails = ({image}) => {
    const [nasaDetails, setNasaDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!nasaDetails) {
            navigate('/not-found')
        }
    }, [navigate])

    return (
        <div className='details'>
                    <div>
                        <h1>{image.title}</h1>
                            <img alt="nasa-img" src={image.url}/>
                            <p>{image.description}</p>
                            <p>{image.date_created}</p>
                    </div>

        </div>
    );
};

export default ImageDetails;