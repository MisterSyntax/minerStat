export const LOAD_RAVEN_PAYMENTS = 'LOAD_RAVEN_PAYMENTS';
export const LOAD_RAVEN_PAYMENTS_SUCCESS = 'LOAD_RAVEN_PAYMENTS_SUCCESS';
export const LOAD_RAVEN_PAYMENTS_FAIL = 'LOAD_RAVEN_PAYMENTS_FAIL';
export const LOAD_MINER_STATS = 'LOAD_MINER_STATS';
export const LOAD_MINER_STATS_SUCCESS = 'LOAD_MINER_STATS_SUCCESS';
export const LOAD_MINER_STATS_FAIL = 'LOAD_MINER_STATS_FAIL';

// export const fetchRavenPayments = (walletId = 'RLTCoLEnrDwwupR3pSgKWy7NJ9E1t9TYC3') => {
export const fetchRavenPayments = (walletId = 'RJ7thg5raYjDUkt9Z2E23DdRMFHjZhVPzv') => { //my wallet id
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

export const fetchMinerStats = (walletId = 'RJ7thg5raYjDUkt9Z2E23DdRMFHjZhVPzv') => { //my wallet id
    return function (dispatch) {
        dispatch(loadMinerStats());

        return fetch(`http://mine.threeeyed.info/api/worker_stats?${walletId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(loadMinerStatsSuccess(data));
            })
            .catch(error => loadMinerStatsFail(error));
    };
};

export const loadMinerStats = () => {
    return ({
        type: LOAD_MINER_STATS
    });
};

export const loadMinerStatsSuccess = data => {
    return ({
        type: LOAD_MINER_STATS_SUCCESS,
        data
    });
};

export const loadMinerStatsFail = error => ({
    type: LOAD_MINER_STATS_FAIL,
    error
});