import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './Home/Home';
import { fetchRavenPayments, fetchMinerStats } from './apiRequests/actions';
import LightBox from './LightBox/LightBox';
import { setWalletId } from './actions';

class App extends React.Component {
    componentWillMount(){
        this.props.setWalletId();
        this.props.fetchRavenPayments();
        this.props.fetchMinerStats();
        /* Fetch all data here? I like this idea, because if we already have the wallet, we can do all of our fectches in one place*/
    }
    render() {
        return (
          <div id="app">
              <LightBox />
              <Home />
          </div>
        );
    }
}

App.propTypes = {
    fetchRavenPayments: PropTypes.func,
    setWalletId: PropTypes.func,
    fetchMinerStats: PropTypes.func
};

const mapDispatchToProps = {
    fetchRavenPayments: walletId => fetchRavenPayments(walletId),
    fetchMinerStats: walletId => fetchMinerStats(walletId),
    setWalletId,
};

export default connect(null, mapDispatchToProps)(App);
