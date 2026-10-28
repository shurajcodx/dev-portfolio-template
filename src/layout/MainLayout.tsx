import { FC } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TemplateSwitcher from '../components/TemplateSwitcher';
import SEO from '../components/SEO';
import { useTemplate } from '../context/TemplateContext';

const MainLayout: FC = () => {
    const { template } = useTemplate();

    return (
        <div className={`app-shell template-${template}`}>
            <SEO />
            {/* Ambient Template Atmosphere Layer */}
            <div className="ambient-canvas" aria-hidden="true">
                <div className="ambient-orb orb-1" />
                <div className="ambient-orb orb-2" />
                <div className="ambient-orb orb-3" />
                <div className="crt-scanlines" />
                <div className="halftone-grid" />
            </div>

            <Navbar />
            <main className="page-viewport">
                <Outlet />
            </main>
            <TemplateSwitcher />
            <Footer />
        </div>
    );
};

export default MainLayout;
