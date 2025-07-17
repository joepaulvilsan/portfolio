
import React, { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as THREE from 'three';

export const HeroSection = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create crystalline structure
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ 
      color: 0x6366f1,
      transparent: true,
      opacity: 0.8
    });
    const crystal = new THREE.LineSegments(wireframe, material);
    scene.add(crystal);

    camera.position.z = 3;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (mountRef.current) {
        const rect = mountRef.current.getBoundingClientRect();
        mouseX = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        mouseY = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        targetRotationX = mouseY * 0.5;
        targetRotationY = mouseX * 0.5;
      }
    };

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      // Smooth rotation
      crystal.rotation.x += (targetRotationX - crystal.rotation.x) * 0.05;
      crystal.rotation.y += (targetRotationY - crystal.rotation.y) * 0.05;
      
      // Auto rotation when not interacting
      crystal.rotation.x += 0.005;
      crystal.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
        if (renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-abstract-background-with-particles-29034-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in-up">
            Design. Develop. Deliver.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I'm Joepaul Vilsan, a Product Designer and Developer creating modern, intuitive, and beautiful web experiences.
          </p>

          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full animate-fade-in-up hover:scale-105 transition-transform"
            style={{ animationDelay: '0.4s' }}
          >
            View My Work
          </Button>
        </div>

        {/* Interactive 3D Crystal */}
        <div className="lg:w-1/2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div 
            ref={mountRef} 
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{ width: '400px', height: '400px' }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
