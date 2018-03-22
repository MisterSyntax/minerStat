import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './Transactions.css';
import data from '../../../test/api.js';

export const Transactions = () => {
    const { payments } = data;
    return (
        <div className={styles.transactions}>
            <div className={styles.title}>
                Transactions
            </div>
            <div className={styles.headers}>
                <div className={styles.column1}>
                    Time
                </div>
                <div className={styles.column2}>
                    Miners
                </div>
                <div className={styles.column3}>
                    Blocks Found
                </div>
                <div className={styles.column4}>
                    Total Paid
                </div>
            </div>
            {payments.map(payment => {
                const { time, miners, paid, blocks } = payment;
                return (
                    <div className={styles.headers}>
                        <div className={styles.column1}>
                            {moment(time).format('h:mm:ss a')}
                        </div>
                        <div className={styles.column2}>
                            {miners}
                        </div>
                        <div className={styles.column3}>
                            {blocks.length}
                        </div>
                        <div className={styles.column4}>
                            {parseInt(paid)} RVN
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

Transactions.propTypes = {
    paymentData: PropTypes.shape()
};

export default Transactions;