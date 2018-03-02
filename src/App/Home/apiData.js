import {
   LOAD_PAYMENTS,
   LOAD_PAYMENTS_SUCCESS,
   LOAD_PAYMENTS_FAIL,
} from './actions.js';
import { combineReducers } from 'redux';



//TODO: Remove/Replace Sample reducer
export const minerDataReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_PAYMENTS: {
            return {
                ...state,
                loaded: false,
                loading: true,
                paymentdata: action.result,
            }
        }

        case LOAD_PAYMENTS_SUCCESS: {
            return {
                ...state,
                loaded: true,
                loading: false,
            }
        }

        case LOAD_PAYMENTS_FAIL: {
            return {
                ...state,
                loaded: true,
                loading: false,
            }
        }

        default: {
            return state;
        }
    }
};

export default minerDataReducer;
