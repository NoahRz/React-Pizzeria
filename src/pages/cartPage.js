// the cart page

import React, {useState, useEffect} from 'react';
import {
    Cart
} from '../components';

const CartPage = () => {
    return (
        <div>
            <h1>Pizzas</h1>
            <Cart/>
        </div>
    )
}

export default CartPage;