import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    openLightBox,
    closeLightBox,
} from '../LightBox/actions';

export const Payout = ({ openLightBox, payment }) => (
    <div onClick={()=>openLightBox(payment.txid)} >
      ${payment.txid}
    </div>
);

Payout.propTypes = {
    payment: PropTypes.object,
    openLightBox: PropTypes.func,
};

const mapDispatchToProps = {
    closeLightBox,
    openLightBox,
};

export default connect(null, mapDispatchToProps)(Payout);
