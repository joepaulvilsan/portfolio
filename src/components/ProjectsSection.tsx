import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import blogPreviewImage from '@/photos/blog-preview.png';
// We no longer need the ProjectModal or its state 

// New projectsData array with just your blog project
const projectsData = [
  {
    title: 'Full-Stack Blog Platform',
    description: 'A complete full-stack blogging application featuring user authentication, blog creation, updates, and deletion. The frontend is built with React, and the backend is a FastAPI REST API connected to a PostgreSQL database, all containerized with Docker.',
    image: blogPreviewImage,
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://my-blog-frontend-e2i4.onrender.com/',
    githubUrl: 'https://github.com/joepaulvilsan/blogproject',
  }
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  // No modal state (useState) is needed anymore

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Selected Works
          </h2>

          <div className="space-y-24">
            {projectsData.map((project, index) => (
              <div
                key={project.title}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Media */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-sm font-medium border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links - Updated to link directly */}
                  <div className="flex gap-4">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* The ProjectModal component is no longer needed */}
    </section>
  );
};