import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaJava, FaCode, FaAndroid } from 'react-icons/fa';

const Projects = ({ openModal }) => {
  const projects = [
    {
      id: 1,
      title: 'Online-Tour Tourist App',
      description: 'A comprehensive tourist application built in Java with full CRUD features for managing tourist destinations and bookings.',
      image: '/Onlinetour_home.png',
      technologies: ['Java', 'Eclipse IDE', 'MySQL', 'Swing/AWT'],
      icons: [FaJava, FaDatabase, FaCode, FaJs],
      github: 'https://github.com/GOWSIKASURENDRAN/Online-Tour',
      live: 'https://github.com/GOWSIKASURENDRAN/Online-Tour',
      features: [
        'Complete CRUD operations (Create, Read, Update, Delete)',
        'Product module development',
        'Tourist destination management',
        'Booking system functionality',
        'User-friendly Java Swing interface',
        'Database integration with MySQL'
      ],
      longDescription: 'A desktop application developed in Java using Eclipse IDE for managing tourist destinations and bookings. Features a complete product module with full CRUD functionality, allowing users to manage tourist information efficiently. Built during Year 2 Semester 1 as part of academic coursework.'
    },
    {
      id: 2,
      title: 'Construction Management System',
      description: 'A comprehensive web-based project management system for construction companies with full CRUD operations and team collaboration.',
      image: '/constution_home.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
      icons: [FaHtml5, FaCss3Alt, FaJs, FaDatabase],
      github: 'https://github.com/GOWSIKASURENDRAN/Construction-Management-project',
      live: 'https://github.com/GOWSIKASURENDRAN/Construction-Management-project',
      features: [
        'Full CRUD operations (Insert, Update, Delete, Read)',
        'Web-based project management interface',
        'Team collaboration features',
        'Construction project tracking',
        'Multi-user system support',
        'XAMPP local server environment'
      ],
      longDescription: 'A collaborative web-based project management system developed by a 5-member team at SLIIT during Year 1 Semester 2. Built using HTML5, CSS3, JavaScript, PHP, and MySQL with XAMPP server environment. The system provides comprehensive construction project management capabilities with full CRUD operations, enabling teams to efficiently manage construction projects from planning to completion through a modern web interface.'
    },
    {
      id: 3,
      title: 'MyFood - Food Delivery App',
      description: 'A modern Android food delivery application similar to Uber Eats, built with Kotlin and featuring beautiful UI design with comprehensive authentication flow.',
      image: '/api/placeholder/400/300',
      technologies: ['Kotlin', 'Android Studio', 'Material Design 3', 'XML', 'Gradle'],
      icons: [FaAndroid, FaCode, FaHtml5, FaCss3Alt],
      github: 'https://github.com/GOWSIKASURENDRAN/MyFoodApp',
      live: 'https://github.com/GOWSIKASURENDRAN/MyFoodApp',
      features: [
        'Beautiful splash screen with gradient background (#06C167 to white)',
        'Complete login/signup authentication flow',
        'Material Design 3 UI components',
        'Responsive layout (360×800 dp portrait orientation)',
        'Social login integration (Google & Facebook)',
        '100% Kotlin implementation with no Java code',
        'Vector drawables for scalable icons',
        'Edge-to-edge immersive experience'
      ],
      longDescription: 'A sophisticated Android food delivery application similar to Uber Eats, built entirely in Kotlin using Android Studio. Features a stunning splash screen with brand identity (#06C167 green gradient), complete authentication system with modern Material Design 3 components, and responsive layout design. The app includes social login integration, uses ConstraintLayout for responsive design, and follows modern Android development best practices with 100% Kotlin implementation.'
    }
  ];

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

  const handleProjectClick = (project) => {
    openModal({
      type: 'project',
      title: project.title,
      content: project
    });
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            innovative digital solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                rotateY: 5
              }}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="bg-dark/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20 hover:border-accent/50 transition-all duration-300 glow-effect">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image && project.image !== '/api/placeholder/400/300' ? (
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
                  {/* Fallback when image fails to load or no image */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${project.image && project.image !== '/api/placeholder/400/300' ? 'hidden' : 'flex'}`}>
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <FaReact className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                      >
                        <FaGithub className="w-6 h-6 text-dark" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-6 h-6 text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Tech Icons */}
                  <div className="flex items-center space-x-3 mb-4">
                    {project.icons.map((Icon, index) => (
                      <Icon key={index} className="w-5 h-5 text-accent" />
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/GOWSIKASURENDRAN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-dark transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
