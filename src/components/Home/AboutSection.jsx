import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>About YuboKits</h2>
                <p className={styles.text}>
                    YuboKits is a tunisian startup that focuses on educational STEM learning through robotics kits for the kids of all ages, empowering hands on  learning and simplifying real life machines through creative design, interchangeable parts, and programmable technologies, making learning robotics easier and fun, and accessible to everyone.
                    Our mission is to provide accessible, high-quality, and ready to assemble robotic kits with guides and online open source modules that enable kids, students, educators, and enthusiasts to build and program their own robots, having a better understanding of our own rapidly evolving world.
                    Our vision is to help raise future generations of innovators and engineers, accompanying bright minds, and becoming the standard for educational innovations and solutions in Tunisia.                </p>
            </div>
        </section>
    );
};

export default AboutSection;
