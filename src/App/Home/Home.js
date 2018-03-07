import React from 'react';
import { connect } from 'react-redux';
import { enableContent, disableContent } from './actions';

class Home extends React.Component {
    componentWillMount(){
        console.log('fffffuck');
    }
    render() {
        return (
            <main>
                <button onClick={()=>this.toggleContent(this.props.enable)}>Toggle</button>
                <div>
                    Content
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state, props) => (
    {
        enable: state.enable,
    }
);

const mapDispatchToProps = {
    enableContent,
    disableContent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
