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

Building your app/Folder Structure
---
 
```
Component Folder. 
Each component should have it's own folder e.g.. All files associated with that component should be in its folder. The main compenent should be in an index.js file.

cssGlobals Folder.
Each file in here should have css globals that you can import into css files for components. For an example on how to use these globals, please see App.css which uses variables found in colors.css

-Components
    --App
        -index.js
        -App.css
    --MyComponent1
        -index.js
        -MyComponent1.css
    --MyComponent2
        -index.js
        -MyComponent2.css
-cssGlobals
    -colors.css 
    -myCssGlobals.css
```