import { connect } from 'react-redux';
import { Transactions } from './Transactions';

export const mapStateToProps = (state) => {
    const { paymentData } = state.apiData.minerData;
    if(!state.apiData.isLoaded){
        return {};
    }
    return ({
        paymentData
    });
};

export const mapDispatchToProps = () => {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transactions);