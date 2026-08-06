import { Project } from '../types';

export const projects: Project[] = [
    {
        id: '3',
        title: 'EncoraDB',
        description: 'Secure, developer-friendly column-level encryption for Node.js databases.',
        longDescription: `Built EncoraDB, an open-source library providing developer-friendly AES-GCM and HKDF column-level encryption for Node.js databases, compatible with Prisma, Slonik, and standard ORMs.`,
        image: '/images/projects/encoradb.png',
        techStack: ['TypeScript', 'Node.js', 'AES-GCM', 'HKDF', 'Prisma', 'Slonik'],
        githubUrl: 'https://github.com/shurajcodx/encoradb',
        category: 'Tool/Library',
        featured: true,
    },
    {
        id: '6',
        title: 'JSONDebugger',
        description: 'Interactive online tool for inspecting, formatting, and debugging JSON payloads.',
        longDescription: `Created JSONDebugger, a fast online tool for developers to parse, validate, visualize, and debug complex JSON data streams in real time.`,
        image: '/images/projects/encoradb.png',
        techStack: ['React', 'TypeScript', 'JavaScript', 'JSON API'],
        liveUrl: 'https://jsondebugger.lovable.app/',
        githubUrl: 'https://github.com/shurajcodx/JSONDebugger',
        category: 'Tool/Library',
        featured: false,
    },
    {
        id: '7',
        title: 'Android App Rating Dialog',
        description: 'Customizable Android library for seamless app store rating and review prompts.',
        longDescription: `Developed an open-source Java/Android library that allows developers to prompt users for ratings with custom dialog styles and event handlers.`,
        image: '',
        techStack: ['Java', 'Android', 'Android SDK'],
        githubUrl: 'https://github.com/shurajcodx/android-app-rating-dialog',
        category: 'Mobile App',
        featured: false,
    },
    {
        id: '8',
        title: 'Dev Portfolio Template',
        description: 'Modern developer portfolio with Three.js 3D WebGL visuals and dark mode.',
        longDescription: `Designed and built an interactive portfolio template for software engineers featuring Three.js graphics, dark/light theme toggle, and smooth Framer Motion animations.`,
        image: '',
        techStack: ['React', 'TypeScript', 'Three.js', 'Framer Motion', 'Vite'],
        liveUrl: 'https://surajrai.name.np',
        githubUrl: 'https://github.com/shurajcodx/dev-portfolio-template',
        category: 'Web Application',
        featured: false,
    },
];


