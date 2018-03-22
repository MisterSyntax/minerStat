import {
   LOAD_MINER_STATS,
   LOAD_MINER_STATS_SUCCESS,
   LOAD_MINER_STATS_FAIL,
} from './actions.js';
import { createSelector } from 'reselect';
import deep from 'deep-get-set';

export const minerStatsReducer = (state = {}, action) => {
    switch (action.type) {
    case LOAD_MINER_STATS: {
        return {
            ...state,
            loaded: false,
            loading: true,
        };
    }
    case LOAD_MINER_STATS_SUCCESS: {
        return {
            ...state,
            loaded: true,
            loading: false,
            paymentData: action.data,
        };
    }
    case LOAD_MINER_STATS_FAIL: {
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

export const getMinerStats = createSelector(
    state => state,
    state => deep(state, 'responseData.minerStats') || {}
);
