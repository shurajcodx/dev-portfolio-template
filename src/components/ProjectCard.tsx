import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpRightFromSquare,
    faCode,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const [imgError, setImgError] = useState(false);

    const hasImage = project.image && project.image.trim().length > 0 && !imgError;

    return (
        <motion.article
            className="project-card surface-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4 }}
        >
            <div className="window-chrome project-window-chrome">
                <div className="window-dots" aria-hidden="true">
                    <span className="chrome-dot dot-close" />
                    <span className="chrome-dot dot-min" />
                    <span className="chrome-dot dot-max" />
                </div>
                <span className="window-title">
                    {project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.app
                </span>
                {project.featured && (
                    <span className="featured-badge">
                        <FontAwesomeIcon icon={faStar} /> Featured
                    </span>
                )}
            </div>

            <div className="project-image">
                {hasImage ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="project-image-fallback">
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
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link-btn"
                            >
                                <FontAwesomeIcon icon={faCode} /> View Code
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="project-content">
                <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-category">{project.category}</span>
                </div>
                <p className="project-description">
                    {project.longDescription || project.description}
                </p>
                <div className="project-tech">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="project-card-actions">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-action-link primary"
                        >
                            <span>Live Demo</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-action-link"
                        >
                            <FontAwesomeIcon icon={faCode} />
                            <span>Source Code</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
};

export default ProjectCard;
