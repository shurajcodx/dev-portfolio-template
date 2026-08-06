import { FC } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: FC<SkillCardProps> = ({ skill }) => {
    return (
        <motion.div 
            className="skill-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar-container">
                <motion.div
                    className="skill-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                />
            </div>
        </motion.div>
    );
};

export default SkillCard;

