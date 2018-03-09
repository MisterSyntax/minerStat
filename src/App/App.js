import React from 'react';
import styles from './App.css';
import Home from './Home/Home';

const App = () => {
    console.log('sy', styles);

    return (
        <div id="app">
            <p className={styles.tester}> Test </p>
            <Home />
        </div>
    );
};

export default App;
