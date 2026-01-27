import React from 'react';
import styles from './ValueCard.module.css';

const ValueCard = ({ title, description, icon }) => {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <img src={icon} alt={title} className={styles.icon} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default ValueCard;
