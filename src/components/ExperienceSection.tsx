
import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
const experienceData = [
  {
    type: 'work',
    title: 'Intern',
    organization: 'Tata Consultancy Services (TCS)',
    period: 'Jan 2025 - Apr 2025',
    description: 'Gained hands-on experience with machine learning and signal processing, building sentiment analysis models and developing frontend interfaces with React.',
    icon: 'Briefcase' // Assuming 'Briefcase' is a component or variable
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science & Business Systems',
    organization: 'Rajagiri School of Engineering & Technology',
    period: '2021 - 2025',
    description: 'Graduated with a CGPA of 8.08.',
    icon: 'GraduationCap' // Assuming 'GraduationCap' is a component or variable
  }
];

export const ExperienceSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />

            {experienceData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-background z-10" />

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                      <item.icon className="h-6 w-6 text-blue-600" />
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.type === 'work' 
                          ? 'bg-blue-600/20 text-blue-600' 
                          : 'bg-purple-600/20 text-purple-600'
                      }`}>
                        {item.type === 'work' ? 'Work' : 'Education'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-blue-600 font-medium mb-2">{item.organization}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
