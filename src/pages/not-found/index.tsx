import { FC } from 'react';
import { Link, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faFolderOpen,
    faTriangleExclamation,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const NotFoundPage: FC = () => {
    const location = useLocation();

    return (
        <div className="main-content not-found-page">
            <motion.section
                className="not-found-card surface-card"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <div className="not-found-eyebrow">
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                    <span>ERROR // 404_PAGE_NOT_FOUND</span>
                </div>

                <h1 className="not-found-title">404</h1>
                <h2 className="not-found-subtitle">&gt; Route Execution Terminated</h2>

                <p className="not-found-message">
                    The requested route does not exist in this compilation. It might have
                    been refactored, relocated, or never committed.
                </p>

                <div className="not-found-code-readout surface-card">
                    <div className="code-line">
                        <span className="line-num">1</span>
                        <span className="code-statement">
                            <span className="comment">// Unresolved navigation target</span>
                        </span>
                    </div>
                    <div className="code-line">
                        <span className="line-num">2</span>
                        <span className="code-statement">
                            <span className="const">const</span>{' '}
                            <span className="var-name">requestedPath</span> ={' '}
                            <span className="string">"{location.pathname}"</span>;
                        </span>
                    </div>
                    <div className="code-line">
                        <span className="line-num">3</span>
                        <span className="code-statement">
                            <span className="const">const</span>{' '}
                            <span className="var-name">httpStatus</span> ={' '}
                            <span className="const">404</span>;
                        </span>
                    </div>
                </div>

                <div className="not-found-actions">
                    <Link to="/" className="btn-primary-action">
                        <FontAwesomeIcon icon={faHome} />
                        <span>Return to _hello</span>
                    </Link>
                    <Link to="/projects" className="btn-secondary-action">
                        <FontAwesomeIcon icon={faFolderOpen} />
                        <span>_projects</span>
                    </Link>
                    <Link to="/contact" className="btn-ghost-action">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>_contact-me</span>
                    </Link>
                </div>
            </motion.section>
        </div>
    );
};

export default NotFoundPage;

