import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTemplate } from '../context/TemplateContext';

const ThemeToggle: FC = () => {
    const { theme, toggleTheme } = useTemplate();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle color mode"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>
    );
};

export default ThemeToggle;
