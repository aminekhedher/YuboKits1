import React from 'react';
import styles from './SocialLinks.module.css';
import githubIcon from '../../assets/github.png';
import instagramIcon from '../../assets/instagram.png';
import linkedinIcon from '../../assets/linkedin.png';
import emailIcon from '../../assets/email.png';

const SocialLinks = () => {
    const socials = [
        { name: 'GitHub', icon: githubIcon, url: 'https://github.com/aminekhedher' },
        { name: 'Instagram', icon: instagramIcon, url: '#' },
        { name: 'LinkedIn', icon: linkedinIcon, url: '#' },
        { name: 'Email', icon: emailIcon, url: 'mailto:contact@yubokits.com' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Connect With Us</h2>
                <p className={styles.description}>Join our community of builders and educators</p>

                <div className={styles.iconRow}>
                    {socials.map(social => (
                        <a key={social.name} href={social.url} className={styles.socialLink} title={social.name}>
                            <img src={social.icon} alt={social.name} className={styles.icon} />
                            <span className={styles.label}>{social.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialLinks;
