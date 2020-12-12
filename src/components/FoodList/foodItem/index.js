import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl } from '@material-ui/core';


const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 35,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const cardStyle = {
    height: "100%",
};


const FoodItem = ({ productData, addToCart }) => {

    const [size, setSize] = useState(productData.size[0].name);

    const [price, setPrice] = useState(productData.startingPrice * productData.size[0].value);

    const handleChangeSize = (e) => {
        setSize(e.target.value.trim());

        var i;
        for (i = 0; i < productData.size.length; i++) {
            if (e.target.value.trim() === productData.size[i].name) {
                return setPrice(productData.startingPrice * productData.size[i].value);
            }
        }
    }

    return (
        <>
            <Card style={cardStyle} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="300"
                        src={`/images/${productData.name}.jpg`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {productData.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {(productData.description && productData.description.length > 20) ? productData.description.substr(0, 20) + "..." : " "}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <FormControl>
                        <InputLabel>Size</InputLabel>
                        <Select
                            value={size}
                            onChange={handleChangeSize}
                        >
                            {productData.size.map((size) => (
                                <MenuItem key={size.value} value={size.name}>{size.name}</MenuItem>
                            ))}
                        </Select> {/* Problem when clicking the select : Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. */}
                    </FormControl>
                    <p> $ {price}</p>
                    <Button size="small" style={style} onClick={() => addToCart(productData._id, size, price)}>
                        Order
                        </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default FoodItem;
