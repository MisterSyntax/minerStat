import React from 'react';
import { connect } from 'react-redux';
import { enableContent, disableContent } from './actions';
import { WorkerStats } from '../WorkerStats/WorkerStats';

class Home extends React.Component {
    componentWillMount(){
        console.log('fff');
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
        enable: state.enable,
    }
);

const mapDispatchToProps = {
    enableContent,
    disableContent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
