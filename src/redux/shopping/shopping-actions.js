import axios from 'axios';
import * as actionTypes from './shopping-types';
import { tokenConfig } from '../auth/auth-actions';
import { returnErrors } from '../auth/error-actions';

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading());
    axios.get('http://localhost:3000/api/v1/pizzas').then(res => {
        console.log("redux", res.data);
        dispatch({
            type: actionTypes.GET_PRODUCTS,
            payload: res.data
        })
    }
    )

    return {
        type: actionTypes.GET_PRODUCTS
    };
}

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            _id: itemID
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            _id: itemID
        }
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            _id: itemID,
            qty: value,
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}

export const setProductsLoading = () => {
    return {
        type: actionTypes.PRODUCTS_LOADING
    }
}

export const removeAllItems = () => {
    return {
        type: actionTypes.REMOVE_ALL_ITEMS
    }
}