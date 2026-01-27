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

                <div className={styles.founderQuote}>
                    <p className={styles.quoteText}>
                        "I started Neobotic because I believe every child is an inventor at heart. They just need the right tools and a little encouragement to build the future."
                    </p>
                    <p className={styles.quoteAuthor}>- Alex Chen, Founder</p>
                </div>
            </div>
        </section>
    );
};

export default StoryTimeline;
