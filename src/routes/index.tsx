import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import Loading from "../components/Loading";

const HelloPage = lazy(() => import('../pages/hello'));
const AboutPage = lazy(() => import('../pages/about'));
const ProjectsPage = lazy(() => import('../pages/projects'));
const ContactPage = lazy(() => import('../pages/contact'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HelloPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default AppRoutes;
