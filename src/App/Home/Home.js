import React from 'react';
import { connect } from 'react-redux';
import { fetchRavenPayments } from './actions';
import { WorkerStats } from '../WorkerStats/WorkerStats';

class Home extends React.Component {
    componentWillMount(){
        this.props.onFetchRavenPayments('123');
    }
    render() {
        return (
            <main>
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
