import React, {useState, useEffect} from 'react';
import {Button} from '../../ButtonStyles';
import {
    FoodCardContainer,
    FoodCardImage,
    FoodCardWrapper,
} from './styles';

import {connect} from 'react-redux';
import { removeFromCart, adjustQty } from '../../../redux/shopping/shopping-actions';


const CartItem = ({itemData, removeFromCart, adjustQty}) => {

    //console.log([id]);
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    const  [input, setInput] = useState(itemData.qty);

    const onChangeHandler = (e) => {
        setInput( e.target.value);
        adjustQty(itemData._id, e.target.value);
    }

    return (
        <>
            <FoodCardContainer>
                <FoodCardImage src= {itemData.image} />
                <FoodCardWrapper>
                    <h1>{itemData.name}</h1>
                    <p>{itemData.description}</p>
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />
                    <Button onMouseEnter= {onHover} onMouseLeave={onHover} onClick={()=> removeFromCart(itemData._id)} primary="true" dark="true">
                            Remove
                    </Button>
                </FoodCardWrapper>
            </FoodCardContainer>
        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty : (id, value) => dispatch(adjustQty(id, value)) 
    }
}

export default connect(null, mapDispatchToProps)(CartItem);