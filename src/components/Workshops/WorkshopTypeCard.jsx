import React from 'react';
import styles from './WorkshopTypeCard.module.css';

const WorkshopTypeCard = ({ type }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={type.image} alt={type.title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{type.title}</h3>
                <p className={styles.description}>{type.description}</p>

                <div className={styles.meta}>
                    <span className={styles.metaItem}>⏱ {type.duration}</span>
                    <span className={styles.metaItem}>👶 {type.ageRange}</span>
                    <span className={styles.metaItem}>👥 {type.groupSize}</span>
                </div>

                <ul className={styles.highlights}>
                    {type.highlights.map((highlight, index) => (
                        <li key={index} className={styles.highlightItem}>{highlight}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WorkshopTypeCard;
