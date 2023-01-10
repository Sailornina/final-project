import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ImageDetails = ({ image }) => {

    return (
        <Card sx={{ maxWidth: 400 }} className='details'>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{image.title}</Typography>
                <CardMedia alt="nasa-img" component="img" height="140" src={image.url} />
                <Typography variant="body2" color="text.secondary">{image.description}</Typography>
                <Typography variant="body2" color="text.secondary">{image.date_created}</Typography>
            </CardContent>
        </Card>
    );
};

export default ImageDetails;