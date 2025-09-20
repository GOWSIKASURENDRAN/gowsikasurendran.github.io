import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'gowsikasurendran2002@gmail.com',
      link: 'mailto:gowsikasurendran2002@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+94 77 225 5058',
      link: 'tel:+94772255058'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Jaffna, Sri Lanka',
      link: '#'
    }
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-accent mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center text-center p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-accent/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-accent group-hover:text-white transition-colors mb-2">
                    {info.title}
                  </h4>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center space-y-4">
              <h4 className="text-lg font-semibold text-accent">Follow Me</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-14 h-14 bg-dark/50 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 glow-effect`}
                  >
                    <social.icon className="w-7 h-7" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
