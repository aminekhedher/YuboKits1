import React, { useState } from 'react';
import styles from './Accordion.module.css';

const AccordionItem = ({ item, isExpanded, onToggle }) => {
    return (
        <div className={styles.item}>
            <button className={styles.header} onClick={onToggle} aria-expanded={isExpanded}>
                <span className={styles.title}>{item.title || item.question}</span>
                <span className={`${styles.icon} ${isExpanded ? styles.expanded : ''}`}>
                    ▼
                </span>
            </button>
            <div className={`${styles.content} ${isExpanded ? styles.expanded : ''}`}>
                <p className={styles.text}>{item.content || item.answer}</p>
            </div>
        </div>
    );
};

const Accordion = ({ items, allowMultiple = false }) => {
    const [expandedIndices, setExpandedIndices] = useState([]);

    const handleToggle = (index) => {
        if (allowMultiple) {
            setExpandedIndices((prev) =>
                prev.includes(index)
                    ? prev.filter((i) => i !== index)
                    : [...prev, index]
            );
        } else {
            setExpandedIndices((prev) =>
                prev.includes(index) ? [] : [index]
            );
        }
    };

    return (
        <div className={styles.container}>
            {items.map((item, index) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    isExpanded={expandedIndices.includes(index)}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
