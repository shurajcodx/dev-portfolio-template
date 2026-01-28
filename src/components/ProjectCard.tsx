import { FC } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                    <div className="project-links">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link-btn"
                            >
                                Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link-btn"
                            >
                                View Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="project-content">
                <div className="project-header">
                    <h3>{project.title}</h3>
                    {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
                <span className="project-category">{project.category}</span>
            </div>
        </div>
    );
};

export default ProjectCard;
