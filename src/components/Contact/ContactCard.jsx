import React from 'react';
import styles from './ContactCard.module.css';

const ContactCard = ({ title, email, description }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <a href={`mailto:${email}`} className={styles.email}>
                {email}
            </a>
        </div>
    );
};

export default ContactCard;
