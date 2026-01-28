import { SkillGroup } from '../types';

export const skills: SkillGroup[] = [
    {
        category: 'Frontend',
        skills: [
            { name: 'React', level: 90, category: 'Frontend' },
            { name: 'TypeScript', level: 85, category: 'Frontend' },
            { name: 'JavaScript', level: 90, category: 'Frontend' },
            { name: 'HTML/CSS', level: 95, category: 'Frontend' },
            { name: 'Tailwind CSS', level: 80, category: 'Frontend' },
            { name: 'Vue.js', level: 70, category: 'Frontend' },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', level: 85, category: 'Backend' },
            { name: 'Express', level: 80, category: 'Backend' },
            { name: 'PHP', level: 75, category: 'Backend' },
            { name: 'Laravel', level: 70, category: 'Backend' },
            { name: 'REST API', level: 85, category: 'Backend' },
        ],
    },
    {
        category: 'Database',
        skills: [
            { name: 'PostgreSQL', level: 80, category: 'Database' },
            { name: 'MySQL', level: 85, category: 'Database' },
            { name: 'MongoDB', level: 70, category: 'Database' },
            { name: 'Redis', level: 65, category: 'Database' },
        ],
    },
    {
        category: 'DevOps',
        skills: [
            { name: 'Docker', level: 80, category: 'DevOps' },
            { name: 'Git', level: 90, category: 'DevOps' },
            { name: 'CI/CD', level: 75, category: 'DevOps' },
            { name: 'Linux', level: 80, category: 'DevOps' },
        ],
    },
    {
        category: 'Tools',
        skills: [
            { name: 'VS Code', level: 95, category: 'Tools' },
            { name: 'Figma', level: 70, category: 'Tools' },
            { name: 'Postman', level: 85, category: 'Tools' },
            { name: 'Jira', level: 75, category: 'Tools' },
        ],
    },
];
