
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Earth3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set black background

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Earth
    const earthGeometry = new THREE.SphereGeometry(5, 64, 64);
    const textureLoader = new THREE.TextureLoader();

    // Load multiple textures for enhanced effect
    Promise.all([
      textureLoader.loadAsync('/earth_atmos_2048.jpg'),
      textureLoader.loadAsync('/earth_normal_2048.jpg'),
      textureLoader.loadAsync('/earth_lights_2048.jpg')
    ]).then(([dayTexture, normalTexture, nightTexture]) => {
      console.log('Textures loaded successfully');
      
      const earthMaterial = new THREE.MeshPhongMaterial({
        map: dayTexture,
        normalMap: normalTexture,
        specularMap: nightTexture,
        normalScale: new THREE.Vector2(0.85, -0.85),
        shininess: 15,
      });

      const earth = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earth);

      // Add cloud layer
      const cloudGeometry = new THREE.SphereGeometry(5.05, 64, 64);
      const cloudMaterial = new THREE.MeshPhongMaterial({
        map: textureLoader.load('/earth_clouds_2048.jpg'),
        transparent: true,
        opacity: 0.4
      });

      const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
      scene.add(clouds);

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

      renderer.domElement.addEventListener('mousedown', handleMouseDown);
      renderer.domElement.addEventListener('mousemove', handleMouseMove);
      renderer.domElement.addEventListener('mouseup', handleMouseUp);

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);

        // Smooth rotation
        currentRotation.x += (targetRotation.x - currentRotation.x) * 0.1;
        currentRotation.y += (targetRotation.y - currentRotation.y) * 0.1;

        if (!isDragging) {
          targetRotation.y += 0.001; // Slower auto-rotation
        }

        earth.rotation.x = currentRotation.x;
        earth.rotation.y = currentRotation.y;
        clouds.rotation.x = currentRotation.x;
        clouds.rotation.y = currentRotation.y + 0.0003;

        renderer.render(scene, camera);
      };
      animate();

      // Cleanup
      return () => {
        renderer.domElement.removeEventListener('mousedown', handleMouseDown);
        renderer.domElement.removeEventListener('mousemove', handleMouseMove);
        renderer.domElement.removeEventListener('mouseup', handleMouseUp);
      };
    }).catch(error => {
      console.error('Error loading textures:', error);
      const material = new THREE.MeshPhongMaterial({
        color: 0x2233ff,
        shininess: 0.2,
      });
      const earth = new THREE.Mesh(earthGeometry, material);
      scene.add(earth);
    });

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.8);
    mainLight.position.set(5, 3, 5);
    scene.add(mainLight);

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
