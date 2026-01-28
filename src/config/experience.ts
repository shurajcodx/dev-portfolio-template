import { Experience, Education } from '../types';

export const experiences: Experience[] = [
    {
        id: '1',
        company: 'Tech Company',
        position: 'Senior Software Engineer',
        location: 'Remote',
        startDate: '2022-01',
        endDate: 'Present',
        description: [
            'Lead development of customer-facing web applications using React and TypeScript',
            'Architected and implemented microservices backend using Node.js and PostgreSQL',
            'Mentored junior developers and conducted code reviews',
            'Improved application performance by 40% through optimization techniques',
        ],
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    },
    {
        id: '2',
        company: 'Startup Inc',
        position: 'Full Stack Developer',
        location: 'Nepal',
        startDate: '2020-06',
        endDate: '2021-12',
        description: [
            'Developed and maintained multiple client projects from conception to deployment',
            'Built RESTful APIs and integrated third-party services',
            'Collaborated with designers to implement pixel-perfect UI components',
            'Participated in agile development process and sprint planning',
        ],
        technologies: ['React', 'Laravel', 'MySQL', 'Vue.js'],
    },
    {
        id: '3',
        company: 'Digital Agency',
        position: 'Junior Developer',
        location: 'Nepal',
        startDate: '2019-01',
        endDate: '2020-05',
        description: [
            'Assisted in development of client websites and web applications',
            'Fixed bugs and implemented new features based on client requirements',
            'Learned best practices in web development and version control',
            'Contributed to team knowledge sharing sessions',
        ],
        technologies: ['JavaScript', 'PHP', 'WordPress', 'MySQL'],
    },
];

export const education: Education[] = [
    {
        id: '1',
        institution: 'University Name',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        location: 'Nepal',
        startDate: '2015',
        endDate: '2019',
        description: 'Focused on software engineering, algorithms, and web development.',
        gpa: '3.8/4.0',
    },
];
