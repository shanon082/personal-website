'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Server, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with cart, payment integration, and admin dashboard.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://demo.com',
      icon: Code2,
      color: 'bg-blue-100 text-blue-800',
    },
    {
      title: 'Task Management API',
      description: 'RESTful API with real-time updates, authentication, and role-based access.',
      tags: ['Node.js', 'Express', 'Socket.io', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://api.demo.com',
      icon: Server,
      color: 'bg-green-100 text-green-800',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization dashboard with interactive charts and reports.',
      tags: ['React', 'D3.js', 'Python', 'FastAPI'],
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
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
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
              className="card-hover bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${project.color}`}>
                    <project.icon size={24} />
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
              <div className="h-1 w-0 group-hover:w-full bg-primary-800 transition-all duration-300" />
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
          <button className="btn-primary">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;