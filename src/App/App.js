import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './Home/Home';
import LightBox from './LightBox/LightBox';
import { fetchRavenPayments } from './apiRequests/actions';
import { setWalletId } from './actions';

class App extends React.Component {
    componentWillMount(){
        this.props.setWalletId();
        this.props.fetchRavenPayments();
        /* Fetch all data here? I like this idea, because if we already have the wallet, we can do all of our fectches in one place*/
    }
    render() {
        return (
          <div id="app">
              <Home />
          </div>
        );
    }
}

App.propTypes = {
    fetchRavenPayments: PropTypes.func,
};

const mapDispatchToProps = {
    fetchRavenPayments: walletId => fetchRavenPayments(walletId),
    setWalletId,
};

export default connect(null, mapDispatchToProps)(App);
