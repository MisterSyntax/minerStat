import React from 'react';
import PropTypes from 'prop-types';

export const Payout = ({ payment }) => (
    <div>
      ${payment.txid}
    </div>
);

Payout.propTypes = {
    payment: PropTypes.object,
};

export default Payout;
