
import React from 'react';
import { Code, Palette, Wrench } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

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

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};
