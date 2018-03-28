import {
    openLightBox,
} from '../LightBox/actions';

export const SET_CURRENT_PAYOUT = 'SET_CURRENT_PAYOUT';

export const setCurrentPayout = payoutId => {
  console.log(payoutId);
  return ({
    type: SET_CURRENT_PAYOUT,
    payoutId,
})
};

export const openPayoutLightBox = paymentId => {
    return function (dispatch) {
        dispatch(setCurrentPayout(paymentId));
        dispatch(openLightBox());
    };
};
