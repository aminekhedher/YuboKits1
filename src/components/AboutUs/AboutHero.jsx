import React from 'react';
import styles from './AboutHero.module.css';

const AboutHero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>Empowering the Next Generation of Creators</h1>
                <p className={styles.subtitle}>
                    We're on a mission to make robotics education accessible, engaging, and transformative for everyone.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;
