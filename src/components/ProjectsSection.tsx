
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ProjectModal } from './ProjectModal';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern, responsive e-commerce platform built with React, Node.js, and Stripe integration. Features include real-time inventory management, advanced search, and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    video: null,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    challenge: 'The client needed a scalable e-commerce solution that could handle high traffic loads while providing a seamless user experience across all devices.',
    process: 'I started with user research and competitor analysis, then created wireframes and prototypes. The development process involved setting up a robust backend architecture, implementing real-time features, and ensuring security compliance.',
    solution: 'Delivered a full-featured e-commerce platform with real-time inventory management, advanced search capabilities, and personalized product recommendations that increased conversion rates by 35%.',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Interactive dashboard with machine learning insights, real-time data visualization, and predictive analytics. Built for enterprise clients to make data-driven decisions.',
    image: null,
    video: 'https://assets.mixkit.co/videos/preview/mixkit-dashboard-interface-animation-29029-large.mp4',
    technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
    liveUrl: '#',
    githubUrl: '#',
    challenge: 'Enterprise clients needed a way to visualize complex data sets and gain actionable insights from their business metrics in real-time.',
    process: 'I collaborated with data scientists to understand the requirements, designed intuitive data visualizations, and built a responsive dashboard that could handle large datasets efficiently.',
    solution: 'Created an AI-powered analytics platform that processes millions of data points daily, providing real-time insights and predictive analytics that helped clients increase operational efficiency by 40%.',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    title: 'Mobile Health App',
    description: 'Cross-platform mobile application for health tracking and telemedicine. Features include appointment scheduling, symptom tracking, and secure video consultations.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
    video: null,
    technologies: ['React Native', 'Firebase', 'WebRTC', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    challenge: 'Healthcare providers needed a secure, HIPAA-compliant mobile solution for remote patient monitoring and telemedicine consultations.',
    process: 'I conducted extensive user research with healthcare professionals and patients, ensuring the app met strict security requirements while maintaining an intuitive user experience.',
    solution: 'Delivered a comprehensive health app that increased patient engagement by 60% and reduced no-show appointments by 45% through automated reminders and easy rescheduling.',
    images: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
                    {project.video ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-[400px] object-cover"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[400px] object-cover"
                      />
                    )}
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

                  {/* Links */}
                  <div className="flex gap-4">
                    <Button
                      onClick={() => openModal(project)}
                      variant="default"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Case Study
                    </Button>
                    <Button variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </section>
  );
};
