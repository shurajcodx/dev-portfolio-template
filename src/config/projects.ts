import { Project } from '../types';

export const projects: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform with payment integration and admin dashboard.',
        longDescription: `Built a comprehensive e-commerce solution featuring product management, 
                      shopping cart, secure payment processing, order tracking, and an admin panel 
                      for inventory management. Implemented real-time notifications and email confirmations.`,
        image: '/placeholder-project.jpg',
        techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/shurajcodx/ecommerce',
        category: 'Web Application',
        featured: true,
    },
    {
        id: '2',
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates and team features.',
        longDescription: `Developed a project management application with drag-and-drop kanban boards, 
                      real-time collaboration, task assignments, comments, and file attachments. 
                      Includes team workspaces and activity tracking.`,
        image: '/placeholder-project.jpg',
        techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/shurajcodx/taskmanager',
        category: 'Web Application',
        featured: true,
    },
    {
        id: '3',
        title: 'Weather Dashboard',
        description: 'Beautiful weather application with forecasts and location-based data.',
        longDescription: `Created an intuitive weather dashboard that displays current conditions, 
                      hourly and weekly forecasts, weather maps, and severe weather alerts. 
                      Features location search and geolocation support.`,
        image: '/placeholder-project.jpg',
        techStack: ['React', 'OpenWeather API', 'Chart.js', 'CSS'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/shurajcodx/weather',
        category: 'Web Application',
    },
    {
        id: '4',
        title: 'REST API Boilerplate',
        description: 'Production-ready Node.js API template with authentication and best practices.',
        longDescription: `Developed a comprehensive REST API boilerplate with JWT authentication, 
                      role-based access control, input validation, error handling, logging, 
                      and comprehensive API documentation using Swagger.`,
        image: '/placeholder-project.jpg',
        techStack: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
        githubUrl: 'https://github.com/shurajcodx/api-boilerplate',
        category: 'API/Backend',
    },
    {
        id: '5',
        title: 'Portfolio Template',
        description: 'Modern developer portfolio template with dark mode and animations.',
        longDescription: `Designed and built a sleek portfolio template for developers featuring 
                      smooth animations, dark/light theme toggle, responsive design, and easy 
                      customization through configuration files.`,
        image: '/placeholder-project.jpg',
        techStack: ['React', 'TypeScript', 'CSS', 'Framer Motion'],
        liveUrl: 'https://surajrai.name.np',
        githubUrl: 'https://github.com/shurajcodx/dev-portfolio-template',
        category: 'Web Application',
        featured: true,
    },
    {
        id: '6',
        title: 'Code Snippet Manager',
        description: 'Save and organize code snippets with syntax highlighting and search.',
        longDescription: `Built a tool for developers to save, organize, and quickly search through 
                      code snippets. Features syntax highlighting for multiple languages, tagging 
                      system, and export functionality.`,
        image: '/placeholder-project.jpg',
        techStack: ['React', 'MongoDB', 'Express', 'Prism.js'],
        githubUrl: 'https://github.com/shurajcodx/snippet-manager',
        category: 'Tool/Library',
    },
];
