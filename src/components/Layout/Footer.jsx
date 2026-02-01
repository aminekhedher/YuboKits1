import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <div className={styles.brand}>
                        <Link to="/" className={styles.logo}>
                            <img src={logo} alt="YuboKits Logo" className={styles.logoImg} />
                        </Link>
                        <p className={styles.tagline}>Empowering future engineers with realistic robotics.</p>
                    </div>

                    <nav className={styles.nav}>
                        <Link to="/" className={styles.link}>Home</Link>
                        <Link to="/robotics-platform" className={styles.link}>Platform</Link>
                        <Link to="/workshops" className={styles.link}>Workshops</Link>
                        <Link to="/3d-printing" className={styles.link}>3D Printing</Link>
                        <Link to="/shop" className={styles.link}>Shop</Link>
                        <Link to="/about" className={styles.link}>About</Link>
                        <Link to="/contact" className={styles.link}>Contact</Link>
                    </nav>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>&copy; {currentYear} YuboKits. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
