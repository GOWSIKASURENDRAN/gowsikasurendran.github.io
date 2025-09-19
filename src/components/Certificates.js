import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';

// Import certificate images
import img7668 from '../cetificates_main/IMG_7668.png';
import img7670 from '../cetificates_main/IMG_7670.jpg';
import photo2025 from '../cetificates_main/PHOTO-2025-09-19-10-19-45.jpg';
import img7664 from '../cetificates_sub/IMG_7664.jpg';
import img7665 from '../cetificates_sub/IMG_7665.jpg';
import img7666 from '../cetificates_sub/IMG_7666.jpg';
import img7667 from '../cetificates_sub/IMG_7667.jpg';
import img7669 from '../cetificates_sub/IMG_7669.png';
import img7671 from '../cetificates_sub/IMG_7671.jpg';

const Certificates = ({ openModal }) => {
  const mainCertificates = [
    {
      id: 1,
      title: 'Anaconda Python for Data Science Professional Certificate',
      issuer: 'Anaconda, Inc.',
      date: 'Sep 2025',
      category: 'Data Science',
      image: img7668,
      description: 'Professional certification in Python programming for data science, covering data analysis, statistics, and machine learning fundamentals.',
      skills: ['Python', 'Data Analysis', 'Statistics', 'Pandas', 'NumPy', 'Data Visualization'],
      credentialId: 'ANACONDA-PYTHON-2025-001',
      verificationUrl: 'https://linkedin.com/in/gowsikasuren',
      featured: true
    },
    {
      id: 2,
      title: 'Artificial Intelligence Foundations: Machine Learning',
      issuer: 'LinkedIn',
      date: 'Sep 2025',
      category: 'Artificial Intelligence',
      image: img7670,
      description: 'Comprehensive certification covering machine learning fundamentals, algorithms, and AI applications in real-world scenarios.',
      skills: ['Machine Learning', 'AI', 'Algorithms', 'Data Science', 'Python', 'Scikit-learn'],
      credentialId: 'LINKEDIN-AI-2025-002',
      verificationUrl: 'https://linkedin.com/in/gowsikasuren',
      featured: true
    },
    {
      id: 3,
      title: 'Building Deep Learning Applications with Keras',
      issuer: 'LinkedIn Learning',
      date: '2025',
      category: 'Deep Learning',
      image: photo2025,
      description: 'Advanced certification in deep learning using Keras framework for building neural networks and AI applications.',
      skills: ['Deep Learning', 'Keras', 'Neural Networks', 'TensorFlow', 'AI Applications'],
      credentialId: 'LINKEDIN-KERAS-2025-003',
      verificationUrl: 'https://linkedin.com/in/gowsikasuren',
      featured: true
    }
  ];

  const subCertificates = [
    {
      id: 4,
      title: 'Statistics Foundations 3: Using Data Sets',
      issuer: 'LinkedIn Learning',
      date: '2025',
      category: 'Statistics',
      image: img7664,
      description: 'Advanced statistical analysis and data interpretation techniques.',
      skills: ['Statistics', 'Data Analysis', 'Statistical Methods']
    },
    {
      id: 5,
      title: 'MERN Essential Training',
      issuer: 'LinkedIn Learning',
      date: '2025',
      category: 'Full-Stack Development',
      image: img7665,
      description: 'Complete MERN stack development training covering MongoDB, Express, React, and Node.js.',
      skills: ['MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js']
    },
    {
      id: 6,
      title: 'React.js Fundamentals',
      issuer: 'LinkedIn Learning',
      date: '2025',
      category: 'Frontend Development',
      image: img7666,
      description: 'Comprehensive React.js training covering components, hooks, and modern development practices.',
      skills: ['React.js', 'JavaScript', 'JSX', 'Hooks', 'Components']
    },
    {
      id: 7,
      title: 'Python Programming Basics',
      issuer: 'LinkedIn Learning',
      date: '2025',
      category: 'Programming',
      image: img7667,
      description: 'Fundamental Python programming concepts and best practices.',
      skills: ['Python', 'Programming', 'OOP', 'Data Structures']
    },
    {
      id: 8,
      title: 'Web Development Fundamentals',
      issuer: 'LinkedIn Learning',
      date: '2025',
      category: 'Web Development',
      image: img7669,
      description: 'Core web development skills including HTML, CSS, and JavaScript.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Web Development']
    },
    {
      id: 9,
      title: 'Database Design and Management',
      issuer: 'LinkedIn Learning',
      date: '2025',
      category: 'Database',
      image: img7671,
      description: 'Database design principles and management using MySQL and MongoDB.',
      skills: ['Database Design', 'MySQL', 'MongoDB', 'SQL']
    }
  ];

  // Main certificates are already filtered, sub certificates are separate

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleCertificateClick = (certificate) => {
    openModal({
      type: 'certificate',
      title: certificate.title,
      content: certificate
    });
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise 
            in various technologies and methodologies.
          </p>
        </motion.div>

        {/* Main Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-accent mb-8 text-center">Main Certifications</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mainCertificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  rotateY: 5
                }}
                className="group cursor-pointer"
                onClick={() => handleCertificateClick(certificate)}
              >
                <div className="bg-dark/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20 hover:border-accent/50 transition-all duration-300 glow-effect h-full">
                  {/* Certificate Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={certificate.image} 
                      alt={certificate.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback when image fails to load */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                        <FaCertificate className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <FaExternalLinkAlt className="w-8 h-8 text-accent" />
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                        {certificate.category}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>{certificate.date}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-accent mb-2 group-hover:text-white transition-colors">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {certificate.issuer}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {certificate.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {certificate.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {certificate.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-full">
                          +{certificate.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-2 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FaAward className="w-4 h-4" />
                      <span>View Certificate</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Sub Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-accent mb-8 text-center">Additional Certifications</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {subCertificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -3
                }}
                className="group cursor-pointer"
                onClick={() => handleCertificateClick(certificate)}
              >
                <div className="bg-dark/30 backdrop-blur-sm rounded-lg p-3 border border-primary/10 hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={certificate.image} 
                        alt={certificate.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback when image fails to load */}
                      <div className="w-full h-full bg-gradient-to-r from-primary to-accent flex items-center justify-center" style={{display: 'none'}}>
                        <FaCertificate className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-accent group-hover:text-white transition-colors truncate">
                        {certificate.title}
                      </h4>
                      <p className="text-gray-400 text-xs truncate">
                        {certificate.issuer}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                          {certificate.category}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {certificate.date}
                        </span>
                      </div>
                    </div>
                    <FaExternalLinkAlt className="w-3 h-3 text-gray-400 group-hover:text-accent transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* View LinkedIn Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/gowsikasuren"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-dark transition-all duration-300"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
            <span>View All Certificates on LinkedIn</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
