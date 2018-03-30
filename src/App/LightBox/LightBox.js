import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './lightbox.css';
import {
    getIsLightBoxClosed,
    getLightBoxContent,
} from './viewState';
import { closeLightBox } from './actions';

const LightBox = ({
    closeLightBox,
    content,
    isClosed,
}) => {
    if(isClosed) {
        return null;
    }

    return (
        <Fragment>
            <div id={styles['light-box-bg']} onClick={closeLightBox}/>
            <div id={styles['light-box']}>
                ${content}
            </div>
        </Fragment>);
};

LightBox.propTypes = {
    closeLightBox: PropTypes.func.isRequired,
    isClosed: PropTypes.bool,
};

LightBox.defaultProps = {
    isClosed: true,
};

const mapStateToProps = state => ({
    content: getLightBoxContent(state),
    isClosed: getIsLightBoxClosed(state)
});

const mapDispatchToProps = {
    closeLightBox,
};

export default connect(mapStateToProps, mapDispatchToProps)(LightBox);
