import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJs, FaPython, FaHtml5, FaCss3Alt, FaGit, FaDocker,
  FaDatabase, FaAws, FaFigma, FaGithub, FaPhp, FaJava, FaAndroid, FaCode
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaReact,
      color: 'from-pink-500 to-pink-400',
      skills: [
        { name: 'React.js', icon: FaReact, level: 95, color: '#61DAFB' },
        { name: 'JavaScript', icon: FaJs, level: 90, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
      ]
    },
    {
      title: 'Backend Development',
      icon: FaNodeJs,
      color: 'from-pink-600 to-pink-500',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 90, color: '#339933' },
        { name: 'Python', icon: FaPython, level: 85, color: '#3776AB' },
        { name: 'PHP', icon: FaPhp, level: 80, color: '#777BB4' },
        { name: 'Java', icon: FaJava, level: 75, color: '#007396' },
        { name: 'Express.js', icon: FaNodeJs, level: 85, color: '#000000' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: FaAndroid,
      color: 'from-pink-700 to-pink-600',
      skills: [
        { name: 'Android', icon: FaAndroid, level: 75, color: '#3DDC84' }
      ]
    },
    {
      title: 'Data Science & AI',
      icon: FaDatabase,
      color: 'from-pink-800 to-pink-700',
      skills: [
        { name: 'Python', icon: FaPython, level: 90, color: '#3776AB' },
        { name: 'Machine Learning', icon: FaCode, level: 80, color: '#FF6F00' },
        { name: 'Statistics', icon: FaCode, level: 85, color: '#4CAF50' }
      ]
    },
    {
      title: 'Software Engineering',
      icon: FaCode,
      color: 'from-pink-900 to-pink-800',
      skills: [
        { name: 'Version Control', icon: FaGit, level: 95, color: '#F05032' },
        { name: 'Code Review', icon: FaCode, level: 85, color: '#4CAF50' },
        { name: 'Testing', icon: FaCode, level: 80, color: '#FF5722' },
        { name: 'Documentation', icon: FaCode, level: 90, color: '#607D8B' },
        { name: 'Project Management', icon: FaCode, level: 85, color: '#795548' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: FaGit,
      color: 'from-pink-700 to-pink-600',
      skills: [
        { name: 'Git', icon: FaGit, level: 90, color: '#F05032' },
        { name: 'Docker', icon: FaDocker, level: 80, color: '#2496ED' },
        { name: 'AWS', icon: FaAws, level: 75, color: '#FF9900' },
        { name: 'Figma', icon: FaFigma, level: 85, color: '#F24E1E' },
        { name: 'GitHub', icon: FaGithub, level: 95, color: '#181717' },
        { name: 'MongoDB', icon: FaDatabase, level: 85, color: '#47A248' }
      ]
    }
  ];


  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across 
            different technologies and tools.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group"
                  >
                    <div className="bg-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/30 hover:border-accent/50 transition-all duration-300 glow-effect h-full shadow-lg">
                      {/* Skill Icon */}
                      <div className="flex items-center justify-center mb-4">
                        <div 
                          className="w-16 h-16 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${skill.color}20` }}
                        >
                          <skill.icon 
                            className="w-8 h-8" 
                            style={{ color: skill.color }}
                          />
                        </div>
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-center font-semibold text-gray-300 mb-3 group-hover:text-white transition-colors">
                        {skill.name}
                      </h4>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Proficiency</span>
                          <span className="text-sm font-semibold text-accent">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-dark/50 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.5, 
                              delay: skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            className="h-2 rounded-full"
                            style={{ 
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                            }}
                          />
                        </div>
                      </div>

                      {/* Skill Level Indicator */}
                      <div className="mt-4 flex justify-center">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < Math.floor(skill.level / 20) 
                                  ? 'bg-accent' 
                                  : 'bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
