import React from 'react';
import styles from './WorkerStats.css';
import MinerInfo from '../MinerInfo/MinerInfo';
import Balance from '../Balance/Balance';
import PoolInfo from '../PoolInfo/PoolInfo';
import Transactions from '../Transactions/Transactions';
import Payouts from '../Payouts/Payouts';

export const WorkerStats = () => {
    // if(!showWorkerStats) {
    //     return null;
    // }
    return (
        <div>
            <div className={styles.minerStatsTop}>
                <div className={styles.minerInfo}>
                    <MinerInfo />
                </div>
                <div className={styles.minerInfo}>
                    <Balance />
                </div>
                <div className={styles.minerInfo}>
                    <PoolInfo />
                </div>
            </div>
            <div className={styles.minerStatsBottom}>
                <div className={styles.transactions}>
                    <Transactions />
                </div>
                <div className={styles.payouts}>
                    <Payouts />
                </div>
            </div>
        </div>
    );
};

export default WorkerStats;
