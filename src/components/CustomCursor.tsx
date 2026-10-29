import { FC, useEffect, useRef, useState } from 'react';
import { useTemplate } from '../context/TemplateContext';

const INTERACTIVE_SELECTOR =
    'a, button, [role="button"], input, textarea, select, label, summary, [tabindex]:not([tabindex="-1"])';

const CustomCursor: FC = () => {
    const { template, theme } = useTemplate();
    const followerRef = useRef<HTMLDivElement | null>(null);
    const [enabled, setEnabled] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const finePointerQuery = window.matchMedia('(pointer: fine)');
        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const updateEligibility = () => {
            setEnabled(finePointerQuery.matches && !reducedMotionQuery.matches);
        };

        updateEligibility();
        finePointerQuery.addEventListener('change', updateEligibility);
        reducedMotionQuery.addEventListener('change', updateEligibility);

        return () => {
            finePointerQuery.removeEventListener('change', updateEligibility);
            reducedMotionQuery.removeEventListener('change', updateEligibility);
        };
    }, []);

    useEffect(() => {
        if (!enabled) return;

        let targetX = -100;
        let targetY = -100;
        let currentX = -100;
        let currentY = -100;
        let rafId: number | null = null;

        const animate = () => {
            // Smooth spring-like interpolation for the trailing aura/reticle
            const ease = template === 'y2k' || template === 'neobrutalism' ? 0.32 : 0.22;
            currentX += (targetX - currentX) * ease;
            currentY += (targetY - currentY) * ease;

            if (followerRef.current) {
                followerRef.current.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0)`;
            }

            rafId = window.requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;
            if (!isVisible) {
                currentX = e.clientX;
                currentY = e.clientY;
                setIsVisible(true);
            }

            const targetEl = e.target as Element | null;
            const interactive = Boolean(targetEl?.closest(INTERACTIVE_SELECTOR));
            setIsHovering(interactive);
        };

        const handleMouseDown = () => setIsPressed(true);
        const handleMouseUp = () => setIsPressed(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        rafId = window.requestAnimationFrame(animate);
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mousedown', handleMouseDown, { passive: true });
        window.addEventListener('mouseup', handleMouseUp, { passive: true });
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            if (rafId !== null) {
                window.cancelAnimationFrame(rafId);
            }
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [enabled, isVisible, template]);

    if (!enabled) return null;

    return (
        <div
            ref={followerRef}
            className={`theme-cursor-follower template-cursor-${template} theme-cursor-${theme} ${
                isVisible ? 'is-visible' : ''
            } ${isHovering ? 'is-hovering' : ''} ${isPressed ? 'is-pressed' : ''}`}
            aria-hidden="true"
        >
            <div className="theme-cursor-ring" />
        </div>
    );
};

export default CustomCursor;

