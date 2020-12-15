import * as actionTypes from './types';

const INITIAL_STATE = {
    products: [], // {id, title, descr, price, img}
    cart: [], // {id, title, descr, price, qty}
    currentItem: null,
    loading: false
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.GET_PIZZAS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case actionTypes.ADD_PIZZA_TO_CART:
            // Get the items data from the products array
            const item = state.products.find(prod => prod._id === action.payload._id);
            // Check if item is in cart already 
            const inCart = state.cart.find((item) => (item._id === action.payload._id && item._size === action.payload._size) ? true : false);
            return {
                ...state,
                cart: inCart ? state.cart.map((item) =>
                    (item._id === action.payload._id && item._size === action.payload._size) ?
                        { ...item, qty: item.qty + 1 } : item
                )
                    : [...state.cart, { ...item, _size: action.payload._size, _price: action.payload._price, qty: 1 }]
            };
        case actionTypes.REMOVE_PIZZA_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => (item._id !== action.payload._id || item._size !== action.payload._size))
            };
        case actionTypes.ADJUST_PIZZA_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    (item._id === action.payload._id && item._size === action.payload._size) ?
                        { ...item, qty: +action.payload.qty } : item // + : to turn into integer
                )
            };
        case actionTypes.PIZZAS_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.REMOVE_ALL_PIZZAS:
            return {
                ...state,
                cart: [],
                currentItem: null,
                loading: false
            }
        default:
            return state;
    }
}

export default shopReducer;