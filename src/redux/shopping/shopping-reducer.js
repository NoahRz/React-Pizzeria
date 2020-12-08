import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    products: [], // {id, title, descr, price, img}
    cart: [], // {id, title, descr, price, qty}
    currentItem: null,
    loading: false
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case actionTypes.ADD_TO_CART:
            // Get the items data from the products array
            console.log("size:", action.payload._size);
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
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => (item._id !== action.payload._id || item._size !== action.payload._size))
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    (item._id === action.payload._id && item._size === action.payload._size) ?
                        { ...item, qty: +action.payload.qty } : item // + : to turn into integer
                )
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            };
        case actionTypes.PRODUCTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.REMOVE_ALL_ITEMS:
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