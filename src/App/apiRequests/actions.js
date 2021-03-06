export const LOAD_RAVEN_PAYMENTS = 'LOAD_RAVEN_PAYMENTS';
export const LOAD_RAVEN_PAYMENTS_SUCCESS = 'LOAD_RAVEN_PAYMENTS_SUCCESS';
export const LOAD_RAVEN_PAYMENTS_FAIL = 'LOAD_RAVEN_PAYMENTS_FAIL';

export const fetchRavenPayments = (walletId = 'RLTCoLEnrDwwupR3pSgKWy7NJ9E1t9TYC3') => {
    return function (dispatch) {
        dispatch(loadRavenPayments());

        return fetch(`http://mine.threeeyed.info/api/payments?${walletId}`)
          .then(response => response.json())
          .then(data => {
              dispatch(loadRavenPaymentsSuccess(data[0]));
          })
          .catch(error => loadRavenPaymentsFail(error));
    };
};

export const loadRavenPayments = () => {
    return ({
        type: LOAD_RAVEN_PAYMENTS
    });
};

export const loadRavenPaymentsSuccess = data => {
    return ({
        type: LOAD_RAVEN_PAYMENTS_SUCCESS,
        data
    });
};

export const loadRavenPaymentsFail = error => ({
    type: LOAD_RAVEN_PAYMENTS_FAIL,
    error
});
