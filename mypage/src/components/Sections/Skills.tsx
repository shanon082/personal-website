'use client';

import { motion } from 'framer-motion';
import { 
  Code2, Database, Server, Cpu, 
  Cloud, Terminal, Layout, Smartphone 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'REST APIs', level: 95 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'Git', level: 95 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-responsive section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary-900">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 card-hover border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-50 rounded-xl mr-4">
                  <category.icon className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold text-primary-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-primary-700 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary-600 to-primary-700 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-primary-900">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js',
              'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
              'Docker', 'AWS', 'Git', 'Tailwind'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <span className="font-medium text-primary-800">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;