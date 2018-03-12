import {
   LOAD_RAVEN_PAYMENTS,
   LOAD_RAVEN_PAYMENTS_SUCCESS,
   LOAD_RAVEN_PAYMENTS_FAIL,
} from './actions.js';

export const minerData = (state = {}, action) => {
    switch (action.type) {
    case LOAD_RAVEN_PAYMENTS: {
        return {
            ...state,
            loaded: false,
            loading: true,
        };
    }
    case LOAD_RAVEN_PAYMENTS_SUCCESS: {
        return {
            ...state,
            loaded: true,
            loading: false,
            paymentData: action.data,
        };
    }
    case LOAD_RAVEN_PAYMENTS_FAIL: {
        return {
            ...state,
            loaded: true,
            loading: false,
            error: action.error
        };
    }

    default: {
        return state;
    }
    }
};

export default minerData;
