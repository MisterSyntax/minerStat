import React from 'react';
import { connect } from 'react-redux';
import { enableContent, disableContent } from './actions';
import { WorkerStats } from '../WorkerStats/WorkerStats';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.toggleContent = this.toggleContent.bind(this)
    }
    toggleContent(viewState) {
        viewState ? this.props.onDisableContent() : this.props.onEnableContent()
    }
    render() {
        console.log(this.props);
        return (
            <div id="main">
                <button onClick={()=>this.toggleContent(this.props.enable)}>Toggle</button>
                <div style={{display:this.props.enable?"block":"none"}}>
                    Content
                </div>
                <WorkerStats />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => (
    {
        enable: state.enable,
    }
)

const mapDispatchToProps = {
    enableContent,
    disableContent,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
