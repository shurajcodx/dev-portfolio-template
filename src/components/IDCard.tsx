import { FC, useState, MouseEvent } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileDownload,
    faCheckCircle,
    faLocationDot,
    faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { personalInfo } from '../config';
import { useTemplate } from '../context/TemplateContext';

const IDCard: FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { currentTemplate } = useTemplate();

    // Motion values for 3D tilt physics
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), {
        stiffness: 240,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), {
        stiffness: 240,
        damping: 20,
    });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = personalInfo.resumeUrl;
        link.download = `${personalInfo.name.replace(/\s/g, '_')}_CV.pdf`;
        link.click();
    };

    return (
        <section className="id-card-container" aria-label="Developer Identity Badge">
            <div className="id-card-lanyard" aria-hidden="true">
                <div className="id-card-tag-strip" />
                <div className="id-card-hook" />
            </div>

            <motion.div
                className="id-card-holder"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    perspective: 1000,
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
            >
                <div className={`id-card ${isHovered ? 'hovered' : ''}`}>
                    <div className="id-card-holo-shine" />

                    {/* Top Pass Header */}
                    <div className="id-card-top-bar">
                        <span className="id-pass-type">
                            <FontAwesomeIcon icon={faShieldHalved} /> STAFF PASS
                        </span>
                        <span className="id-pass-serial">
                            #0{currentTemplate.number}-{currentTemplate.id.toUpperCase().slice(0, 4)}
                        </span>
                    </div>

                    <div className="header">
                        <div className="avatar-ring">
                            <img
                                src={personalInfo.avatar}
                                alt={`${personalInfo.name} (Suraj Rai) — ${personalInfo.title}`}
                                width={88}
                                height={88}
                                fetchPriority="high"
                            />
                            <span className="status-online-dot" title="Available for hire" />
                        </div>
                    </div>

                    <h2>
                        {personalInfo.name}{' '}
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="verified-badge"
                            title="Verified Senior Software Engineer"
                        />
                    </h2>
                    <span className="id-role-title">{personalInfo.title}</span>

                    <div className="id-location-pill">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>{personalInfo.location}</span>
                    </div>

                    <div className="id-meta-grid">
                        <div className="id-meta-cell">
                            <small>EXPERIENCE</small>
                            <strong>8+ YRS</strong>
                        </div>
                        <div className="id-meta-cell">
                            <small>STYLE</small>
                            <strong>{currentTemplate.shortName}</strong>
                        </div>
                    </div>

                    <div className="cv-btn-container">
                        <button
                            type="button"
                            onClick={handleDownload}
                            className="download-cv-btn"
                        >
                            <FontAwesomeIcon icon={faFileDownload} /> Download Resume
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default IDCard;
