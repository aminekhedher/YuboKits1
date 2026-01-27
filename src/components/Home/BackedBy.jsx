import React from 'react';
import styles from './BackedBy.module.css';
import arduinoLogo from '../../assets/arduino_logo_1200x630-01.png';
import polyLogo from '../../assets/polytechnique-sousse-logo.jpg';

const BackedBy = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.title}>Backed By Industry Leaders</h3>
                <div className={styles.logos}>
                    <img src={arduinoLogo} alt="Arduino" className={styles.logoImage} />
                    <img src={polyLogo} alt="Polytechnique Sousse" className={styles.logoImage} />
                </div>
            </div>
        </section>
    );
};

export default BackedBy;
