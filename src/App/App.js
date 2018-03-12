import React from 'react';
import styles from './App.css';
import Home from './Home/Home';

const App = () => {


    return (
        <div id="app">
            <p className={styles.tester}> Test </p>
            <Home />
        </div>
    );
};

export default App;
