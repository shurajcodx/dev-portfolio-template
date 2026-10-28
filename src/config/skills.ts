import { SkillGroup } from '../types';

export const skills: SkillGroup[] = [
    {
        category: 'Backend & APIs',
        skills: [
            { name: 'Node.js (Express, Fastify)', level: 95, category: 'Backend & APIs' },
            { name: 'Spring Boot (Java)', level: 88, category: 'Backend & APIs' },
            { name: 'Symfony & Laravel (PHP)', level: 88, category: 'Backend & APIs' },
            { name: 'REST & GraphQL APIs', level: 95, category: 'Backend & APIs' },
            { name: 'WebSocket & Real-Time Streams', level: 90, category: 'Backend & APIs' },
            { name: 'Kafka & Event-Driven Systems', level: 80, category: 'Backend & APIs' },
            { name: 'Python (Scripting & Automation)', level: 80, category: 'Backend & APIs' },
        ],
    },
    {
        category: 'Frontend',
        skills: [
            { name: 'React.js & Redux', level: 96, category: 'Frontend' },
            { name: 'TypeScript', level: 94, category: 'Frontend' },
            { name: 'Next.js', level: 88, category: 'Frontend' },
            { name: 'Vue.js', level: 82, category: 'Frontend' },
            { name: 'Shared Component Libraries & Design Systems', level: 92, category: 'Frontend' },
            { name: 'Three.js & Interactive UI', level: 85, category: 'Frontend' },
        ],
    },
    {
        category: 'AI & Search',
        skills: [
            { name: 'AI Integration & LLM Pipelines', level: 90, category: 'AI & Search' },
            { name: 'MCP Server Development', level: 90, category: 'AI & Search' },
            { name: 'Semantic Search & Model Fine-Tuning', level: 88, category: 'AI & Search' },
            { name: 'Elasticsearch (Nested Mappings & Faceted Search)', level: 92, category: 'AI & Search' },
        ],
    },
    {
        category: 'Data',
        skills: [
            { name: 'PostgreSQL', level: 92, category: 'Data' },
            { name: 'MySQL & MariaDB', level: 92, category: 'Data' },
            { name: 'MongoDB', level: 86, category: 'Data' },
            { name: 'Redis Caching & Queues', level: 90, category: 'Data' },
        ],
    },
    {
        category: 'Mobile',
        skills: [
            { name: 'React Native', level: 88, category: 'Mobile' },
            { name: 'Native Android (Java)', level: 85, category: 'Mobile' },
            { name: 'Flutter', level: 80, category: 'Mobile' },
        ],
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            { name: 'AWS & Cloud Infrastructure', level: 88, category: 'Cloud & DevOps' },
            { name: 'Docker & Container Orchestration', level: 92, category: 'Cloud & DevOps' },
            { name: 'Jenkins CI/CD & Release Automation', level: 92, category: 'Cloud & DevOps' },
            { name: 'Grafana & Prometheus Observability', level: 88, category: 'Cloud & DevOps' },
            { name: 'Nginx & Reverse Proxies', level: 86, category: 'Cloud & DevOps' },
        ],
    },
    {
        category: 'Engineering Practice',
        skills: [
            { name: 'Architecture & Design Docs (RFCs, ADRs)', level: 94, category: 'Engineering Practice' },
            { name: 'Code Review & Engineering Mentorship', level: 95, category: 'Engineering Practice' },
            { name: 'Jest, React Testing Library & Cypress', level: 88, category: 'Engineering Practice' },
            { name: 'HL7 FHIR Healthcare Integration', level: 88, category: 'Engineering Practice' },
            { name: 'Agile / Scrum & Technical Planning', level: 92, category: 'Engineering Practice' },
        ],
    },
];
