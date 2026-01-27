import React from 'react';
import styles from './Methodology.module.css';

const Methodology = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>The Neobotic Method</h2>
                <div className={styles.grid}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <h3 className={styles.stepTitle}>Build</h3>
                        <p className={styles.stepDescription}>
                            Students start by constructing physical robots. This builds spatial reasoning, fine motor skills, and an understanding of mechanical engineering principles.
                        </p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <h3 className={styles.stepTitle}>Code</h3>
                        <p className={styles.stepDescription}>
                            Next, they bring their creations to life using our intuitive block-based or Python coding environments, learning logic and computational thinking.
                        </p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <h3 className={styles.stepTitle}>Create</h3>
                        <p className={styles.stepDescription}>
                            Finally, we challenge students to apply what they've learned to solve new problems, fostering creativity and engineering design confidence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
