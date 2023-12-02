import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardComponent = ({ imageSrc }) => {
  return (
    <Card style={{ position: 'relative' }}>
      <CardMedia
        component="img"
        alt="Image"
        height="200"
        image={imageSrc}
        
      />
      <IconButton style={{ color: 'red', position:"absolute", top:0, right:0}}>
        <FavoriteIcon />
      </IconButton>
    </Card>
  );
};

export default CardComponent;
