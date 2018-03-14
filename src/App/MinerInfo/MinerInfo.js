import React from 'react';
import PropTypes from 'prop-types';
import styles from './MinerInfo.css';

export const MinerInfo = (props) => {
    const title = props.title;
    const data = props.data;
    return (
        <div>
            <div>
                {title}
            </div>
        </div>
    );
};

export default MinerInfo;

MinerInfo.propTypes = {
    title: PropTypes.string,
    data: PropTypes.shape(),
};

