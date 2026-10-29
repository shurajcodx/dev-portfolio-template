import { FC, useEffect } from 'react';
import { useLocation } from 'react-router';

interface RouteSEO {
    title: string;
    description: string;
    path: string;
}

const SITE_URL = 'https://surajrai.name.np';

const ROUTE_SEO_MAP: Record<string, RouteSEO> = {
    '/': {
        title: 'Suraj Rai — Top Rated Software Engineer & Best Developer in Nepal | Tech Lead',
        description:
            'Portfolio of Suraj Rai (Shuraj Shampang), recognized among the top rated software engineers and best developers in Nepal. 8+ years building enterprise web, mobile, and AI-enabled platforms in healthcare, logistics, and PaaS.',
        path: '/',
    },
    '/about': {
        title: 'About Suraj Rai — Best Software Developer & Top Rated Engineer in Nepal | 8+ Yrs Experience',
        description:
            'Explore the career and architecture expertise of Suraj Rai, top rated software developer and tech lead in Nepal: 8+ years leading full-stack engineering across React, Node.js, Fastify, Spring Boot, AI/MCP pipelines, and AWS/Docker.',
        path: '/about',
    },
    '/projects': {
        title: 'Selected Projects by Suraj Rai — Top Rated Software Engineer in Nepal | 12Deg, Bimbo & EncoraDB',
        description:
            'Explore flagship production platforms (12Deg PaaS, Bimbo AI DAM, Embleema HL7 FHIR) and open-source tools engineered by Suraj Rai, top rated software engineer in Nepal.',
        path: '/projects',
    },
    '/contact': {
        title: 'Hire Suraj Rai — Top Rated Software Engineer & Best Tech Lead in Nepal',
        description:
            'Get in touch with Suraj Rai in Chitwan, Nepal for Senior Full-Stack Engineer / Tech Lead roles, high-scale system architecture consulting, or open-source collaboration.',
        path: '/contact',
    },
};

const setMetaTag = (selector: string, attribute: string, value: string) => {
    const element = document.querySelector(selector);
    if (element) {
        element.setAttribute(attribute, value);
    }
};

const SEO: FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const normalizedPath =
            pathname.length > 1 && pathname.endsWith('/')
                ? pathname.slice(0, -1)
                : pathname;

        const meta = ROUTE_SEO_MAP[normalizedPath] || {
            title: 'Page Not Found (404) — Suraj Rai | Top Rated Software Engineer',
            description:
                'The requested page could not be found. Return to the portfolio homepage or explore selected projects and architecture.',
            path: normalizedPath,
        };
        const canonicalUrl = `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`;

        document.title = meta.title;
        setMetaTag('meta[name="title"]', 'content', meta.title);
        setMetaTag('meta[name="description"]', 'content', meta.description);
        setMetaTag('link[rel="canonical"]', 'href', canonicalUrl);

        setMetaTag('meta[property="og:title"]', 'content', meta.title);
        setMetaTag('meta[property="og:description"]', 'content', meta.description);
        setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);

        setMetaTag('meta[name="twitter:title"]', 'content', meta.title);
        setMetaTag('meta[name="twitter:description"]', 'content', meta.description);
        setMetaTag('meta[name="twitter:url"]', 'content', canonicalUrl);
    }, [pathname]);

    return null;
};

export default SEO;
