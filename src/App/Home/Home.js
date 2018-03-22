import React from 'react';
import { WorkerStats } from '../WorkerStats/WorkerStats';
import { NavBar } from '../NavBar/NavBar';
import { WorkerInput } from '../WorkerInput/WorkerInput';

const Home = () => (
    <main>
        <NavBar />
        <WorkerInput />
        <WorkerStats />
    </main>
);


export default Home;
