import axios from 'axios';

import {
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

    axios.get('http://localhost:3000/api/v1/profile', config)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: AUTH_ERROR
            })
        })
}