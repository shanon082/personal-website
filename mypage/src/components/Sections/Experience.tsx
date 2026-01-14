'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Network Operator',
      company: 'Soliton Telmec',
      period: '2026 - current',
      location: 'Bugolobi, Farady-Road',
      description: 'Maintainance of MTN wakanet through contact between the Field Team and ZTE for internet restoration.',
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Code Craft',
      period: '2024 - 2025',
      location: 'india (remotely)',
      description: 'Participated in development of multiple web applications using React, Node.js, and microservices architecture.',
    },
    {
      type: 'education',
      title: 'Electronics and Computer Engineering Bsc',
      company: 'Soroti University',
      period: '2022 - 2025',
      location: 'Arapai, Soroti-Uganda',
      description: 'Specialized in Software Development and Distributed Systems.',
    },
    // {
    //   type: 'education',
    //   title: 'Bachelor of Software Engineering',
    //   company: 'MIT',
    //   period: '2014 - 2018',
    //   location: 'Cambridge, MA',
    //   description: 'Graduated with honors. Focus on Web Technologies and Databases.',
    // },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-responsive section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary-900">Experience & Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200 hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute top-6 -left-2 w-4 h-4 bg-primary-700 rounded-full border-4 border-white shadow-lg" />

                {/* Content Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 card-hover border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-xl mr-4 ${
                      exp.type === 'work' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {exp.type === 'work' ? (
                        <Briefcase size={24} />
                      ) : (
                        <GraduationCap size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 text-primary-900">{exp.title}</h3>
                      <p className="text-primary-700 font-semibold mb-2">{exp.company}</p>
                      
                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </span>
                      </div>
                      
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;