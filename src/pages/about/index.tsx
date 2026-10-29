import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faServer,
    faCubes,
    faCloudBolt,
    faBriefcase,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { personalInfo, skills, experiences, education } from '../../config';
import SkillCard from '../../components/SkillCard';
import Timeline from '../../components/Timeline';
import { SkillCategory } from '../../types';

const AboutPage: FC = () => {
    const [activeSkillCategory, setActiveSkillCategory] = useState<SkillCategory | 'All'>('All');

    const categories: (SkillCategory | 'All')[] = [
        'All',
        ...skills.map((g) => g.category),
    ];

    const filteredSkillGroups =
        activeSkillCategory === 'All'
            ? skills
            : skills.filter((g) => g.category === activeSkillCategory);

    const pillars = [
        {
            icon: faCubes,
            title: 'Architecture & Technical Leadership',
            desc: 'Leading concurrent products across healthcare (HL7 FHIR), HR, DAM, and PaaS — owning RFCs/ADRs, shared design systems, and engineering mentorship.',
        },
        {
            icon: faServer,
            title: 'AI Pipelines, MCP & Search at Scale',
            desc: 'Building multi-model LLM pipelines, semantic search, Claude MCP servers, and zero-downtime Elasticsearch migrations (~1M records).',
        },
        {
            icon: faCloudBolt,
            title: 'Performance, Cloud & CI/CD',
            desc: 'Cutting manual deployment effort by ~70% and end-to-end latency by ~30% with AWS, Docker, Jenkins CI/CD, Redis, and Grafana/Prometheus.',
        },
    ];

    return (
        <div className="main-content">
            <section className="about-intro surface-card">
                <h1>About Suraj Rai</h1>
                <div className="about-bio">
                    <p>{personalInfo.bio}</p>
                </div>

                <div className="pillars-grid">
                    {pillars.map((pillar, idx) => (
                        <div key={idx} className="pillar-card">
                            <div className="pillar-icon">
                                <FontAwesomeIcon icon={pillar.icon} />
                            </div>
                            <div>
                                <h3>{pillar.title}</h3>
                                <p>{pillar.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="skills-section">
                <div className="section-header-row">
                    <h2>
                        <span className="const">const</span> skills = {'{'}
                    </h2>
                    <div className="project-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                className={`filter-btn ${activeSkillCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveSkillCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredSkillGroups.map((group, index) => (
                    <div key={index} className="skill-group">
                        <h3 className="skill-category">
                            <span className="comment">// {group.category}</span>
                        </h3>
                        <div className="skills-grid">
                            {group.skills.map((skill, skillIndex) => (
                                <SkillCard key={skillIndex} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
                <h2>{'}'}</h2>
            </section>

            <section className="experience-section">
                <h2>
                    <FontAwesomeIcon icon={faBriefcase} className="section-title-icon" />{' '}
                    <span className="const">const</span> experience = [
                </h2>
                <Timeline items={experiences} type="experience" />
                <h2>]</h2>
            </section>

            <section className="education-section">
                <h2>
                    <FontAwesomeIcon icon={faGraduationCap} className="section-title-icon" />{' '}
                    <span className="const">const</span> education = [
                </h2>
                <Timeline items={education} type="education" />
                <h2>]</h2>
            </section>
        </div>
    );
};

export default AboutPage;
