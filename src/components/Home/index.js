import React from 'react'

export default class Home extends React.Component {
    constructor(props){
        super(props)
    }
    toggleData(){

    }

    render() {
        return (
            <div id="main">
                <button onClick={toggleData}>Toggle</button>
                    {this.props.enabled}
                </div>
            </div>
        );
    }
}