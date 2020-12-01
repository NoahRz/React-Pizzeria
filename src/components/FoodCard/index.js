import React, {useState, useEffect} from 'react';
import {Button} from '../ButtonStyles';
import {
    FoodCardContainer,
    FoodCardImage,
    FoodCardWrapper,
} from './style';

import Pizza1 from '../../images/graziepizza.jpg';

import axios from 'axios';

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


const FoodCard = ({id, name, description}) => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    const handleSubmit = (e) => {
    e.preventDefault() // to prevent the browser for changes
    
    // ... submit to API
    makePostOrderRequest('http://localhost:3000/api/v1/order',
        [id])
    .then(( data ) => {
        console.log(data);
        })
    .catch((err) => console.log(err))
    };


    return (
        <>
            <FoodCardContainer>
                <FoodCardImage src= {Pizza1} />
                <FoodCardWrapper>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <Button to="/" onMouseEnter= {onHover} onMouseLeave={onHover} onClick={handleSubmit} primary="true" dark="true">
                            Order
                    </Button>
                </FoodCardWrapper>
            </FoodCardContainer>
        </>
    )
}

export default FoodCard;