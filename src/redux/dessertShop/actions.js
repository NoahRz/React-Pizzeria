import axios from 'axios';
import * as actionTypes from './types';
//import { tokenConfig } from '../auth/auth-actions';
//import { returnErrors } from '../auth/error-actions';

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading());
    axios.get('https://serene-retreat-39457.herokuapp.com/api/v1/desserts').then(res => {
        dispatch({
            type: actionTypes.GET_DESSERTS,
            payload: res.data
        })
    });
}

export const addToCart = (itemID, size, price) => {
    return {
        type: actionTypes.ADD_DESSERT_TO_CART,
        payload: {
            _id: itemID,
            _size: size,
            _price: price
        }
    }
}

export const removeFromCart = (itemID, size) => {
    return {
        type: actionTypes.REMOVE_DESSERT_FROM_CART,
        payload: {
            _id: itemID,
            _size: size,
        }
    }
}

export const adjustQty = (itemID, value, size) => {
    return {
        type: actionTypes.ADJUST_DESSERT_QTY,
        payload: {
            _id: itemID,
            _size: size,
            qty: value,
        }
    }
}

export const setProductsLoading = () => {
    return {
        type: actionTypes.DESSERTSS_LOADING
    }
}

export const removeAllItems = () => {
    return {
        type: actionTypes.REMOVE_ALL_DESSERTS
    }
}