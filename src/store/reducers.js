/**
 * @desc: Manage every key in the initialState.json file
 * @return: A combined reducer that has the same structure as the initialState
 */

import C from '../constants.js'
import { combineReducers } from 'redux'

//TODO: Remove/Replace Sample reducer
export const enable = (state = false, action) => {
    switch (action.type) {
        case C.ENABLE: {
            return true;
        }
        case C.DISABLE: {
            return false;
        }
        default:{
            return state;
        }
    }
}

export default combineReducers({
    enable
})
