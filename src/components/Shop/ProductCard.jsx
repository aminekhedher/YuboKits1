import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onViewDetails }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={product.images[0]} alt={product.name} className={styles.image} loading="lazy" />
                <span className={styles.categoryBadge}>{product.category}</span>
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.price}>{product.price}</p>
                <p className={styles.description}>{product.description}</p>
                <button className={styles.viewBtn} onClick={() => onViewDetails(product)}>
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
