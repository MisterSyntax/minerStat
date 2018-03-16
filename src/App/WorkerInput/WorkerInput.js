import React from 'react';
import styles from './WorkerInput.css';

export const WorkerInput = () => {
    const workerInput = false;
    if (!workerInput) {
        return null;
    }
    return (
        <div>
            <div>
                This is the worker input.
            </div>
        </div>
    );
};

export default WorkerInput;