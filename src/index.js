import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { comnineReducers, createStore } from 'redux';
import  from './store/reducers';
// if we need middleware we'll use a storeFactory
// import storeFactory from './store/';
import sampleData from './initialState.json';
import App from './App/App';



//Setting up load data and save state
const initialState = (localStorage['app-store']) ? JSON.parse(localStorage['app-store']) : sampleData;
const saveState = () =>
    localStorage['app-store'] = JSON.stringify(store.getState());

const reducers = combineReducers({
    apiData
});

const store = createStore(mainReducer, initialState);
store.subscribe(saveState);
//For debugging purposes we expose the store
window.store = store;



//Renders your app, wrapped in a provider, for hooking up your store to the app
render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('react-container'));
