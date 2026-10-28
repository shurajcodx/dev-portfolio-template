import { FC, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import CodeContent from '../../components/CodeContent';
import IDCard from '../../components/IDCard';
import { personalInfo } from '../../config';

const ThreeBackground = lazy(() => import('../../components/ThreeBackground'));

const HelloPage: FC = () => {
    const quickMetrics = [
        { value: '7+ Yrs', label: 'Production Experience' },
        { value: '~30%', label: 'API Latency Reduced' },
        { value: '~70%', label: 'Faster CI/CD Deploys' },
        { value: '15+', label: 'Systems Delivered' },
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
                            Architecting resilient microservices, cloud-native platforms, and
                            high-craft interactive web experiences with React, TypeScript,
                            Three.js, Node.js, Fastify, and Spring Boot.
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
