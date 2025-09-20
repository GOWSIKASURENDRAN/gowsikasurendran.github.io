import React from 'react';
import { FaCode, FaPalette, FaRocket, FaDownload } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: FaCode, level: 90 },
    { name: 'UI/UX Design', icon: FaPalette, level: 85 },
    { name: 'Mobile Development', icon: FaRocket, level: 80 },
    { name: 'Backend Development', icon: FaCode, level: 75 },
  ];

  const stats = [
    { number: '3.71', label: 'CGPA' },
    { number: '9+', label: 'GitHub Repositories' },
    { number: '25+', label: 'Certifications' },
    { number: '1000+', label: 'LinkedIn Connections' },
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
                  I'm Gowsika Surendran, an aspiring Data Science Specialist passionate about turning data into actionable insights. 
                  My interests span data analysis, visualization, machine learning, and predictive modeling, with hands-on experience 
                  in Python, SQL, and data-driven problem solving.
                </p>
                <p>
                  I'm continuously learning and building projects to strengthen my expertise, while exploring how data science can 
                  create impact in areas like business, healthcare, and technology.
                </p>
                <p>
                  Outside of academics, I enjoy exploring new digital tools, keeping up with emerging tech trends, and sharing 
                  knowledge with others.
                </p>
                <p>
                  🌍 This site is my space to share my journey, projects, and growth in the world of data science.
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


            {/* CV Download Section */}
            <div className="mt-8 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20 hover:border-accent/50 transition-all duration-300">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-accent mb-2">Want to know more?</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
                  Download my detailed CV to see my complete experience, skills, and achievements.
                </p>
                <div className="pt-2">
                  <a
                    href="/Gowsika_Surendran_CV.pdf"
                    download="Gowsika_Surendran_CV.pdf"
                    className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
                  >
                    <FaDownload className="w-5 h-5" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;