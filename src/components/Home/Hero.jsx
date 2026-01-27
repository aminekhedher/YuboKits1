import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <h1 className={styles.title}>YuboKits</h1>
                <h2 className={styles.subtitle}>Build it. Learn it.</h2>

                <div className={styles.buttonGroup}>
                    <Link to="/robotics-platform" className={`${styles.btn} ${styles.btnPrimary}`}>
                        Explore Our Robots
                    </Link>
                    <Link to="/shop" className={`${styles.btn} ${styles.btnSecondary}`}>
                        Shop
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
