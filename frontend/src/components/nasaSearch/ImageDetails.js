
import React from "react";
import moment from "moment";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ImageDetails = ({ image }) => {

    return (
        <Card sx={{ display: 'grid', flexDirection: 'column' }} className='details'>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{image.title}</Typography>
                <CardMedia alt="nasa-img" component="img" height="550" src={image.url} />
                <Typography variant="body2" fontSize={12} color="text.secondary">{image.description}</Typography>
                <Typography variant="body2" color="text.secondary">{moment(image.date_created).format('ll')}</Typography>
            </CardContent>
        </Card>
    );
};

export default ImageDetails;
