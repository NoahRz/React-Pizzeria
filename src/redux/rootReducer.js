import {combineReducers} from 'redux';
import shopReducer from './shopping/shopping-reducer';
import authReducer from './auth/auth-reducer';
import errorReducer from './auth/error-reducer'

const rootReducer = combineReducers({
    shop: shopReducer,
    auth: authReducer,
    error: errorReducer
});

export default rootReducer;