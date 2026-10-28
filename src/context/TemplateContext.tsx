import {
    createContext,
    FC,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { templates, themeConfig } from '../config';
import { TemplateDefinition, TemplateId, Theme } from '../types';

interface TemplateContextValue {
    template: TemplateId;
    theme: Theme;
    currentTemplate: TemplateDefinition;
    setTemplate: (id: TemplateId) => void;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
    nextTemplate: () => void;
    prevTemplate: () => void;
    isStudioOpen: boolean;
    setIsStudioOpen: (open: boolean) => void;
}

const VALID_TEMPLATES: TemplateId[] = [
    'neumorphism',
    'claymorphism',
    'neobrutalism',
    'y2k',
    'liquid-glass',
    'skeuomorphism',
];

const TemplateContext = createContext<TemplateContextValue | undefined>(undefined);

function getInitialTemplate(): TemplateId {
    if (typeof window === 'undefined') return themeConfig.defaultTemplate;

    const saved = localStorage.getItem('portfolio_template') as TemplateId | null;

    if (themeConfig.rotateTemplateOnRefresh !== false) {
        const candidates =
            saved && VALID_TEMPLATES.includes(saved)
                ? VALID_TEMPLATES.filter((t) => t !== saved)
                : VALID_TEMPLATES;
        const randomIndex = Math.floor(Math.random() * candidates.length);
        const chosen = candidates[randomIndex];
        localStorage.setItem('portfolio_template', chosen);
        return chosen;
    }

    if (saved && VALID_TEMPLATES.includes(saved)) {
        return saved;
    }
    return themeConfig.defaultTemplate;
}

function getInitialTheme(): Theme {
    if (typeof window === 'undefined') return themeConfig.defaultTheme;
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'light' || saved === 'dark') {
        return saved;
    }
    return themeConfig.defaultTheme;
}

const runWithViewTransition = (updateFn: () => void) => {
    const doc = document as Document & {
        startViewTransition?: (cb: () => void) => { finished: Promise<void> };
    };
    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!doc.startViewTransition || prefersReducedMotion) {
        updateFn();
        return;
    }
    doc.startViewTransition(() => {
        updateFn();
    });
};

export const TemplateProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [template, setTemplateState] = useState<TemplateId>(getInitialTemplate);
    const [theme, setThemeState] = useState<Theme>(getInitialTheme);
    const [isStudioOpen, setIsStudioOpen] = useState(false);

    // Sync DOM attribute & localStorage, and clean up any lingering ?template= query param
    useEffect(() => {
        document.documentElement.setAttribute('data-template', template);
        localStorage.setItem('portfolio_template', template);

        const url = new URL(window.location.href);
        if (url.searchParams.has('template')) {
            url.searchParams.delete('template');
            window.history.replaceState({}, '', url.toString());
        }
    }, [template]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.colorScheme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const setTemplate = useCallback((id: TemplateId) => {
        runWithViewTransition(() => {
            setTemplateState(id);
            document.documentElement.setAttribute('data-template', id);
        });
    }, []);

    const setTheme = useCallback((newTheme: Theme) => {
        runWithViewTransition(() => {
            setThemeState(newTheme);
            document.documentElement.setAttribute('data-theme', newTheme);
            document.documentElement.style.colorScheme = newTheme;
        });
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme, setTheme]);

    const nextTemplate = useCallback(() => {
        const idx = VALID_TEMPLATES.indexOf(template);
        const next = VALID_TEMPLATES[(idx + 1) % VALID_TEMPLATES.length];
        setTemplate(next);
    }, [template, setTemplate]);

    const prevTemplate = useCallback(() => {
        const idx = VALID_TEMPLATES.indexOf(template);
        const prev = VALID_TEMPLATES[(idx - 1 + VALID_TEMPLATES.length) % VALID_TEMPLATES.length];
        setTemplate(prev);
    }, [template, setTemplate]);

    // Keyboard shortcuts: 1-6 to switch templates when not typing in form fields
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const target = e.target as HTMLElement | null;
            if (
                target &&
                (target.tagName === 'INPUT' ||
                    target.tagName === 'TEXTAREA' ||
                    target.isContentEditable)
            ) {
                return;
            }
            if (e.metaKey || e.ctrlKey || e.altKey) return;

            const num = parseInt(e.key, 10);
            if (num >= 1 && num <= 6) {
                const chosen = VALID_TEMPLATES[num - 1];
                if (chosen) {
                    setTemplate(chosen);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [setTemplate]);

    const currentTemplate = useMemo(
        () => templates.find((t) => t.id === template) || templates[0],
        [template]
    );

    const value = useMemo(
        () => ({
            template,
            theme,
            currentTemplate,
            setTemplate,
            setTheme,
            toggleTheme,
            nextTemplate,
            prevTemplate,
            isStudioOpen,
            setIsStudioOpen,
        }),
        [
            template,
            theme,
            currentTemplate,
            setTemplate,
            setTheme,
            toggleTheme,
            nextTemplate,
            prevTemplate,
            isStudioOpen,
        ]
    );

    return <TemplateContext.Provider value={value}>{children}</TemplateContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTemplate = (): TemplateContextValue => {
    const context = useContext(TemplateContext);
    if (!context) {
        throw new Error('useTemplate must be used within a TemplateProvider');
    }
    return context;
};
