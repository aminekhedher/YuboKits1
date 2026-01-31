import React from 'react';
import styles from './FilterSidebar.module.css';

const categories = [
    'All Products',
    'Cars',
    'Truck',
    'Racer',
    'Drone',
    'Plane',
    'Robotic Arm',
    'Smart House',
    'Engineering Projects'
];

const FilterSidebar = ({ activeCategory, onCategoryChange, isMobileVisible, toggleMobile }) => {
    return (
        <aside className={`${styles.sidebar} ${isMobileVisible ? styles.mobileVisible : ''}`}>
            <div className={styles.header}>
                <h3 className={styles.title}>Filter by Category</h3>
                <button className={styles.closeBtn} onClick={toggleMobile}>×</button>
            </div>
            <div className={styles.buttonList}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ''}`}
                        onClick={() => {
                            onCategoryChange(category);
                            if (window.innerWidth < 768) toggleMobile();
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default FilterSidebar;
