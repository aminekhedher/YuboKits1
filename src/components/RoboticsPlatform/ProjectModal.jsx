import React, { useEffect } from 'react';
import styles from './ProjectModal.module.css';

const ProjectModal = ({ project, onClose }) => {
    // Close modal on ESC key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const difficultyClass = project.difficulty.toLowerCase();

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>

                <div className={styles.imageContainer}>
                    <img src={project.image} alt={project.name} className={styles.image} />
                </div>

                <div className={styles.content}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>{project.name}</h2>
                        <div className={styles.meta}>
                            <span className={`${styles.badge} ${styles[difficultyClass]}`}>
                                {project.difficulty}
                            </span>
                            <span className={styles.time}>⏱ {project.time}</span>
                        </div>
                    </div>

                    <p className={styles.description}>{project.description}</p>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Learning Objectives</h3>
                        <ul className={styles.list}>
                            {project.learningObjectives.map((objective, index) => (
                                <li key={index} className={styles.listItem}>
                                    {objective}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Required Components</h3>
                        <div className={styles.componentsList}>
                            {project.components.map((component, index) => (
                                <span key={index} className={styles.component}>
                                    {component}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Skills You'll Develop</h3>
                        <div className={styles.skillsList}>
                            {project.skills.map((skill, index) => (
                                <span key={index} className={styles.skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.button} ${styles.primaryButton}`}
                        >
                            <span>📁</span> Get Code & Resources
                        </a>
                        <a
                            href={project.pdfUrl}
                            download
                            className={`${styles.button} ${styles.secondaryButton}`}
                        >
                            <span>📄</span> Download Instructions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
