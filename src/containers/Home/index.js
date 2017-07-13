/**
 * @desc: THis is a sample container for connecting the state with a component
 */

import React from 'react'

//import your component
import Home from '../../components/Home/'

import { connect } from 'react-redux'

//import whatever action you need to update your state
import { enableContent, disableContent } from '../../actions'

const mapStateToProps = (state, props) => (
    {
        enableView: state.enabled
    }
)

const mapDispatchToProps = dispatch => {
    return{
        onEnableContent(){
            dispatch(
                enable()
            )
        },
        onDisableContent(){
            dispatch(
                disable()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)