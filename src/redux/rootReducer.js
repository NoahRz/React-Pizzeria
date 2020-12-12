import { combineReducers } from 'redux';
import pizzaShopReducer from './pizzaShop/reducer';
import dessertShopReducer from './dessertShop/reducer';
import drinkShopReducer from './drinkShop/reducer';
import authReducer from './auth/auth-reducer';
import errorReducer from './auth/error-reducer'

const rootReducer = combineReducers({
    pizzaShop: pizzaShopReducer,
    dessertShop: dessertShopReducer,
    drinkShop: drinkShopReducer,
    auth: authReducer,
    error: errorReducer
});

export default rootReducer;