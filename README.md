A basic react setup with css next and css import, and redux
---
 
Welcome. This starter is for getting you right into building your react app. With this starter you can use react, es6 features, cssnext features, redux, redux-thunk, and you'll have the ability to import css files into react components, to help keep your code organized.

redux-thunk - handle asynchonisity in middleware
 
 
Setup
---
 
```
1. install your depencies
npm install

2. start the server
npm start

3. Preview your app
http://localhost:3000/
```

Folder Structure
---
 
```
Component Folder. 
Each component should have it's own folder e.g.. All files associated with that component should be in its folder. The main compenent should be in an index.js file.

Container Folder
For any component which will be passing state to its children using uniherited state we want to have a container. This container is used to link the Component to the store

cssGlobals Folder.
Each file in here should have css globals that you can import into css files for components. For an example on how to use these globals, please see App.css which uses variables found in colors.css

store Folder
index.js - creates middleware for your application. Allows you to run functions whenever the store updates. Used as a store factory to create your store in main index.js
reducers.js - Needs to manage every key in initial state.json

src
actions - contains action creators which are used to quickly dispatch actions that update the state
constants - all of the ACTIONs that your application makes, import this whenever you're going to be using action names to help prevent typos, and get that sweet autofill
index.js - builds that app
initialState.json - Sample data that is in the shape of your application


-components
    --App
        -index.js
        -App.css
    --MyComponent1
        -index.js
        -MyComponent1.css
    --MyComponent2
        index.js
-containers
    --MyComponent1 
        -index.js
-cssGlobals
    -colors.css 
    -myCssGlobals.css
-actions.js
-constants.js
-index.js
-initialState.json
```

Getting Started
---

```
0. npm start
1. Make a list of all the actions you need to perform, and add them constants.js
2. Update initialState.json to have sample data for your app 
3. Update /store/reducers.js to have reducers to modify every key in your updated initialState.json
3a. Test your reducers as you go by dispatching from the console
        store.dispatch({type:"ACTION_NAME"})
4. Update /src/actions - Create actions for each of the actions you will perform to update the state
5. Build new components in new folders in /components/
6. Build new containers in /containers/ When you need to access the store from a component create a container for it. As a note, you will be able to hand state from parent to child components still

```