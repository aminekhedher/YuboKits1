import React, { useState } from 'react';
import Hero from '../components/RoboticsPlatform/Hero';
import CategoryFilter from '../components/RoboticsPlatform/CategoryFilter';
import ProjectsGrid from '../components/RoboticsPlatform/ProjectsGrid';
import ProjectModal from '../components/RoboticsPlatform/ProjectModal';
import { categories, getProjectsByCategory } from '../data/projectsData';

const RoboticsPlatformPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    // Get projects for active category
    const projects = getProjectsByCategory(activeCategory);

    // Get category name for display
    const activeCategoryName = categories.find(cat => cat.id === activeCategory)?.name || 'All Projects';

    // Handle category change
    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        // Scroll to projects section
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Handle project click
    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    // Close modal
    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <main>
            <Hero />

            <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
            />

            <ProjectsGrid
                projects={projects}
                categoryName={activeCategoryName}
                onProjectClick={handleProjectClick}
            />

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={handleCloseModal}
                />
            )}
        </main>
    );
};

export default RoboticsPlatformPage;
