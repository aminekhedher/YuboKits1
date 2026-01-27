import React from 'react';
import styles from './WorkshopBenefits.module.css';
import { workshopBenefits } from '../../data/workshopData';

const WorkshopBenefits = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Why Choose YuboKits Workshops</h2>
                <div className={styles.grid}>
                    {workshopBenefits.map((benefit) => (
                        <div key={benefit.id} className={styles.card}>
                            <div className={styles.icon}>{benefit.icon}</div>
                            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                            <p className={styles.benefitDescription}>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkshopBenefits;
