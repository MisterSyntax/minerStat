import React from 'react';
import { connect } from 'react-redux';
import { fetchRavenPayments } from './actions';
import { WorkerStats } from '../WorkerStats/WorkerStats';

class Home extends React.Component {
    componentWillMount(){
        fetchRavenPayments();
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

function mapDispatchToProps(dispatch) {
    return {
        fetchRavenPayments: () => dispatch(fetchRavenPayments)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
