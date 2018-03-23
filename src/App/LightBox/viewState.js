import { createSelector } from 'reselect';
import deep from 'deep-get-set';
import {
    CLOSE_LIGHTBOX,
    OPEN_LIGHTBOX,
} from './actions';

export const lightBoxReducer = (state = {}, action) => {
    switch (action.type) {
    case OPEN_LIGHTBOX:
        return {
            ...state,
            isClosed: false,
            content: action.content,
        };
    case CLOSE_LIGHTBOX:
        return {
            ...state,
            isClosed: true,
            content: ''
        };
    default:
        return state;
    }
};


// returns boolean so can't set default
export const getIsLightBoxClosed = createSelector(
    state => state,
    state => deep(state, 'viewState.lightBox.isClosed')
);

export const getLightBoxContent = createSelector(
    state => state,
    state => deep(state, 'viewState.lightBox.content')
);
