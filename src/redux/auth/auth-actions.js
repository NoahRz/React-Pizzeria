import axios from 'axios';
import { returnErrors } from './error-actions';

import {
    ADD_TO_USER,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCESS,
    LOGIN_FAIL,
    LOGOUT_SUCESS,
    REGISTER_SUCESS,
    REGISTER_FAIL
} from './types';

// check token and load user
export const loadUser = () => (dispatch, getState) => {
    //user loading
    dispatch({ type: USER_LOADING });

    axios.get('http://localhost:3000/api/v1/profile', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}

export const addToUser = (data) => {
    return {
        type: ADD_TO_USER,
        payload: data
    }
}

// Register user

export const register = (newUsername, newPassword, newFirstname, newLastname, newEmail, newAddress) => dispatch => {
    // Headers
    const config = { // je sais pas si utile
        headers: {
            'Content-Type': 'application/json'
        }
    }

    console.log("register")

    axios.post('http://localhost:3000/api/v1/signup', // doit retourner les user data et son token
        {
            username: newUsername,
            password: newPassword,
            firstname: newFirstname,
            lastname: newLastname,
            email: newEmail,
            address: newAddress,
        }
    )
        .then(res =>
            dispatch({
                type: REGISTER_SUCESS,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

// Login user
export const login = (data) => {
    return {
        type: LOGIN_SUCESS,
        payload: data
    }
}

// Logout user
export const logout = () => {
    return {
        type: LOGOUT_SUCESS
    };
}

// Setup config/headers and token
export const tokenConfig = getState => {
    // Get token from localstorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // if token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token
    }

    return config;
}