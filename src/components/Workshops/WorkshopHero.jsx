import React from 'react';
import styles from './WorkshopHero.module.css';

const WorkshopHero = () => {
    const handleScrollToForm = (e) => {
        e.preventDefault();
        const formSection = document.getElementById('inquiry-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>Bring Robotics Education to Your Community</h1>
                <p className={styles.subtitle}>
                    Our mobile workshops inspire the next generation of creators. We come to you with all materials, equipment, and expert instructors.
                </p>
                <a href="#inquiry-form" className={styles.ctaButton} onClick={handleScrollToForm}>
                    Request a Workshop
                </a>
            </div>
        </section>
    );
};

export default WorkshopHero;
