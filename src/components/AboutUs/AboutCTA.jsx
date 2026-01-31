import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutCTA.module.css';

const AboutCTA = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Ready to Join Our Mission?</h2>
                <p className={styles.subtitle}>
                    Whether you're an educator, parent, or student, there's a place for you in the YuboKits community.
                </p>
                <div className={styles.buttonGroup}>
                    <Link to="/robotics-platform" className={`${styles.button} ${styles.primary}`}>
                        Explore Our Platform
                    </Link>
                    <Link to="/workshops" className={`${styles.button} ${styles.secondary}`}>
                        Book a Workshop
                    </Link>
                    <Link to="/contact" className={`${styles.button} ${styles.secondary}`}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;
