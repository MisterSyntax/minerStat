import { SET_CURRENT_PAYOUT } from './actions';
import { CLOSE_LIGHTBOX } from '../LightBox/actions';

export const payoutReducer = (state= {}, action) => {
    switch (action.type) {
    case SET_CURRENT_PAYOUT:
        return {
            ...state,
            payoutId: action.payoutId
        };

    case CLOSE_LIGHTBOX:
        return {
            ...state,
            payoutId: ''
        };
    default:
        return state;
    }
};
