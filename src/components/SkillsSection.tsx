
import React, { useRef, useEffect } from 'react';
import { Code, Palette, Wrench } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import * as THREE from 'three';

const skillsData = {
  design: {
    icon: Palette,
    title: 'Design',
    skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Prototyping', 'Design Systems']
  },
  development: {
    icon: Code,
    title: 'Development',
    skills: ['React/Next.js', 'TypeScript', 'Node.js', 'Python', 'GraphQL', 'PostgreSQL']
  },
  tools: {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git/GitHub', 'Docker', 'AWS', 'Vercel', 'Jest', 'Cypress']
  }
};

export const SkillsSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const crystalRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!crystalRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);
    crystalRef.current.appendChild(renderer.domElement);

    // Create crystalline structure
    const geometry = new THREE.OctahedronGeometry(1, 1);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ 
      color: 0x9333ea,
      transparent: true,
      opacity: 0.7
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
      if (crystalRef.current) {
        const rect = crystalRef.current.getBoundingClientRect();
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
      crystal.rotation.x += 0.003;
      crystal.rotation.y += 0.003;

      renderer.render(scene, camera);
    };

    crystalRef.current.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (crystalRef.current) {
        crystalRef.current.removeEventListener('mousemove', handleMouseMove);
        if (renderer.domElement) {
          crystalRef.current.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([key, category], index) => (
              <div
                key={key}
                className={`bg-card/60 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-border/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 mx-auto">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-center mb-6">{category.title}</h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-3 text-center border border-blue-600/20 hover:border-blue-600/40 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Interactive 3D Crystal */}
            <div className={`bg-card/60 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-border/50 flex items-center justify-center ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.8s' }}>
              <div 
                ref={crystalRef}
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
                style={{ width: '300px', height: '300px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
