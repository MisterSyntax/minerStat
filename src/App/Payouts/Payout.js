import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    openPayoutLightBox
} from './actions';

export const Payout = ({ openPayoutLightBox, payment }) => (
    <div onClick={()=>openPayoutLightBox(payment.txid)} >
      ${payment.txid}
    </div>
);

Payout.propTypes = {
    payment: PropTypes.object,
    openPayoutLightBox: PropTypes.func,
};

const mapDispatchToProps = {
    openPayoutLightBox,
};

export default connect(null, mapDispatchToProps)(Payout);
