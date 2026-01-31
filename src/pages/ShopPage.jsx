import React, { useState, useEffect } from 'react';
import styles from './ShopPage.module.css';
import { products } from '../data/productsData';
import FilterSidebar from '../components/Shop/FilterSidebar';
import ProductCard from '../components/Shop/ProductCard';
import ProductModal from '../components/Shop/ProductModal';

const ShopPage = () => {
    const [activeCategory, setActiveCategory] = useState('All Products');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);

    useEffect(() => {
        if (activeCategory === 'All Products') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(p => p.category === activeCategory));
        }
        // Scroll to top of grid when category changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeCategory]);

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className={styles.shopContainer}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Yubokits Robotics Kits</h1>
                    <p className={styles.heroSubtitle}>Explore our collection of hands-on robotics kits for all skill levels</p>
                </div>
            </section>

            <div className={styles.layoutContainer}>
                <div className={styles.mainLayout}>
                    {/* Mobile Filter Toggle */}
                    <button
                        className={styles.mobileFilterBtn}
                        onClick={() => setIsMobileSidebarVisible(true)}
                    >
                        Filter by Category
                    </button>

                    {/* Sidebar */}
                    <div className={styles.sidebarWrapper}>
                        <FilterSidebar
                            activeCategory={activeCategory}
                            onCategoryChange={setActiveCategory}
                            isMobileVisible={isMobileSidebarVisible}
                            toggleMobile={() => setIsMobileSidebarVisible(false)}
                        />
                    </div>

                    {/* Product Grid */}
                    <main className={styles.productsGrid}>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onViewDetails={handleViewDetails}
                                />
                            ))
                        ) : (
                            <div className={styles.noProducts}>
                                <h3>No products found in this category.</h3>
                                <button onClick={() => setActiveCategory('All Products')} className={styles.resetBtn}>
                                    View All Products
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default ShopPage;
