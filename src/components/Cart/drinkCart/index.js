import React from 'react';

import { connect } from 'react-redux';
import { removeFromCart, adjustQty } from '../../../redux/drinkShop/actions';

import CartItem from '../cartItem/';

const DrinkItem = ({ itemData, removeFromCart, adjustQty }) => {

    return (
        <>
            <CartItem itemData={itemData} removeFromCart={removeFromCart} adjustQty={adjustQty} />
        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id, size) => dispatch(removeFromCart(id, size)),
        adjustQty: (id, value, size) => dispatch(adjustQty(id, value, size))
    }
}

export default connect(null, mapDispatchToProps)(DrinkItem);