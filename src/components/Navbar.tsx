import { FC } from 'react';
import { NavLink } from 'react-router';
import ThemeToggle from './ThemeToggle';

const Navbar: FC = () => {
  return (
    <nav>
      <div className="nav-left">
        <span>shuraj-shampang</span>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              _hello
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              _about-me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              _projects
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          _contact-me
        </NavLink>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
