//React dependencies
import React from 'react'
import { render } from 'react-dom'
//Redux dependencies
import { Provider } from 'react-redux'
import storeFactory from './store/'
//sampleData
import sampleData from './initialState.json'
//Import Main Component
import App from './components/App/'


//Setting up load data and save state
const initialState = (localStorage['app-store']) ? JSON.parse(localStorage['app-store']) : sampleData
const saveState = () => 
    localStorage['app-store'] = JSON.stringify(store.getState())
const store = storeFactory(initialState)
store.subscribe(saveState)
//For debugging purposes we expose the store
window.store = store


//Renders your app, wrapped in a provider, for hooking up your store to the app
render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('react-container'))