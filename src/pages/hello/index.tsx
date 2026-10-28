import { FC, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import CodeContent from '../../components/CodeContent';
import IDCard from '../../components/IDCard';
import { personalInfo } from '../../config';

const ThreeBackground = lazy(() => import('../../components/ThreeBackground'));

const HelloPage: FC = () => {
    const quickMetrics = [
        { value: '8+ Yrs', label: 'Production Experience' },
        { value: '~1M', label: '0-Downtime ES Migration' },
        { value: '~70%', label: 'Deploy Effort Reduced' },
        { value: '~30%', label: 'End-to-End Latency Cut' },
    ];

    return (
        <div className="main-content hero-page">
            <Suspense fallback={null}>
                <ThreeBackground />
            </Suspense>

            <div className="hero-grid">
                {/* Left Column: Intro, Metrics, Actions & Code Spec */}
                <div className="hero-main">
                    <motion.section
                        className="intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                    >
                        <p className="intro-greeting">Hi all, I am</p>
                        <h1>{personalInfo.name}</h1>
                        <h2>&gt; {personalInfo.title}</h2>
                        <p className="intro-summary">
                            Senior Full-Stack Engineer and Tech Lead with 8+ years building and
                            delivering production web, mobile, and AI-enabled platforms in
                            healthcare, logistics, digital asset management, and PaaS using
                            React, TypeScript, Node.js, Spring Boot, Symfony, Elasticsearch,
                            and MCP servers.
                        </p>
                    </motion.section>

                    <motion.div
                        className="hero-metrics-bar"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        {quickMetrics.map((m, idx) => (
                            <div key={idx} className="metric-card surface-card">
                                <strong>{m.value}</strong>
                                <span>{m.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* <motion.div
                        className="hero-cta-row"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                    >
                        <Link to="/projects" className="btn-primary-action">
                            <span>Explore Projects</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                        <Link to="/contact" className="btn-ghost-action">
                            <span>Get In Touch</span>
                        </Link>
                    </motion.div> */}

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
                    >
                        <CodeContent />
                    </motion.div>
                </div>

                {/* Right Column: Interactive 3D ID Card */}
                <motion.div
                    className="hero-aside"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
                >
                    <IDCard />
                </motion.div>
            </div>
        </div>
    );
};

export default HelloPage;
