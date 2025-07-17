
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    challenge: string;
    process: string;
    solution: string;
    technologies: string[];
    images: string[];
  };
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-background border rounded-2xl max-w-4xl max-h-[90vh] w-full mx-4 overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-muted rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
          <div className="space-y-8">
            {/* Project Overview */}
            <section>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Project Overview</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </section>

            {/* The Challenge */}
            <section>
              <h3 className="text-xl font-semibold mb-3 text-purple-600">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </section>

            {/* My Process */}
            <section>
              <h3 className="text-xl font-semibold mb-3 text-green-600">My Process</h3>
              <p className="text-muted-foreground leading-relaxed">{project.process}</p>
            </section>

            {/* The Solution */}
            <section>
              <h3 className="text-xl font-semibold mb-3 text-orange-600">The Solution</h3>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </section>

            {/* Technologies Used */}
            <section>
              <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-sm font-medium border border-blue-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Project Images */}
            <section>
              <h3 className="text-xl font-semibold mb-3">Project Showcase</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} showcase ${index + 1}`}
                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
