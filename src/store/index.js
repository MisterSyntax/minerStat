/**
 * @desc: This file creates a store factory for creating your stores
 * @desc: This file also applies middleware to allow functionality to be launched before/after all actions
 * @export: {function} Exports a function that takes a state to create a store
 */

import C from '../constants'
import appReducer from './reducers';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

/**
 * @description - Middlewear to show us the state of the App before/after actions
 */
const storeUpdateInfo = (store) => (next) => (action) => {
    let result;
    result = next(action);

    return result;
}

export default (initialState={}) => {
    return applyMiddleware(thunk, storeUpdateInfo)(createStore)(appReducer,initialState);
};
