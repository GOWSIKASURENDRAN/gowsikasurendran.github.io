import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';
import { HiCode, HiLightBulb, HiSparkles } from 'react-icons/hi';

// Import profile image
import profileImage from '../assets/gowsika-main.jpg';

const Hero = ({ openModal }) => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCVModal = () => {
    openModal({
      type: 'cv',
      title: 'Download CV',
      content: 'CV download functionality would be implemented here'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-lg"
        />
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-20 w-12 h-12 border-2 border-accent/40 transform rotate-45"
        />
        <motion.div
          animate={{ 
            x: [-30, 30, -30],
            y: [-10, 10, -10],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-10 w-8 h-8 bg-primary/30 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ 
              scale: 1.1,
              rotateY: 10,
              rotateX: 5,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mb-6 sm:mb-8 cursor-pointer group p-8"
          >
            <div className="absolute inset-8 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative w-full h-full bg-gradient-to-r from-primary to-accent rounded-2xl p-1 group-hover:from-accent group-hover:to-primary transition-all duration-300">
              <div className="w-full h-full bg-dark rounded-2xl overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Gowsika Surendran"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            {/* Floating icons around profile rectangle */}
            <motion.div
              animate={{ rotate: 360 }}
              whileHover={{ scale: 1.2, rotate: 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-accent/60 group-hover:bg-accent/80 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <HiCode className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-accent transition-colors duration-300" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              whileHover={{ scale: 1.2, rotate: 0 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-primary/60 group-hover:bg-primary/80 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <HiLightBulb className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-primary transition-colors duration-300" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -left-6 sm:-left-10 w-10 h-10 sm:w-14 sm:h-14 bg-accent/60 group-hover:bg-accent/80 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <HiSparkles className="w-5 h-5 sm:w-7 sm:h-7 text-white group-hover:text-accent transition-colors duration-300" />
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              <span className="gradient-text">Gowsika Surendran</span>
            </h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                      className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
                    >
                      Data Science Intern & Undergraduate
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1.4 }}
                      className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
                    >
                      Passionate about turning data into actionable insights through analysis, visualization, 
                      and machine learning. I love solving complex problems with data-driven solutions.
                    </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full glow-effect flex items-center space-x-2"
            >
              <span>View My Work</span>
              <FaArrowDown className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-dark transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <FaEnvelope className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCVModal}
              className="px-8 py-4 bg-dark/50 border border-primary/30 text-primary font-semibold rounded-full hover:bg-primary/10 transition-all duration-300 flex items-center space-x-2"
            >
              <span>View CV</span>
              <FaDownload className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex items-center justify-center space-x-6 pt-8"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/gowsikasurendan2002"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-dark/50 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 glow-effect"
            >
              <FaGithub className="w-6 h-6 text-accent" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/gowsika-surendan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-dark/50 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 glow-effect"
            >
              <FaLinkedin className="w-6 h-6 text-accent" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:gowsikasurendran2002@gmail.com"
              className="w-12 h-12 bg-dark/50 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 glow-effect"
            >
              <FaEnvelope className="w-6 h-6 text-accent" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 text-gray-400"
          >
            <span className="text-sm">Scroll Down</span>
            <FaArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
