import React from 'react';
import { Github, Linkedin, Mail, Moon, ExternalLink } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:zakariasisu5@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 min-h-screen">
        {/* Navbar */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold dark:text-white">Portfolio</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <a href="#home" className="dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Home</a>
                  <a href="#about" className="dark:text-white hover:text-gray-600 dark:hover:text-gray-300">About</a>
                  <a href="#skills" className="dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Skills</a>
                  <a href="#projects" className="dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Projects</a>
                  <a href="#contact" className="dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Contact</a>
                  <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
                    <Moon className="h-5 w-5 dark:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
                  Hi, I'm Zakaria Sisu —  Full Stack Developer , Cloud engineer and problem solver
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  I craft efficient, scalable, and modern web solutions.
                </p>
                <div className="flex gap-4">
                  <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    View My Projects
                  </a>
                  <a href="#contact" className="border border-blue-600 text-blue-600 dark:text-white px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    Contact Me
                  </a>
                </div>
                <div className="flex gap-4 mt-8">
                  <a href="https://github.com/Zakariasisu5" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6 dark:text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/mr-zakaria-sisu-9b2486239" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 dark:text-white" />
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Developer workspace"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">About Me</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                As a Software Engineer and Full Stack Developer, I specialize in building modern web applications
                that solve real-world problems. My expertise spans across the entire development stack, from
                crafting intuitive user interfaces to designing robust backend systems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm particularly proud of my work on FlockSmart, a comprehensive poultry management system,
                and Ecocompanion, a web application promoting sustainable living practices. These projects
                showcase my commitment to creating impactful solutions that make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 dark:text-white">Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SkillCategory 
                title="Languages" 
                skills={["JavaScript", "Python", "TypeScript"]}
                darkMode={darkMode}
              />
              <SkillCategory 
                title="Frontend" 
                skills={["React", "Next.js", "HTML", "CSS", "Tailwind"]}
                darkMode={darkMode}
              />
              <SkillCategory 
                title="Backend" 
                skills={["Node.js", "Express", "PostgreSQL", "Firebase"]}
                darkMode={darkMode}
              />
              <SkillCategory 
                title="Tools" 
                skills={["Git", "Docker", "Vercel", "Firebase"]}
                darkMode={darkMode}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 dark:text-white">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard 
                title="Secure Watcher Sentinel"
                description="Advanced security monitoring and surveillance system."
                image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                liveUrl="https://securewatcher-sentinel.vercel.app/"
                techStack={["React", "Node.js", "WebRTC"]}
                darkMode={darkMode}
              />
              <ProjectCard 
                title="TTFPP at UDS"
                description="Educational pathway planning and tracking system."
                image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                liveUrl="https://udsttfpppathwavegh.vercel.app/"
                techStack={["Next.js", "TypeScript", "Tailwind"]}
                darkMode={darkMode}
              />
              <ProjectCard 
                title="FlockSmart"
                description="Efficient poultry management app with real-time tracking & data insights."
                image="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                liveUrl="https://flocksmart.vercel.app/"
                githubUrl="https://github.com/Zakariasisu5/flocksmart"
                techStack={["React", "Node.js", "PostgreSQL"]}
                darkMode={darkMode}
              />
              <ProjectCard 
                title="Ecocompanion"
                description="Green-living companion web app promoting eco-friendly habits."
                image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                liveUrl="https://green-living-companion.vercel.app/"
                techStack={["Next.js", "Firebase", "Tailwind CSS"]}
                darkMode={darkMode}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 dark:text-white">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  I'm always interested in hearing about new projects and opportunities.
                  Feel free to reach out!
                </p>
                <div className="flex flex-col gap-4">
                  <a 
                    href="mailto:zakariasisu5@gmail.com"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Mail className="h-5 w-5" />
                    zakariasisu5@gmail.com
                  </a>
                  <a 
                    href="https://github.com/Zakariasisu5"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mr-zakaria-sisu-9b2486239"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 dark:text-gray-300">
                © 2024 Zakaria Sisu. All rights reserved.
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Home
                </a>
                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Projects
                </a>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function SkillCategory({ title, skills, darkMode }: { title: string; skills: string[]; darkMode: boolean }) {
  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h3 className="text-xl font-bold mb-4 dark:text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ 
  title, 
  description, 
  image, 
  githubUrl, 
  liveUrl, 
  techStack,
  darkMode
}: { 
  title: string; 
  description: string; 
  image: string; 
  githubUrl?: string; 
  liveUrl?: string; 
  techStack: string[];
  darkMode: boolean;
}) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="h-5 w-5" />
              View Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ExternalLink className="h-5 w-5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
