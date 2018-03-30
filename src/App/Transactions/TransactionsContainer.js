import { connect } from 'react-redux';
import { Transactions } from './Transactions';

export const mapStateToProps = (state) => {
    const { payments } = state.responseData;
    return ({
        payments
    });
};

export const mapDispatchToProps = () => {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transactions);