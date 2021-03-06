import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import responseData from './App/responseData';
import userData from './App/userData';
import viewState from './App/viewState';
// if we need middleware we'll use a storeFactory
// import storeFactory from './store/';
import sampleData from './initialState.json';
import App from './App/App';

//Setting up load data and save state
// const initialState = (window.localStorage['app-store']) ? JSON.parse(window.localStorage['app-store']) : sampleData;
const saveState = () =>
    localStorage['app-store'] = JSON.stringify(store.getState());

const mainReducer = combineReducers({
    responseData,
    viewState,
    userData,
});

const store = createStore(
    mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);

store.subscribe(saveState);

//Renders your app, wrapped in a provider, for hooking up your store to the app
render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('react-container'));
