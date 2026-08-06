import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const [imgError, setImgError] = useState(false);

    const hasImage = project.image && project.image.trim().length > 0 && !imgError;

    return (
        <motion.div 
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4 }}
        >
            <div className="project-image">
                {hasImage ? (
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="project-image-fallback">
                        <div className="fallback-code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                            <span className="fallback-title">{project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.ts</span>
                        </div>
                        <div className="fallback-body">
                            <span className="fallback-icon">&lt;/&gt;</span>
                            <h4>{project.title}</h4>
                            <span className="fallback-tag">{project.category}</span>
                        </div>
                    </div>
                )}
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
        </motion.div>
    );
};

export default ProjectCard;


