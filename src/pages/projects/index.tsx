import { FC, useState } from 'react';
import { projects } from '../../config';
import ProjectCard from '../../components/ProjectCard';
import { ProjectCategory } from '../../types';

const ProjectsPage: FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');

    const categories: (ProjectCategory | 'All')[] = [
        'All',
        'Web Application',
        'Mobile App',
        'API/Backend',
        'Tool/Library',
        'Other',
    ];

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    const featuredProjects = projects.filter((p) => p.featured);

    return (
        <div className="main-content">
            <section className="projects-intro">
                <h1>My Projects</h1>
                <p className="projects-subtitle">
                    A collection of projects I've worked on, showcasing my skills and experience.
                </p>
            </section>

            {featuredProjects.length > 0 && selectedCategory === 'All' && (
                <section className="featured-projects">
                    <h2>
                        <span className="const">const</span> featured = [
                    </h2>
                    <div className="projects-grid">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <h2>]</h2>
                </section>
            )}

            <section className="all-projects">
                <div className="projects-header">
                    <h2>
                        <span className="const">const</span> projects = [
                    </h2>
                    <div className="project-filters">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                {filteredProjects.length === 0 && (
                    <p className="no-projects">No projects found in this category.</p>
                )}
                <h2>]</h2>
            </section>
        </div>
    );
};

export default ProjectsPage;
