import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/GOWSIKASURENDRAN',
      color: 'hover:text-gray-300'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/gowsikasuren',
      color: 'hover:text-blue-400'
    },
    {
      icon: FaEnvelope,
      name: 'Email',
      url: 'mailto:gowsikasurendan2002@gmail.com',
      color: 'hover:text-accent'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-dark/80 backdrop-blur-sm border-t border-primary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">Gowsika Surendan</h3>
                  <p className="text-gray-400">Creative Developer & Digital Innovator</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Passionate about creating beautiful, functional, and user-centered digital experiences. 
                Let's build something amazing together!
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-dark/50 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 glow-effect`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      whileHover={{ x: 5, color: '#ffd700' }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-accent">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-4 h-4 text-accent" />
                  <a 
                    href="mailto:gowsikasurendan2002@gmail.com"
                    className="text-gray-300 hover:text-accent transition-colors duration-300"
                  >
                    gowsikasurendan2002@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-4 h-4 text-accent">📱</span>
                  <a 
                    href="tel:+94772255058"
                    className="text-gray-300 hover:text-accent transition-colors duration-300"
                  >
                    +94 77 225 5058
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-4 h-4 text-accent">📍</span>
                  <span className="text-gray-300">Colombo, Sri Lanka</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 text-gray-400"
            >
              <span>© {currentYear} Gowsika Surendan. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-accent"
              >
                <FaHeart className="w-4 h-4" />
              </motion.span>
              <span>in Sri Lanka</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-6"
            >
              <span className="text-gray-400 text-sm">
                All rights reserved
              </span>
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 glow-effect"
              >
                <FaArrowUp className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
    </footer>
  );
};

export default Footer;
