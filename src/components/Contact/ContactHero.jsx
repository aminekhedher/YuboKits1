import React from 'react';
import styles from './ContactHero.module.css';

const ContactHero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.subtitle}>
                    We'd love to hear from you. Reach out with questions, ideas, or just to say hello.
                </p>
            </div>
        </section>
    );
};

export default ContactHero;
