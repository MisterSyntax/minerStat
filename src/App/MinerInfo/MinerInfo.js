import React from 'react';
import PropTypes from 'prop-types';
import styles from './MinerInfo.css';

export const MinerInfo = () => {
    return (
        <div className={styles.minerinfo}>
            Miner Information
        </div>
    );
};

export default MinerInfo;

MinerInfo.propTypes = {
    title: PropTypes.string,
    data: PropTypes.shape(),
};

