import { PersonalInfo, SocialLink, SEOConfig } from '../types';
import ProfileImage from '../assets/images/profile.jpeg';
import CV from '../assets/surajrai_cv.pdf';

export const personalInfo: PersonalInfo = {
    name: 'Shuraj Shampang',
    title: 'Software Engineer',
    bio: `I'm a passionate software engineer with expertise in building modern web applications. 
        I love creating elegant solutions to complex problems and am always eager to learn new technologies.
        With a strong foundation in both frontend and backend development, I enjoy working on full-stack projects 
        that make a real impact.`,
    location: 'Nepal',
    email: 'shuraj.shampang@gmail.com',
    phone: '+977 9845320407',
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
    title: 'Shuraj Shampang - Software Engineer',
    description: 'Portfolio of Shuraj Shampang, a passionate software engineer specializing in modern web development.',
    keywords: ['Software Engineer', 'Web Developer', 'Full Stack Developer', 'React', 'TypeScript', 'Portfolio'],
    author: 'Shuraj Shampang',
    siteUrl: 'https://surajrai.name.np',
    image: ProfileImage,
    twitterHandle: '@shurajcodx',
};
