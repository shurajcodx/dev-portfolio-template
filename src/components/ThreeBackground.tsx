import { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTemplate } from '../context/TemplateContext';

interface ThreeBackgroundProps {
    className?: string;
}

const codeSnippets = [
    '{ }',
    '</>',
    '=>',
    'const',
    'function()',
    '010101',
    'async/await',
    '[ ]',
    'import',
    'React',
    '===',
    'return',
    'git push',
    ';',
    'pnpm dev',
    'Promise',
];

const createCodeTexture = (text: string, color: string = '#64ffda') => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.font = 'bold 34px "Fira Code", "Space Mono", monospace';
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.fillText(text, 128, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
};

const ThreeBackground: FC<ThreeBackgroundProps> = ({ className = '' }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { currentTemplate, theme } = useTemplate();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const palette = currentTemplate.threeColors;
        const isLight = theme === 'light';

        // Scene setup
        const scene = new THREE.Scene();

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            60,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 35);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Main Group
        const coderGroup = new THREE.Group();
        scene.add(coderGroup);

        // 1. Floating 3D Code Text Sprites
        const sprites: { sprite: THREE.Sprite; speedY: number; speedRot: number }[] = [];
        const texturesToDispose: THREE.CanvasTexture[] = [];
        const colors = palette.spriteColors;

        for (let i = 0; i < 30; i++) {
            const text = codeSnippets[i % codeSnippets.length];
            const color = colors[i % colors.length];
            const texture = createCodeTexture(text, color);
            texturesToDispose.push(texture);

            const spriteMaterial = new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                opacity: isLight ? Math.random() * 0.35 + 0.25 : Math.random() * 0.45 + 0.3,
                blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
            });

            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.position.set(
                (Math.random() - 0.5) * 65,
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 40
            );

            const scale = Math.random() * 3.8 + 4.5;
            sprite.scale.set(scale, scale * 0.5, 1);

            coderGroup.add(sprite);

            sprites.push({
                sprite,
                speedY: Math.random() * 0.025 + 0.008,
                speedRot: (Math.random() - 0.5) * 0.01,
            });
        }

        // 2. Cybernetic Perspective Grid
        const gridHelper = new THREE.GridHelper(
            110,
            40,
            palette.gridCenter,
            palette.gridLines
        );
        gridHelper.position.y = -22;
        gridHelper.rotation.x = 0.2;
        const gridMat = gridHelper.material as THREE.Material;
        gridMat.transparent = true;
        gridMat.opacity = isLight ? 0.25 : 0.45;
        coderGroup.add(gridHelper);

        // 3. Interactive Code Node Constellation
        const nodeCount = 55;
        const nodeGeometry = new THREE.BufferGeometry();
        const nodePositions = new Float32Array(nodeCount * 3);

        for (let i = 0; i < nodeCount; i++) {
            nodePositions[i * 3] = (Math.random() - 0.5) * 55;
            nodePositions[i * 3 + 1] = (Math.random() - 0.5) * 45;
            nodePositions[i * 3 + 2] = (Math.random() - 0.5) * 35;
        }

        nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));

        const nodeMaterial = new THREE.PointsMaterial({
            color: palette.nodeColor,
            size: 0.75,
            transparent: true,
            opacity: isLight ? 0.45 : 0.65,
            blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
        });

        const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
        coderGroup.add(nodePoints);

        // Connecting Network Lines
        const linesGeometry = new THREE.BufferGeometry();
        const linesMaterial = new THREE.LineBasicMaterial({
            color: palette.lineColor,
            transparent: true,
            opacity: isLight ? 0.14 : 0.2,
            blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
        });

        const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
        coderGroup.add(linesMesh);

        const linePositions: number[] = [];
        for (let i = 0; i < nodeCount; i++) {
            for (let j = i + 1; j < nodeCount; j++) {
                const dx = nodePositions[i * 3] - nodePositions[j * 3];
                const dy = nodePositions[i * 3 + 1] - nodePositions[j * 3 + 1];
                const dz = nodePositions[i * 3 + 2] - nodePositions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < 12) {
                    linePositions.push(
                        nodePositions[i * 3],
                        nodePositions[i * 3 + 1],
                        nodePositions[i * 3 + 2],
                        nodePositions[j * 3],
                        nodePositions[j * 3 + 1],
                        nodePositions[j * 3 + 2]
                    );
                }
            }
        }
        linesGeometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(linePositions, 3)
        );

        // Mouse Parallax Interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const handleMouseMove = (event: MouseEvent) => {
            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;
            mouseX = (event.clientX - windowHalfX) * 0.0005;
            mouseY = (event.clientY - windowHalfY) * 0.0005;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Resize Handler
        const handleResize = () => {
            if (!container) return;
            const width = container.clientWidth || window.innerWidth;
            const height = container.clientHeight || window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // Animation Loop with Efficient Background Processing
        let animationFrameId: number | null = null;
        let isRunning = false;
        const clock = new THREE.Clock();

        const animate = () => {
            if (!isRunning) return;
            animationFrameId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            targetX += (mouseX - targetX) * 0.05;
            targetY += (mouseY - targetY) * 0.05;

            coderGroup.rotation.y = elapsedTime * 0.035 + targetX;
            coderGroup.rotation.x = Math.sin(elapsedTime * 0.03) * 0.04 + targetY;

            sprites.forEach(({ sprite, speedY }) => {
                sprite.position.y += speedY;
                if (sprite.position.y > 25) {
                    sprite.position.y = -25;
                    sprite.position.x = (Math.random() - 0.5) * 65;
                }
            });

            renderer.render(scene, camera);
        };

        const startSimulation = () => {
            if (!isRunning) {
                isRunning = true;
                clock.start();
                animate();
            }
        };

        const stopSimulation = () => {
            isRunning = false;
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        };

        // Direct listener for contentvisibilityautostatechange
        const handleContentVisibility = (event: Event) => {
            const cvEvent = event as Event & { skipped?: boolean };
            if (cvEvent.skipped) {
                stopSimulation();
            } else {
                startSimulation();
            }
        };

        container.addEventListener(
            'contentvisibilityautostatechange',
            handleContentVisibility
        );

        // Fallback using IntersectionObserver for browsers without content-visibility support
        let observer: IntersectionObserver | null = null;
        const isContentVisibilitySupported =
            'contentVisibility' in document.documentElement.style;
        if (!isContentVisibilitySupported && 'IntersectionObserver' in window) {
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            startSimulation();
                        } else {
                            stopSimulation();
                        }
                    });
                },
                { rootMargin: '200px' }
            );
            observer.observe(container);
        }

        const handleDocumentVisibility = () => {
            if (document.hidden) {
                stopSimulation();
            } else {
                startSimulation();
            }
        };
        document.addEventListener('visibilitychange', handleDocumentVisibility);

        startSimulation();

        return () => {
            stopSimulation();
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            container.removeEventListener(
                'contentvisibilityautostatechange',
                handleContentVisibility
            );
            document.removeEventListener('visibilitychange', handleDocumentVisibility);
            if (observer) observer.disconnect();

            texturesToDispose.forEach((tex) => tex.dispose());
            nodeGeometry.dispose();
            nodeMaterial.dispose();
            linesGeometry.dispose();
            linesMaterial.dispose();
            gridHelper.geometry.dispose();

            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, [currentTemplate, theme]);

    return (
        <div
            ref={containerRef}
            className={`three-bg-container ${className}`}
            aria-hidden="true"
        />
    );
};

export default ThreeBackground;
