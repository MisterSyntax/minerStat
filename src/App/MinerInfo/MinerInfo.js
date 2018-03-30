import React from 'react';
import PropTypes from 'prop-types';
import styles from './MinerInfo.css';

export const MinerInfo = ({
    minerStats
}) => {
    console.log(minerStats);
    return (
        <div className={styles.minerinfo}>
            Miner Information
        </div>
    );
};

export default MinerInfo;

MinerInfo.propTypes = {
    minerStats: PropTypes.shape()
};

