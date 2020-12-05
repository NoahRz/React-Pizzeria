import React, {useState, useEffect} from 'react';
import {Button} from '../ButtonStyles';
import {
    FoodCardContainer,
    FoodCardImage,
    FoodCardWrapper,
} from './style';

import Pizza1 from '../../images/graziepizza.jpg';

import axios from 'axios';

import {connect} from 'react-redux';
import { addToCart } from '../../redux/shopping/shopping-actions';

async function makePostOrderRequest(url, newPizzas) {

    let res = await axios.post(url, {
      pizzas : newPizzas
    });
    return res;
  }

async function makeUpdateUserRequest(url, newOrder) {

let res = await axios.update(url, {
    order : newOrder
});
return res;
}


const FoodCard = ({productData, addToCart}) => {

    //console.log([id]);
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    const handleSubmit = (e) => {
    e.preventDefault() // to prevent the browser for changes
    
    // ... submit to API
    makePostOrderRequest('http://localhost:3000/api/v1/order',
        [{pizza:1, size:"m"}])
    .then(( data ) => console.log(data))
    .catch((err) => console.log(err))
    };


    return (
        <>
            <FoodCardContainer>
                <FoodCardImage src= {productData.image} />
                <FoodCardWrapper>
                    <h1>{productData.name}</h1>
                    <p>{productData.description}</p>
                    <Button onMouseEnter= {onHover} onMouseLeave={onHover} onClick={()=> addToCart(productData._id)} primary="true" dark="true">
                            Order
                    </Button>
                </FoodCardWrapper>
            </FoodCardContainer>
        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(FoodCard);