import { combineReducers } from 'redux';
import { payemntDataReducer } from './apiRequests/responseData';

export default combineReducers({
    payments: payemntDataReducer
});
