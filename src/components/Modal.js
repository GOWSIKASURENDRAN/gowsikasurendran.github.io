import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaAward, FaDownload } from 'react-icons/fa';

const Modal = ({ content, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!content) return null;

  const renderProjectModal = (project) => (
    <div className="max-w-4xl mx-auto bg-dark/95 backdrop-blur-md rounded-2xl overflow-hidden border border-primary/20">
      {/* Header */}
      <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20">
        {project.images && project.images.length > 0 ? (
          <div className="flex h-full">
            {project.images.slice(0, 2).map((image, index) => (
              <div key={index} className="flex-1 relative">
                <img 
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        ) : project.image && project.image !== '/api/placeholder/400/300' ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        {/* Fallback when no images */}
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${(project.images && project.images.length > 0) || (project.image && project.image !== '/api/placeholder/400/300') ? 'hidden' : 'flex'}`}>
          <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
            <FaExternalLinkAlt className="w-12 h-12 text-white" />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-accent mb-4">{project.title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {project.longDescription}
        </p>

        {/* Features */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-accent mb-4">Key Features</h3>
          <ul className="grid md:grid-cols-2 gap-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-accent mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span>View Code</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-dark transition-all duration-300"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </div>
  );

  const renderCertificateModal = (certificate) => (
    <div className="max-w-4xl mx-auto bg-dark/95 backdrop-blur-md rounded-2xl overflow-hidden border border-primary/20">
      {/* Header with Certificate Image */}
      <div className="relative h-64 bg-gradient-to-br from-accent/20 to-primary/20">
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
            <FaAward className="w-10 h-10 text-white" />
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-accent">{certificate.title}</h2>
          <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
            {certificate.category}
          </span>
        </div>
        
        <p className="text-gray-400 text-lg mb-2">{certificate.issuer}</p>
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center space-x-2 text-gray-300">
            <FaCalendarAlt className="w-4 h-4" />
            <span>{certificate.date}</span>
          </div>
          <div className="text-gray-300">
            ID: {certificate.credentialId}
          </div>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {certificate.description}
        </p>

        {/* Skills */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-accent mb-4">Skills Demonstrated</h3>
          <div className="flex flex-wrap gap-3">
            {certificate.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={certificate.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
            <span>View on LinkedIn</span>
          </motion.a>
        </div>
      </div>
    </div>
  );

  const renderCVModal = () => (
    <div className="max-w-4xl mx-auto bg-dark/95 backdrop-blur-md rounded-2xl overflow-hidden border border-primary/20">
      {/* Header */}
      <div className="relative h-32 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
            <FaDownload className="w-8 h-8 text-white" />
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-accent mb-4 text-center">Gowsika Surendran - CV</h2>
        <p className="text-gray-300 text-lg mb-8 text-center">
          View or download my detailed resume with all my experience, skills, and achievements.
        </p>

        {/* CV Preview/Image */}
        <div className="mb-8">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-primary/20">
            <h3 className="text-xl font-semibold text-accent mb-4 text-center">CV Preview</h3>
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-white rounded-lg p-4 shadow-lg">
                <div className="text-center text-gray-600">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">GS</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Gowsika Surendran</h4>
                  <p className="text-sm text-gray-600">Data Science Intern & Undergraduate</p>
                  <div className="mt-4 text-xs text-gray-500">
                    <p>📧 gowsikasurendran2002@gmail.com</p>
                    <p>📱 +94 77 225 5058</p>
                    <p>🌐 gowsika.me</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Gowsika_Surendran_CV.pdf"
            download="Gowsika_Surendran_CV.pdf"
            className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <FaDownload className="w-5 h-5" />
            <span>Download PDF</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Gowsika_Surendran_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-dark transition-all duration-300"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
            <span>View in Browser</span>
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="px-8 py-4 border-2 border-gray-500 text-gray-300 font-semibold rounded-lg hover:bg-gray-500 hover:text-dark transition-all duration-300"
          >
            Close
          </motion.button>
        </div>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {content.type === 'project' && renderProjectModal(content.content)}
          {content.type === 'certificate' && renderCertificateModal(content.content)}
          {content.type === 'cv' && renderCVModal()}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
