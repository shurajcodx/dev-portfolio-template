// Personal Information Types
export interface PersonalInfo {
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    avatar: string;
    resumeUrl: string;
}

// Social Links Types
export interface SocialLink {
    name: string;
    url: string;
    icon: string;
    username?: string;
}

// Skill Types
export interface Skill {
    name: string;
    level: number; // 1-100
    category: SkillCategory;
    icon?: string;
}

export type SkillCategory =
    | 'Frontend'
    | 'Backend'
    | 'Database'
    | 'DevOps'
    | 'Tools'
    | 'Other';

export interface SkillGroup {
    category: SkillCategory;
    skills: Skill[];
}

// Project Types
export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    category: ProjectCategory;
    featured?: boolean;
}

export type ProjectCategory =
    | 'Web Application'
    | 'Mobile App'
    | 'API/Backend'
    | 'Tool/Library'
    | 'Other';

// Experience Types
export interface Experience {
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    description: string[];
    technologies?: string[];
}

// Education Types
export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    location: string;
    startDate: string;
    endDate: string;
    description?: string;
    gpa?: string;
}

// Contact Form Types
export interface ContactFormData {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export interface ContactFormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

// Theme Types
export type Theme = 'light' | 'dark';

export interface ThemeConfig {
    defaultTheme: Theme;
    enableToggle: boolean;
}

// SEO Types
export interface SEOConfig {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    siteUrl: string;
    image: string;
    twitterHandle?: string;
}

// Code Content Types (for the hello page)
export interface CodeLine {
    comment: {
        text: string;
    };
    const: {
        name: string;
        value: string;
        href: string;
    };
}
