import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <h1 className={styles.title}>Robotics Project Library</h1>
                <h2 className={styles.subtitle}>
                    Browse, build, and learn with our curated collection of hands-on robotics projects. Complete with code, 3D models, and step-by-step guides.
                </h2>

                <div className={styles.features}>
                    <span className={styles.feature}>8+ Project Categories</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.feature}>Open-Source Code on GitHub</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.feature}>Beginner to Advanced Levels</span>
                </div>

                <div className={styles.scrollIndicator}>
                    <span className={styles.scrollText}>Explore Below</span>
                    <span className={styles.scrollArrow}>↓</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
