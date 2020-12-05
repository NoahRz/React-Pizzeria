import React, {useState, useEffect} from 'react';
import {CartItem} from'../index';

import {Grid} from './styles';

import {connect} from 'react-redux';


const Cart = ({cart}) => {

    console.log("cart :", cart)

    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=> {
        let items = 0;
        let price = 0;

        cart.forEach(item => {
            items += item.qty;
            price += item.qty * item.price;
        })

        setTotalItems(items);
        setTotalPrice(price); 

    }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice])

    return (
        <>
            <Grid>
                {cart.map((item) => (
                    <CartItem key={item._id} itemData={item} /> 
                ))}
            </Grid>
            <div>
                <h4>Cart Summary</h4>
                <div>
                    <span>TOTAL: ( {totalItems} items)</span>
                    <span>$ {totalPrice} </span>
                </div>
                <button>
                Proceed To Checkout
                </button>
            </div>

        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);