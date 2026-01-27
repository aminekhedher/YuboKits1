import React from 'react';
import styles from './MissionValues.module.css';
import ValueCard from './ValueCard';
import { companyValues } from '../../data/aboutData';

const MissionValues = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Mission & Values</h2>
                    <p className={styles.missionStatement}>
                        We exist to bridge the gap between imagination and engineering, empowering students to build the world they imagine.
                    </p>
                </div>

                <div className={styles.grid}>
                    {companyValues.map(value => (
                        <ValueCard
                            key={value.id}
                            title={value.title}
                            description={value.description}
                            icon={value.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionValues;
