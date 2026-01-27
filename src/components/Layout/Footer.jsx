import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Brand Column */}
                <div className={styles.column}>
                    <Link to="/" className={styles.logo}>YUBOKITS</Link>
                    <p className={styles.text}>
                        Empowering the next generation of engineers with accessible, realistic robotics kits.
                    </p>
                </div>

                {/* Links Column */}
                <div className={styles.column}>
                    <h4 className={styles.heading}>Quick Links</h4>
                    <div className={styles.linkList}>
                        <Link to="/" className={styles.link}>Home</Link>
                        <Link to="/robotics-platform" className={styles.link}>Robotics Platform</Link>
                        <Link to="/workshops" className={styles.link}>Workshops</Link>
                        <Link to="/about" className={styles.link}>About Us</Link>
                        <Link to="/contact" className={styles.link}>Contact</Link>
                    </div>
                </div>

                {/* Newsletter Column */}
                <div className={styles.column}>
                    <h4 className={styles.heading}>Stay Updated</h4>
                    <p className={styles.text}>Join our newsletter for the latest updates and workshops.</p>
                    <form className={styles.form} onClick={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.input}
                            aria-label="Email address"
                        />
                        <button type="submit" className={styles.submitBtn}>
                            Subscribe
                        </button>
                        {/* Placeholder security note: Input sanitization handled on backend */}
                    </form>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {currentYear} YuboKits. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
