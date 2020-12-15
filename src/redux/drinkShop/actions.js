import axios from 'axios';
import * as actionTypes from './types';
//import { tokenConfig } from '../auth/auth-actions';
//import { returnErrors } from '../auth/error-actions';

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading());
    axios.get('http://localhost:3000/api/v1/drinks').then(res => {
        dispatch({
            type: actionTypes.GET_DRINKS,
            payload: res.data
        })
    });
}

export const addToCart = (itemID, size, price) => {
    return {
        type: actionTypes.ADD_DRINK_TO_CART,
        payload: {
            _id: itemID,
            _size: size,
            _price: price
        }
    }
}

export const removeFromCart = (itemID, size) => {
    return {
        type: actionTypes.REMOVE_DRINK_FROM_CART,
        payload: {
            _id: itemID,
            _size: size,
        }
    }
}

export const adjustQty = (itemID, value, size) => {
    return {
        type: actionTypes.ADJUST_DRINK_QTY,
        payload: {
            _id: itemID,
            _size: size,
            qty: value,
        }
    }
}

export const setProductsLoading = () => {
    return {
        type: actionTypes.DRINKS_LOADING
    }
}

export const removeAllItems = () => {
    return {
        type: actionTypes.REMOVE_ALL_DRINKS
    }
}