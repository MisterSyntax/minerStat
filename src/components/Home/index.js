import React from 'react'

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.toggleContent = this.toggleContent.bind(this)
    }
    toggleContent(viewState) {
        viewState ? this.props.onEnableContent() : this.props.onDisableContent()
    }
    render() {
        return (
            <div id="main">
                <button onClick={()=>this.toggleContent(this.props.enable)}>Toggle</button>
                <div style={{display:this.props.enable?"block":"none"}}>
                    Content
                </div>
            </div>
        );
    }
}