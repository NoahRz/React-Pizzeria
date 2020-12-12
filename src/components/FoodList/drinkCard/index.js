import React from 'react';

import FoodItem from '../foodItem';

import { connect } from 'react-redux';
import { addToCart } from '../../../redux/drinkShop/actions';

const DrinkCard = ({ productData, addToCart }) => {

    return (
        <>
            <FoodItem productData={productData} addToCart={addToCart} />
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id, size, price) => dispatch(addToCart(id, size, price))
    }
}

export default connect(null, mapDispatchToProps)(DrinkCard);
