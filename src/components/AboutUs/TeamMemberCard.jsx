import React from 'react';
import styles from './TeamMemberCard.module.css';

const TeamMemberCard = ({ name, role, image, bio, funFact, linkedin }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} alt={name} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.role}>{role}</div>
                <p className={styles.bio}>{bio}</p>
                {funFact && <div className={styles.funFact}>💡 Fun Fact: {funFact}</div>}

            </div>
        </div>
    );
};

export default TeamMemberCard;
