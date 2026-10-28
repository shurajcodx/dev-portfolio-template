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
        title: 'Suraj Rai (Shuraj Shampang) — Senior Full-Stack Engineer | Tech Lead',
        description:
            'Official portfolio of Suraj Rai (Shuraj Shampang), Senior Full-Stack Engineer and Tech Lead with 8+ years building production web, mobile, and AI-enabled platforms in healthcare, logistics, digital asset management, and PaaS.',
        path: '/',
    },
    '/about': {
        title: 'About Suraj Rai (Shuraj Shampang) — 8+ Years Experience, Skills & Architecture | Tech Lead',
        description:
            'Explore the career and technical expertise of Suraj Rai (Shuraj Shampang): 8+ years at Dzango Technologies leading architecture across React, TypeScript, Node.js, Fastify, Spring Boot, Symfony, Elasticsearch, AI/MCP pipelines, and AWS/Docker.',
        path: '/about',
    },
    '/projects': {
        title: 'Selected & Open-Source Projects by Suraj Rai (Shuraj Shampang) — 12Deg, Bimbo, Embleema & EncoraDB',
        description:
            'Explore flagship production platforms (12Deg PaaS, Bimbo AI DAM, Embleema HL7 FHIR, Airwaybill Logistics) and open-source libraries (EncoraDB, JSONDebugger) engineered by Suraj Rai (Shuraj Shampang).',
        path: '/projects',
    },
    '/contact': {
        title: 'Contact Suraj Rai (Shuraj Shampang) — Senior Full-Stack Engineer | Tech Lead',
        description:
            'Get in touch with Suraj Rai (Shuraj Shampang) in Chitwan, Nepal for Senior Full-Stack Engineer / Tech Lead roles, system architecture consulting, or open-source collaboration.',
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

        const meta = ROUTE_SEO_MAP[normalizedPath] || ROUTE_SEO_MAP['/'];
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
