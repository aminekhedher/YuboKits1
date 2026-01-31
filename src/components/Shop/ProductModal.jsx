import React, { useState } from 'react';
import styles from './ProductModal.module.css';
import ImageGallery from './ImageGallery';
import PreorderForm from './PreorderForm';

const ProductModal = ({ product, isOpen, onClose }) => {
    const [showPreorder, setShowPreorder] = useState(false);

    if (!isOpen) return null;

    const handleClose = () => {
        setShowPreorder(false);
        onClose();
    };

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={handleClose}>×</button>

                <div className={styles.contentGrid}>
                    {/* Left Column: Image Gallery */}
                    <div className={styles.imageColumn}>
                        <ImageGallery images={product.images} />
                    </div>

                    {/* Right Column: Info or Form */}
                    <div className={styles.infoColumn}>
                        {!showPreorder ? (
                            <>
                                <div className={styles.header}>
                                    <span className={styles.badge}>{product.category}</span>
                                    <h2 className={styles.name}>{product.name}</h2>
                                    <p className={styles.price}>{product.price}</p>
                                </div>

                                <div className={styles.section}>
                                    <h4 className={styles.sectionTitle}>Description</h4>
                                    <p className={styles.fullDesc}>{product.fullDescription}</p>
                                </div>

                                <div className={styles.section}>
                                    <h4 className={styles.sectionTitle}>Key Features</h4>
                                    <ul className={styles.featureList}>
                                        {product.features.map((f, i) => <li key={i}>{f}</li>)}
                                    </ul>
                                </div>

                                <div className={styles.section}>
                                    <h4 className={styles.sectionTitle}>Specifications</h4>
                                    <table className={styles.specTable}>
                                        <tbody>
                                            {Object.entries(product.specs).map(([key, val]) => (
                                                <tr key={key}>
                                                    <th>{key}</th>
                                                    <td>{val}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <button className={styles.preorderBtn} onClick={() => setShowPreorder(true)}>
                                    Pre-order Now
                                </button>
                            </>
                        ) : (
                            <PreorderForm productName={product.name} onCancel={() => setShowPreorder(false)} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
