import { PersonalInfo, SocialLink, SEOConfig } from '../types';
import ProfileImage from '../assets/images/profile.jpeg';
import CV from '../assets/surajrai_cv.pdf';

export const personalInfo: PersonalInfo = {
    name: 'Shuraj Shampang',
    title: 'Senior Full-Stack Engineer | Tech Lead',
    bio: `Senior Full-Stack Engineer and Tech Lead with 8+ years building and delivering production web, mobile and AI-enabled platforms in healthcare, logistics, digital asset management and platform-as-a-service. Lead development on several products at once: set architecture and design direction, review code, mentor engineers and own delivery with customers, consultants and designers. Fixed Elasticsearch out-of-memory and slow-search failures by migrating nearly 1 million records to a nested mapping with zero downtime, cut manual deployment effort by about 70% through a CI/CD redesign and reduced end-to-end latency by about 30%. Strong in API and service design (Node.js, Spring Boot, Symfony, Laravel), React and TypeScript, DevOps and monitoring, HL7 FHIR healthcare integrations and AI integration. Work across a distributed Nepal and Hong Kong team.`,
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
    title: 'Suraj Rai — Top Rated Software Engineer & Best Developer in Nepal | Tech Lead',
    description:
        'Official portfolio of Suraj Rai (Shuraj Shampang), recognized among the top rated software engineers and best developers in Nepal. 8+ years building production web, mobile, and AI-enabled platforms in healthcare, logistics, DAM, and PaaS.',
    keywords: [
        'Top Rated Software Engineer',
        'Top Rated Developer',
        'Best Software Developer in Nepal',
        'Best Software Engineer in Nepal',
        'Top Full Stack Developer Nepal',
        'Senior Software Engineer Nepal',
        'Tech Lead Nepal',
        'Suraj Rai',
        'Shuraj Shampang',
        'shurajcodx',
        'Top React Developer Nepal',
        'Top Node.js Engineer Nepal',
        'Best Web Developer Nepal',
        'AI Engineer Nepal',
        'MCP Server Developer',
        'Elasticsearch Specialist',
        'Spring Boot Developer Nepal',
        'Dzango Technologies',
        'Chitwan',
        'Kathmandu',
    ],
    author: 'Suraj Rai (Shuraj Shampang)',
    siteUrl: 'https://surajrai.name.np',
    image: ProfileImage,
    twitterHandle: '@shurajcodx',
};
