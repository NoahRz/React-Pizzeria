import React, { useState, useEffect } from 'react';
import { CartItem } from '../index';

import { Grid } from './styles';

import { connect } from 'react-redux';

import axios from 'axios';

import { removeAllItems } from '../../redux/shopping/shopping-actions';


async function makePostOrderRequest(url, newItems) {

    let res = await axios.post(url, {
        items: newItems
    });
    return res;
}

async function makeUpdateUserRequest(url, orderID) {

    let res = await axios.put(url, {
        order: orderID
    });
    return res;
}

const Cart = ({ cart, auth, removeAllItems }) => {

    // user connected
    //

    const { isAuthenticated } = auth;

    console.log("cart :", cart)

    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach(item => {
            items += item.qty;
            price += item.qty * item.price;
        })

        setTotalItems(items);
        setTotalPrice(price);

    }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice])

    const handleCart = () => {
        let order = [];
        cart.forEach(item => {
            order.push({ pizza: item._id, size: 's', quantity: item.qty })
        })
        return order;
    }

    const handleSubmit = () => {
        // ... submit to API
        if (isAuthenticated) {
            makePostOrderRequest('http://localhost:3000/api/v1/order',
                handleCart())
                .then((res) => {
                    console.log(res.data);
                    const orderId = res.data._id;
                    const url = 'http://localhost:3000/api/v1/updateOrder/'
                    makeUpdateUserRequest(url.concat(auth.user._id), orderId) // add order id to user
                        .then((res) => {
                            console.log(res.data);
                            removeAllItems();
                        })
                        .catch((err) => console.log(err))

                }) // received order id
                .catch((err) => console.log(err))
        } else {
            console.log("Please sign in");
        }
    };


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
                <button onClick={handleSubmit}>Proceed To Checkout</button>
            </div>

        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeAllItems: () => dispatch(removeAllItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);