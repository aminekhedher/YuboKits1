import React from 'react';
import styles from './LatestWorkshop.module.css';
import workshop1 from '../../assets/workshop1.jpg';
import workshop2 from '../../assets/workshop2.jpg';
import workshop3 from '../../assets/workshop3.jpg';

const LatestWorkshop = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Latest Workshop</h2>
                    <p className={styles.location}>
                        Regional Delegation of Youth and Sports – Zaghouan 🇹🇳
                    </p>
                    <div className={styles.tags}>
                        <span className={styles.tag}>#Workshops_of_the_National_Festival_of_Robotics_and_Artificial_Intelligence</span>
                        <span className={styles.tag}>#December_24_2025</span>
                    </div>
                </div>

                <div className={styles.gallery}>
                    <div className={styles.imageWrapper}>
                        <img src={workshop1} alt="Workshop Moment 1" className={styles.image} />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={workshop2} alt="Workshop Moment 2" className={styles.image} />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={workshop3} alt="Workshop Moment 3" className={styles.image} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestWorkshop;
