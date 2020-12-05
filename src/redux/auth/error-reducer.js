import { GET_ERRORS, CLEAR_ERRORS } from './types';

const INITIAL_STATE = {
    msg: {}, // message that comes from the backend
    status: null,
    id: null
}

const errorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            }
        case CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            }
        default:
            return state;
    }
}

export default errorReducer;
