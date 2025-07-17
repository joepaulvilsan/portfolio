
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export const AboutSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a passionate full-stack developer and designer with over 5 years of experience creating 
              innovative digital solutions. I specialize in building user-centric applications that combine 
              beautiful design with robust functionality. My expertise spans modern web technologies, 
              mobile development, and cloud architecture.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
              projects, or mentoring aspiring developers. I believe in the power of technology to solve 
              real-world problems and create meaningful impact.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full hover:scale-105 transition-transform"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
