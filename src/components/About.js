import React from 'react';
import { FaCode, FaPalette, FaRocket, FaGraduationCap, FaAward } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: FaCode, level: 90 },
    { name: 'UI/UX Design', icon: FaPalette, level: 85 },
    { name: 'Mobile Development', icon: FaRocket, level: 80 },
    { name: 'Backend Development', icon: FaCode, level: 75 },
  ];

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '9+', label: 'GitHub Repositories' },
    { number: '25+', label: 'Certifications' },
    { number: '500+', label: 'LinkedIn Connections' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 dark:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 dark:bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Stats Only */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white/10 dark:bg-dark/50 rounded-xl border border-primary/20 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm Gowsika Suren, a passionate web developer and SLIIT undergraduate pursuing BSc (Hons) 
                  in Software Engineering. I specialize in full-stack development with expertise in MERN stack, 
                  React.js, and modern web technologies.
                </p>
                <p>
                  My journey in software engineering began at SLIIT, where I've been developing comprehensive 
                  applications ranging from Java desktop applications to modern web-based systems and Android 
                  mobile applications. I'm passionate about creating user-centered digital experiences that 
                  make a real difference.
                </p>
                <p>
                  I'm currently open to work and seeking opportunities as a Software Engineer, Software Programmer, 
                  Software Developer, Java Software Engineer, or Java Software Developer. When I'm not coding, 
                  you can find me learning new technologies, completing online courses, or contributing to 
                  open-source projects.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent">Core Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="w-5 h-5 text-accent" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-accent font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark/50 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 bg-gradient-to-r from-primary to-accent rounded-full glow-effect"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/10 dark:bg-dark/50 rounded-xl border border-primary/20 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <FaGraduationCap className="w-6 h-6 text-accent" />
                  <h4 className="text-lg font-semibold text-accent">Education</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Bachelor's in Computer Science with focus on Software Engineering and 
                  Human-Computer Interaction.
                </p>
              </div>
              
              <div className="p-6 bg-white/10 dark:bg-dark/50 rounded-xl border border-primary/20 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <FaAward className="w-6 h-6 text-accent" />
                  <h4 className="text-lg font-semibold text-accent">Achievements</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Multiple certifications in web development, UI/UX design, and cloud technologies. 
                  Active contributor to open-source projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;