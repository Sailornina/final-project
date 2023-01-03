import React from "react";
import { useNavigate } from "react-router-dom";
import { getNasaDetailsById } from "../../apis/nasa-api";

const ImageDetails = ({nasaId}) => {
    const [nasaDetails, setNasaDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getNasaDetailsById(nasaId)
            .then(response => 
                setNasaDetails(response.collection.items[0]));
    }, [nasaId]);

    if (!nasaDetails) {
        return (
            navigate('/not-found')
        );
    };

    return (
        <div className='details'>
            <div className="center-content">
                <h3 className='title'>Title: {nasaDetails.data[0].title}</h3>
                <img className="nasa-img" src={nasaDetails.links[0].href} />
                <p className='description'>Description: {nasaDetails.data[0].description}</p>
                <p className='created'>Created: {nasaDetails.data[0].date_created}</p>
            </div>
        </div>
    );
};

export default ImageDetails;