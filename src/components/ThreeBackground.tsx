import { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';

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
  'npm run',
  'Promise',
];

const createCodeTexture = (text: string, color: string = '#64ffda') => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.font = 'bold 36px "Fira Code", "Courier New", monospace';
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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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
    const colors = ['#64ffda', '#818cf8', '#38bdf8', '#a78bfa', '#34d399'];

    for (let i = 0; i < 36; i++) {
      const text = codeSnippets[i % codeSnippets.length];
      const color = colors[i % colors.length];
      const texture = createCodeTexture(text, color);
      texturesToDispose.push(texture);

      const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: Math.random() * 0.5 + 0.4,
        blending: THREE.AdditiveBlending,
      });

      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 40
      );

      const scale = Math.random() * 4 + 5;
      sprite.scale.set(scale, scale * 0.5, 1);

      coderGroup.add(sprite);

      sprites.push({
        sprite,
        speedY: Math.random() * 0.03 + 0.01,
        speedRot: (Math.random() - 0.5) * 0.01,
      });
    }

    // 2. Cybernetic Perspective Grid (Developer Matrix Floor)
    const gridHelper = new THREE.GridHelper(100, 40, 0x4f46e5, 0x1e1b4b);
    gridHelper.position.y = -22;
    gridHelper.rotation.x = 0.2;
    coderGroup.add(gridHelper);

    // 3. Interactive Code Node Constellation (Points & Lines)
    const nodeCount = 60;
    const nodeGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      nodePositions[i * 3] = (Math.random() - 0.5) * 55;
      nodePositions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      nodePositions[i * 3 + 2] = (Math.random() - 0.5) * 35;
    }

    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x64ffda,
      size: 0.8,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    coderGroup.add(nodePoints);

    // Connecting Network Lines between nearby nodes
    const linesGeometry = new THREE.BufferGeometry();
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    coderGroup.add(linesMesh);

    const updateLines = () => {
      const linePositions: number[] = [];
      const pos = nodePositions;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 12) {
            linePositions.push(
              pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
              pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
            );
          }
        }
      }

      linesGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
    };

    updateLines();

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0006;
      mouseY = (event.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      coderGroup.rotation.y = elapsedTime * 0.04 + targetX;
      coderGroup.rotation.x = Math.sin(elapsedTime * 0.03) * 0.05 + targetY;

      // Animate floating 3D code sprites drifting upward
      sprites.forEach(({ sprite, speedY }) => {
        sprite.position.y += speedY;
        if (sprite.position.y > 25) {
          sprite.position.y = -25;
          sprite.position.x = (Math.random() - 0.5) * 60;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose textures, materials, and geometries
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
  }, []);

  return (
    <div
      ref={containerRef}
      className={`three-bg-container ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
};

export default ThreeBackground;


