'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Server, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with cart, payment integration, and admin dashboard.',
      tags: ['PHP', 'JavaScript', 'TailwindCSS', 'SQL'],
      github: 'https://github.com',
      live: 'https://demo.com',
      icon: Code2,
      color: 'bg-blue-100 text-blue-800',
    },
    {
      title: 'Sickle-cell Image Multiplier',
      description: 'A system that help researchers in medical to increase the images in thier dataset',
      tags: ['React.js', 'Django', 'TailwindCSS', 'SQLite'],
      github: 'https://github.com',
      live: 'https://api.demo.com',
      icon: Server,
      color: 'bg-green-100 text-green-800',
    },
    {
      title: 'Secure Authetication System',
      description: 'Secure Authentication system',
      tags: ['Node.js', 'Express', 'MongoDB', 'React.js'],
      github: 'https://github.com',
      live: 'https://analytics.demo.com',
      icon: Database,
      color: 'bg-purple-100 text-purple-800',
    },
    {
      title: 'Timetable Generator System',
      description: 'Automated system with AI feature that enables instutitions to generate individuals',
      tags: ['Laravel', 'React.js', 'TailwindCSS', 'SQL'],
      github: 'https://github.com',
      live: 'https://demo.com',
      icon: Code2,
      color: 'bg-blue-100 text-blue-800',
    },
    {
      title: 'Employee Management System',
      description: 'A system that enables employers to manage thier employees',
      tags: ['HTML', 'PHP', 'CSS', 'Javascript', 'SQL'],
      github: 'https://github.com',
      live: 'https://api.demo.com',
      icon: Server,
      color: 'bg-green-100 text-green-800',
    },
    {
      title: 'Smart Irrigation System',
      description: 'Farmers ability to control the sprinkler basing on the soil moisture content',
      tags: ['HTML', 'Javascript', 'Firebase', 'CSS', 'C++ (Arduino)'],
      github: 'https://github.com',
      live: 'https://analytics.demo.com',
      icon: Database,
      color: 'bg-purple-100 text-purple-800',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-responsive section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary-900">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development and problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${project.color}`}>
                    <project.icon size={24} />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-primary-700"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-primary-700"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-bold mb-2 text-primary-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-50 text-primary-800 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div className="h-1 w-0 bg-primary-700 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href='https://github.com/shanon082' className="btn-primary">
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;