import { Experience, Education } from '../types';

export const experiences: Experience[] = [
    {
        id: '1',
        company: 'Dzango Technologies',
        position: 'Senior Full-Stack Engineer',
        location: 'Hong Kong (Kathmandu-based)',
        startDate: 'Nov 2025',
        endDate: 'Present',
        description: [
            'Lead architecture and technical design across healthcare, HR, and PaaS platforms, aligning engineering decisions with industry best practices and business priorities.',
            'Drive design of scalable microservices and distributed systems using Node.js, Fastify, Spring Boot, and React, setting technical direction for the wider engineering team.',
            'Define engineering standards and review system designs across teams, establishing clean-architecture guidelines that reduced onboarding time for new engineers.',
            'Mentor a team of junior and mid-level engineers, running code reviews and technical 1:1s that measurably improved code quality and shipping velocity.',
            'Led performance optimization initiatives that improved API latency and system efficiency by ~30% through data-driven profiling and targeted refactors.',
            'Redesigned CI/CD and deployment strategy, improving release reliability and cutting manual deployment effort by ~70%.',
            'Set up Grafana/Prometheus monitoring across production platforms, improving visibility into system health and incident response time.',
        ],
        technologies: ['React', 'Node.js', 'Fastify', 'Spring Boot', 'Microservices', 'AWS', 'Docker', 'Grafana', 'Prometheus', 'CI/CD'],
    },
    {
        id: '2',
        company: 'Dzango Technologies',
        position: 'Full-Stack Engineer II (SE2)',
        location: 'Hong Kong (Kathmandu-based)',
        startDate: 'Nov 2022',
        endDate: 'Nov 2025',
        description: [
            'Delivered complex full-stack features across multiple production applications, using Redux for state management at scale.',
            'Served as feature technical lead, mentoring junior engineers and running code reviews to enforce best practices.',
            'Partnered directly with customers and stakeholders to translate requirements into technical solutions that improved user experience.',
            'Broke large initiatives into scoped Jira/Notion tickets with clear acceptance criteria, improving cross-team planning and delivery predictability.',
            'Built scalable REST APIs, background jobs, and real-time data integrations that improved application performance and user engagement.',
            'Collaborated with product, QA, and DevOps to ensure stable releases and smooth delivery cycles.',
            'Built internal reusable component libraries, improving codebase modularity and front-end development efficiency.',
        ],
        technologies: ['React', 'Redux', 'TypeScript', 'Node.js', 'Express', 'Spring Boot', 'MariaDB', 'PostgreSQL', 'Jest'],
    },
    {
        id: '3',
        company: 'Dzango Technologies',
        position: 'Full-Stack Engineer I (SE1)',
        location: 'Hong Kong (Kathmandu-based)',
        startDate: 'Jul 2020',
        endDate: 'Nov 2022',
        description: [
            'Developed frontend and backend features across React, React Native, Node.js, and Spring Boot with a focus on user experience.',
            'Implemented RESTful APIs and integrated third-party services to streamline core user workflows.',
            'Participated in sprint planning and estimation in an Agile environment, consistently meeting delivery deadlines.',
            'Maintained CI/CD pipelines and deployment workflows, contributing to release automation.',
            'Debugged production issues and improved system reliability and performance.',
        ],
        technologies: ['React', 'React Native', 'Node.js', 'Spring Boot', 'MySQL', 'Git', 'Agile/Scrum'],
    },
    {
        id: '4',
        company: 'Dzango Technologies',
        position: 'Associate Software Engineer',
        location: 'Hong Kong (Kathmandu-based)',
        startDate: 'Mar 2018',
        endDate: 'Jul 2020',
        description: [
            'Implemented UI components and backend endpoints under senior engineer guidance on enterprise healthcare and logistics applications.',
            'Wrote unit tests and fixed bugs, contributing to measurable improvements in application stability.',
            'Learned and applied REST API design, Git workflows, and Agile methodologies.',
        ],
        technologies: ['JavaScript', 'HTML5/CSS3', 'PHP', 'MySQL', 'REST APIs', 'Git'],
    },
];

export const education: Education[] = [
    {
        id: '1',
        institution: 'Sikkim Manipal University',
        degree: 'Bachelor of Science (BSc)',
        field: 'Information Technology',
        location: 'Gangtok, India',
        startDate: 'April 2014',
        endDate: 'April 2018',
        description: 'Comprehensive study of computer science fundamentals, software engineering principles, algorithms, database systems, and web application development.',
    },
];

