import { combineReducers } from 'redux';
import { lightBoxReducer } from './LightBox/viewState';

export default combineReducers({
    lightBox: lightBoxReducer,
});
