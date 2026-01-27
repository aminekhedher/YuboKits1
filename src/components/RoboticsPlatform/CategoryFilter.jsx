import React from 'react';
import styles from './CategoryFilter.module.css';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Browse by Category</h2>

                <div className={styles.grid}>
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`${styles.categoryCard} ${activeCategory === category.id ? styles.active : ''
                                }`}
                            onClick={() => onCategoryChange(category.id)}
                        >
                            <img src={category.icon} alt={category.name} className={styles.icon} />
                            <div className={styles.name}>{category.name}</div>
                            <div className={styles.count}>{category.count} projects</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryFilter;
