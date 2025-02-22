
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Earth3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Earth
    const geometry = new THREE.SphereGeometry(5, 64, 64); // Increased segments for smoother sphere
    const textureLoader = new THREE.TextureLoader();
    
    // Load texture with error handling
    textureLoader.load(
      '/earth-texture.jpg',
      (texture) => {
        console.log('Texture loaded successfully');
        const material = new THREE.MeshPhongMaterial({
          map: texture,
          shininess: 0.2,
          bumpScale: 0.05,
        });
        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);

        // Add atmosphere effect
        const atmosphereGeometry = new THREE.SphereGeometry(5.2, 64, 64);
        const atmosphereMaterial = new THREE.MeshPhongMaterial({
          color: 0x00b3ff,
          transparent: true,
          opacity: 0.1,
          side: THREE.BackSide,
        });
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        scene.add(atmosphere);

        // Interactive rotation
        let targetRotation = { x: 0, y: 0 };
        let currentRotation = { x: 0, y: 0 };
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        const handleMouseDown = (event: MouseEvent) => {
          isDragging = true;
          previousMousePosition = {
            x: event.clientX,
            y: event.clientY,
          };
        };

        const handleMouseMove = (event: MouseEvent) => {
          if (!isDragging) return;

          const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y,
          };

          targetRotation.x += deltaMove.y * 0.005;
          targetRotation.y += deltaMove.x * 0.005;

          previousMousePosition = {
            x: event.clientX,
            y: event.clientY,
          };
        };

        const handleMouseUp = () => {
          isDragging = false;
        };

        // Add event listeners
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        // Animation
        const animate = () => {
          requestAnimationFrame(animate);

          // Smooth rotation
          currentRotation.x += (targetRotation.x - currentRotation.x) * 0.1;
          currentRotation.y += (targetRotation.y - currentRotation.y) * 0.1;

          // Auto rotation when not dragging
          if (!isDragging) {
            targetRotation.y += 0.003;
          }

          earth.rotation.x = currentRotation.x;
          earth.rotation.y = currentRotation.y;
          atmosphere.rotation.x = currentRotation.x;
          atmosphere.rotation.y = currentRotation.y;

          renderer.render(scene, camera);
        };
        animate();

        // Cleanup function
        return () => {
          window.removeEventListener('mousedown', handleMouseDown);
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUp);
        };
      },
      undefined,
      (error) => {
        console.error('Error loading texture:', error);
        // Fallback material if texture fails to load
        const material = new THREE.MeshPhongMaterial({
          color: 0x2233ff,
          shininess: 0.2,
        });
        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);
      }
    );

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 15;

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};
