import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectsGrid.module.css';

const ProjectsGrid = ({ projects, categoryName, onProjectClick }) => {
    return (
        <section id="projects-section" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {categoryName === 'All Projects' ? 'Featured Projects' : categoryName}
                    </h2>
                    <p className={styles.subtitle}>
                        {projects.length} project{projects.length !== 1 ? 's' : ''} available
                    </p>
                </div>

                {projects.length > 0 ? (
                    <div className={styles.grid}>
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onViewDetails={onProjectClick}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.noProjects}>
                        No projects found in this category.
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsGrid;
