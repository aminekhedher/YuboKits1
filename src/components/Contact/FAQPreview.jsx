import React, { useState } from 'react';
import styles from './FAQPreview.module.css';
import { simpleFaqs } from '../../data/contactData';

const FAQPreview = () => {
    const [openId, setOpenId] = useState(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Quick Answers</h2>
                    <p>Find answers to our most common questions.</p>
                </div>

                <div className={styles.faqList}>
                    {simpleFaqs.map(faq => (
                        <div key={faq.id} className={styles.faqItem}>
                            <button
                                className={styles.question}
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                            >
                                {faq.question}
                                <span className={`${styles.icon} ${openId === faq.id ? styles.expandedIcon : ''}`}>
                                    +
                                </span>
                            </button>
                            {openId === faq.id && (
                                <div className={styles.answer}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <a href="#" className={styles.viewAllLink} onClick={e => e.preventDefault()}>
                        See all FAQs →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQPreview;
