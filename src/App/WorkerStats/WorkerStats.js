import React from 'react';
import styles from './WorkerStats.css';
import MinerInfo from '../MinerInfo/MinerInfo';

export const WorkerStats = () => {
    const minerData= {
        'Total Miners': 1234,
        'Hashrate': 2345,
        'Accepted': 3456,
        'Rejected': 4567
    };
    return (
        <div>
            <div className={styles.minerStatsTop}>
            {/* these will probably be components with props passed in or something */}
                <div className={styles.minerInfo}>
                    <MinerInfo title='Miner Information' data={minerData} />
                </div>
                <div className={styles.minerInfo}>
                    <MinerInfo title='Balance' />
                </div>
                <div className={styles.minerInfo}>
                    <MinerInfo title='Pool Information' />
                </div>
            </div>
            <div className={styles.minerStatsBottom}>
                <div className={styles.transactions}>
                    Transactions
                </div>
                <div className={styles.payouts}>
                    Payouts
                </div>
            </div>
        </div>
    );
};
