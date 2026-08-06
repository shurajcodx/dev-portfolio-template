import { PersonalInfo, SocialLink, SEOConfig } from '../types';
import ProfileImage from '../assets/images/profile.jpeg';
import CV from '../assets/surajrai_cv.pdf';

export const personalInfo: PersonalInfo = {
    name: 'Shuraj Shampang',
    title: 'Senior Software Engineer',
    bio: `Full-stack software engineer with 7+ years of experience designing and delivering scalable, high-performance web and mobile applications across healthcare, HR, logistics, and PaaS platforms. Deep expertise in React, React Native, Three.js, Node.js, Fastify, Spring Boot, and Laravel, with a strong track record in microservices architecture, REST API design, CI/CD automation, and cloud deployment (AWS, Docker). Currently leads architecture and technical direction for production platforms, mentors engineers, and improves API performance and release automation at scale.`,
    location: 'Chitwan, Nepal',
    email: 'shuraj.shampang@gmail.com',
    phone: '+977 984 532 0407',
    avatar: ProfileImage,
    resumeUrl: CV,
};

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/shurajcodx',
        icon: 'faGithub',
        username: '@shurajcodx',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/shuraj-shampang-9ab602b5',
        icon: 'faLinkedin',
        username: 'shuraj-shampang',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/shurajcodx_/',
        icon: 'faInstagram',
        username: '@shurajcodx_',
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/shurajcodx',
        icon: 'faFacebookSquare',
        username: 'shurajcodx',
    },
];

export const seoConfig: SEOConfig = {
    title: 'Shuraj Shampang - SeniorSoftware Engineer',
    description: 'Portfolio of Suraj Rai (Shuraj Shampang), Senior Full-Stack Software Engineer specializing in React, Three.js, Node.js, Microservices, and Cloud Systems.',
    keywords: [
        'Suraj Rai',
        'Shuraj Shampang',
        'Senior Full-Stack Engineer',
        'Staff Frontend Engineer',
        'React',
        'Three.js',
        'TypeScript',
        'Node.js',
        'Fastify',
        'Spring Boot',
        'Microservices',
        'Docker',
        'Nepal'
    ],
    author: 'Suraj Rai',
    siteUrl: 'https://surajrai.name.np',
    image: ProfileImage,
    twitterHandle: '@shurajcodx',
};

