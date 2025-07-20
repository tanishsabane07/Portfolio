import React from 'react';
import { motion } from 'framer-motion';
import ProjectsBackground from './ProjectsBackground';

const projects = [
  {
    title: 'AI-Powered Chat Application',
    description: 'A real-time chat application built with React and Node.js, featuring AI-powered message suggestions and smart responses.',
    link: '#',
    tech: ['React', 'Node.js', 'Socket.io', 'OpenAI'],
    image: 'https://via.placeholder.com/400x250/1a1a1a/67e8f9?text=Chat+App'
  },
  {
    title: 'Portfolio Website',
    description: 'A creative portfolio website built with React and Three.js, featuring interactive 3D animations and modern design.',
    link: '#',
    tech: ['React', 'Three.js', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/400x250/1a1a1a/67e8f9?text=Portfolio'
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.',
    link: '#',
    tech: ['React', 'Express', 'MongoDB', 'Stripe'],
    image: 'https://via.placeholder.com/400x250/1a1a1a/67e8f9?text=E-Commerce'
  }
];

const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      className="py-20 px-4 text-white min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <ProjectsBackground />
      <div className="container mx-auto max-w-6xl relative z-30">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300 group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-cyan-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-cyan-600 bg-opacity-20 text-cyan-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a 
                  href={project.link} 
                  className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
