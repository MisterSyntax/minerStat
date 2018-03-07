import React from 'react';
import { workerStats } from '../../../test/workerStats'

export const WorkerStats = () => {
    const { mature, immature, totalHash, totalShares, paid } = workerStats
    const miner = workerStats.miner.split('=')
    return (
        <div>
            <div>
                Miner: {miner[1]}
            </div>
            <div>
                Total Hash: {totalHash}
            </div>
            <div>
                Total Shares: {totalShares}
            </div>
            <div>
                Mature: {mature}
            </div>
            <div>
                Immature: {immature}
            </div>
            <div>
                Total Paid: {paid}
            </div>
        </div>
)};