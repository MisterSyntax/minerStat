import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPayments } from '../apiRequests/responseData';
import styles from './Payouts.css';
import Payout from './Payout.js';

export const Payouts = ({ payments }) => (
    <div className={styles.payouts}>
        Payouts
        { payments.map((payment,i) => i < 100 ?
            <Payout payment={payment} key={payment.txid} />
            :
            null
        )}
    </div>
);

Payouts.propTypes = {
    payments: PropTypes.array,
};

const mapStateToProps = state => ({
    payments: getPayments(state),
});

export default connect(mapStateToProps)(Payouts);
