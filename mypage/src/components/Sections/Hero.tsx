'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Code2, Download } from 'lucide-react';

const Hero = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container-responsive section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-primary-800 font-semibold mb-4"
            >
              👋 Hello, I'm
            </motion.p>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Alex <span className="text-primary-800">Johnson</span>
            </motion.h1>
            
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl text-gray-600 mb-6"
            >
              Full Stack Developer & Software Engineer
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-8 text-lg"
            >
              I build exceptional digital experiences focused on performance,
              accessibility, and clean code. Specializing in modern web
              technologies to create scalable solutions.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <button className="btn-primary flex items-center">
                View Projects
                <ChevronRight className="ml-2" size={20} />
              </button>
              <button className="btn-secondary flex items-center">
                <Download className="mr-2" size={20} />
                Download CV
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-100 to-primary-300 rounded-3xl overflow-hidden">
              {/* Placeholder for developer illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-primary-800 rounded-full flex items-center justify-center mb-6">
                    <Code2 size={80} className="text-white" />
                  </div>
                  <p className="text-primary-900 font-medium">
                    Interactive Developer Profile
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                <span className="text-primary-800 font-bold">TS</span>
              </div>
              <div className="absolute bottom-12 right-12 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                <span className="text-primary-800 font-bold">React</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;