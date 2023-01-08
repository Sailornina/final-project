import React from "react";

const ImageDetails = ({image}) => {
    
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