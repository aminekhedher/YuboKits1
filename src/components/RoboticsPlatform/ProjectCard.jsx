import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, onViewDetails }) => {
    const difficultyClass = project.difficulty.toLowerCase();

    return (
        <div className={styles.card} onClick={() => onViewDetails(project)}>
            <div className={styles.imageContainer}>
                <img
                    src={project.image}
                    alt={project.name}
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.meta}>
                    <span className={`${styles.badge} ${styles[difficultyClass]}`}>
                        {project.difficulty}
                    </span>

                </div>

                <button className={styles.button}>
                    View Resources
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
