# Gowsika Surendan - Portfolio Website

A modern, interactive 3D portfolio website built with React.js, featuring stunning animations, responsive design, and a professional showcase of skills and projects.

## 🚀 Features

- **Modern 3D Design**: Beautiful 3D animations and effects using Framer Motion
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Interactive Components**: Smooth animations, hover effects, and transitions
- **Dark/Light Theme**: Toggle between dark and light modes
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Detailed project cards with modals
- **Skills Display**: Interactive skills section with progress bars
- **Certificates**: Professional certifications showcase
- **Smooth Scrolling**: Seamless navigation between sections

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Router** - Client-side routing
- **EmailJS** - Contact form handling

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gowsikasurendan2002/gowsika-portfolio.git
   cd gowsika-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

- **Contact Details**: `src/components/Contact.js`
- **About Section**: `src/components/About.js`
- **Hero Section**: `src/components/Hero.js`
- **Footer**: `src/components/Footer.js`

### Projects
Add your projects in `src/components/Projects.js`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    live: 'https://yourproject.com',
    // ... other properties
  }
];
```

### Skills
Update your skills in `src/components/Skills.js`:

```javascript
const skillCategories = [
  {
    title: 'Your Category',
    skills: [
      { name: 'Skill Name', level: 90, color: '#color' }
    ]
  }
];
```

### Certificates
Add your certificates in `src/components/Certificates.js`:

```javascript
const certificates = [
  {
    title: 'Certificate Title',
    issuer: 'Issuing Organization',
    date: '2023',
    // ... other properties
  }
];
```

## 🚀 Deployment

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to Pages section
   - Select source as "GitHub Actions" or "Deploy from a branch"
   - Choose the `gh-pages` branch

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🎯 Performance Optimization

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Optimized bundle sizes
- **Smooth Animations**: 60fps animations using Framer Motion
- **Optimized Images**: Compressed and responsive images
- **SEO Ready**: Meta tags and semantic HTML

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the configuration in `src/components/Contact.js`

### Theme Customization

Update colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1e40af',    // Your primary color
      accent: '#ffd700',     // Your accent color
      dark: '#0f172a',       // Your dark color
      light: '#f8fafc',      // Your light color
    }
  }
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Gowsika Surendan**
- Email: gowsikasurendan2002@gmail.com
- Phone: +94 77 225 5058
- LinkedIn: [linkedin.com/in/gowsika-surendan](https://linkedin.com/in/gowsika-surendan)
- GitHub: [github.com/gowsikasurendan2002](https://github.com/gowsikasurendan2002)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

⭐ **Star this repository if you found it helpful!**
