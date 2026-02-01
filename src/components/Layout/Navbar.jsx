import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when route changes or strictly on link click
    const closeMenu = () => setIsMenuOpen(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Robotics Platform', path: '/robotics-platform' },
        { name: 'Workshops', path: '/workshops' },
        { name: '3D Printing (Coming Soon)', path: '/3d-printing' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Shop', path: '/shop', isButton: true },
    ];

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    {/* Logo */}
                    <Link to="/" className={styles.logo} onClick={closeMenu}>
                        <img src={logo} alt="YuboKits Logo" className={styles.logoImg} />
                    </Link>

                    {/* Mobile Hamburger Button */}
                    <button
                        className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                        aria-expanded={isMenuOpen}
                    >
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                    </button>

                    {/* Navigation */}
                    <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                        <ul className={styles.navList}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) => {
                                            const baseClass = link.isButton ? styles.shopBtn : styles.navLink;
                                            return isActive ? `${baseClass} ${styles.activeLink}` : baseClass;
                                        }}
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`}
                onClick={closeMenu}
                aria-hidden="true"
            />
        </>
    );
};

export default Navbar;
