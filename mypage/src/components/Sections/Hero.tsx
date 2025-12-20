'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Code2, Download } from 'lucide-react';

const Hero = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-primary-50">
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
              className="text-primary-700 font-semibold mb-4 flex items-center gap-2"
            >
              <span className="w-8 h-0.5 bg-primary-700"></span>
              Hello, I'm
            </motion.p>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Shanon Simon <span className="text-primary-700">Lubega</span>
            </motion.h1>
            
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl text-gray-700 mb-6"
            >
              Full Stack Developer & Software Developer
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-8 text-lg leading-relaxed"
            >
              I build exceptional digital experiences focused on performance,
              accessibility, and clean code. Specializing in modern web
              technologies to create scalable solutions.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary flex items-center">
                View Projects
                <ChevronRight className="ml-2 size-5" />
              </a>
              <a
                href="/SHANON_SIMON_LUBEGA_CV.pdf"
                download="SHANON_SIMON_LUBEGA_CV.pdf"
                className="btn-secondary flex items-center"
              >
                <Download className="mr-2 size-5" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-100 to-primary-300 rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for developer illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="size-48 mx-auto bg-gradient-to-br from-primary-700 to-primary-900 rounded-full flex items-center justify-center mb-6 shadow-2xl">
                    <Code2 size={80} className="text-white" />
                  </div>
                  <p className="text-primary-900 font-medium text-lg">
                    Interactive Developer Profile
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 left-8 size-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-primary-200">
                <span className="text-primary-800 font-bold text-lg">TS</span>
              </div>
              <div className="absolute bottom-12 right-12 size-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-primary-200">
                <span className="text-primary-800 font-bold text-lg">React</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;