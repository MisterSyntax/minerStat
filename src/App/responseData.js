import { combineReducers } from 'redux';
import { payemntDataReducer } from './apiRequests/responseData';
import { minerStatsReducer } from './apiRequests/minerStatsResponseData';

export default combineReducers({
    payments: payemntDataReducer,
    minerStats: minerStatsReducer
});
