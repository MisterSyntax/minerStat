export const LOAD_PAYMENTS = 'LOAD_PAYMENTS';
export const LOAD_PAYMENTS_SUCCESS = 'LOAD_PAYMENTS_SUCCESS';
export const LOAD_PAYMENTS_FAIL = 'LOAD_PAYMENTS_FAIL';

export const loadPayments = () => ({
    type: LOAD_PAYMENTS
});

export const loadPaymentsSuccess = () => ({
    type: LOAD_PAYMENTS_SUCCESS
});

export const LOAD_PAYMENTS_FAIL = () => ({
    type: LOAD_PAYMENTS_FAIL
})
