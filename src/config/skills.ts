import { SkillGroup } from '../types';

export const skills: SkillGroup[] = [
    {
        category: 'Frontend',
        skills: [
            { name: 'React.js', level: 95, category: 'Frontend' },
            { name: 'TypeScript', level: 90, category: 'Frontend' },
            { name: 'Three.js', level: 85, category: 'Frontend' },
            { name: 'React Native', level: 88, category: 'Frontend' },
            { name: 'Next.js', level: 85, category: 'Frontend' },
            { name: 'Vue.js', level: 80, category: 'Frontend' },
            { name: 'Redux', level: 90, category: 'Frontend' },
            { name: 'HTML5 & CSS3', level: 95, category: 'Frontend' },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js (Express/Fastify)', level: 92, category: 'Backend' },
            { name: 'Spring Boot', level: 85, category: 'Backend' },
            { name: 'Laravel / Symfony', level: 82, category: 'Backend' },
            { name: 'RESTful API Design', level: 95, category: 'Backend' },
            { name: 'Microservices Architecture', level: 90, category: 'Backend' },
            { name: 'GraphQL & WebSockets', level: 85, category: 'Backend' },
            { name: 'Kafka', level: 75, category: 'Backend' },
        ],
    },
    {
        category: 'Database',
        skills: [
            { name: 'PostgreSQL & MySQL', level: 90, category: 'Database' },
            { name: 'MariaDB', level: 90, category: 'Database' },
            { name: 'MongoDB', level: 85, category: 'Database' },
            { name: 'Elasticsearch', level: 80, category: 'Database' },
            { name: 'Redis Caching', level: 88, category: 'Database' },
        ],
    },
    {
        category: 'DevOps',
        skills: [
            { name: 'AWS & Cloud Deployment', level: 85, category: 'DevOps' },
            { name: 'Docker & Docker Swarm', level: 90, category: 'DevOps' },
            { name: 'CI/CD Pipelines', level: 90, category: 'DevOps' },
            { name: 'Grafana & Prometheus', level: 85, category: 'DevOps' },
            { name: 'Traefik & Nginx', level: 82, category: 'DevOps' },
            { name: 'Git & Version Control', level: 95, category: 'DevOps' },
        ],
    },
    {
        category: 'Tools',
        skills: [
            { name: 'HL7 FHIR Healthcare Standard', level: 85, category: 'Tools' },
            { name: 'Jest / Cypress / Mocha', level: 85, category: 'Tools' },
            { name: 'Postman & API Testing', level: 92, category: 'Tools' },
            { name: 'Jira & Agile/Scrum', level: 90, category: 'Tools' },
        ],
    },
];

