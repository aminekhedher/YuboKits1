import React from 'react';
import styles from './Partners.module.css';
import { partners } from '../../data/aboutData';

const Partners = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Trusted by Educational Institutions</h2>
                <div className={styles.grid}>
                    {partners.map(partner => (
                        <div key={partner.id} className={styles.logoPlaceholder}>
                            {partner.logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
