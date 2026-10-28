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

    return (
        <div className="main-content">
            <section className="projects-intro surface-card">
                <span className="section-eyebrow">// 03. OPEN SOURCE &amp; PRODUCTION</span>
                <h1>My Open Source Projects</h1>
                <p className="projects-subtitle">
                    A curated collection of open-source libraries, developer tools, and
                    web applications showcasing modern architecture and craft.
                </p>
            </section>

            <section className="all-projects">
                <div className="projects-header">
                    <h2>
                        <span className="const">const</span> projects = [
                    </h2>
                    <div className="project-filters">
                        {categories.map((category) => {
                            const count =
                                category === 'All'
                                    ? projects.length
                                    : projects.filter((p) => p.category === category).length;
                            if (category !== 'All' && count === 0) return null;
                            return (
                                <button
                                    key={category}
                                    type="button"
                                    className={`filter-btn ${
                                        selectedCategory === category ? 'active' : ''
                                    }`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    <span>{category}</span>
                                    <span className="filter-count">{count}</span>
                                </button>
                            );
                        })}
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
