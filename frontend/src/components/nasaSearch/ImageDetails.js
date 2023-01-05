import React from "react";
import { useNavigate } from "react-router-dom";
import { searchNasaImagesByPage } from "../../apis/nasa-api";
import { useState, useEffect } from "react";

const ImageDetails = () => {
    const [nasaDetails, setNasaDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(async () => {
        const imagesDetails = await searchNasaImagesByPage("", 1);
        setNasaDetails(imagesDetails);
    }, [nasaDetails]);

    useEffect(() => {
        if (!nasaDetails) {
            navigate('/not-found')
        }
    }, [navigate])

    return (
        <div className='details'>
            {nasaDetails.map((item) => {
                return (
                <h1>Hi</h1>
                // title = {item}
                // url = {item}
                // description = {item}
                // date_created = {item}
                )
            })}
        </div>
    );
};

export default ImageDetails;