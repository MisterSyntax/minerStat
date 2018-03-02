import {
   ENABLE,
   DISABLE,
} from './actions.js';
import { combineReducers } from 'redux';

//TODO: Remove/Replace Sample reducer
export const enable = (state = false, action) => {
    switch (action.type) {
        case C.ENABLE: {
            return true;
        }
        case C.DISABLE: {
            return false;
        }
        default: {
            return state;
        }
    }
};

export default enable;
