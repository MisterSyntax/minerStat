import deep from 'deep-get-set';
import { SET_WALLET_ID } from './actions.js';
import { createSelector } from 'reselect';

export const userDataReducer = (state = {}, action) => {
    switch (action.type) {
    case SET_WALLET_ID: {
        return {
            ...state,
            walletId: action.walletId,
        };
    }
    default: {
        return state;
    }
    }
};

export const getWalletId = createSelector(
    state => state,
    state => deep(state, 'userData.walletId') || 'RLTCoLEnrDwwupR3pSgKWy7NJ9E1t9TYC3'
);

export default userDataReducer;
