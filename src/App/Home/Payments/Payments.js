import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRavenPayments } from './actions';
import { getPaymentData, getPayments } from './responseData';

class Payments extends React.Component {

    componentWillMount(){
        this.props.onFetchRavenPayments('123');
    }

    render(){
        return(
          <section className=''>
              PAYMENTS:
              <ul>
              {/* TODO: ATS - MAke this into a payment component, that when you click on one you get all youse infos*/}
              {this.props.payments.map(payment =>(
                  <li key={payment.txid}>TXID: {payment.txid}</li>
              ))}
              </ul>
          </section>
        );
    }
}

const mapStateToProps = state => ({
    paymentData: getPaymentData(state),
    payments: getPayments(state),
});

const mapDispatchToProps = {
    onFetchRavenPayments: walletId => fetchRavenPayments(walletId)
};

Payments.propTypes = {
    onFetchRavenPayments: PropTypes.func,
    paymentData: PropTypes.object,
    payments: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payments);
