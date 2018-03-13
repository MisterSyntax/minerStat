import React from 'react';
import styles from './WorkerStats.css';

export const WorkerStats = () => {
    return (
        <div>
            <div className={styles.minerStatsTop}>
            {/* these will probably be components with props passed in or something */}
                <div className={styles.minerInfo}>
                    Miner Info
                </div>
                <div className={styles.minerInfo}>
                    Balance
                </div>
                <div className={styles.minerInfo}>
                    Pool Information
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
