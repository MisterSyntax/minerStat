import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './lightbox.css';

const LightBox = (props) => {
    if(props.hideOverlay) {
        return null;
    }

    return (
        <Fragment>
            <div id={styles['light-box-bg']}/>
            <div id={styles['light-box']}>
                CONTENT!
            </div>
        </Fragment>);
};

LightBox.propTypes = {
    hideOverlay: PropTypes.bool,
};

// TODO: Kill this once we have a selector to get the state of the of the LightBox
LightBox.defaultProps = {
    hideOverlay: true,
};

export default LightBox;
