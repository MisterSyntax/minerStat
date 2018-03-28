import { combineReducers } from 'redux';
import { lightBoxReducer } from './LightBox/viewState';
import { payoutReducer } from './Payouts/viewState';

export default combineReducers({
    lightBox: lightBoxReducer,
    payout: payoutReducer,
});
