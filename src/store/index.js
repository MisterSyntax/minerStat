/**
 * @desc: This file creates a store factory for creating your stores
 * @desc: This file also applies middleware to allow functionality to be launched before/after all actions
 * @export: {function} Exports a function that takes a state to create a store
 */

import C from '../constants'
import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'

/**
 * @description - Middlewear to show us the state of the App before/after actions
 */
const storeUpdateInfo = (store) => (next) => (action) => {

    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('before')
    console.log(store.getState())

    result = next(action)

    console.log('after')
    console.log(store.getState())

    console.groupEnd()

    return result

}

export default (initialState={}) => {
    return applyMiddleware(thunk, storeUpdateInfo)(createStore)(appReducer,initialState);
};


