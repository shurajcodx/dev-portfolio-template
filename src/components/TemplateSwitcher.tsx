import { FC, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPalette,
    faCheck,
    faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { templates, themeConfig } from '../config';
import { useTemplate } from '../context/TemplateContext';
import { TemplateId } from '../types';

const TemplateSwitcher: FC = () => {
    const { template, currentTemplate, setTemplate } = useTemplate();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside or pressing Escape
    useEffect(() => {
        if (!isOpen) return;

        const handlePointerDown = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    if (!themeConfig.enableTemplateSwitcher) {
        return null;
    }

    const handleSelectTemplate = (id: TemplateId) => {
        setTemplate(id);
        setIsOpen(false);
    };

    return (
        <div
            ref={containerRef}
            className={`template-fab-container ${isOpen ? 'open' : ''}`}
        >
            {isOpen && (
                <div
                    className="template-vertical-menu surface-card"
                    role="group"
                    aria-label="Select Portfolio Template"
                >
                    <div className="template-menu-header">
                        <span>Select Template</span>
                    </div>
                    <div className="template-menu-list">
                        {templates.map((item) => {
                            const isActive = item.id === template;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    className={`template-menu-item ${isActive ? 'active' : ''}`}
                                    onClick={() => handleSelectTemplate(item.id)}
                                >
                                    <span
                                        className="template-menu-swatch"
                                        style={{
                                            background: `linear-gradient(135deg, ${item.previewColors.primary}, ${item.previewColors.accent})`,
                                        }}
                                    />
                                    <span className="template-menu-text">
                                        <span className="template-menu-name">
                                            {item.number}. {item.name}
                                        </span>
                                        <span className="template-menu-sub">{item.tagline}</span>
                                    </span>
                                    {isActive && (
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="template-menu-check"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            <button
                type="button"
                className="template-fab-trigger"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-label="Switch portfolio template"
                title="Switch portfolio template"
            >
                <span className="fab-icon-wrap">
                    <FontAwesomeIcon icon={faPalette} />
                </span>
                <span className="fab-label">
                    <small>Template</small>
                    <strong>{currentTemplate.name}</strong>
                </span>
                <FontAwesomeIcon
                    icon={faChevronUp}
                    className={`fab-chevron ${isOpen ? 'rotated' : ''}`}
                />
            </button>
        </div>
    );
};

export default TemplateSwitcher;
