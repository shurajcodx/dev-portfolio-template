import { FC } from 'react';
import { Skill } from '../types';

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: FC<SkillCardProps> = ({ skill }) => {
    return (
        <div className="skill-card">
            <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar-container">
                <div
                    className="skill-bar"
                    style={{ width: `${skill.level}%` }}
                />
            </div>
        </div>
    );
};

export default SkillCard;
