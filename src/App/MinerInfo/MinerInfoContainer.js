import { connect } from 'react-redux';
import MinerInfo from './MinerInfo';

export const mapStateToProps = state => {
    return ({
        minerStats: state.responseData.minerStats
    });
};

export const mapDispatchToProps = () => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MinerInfo);