import { FC } from 'react';
import { personalInfo, skills, experiences, education } from '../../config';
import SkillCard from '../../components/SkillCard';
import Timeline from '../../components/Timeline';

const AboutPage: FC = () => {
    return (
        <div className="main-content">
            <section className="about-intro">
                <h1>About Me</h1>
                <div className="about-bio">
                    <p>{personalInfo.bio}</p>
                </div>
            </section>

            <section className="skills-section">
                <h2>
                    <span className="const">const</span> skills = {'{'}
                </h2>
                {skills.map((group, index) => (
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
                    <span className="const">const</span> experience = [
                </h2>
                <Timeline items={experiences} type="experience" />
                <h2>]</h2>
            </section>

            <section className="education-section">
                <h2>
                    <span className="const">const</span> education = [
                </h2>
                <Timeline items={education} type="education" />
                <h2>]</h2>
            </section>
        </div>
    );
};

export default AboutPage;
