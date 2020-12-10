import React, { useState, useEffect } from 'react';
//import { Button } from '../ButtonStyles';
import {
    FoodCardContainer,
    FoodCardImage,
    FoodCardWrapper,
} from './style';

/* import pizza from '../../images/Vegetariana.jpg';
 */
import axios from 'axios';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/shopping/shopping-actions';

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

async function makePostOrderRequest(url, newPizzas) {

    let res = await axios.post(url, {
        pizzas: newPizzas
    });
    return res;
}

async function makeUpdateUserRequest(url, newOrder) {

    let res = await axios.update(url, {
        order: newOrder
    });
    return res;
}


const FoodCard = ({ productData, addToCart }) => {


    const product = productData;

    console.log(product)
    const [hover, setHover] = useState(false);

    const [size, setSize] = useState(product.size[0].name);

    const [price, setPrice] = useState(product.startingPrice * product.size[0].value);

    const onHover = () => {
        setHover(!hover)
    }

    const handleChangeSize = (e) => {
        setSize(e.target.value.trim());

        var i;
        for (i = 0; i < product.size.length; i++) {
            if (e.target.value.trim() === product.size[i].name) {
                return setPrice(product.startingPrice * product.size[i].value);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault() // to prevent the browser for changes

        // ... submit to API
        makePostOrderRequest('http://localhost:3000/api/v1/order',
            [{ pizza: 1, size: "m" }])
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    };

    return (
        <>
            <Card style={cardStyle} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="300"
                        src={`/images/${product.name}.jpg`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {(product.description && product.description.length > 20) ? product.description.substr(0, 20) + "..." : " "}
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
                            {product.size.map((size) => (
                                <MenuItem key={size.value} value={size.name}>{size.name}</MenuItem>
                            ))}
                        </Select> {/* Problem when clicking the select : Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. */}
                    </FormControl>
                    <p> $ {price}</p>
                    <Button size="small" style={style} onClick={() => addToCart(product._id, size, price)}>
                        Order
                        </Button>
                </CardActions>
            </Card>
        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id, size, price) => dispatch(addToCart(id, size, price))
    }
}

export default connect(null, mapDispatchToProps)(FoodCard);

/*          <>
            <FoodCardContainer>
                <FoodCardImage src={productData.image} />
                <FoodCardWrapper>
                    <h1>{productData.name}</h1>
                    <p>{productData.description}</p>
                    <Button onMouseEnter={onHover} onMouseLeave={onHover} onClick={() => addToCart(productData._id)} primary="true" dark="true">
                        Order
                    </Button>
                </FoodCardWrapper>
            </FoodCardContainer>
        </>  */
