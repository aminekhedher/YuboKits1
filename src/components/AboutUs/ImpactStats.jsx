import React from 'react';
import styles from './ImpactStats.module.css';
import { impactStats } from '../../data/aboutData';

const ImpactStats = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Impact</h2>
                    <p>Making a difference in classrooms around the world</p>
                </div>
                <div className={styles.grid}>
                    {impactStats.map(stat => (
                        <div key={stat.id} className={styles.statItem}>
                            <div className={styles.value}>{stat.value}</div>
                            <div className={styles.label}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
