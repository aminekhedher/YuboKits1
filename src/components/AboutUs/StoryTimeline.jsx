import React from 'react';
import styles from './StoryTimeline.module.css';
import { storyMilestones } from '../../data/aboutData';

const StoryTimeline = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Our Story</h2>

                <div className={styles.timeline}>
                    {storyMilestones.map((milestone, index) => (
                        <div
                            key={milestone.id}
                            className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}
                        >
                            <div className={styles.content}>
                                <div className={styles.year}>{milestone.year}</div>
                                <h3 className={styles.itemTitle}>{milestone.title}</h3>
                                <p className={styles.description}>{milestone.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default StoryTimeline;
