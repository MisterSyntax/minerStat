import { combineReducers } from 'redux';
import { payemntDataReducer } from './Home/Payments/responseData';

export default combineReducers({
    payments: payemntDataReducer
});
