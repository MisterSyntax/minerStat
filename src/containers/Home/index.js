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
        enable: state.enable
    }
)

const mapDispatchToProps = dispatch => {
    return{
        onEnableContent(){
            dispatch(
                enableContent()
            )
        },
        onDisableContent(){
            dispatch(
                disableContent()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)