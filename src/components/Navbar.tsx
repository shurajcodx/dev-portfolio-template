import { FC } from 'react';
import { NavLink } from 'react-router';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../config';

const Navbar: FC = () => {
    const handleBrand = personalInfo.name.toLowerCase().replace(/\s+/g, '-');

    return (
        <nav aria-label="Primary Navigation">
            <div className="nav-left">
                <NavLink to="/" className="nav-brand">
                    <span className="brand-dot" />
                    <span className="brand-text">{handleBrand}</span>
                </NavLink>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            _hello
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            _about-me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            _projects
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="nav-right">
                <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    _contact-me
                </NavLink>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
