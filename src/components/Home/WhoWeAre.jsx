import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WhoWeAre.module.css';

const WhoWeAre = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Who We Are</h2>
                <p className={styles.text}>
                    YuboKits is a team of passionate engineers, educators, and designers dedicated to revolutionizing STEM education. We don't just build robots; we build the confidence to create.
                </p>
                <Link to="/about" className={styles.btn}>
                    Learn More
                </Link>
            </div>
        </section>
    );
};

export default WhoWeAre;
