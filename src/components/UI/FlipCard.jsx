import React, { useState } from 'react';
import styles from './FlipCard.module.css';

const FlipCard = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={styles.scene} onClick={handleClick}>
            <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
                <div className={`${styles.face} ${styles.front}`}>
                    {frontContent}
                </div>
                <div className={`${styles.face} ${styles.back}`}>
                    {backContent}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
