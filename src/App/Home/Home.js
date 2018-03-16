import React from 'react';
import { connect } from 'react-redux';
import { fetchRavenPayments } from './actions';
import { WorkerStats } from '../WorkerStats/WorkerStats';
import { NavBar } from '../NavBar/NavBar';
import { WorkerInput } from '../WorkerInput/WorkerInput';

class Home extends React.Component {
    componentWillMount(){
        this.props.onFetchRavenPayments();
    }
    render() {
        return (
            <main>
                <NavBar />
                <WorkerInput />
                <WorkerStats />
            </main>
        );
    }
}

const mapStateToProps = (state) => (
    {
        walletId: state.walletId
    }
);

const mapDispatchToProps = {
    onFetchRavenPayments: walletId => fetchRavenPayments(walletId)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
