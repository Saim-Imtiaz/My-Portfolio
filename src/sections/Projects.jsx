import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import aiImageGenerator from '../assets/projects/ai-image-generator.png';
import chatApp from '../assets/projects/chat-app.png';
import emp from '../assets/projects/employee-managment-system.png';
import hba from '../assets/projects/hotel-booking-app.png';

function Projects() {
  const projects = [
    {
      title: "AI Image Generator",
      description: "Web application that generates custom AI images based on user prompts",
      tags: ["React", "Node.js", "Mongo DB", "ExpressJS", "Clip Drop API", "Tailwind"],
      image: aiImageGenerator,
      demoUrl: "https://ai-image-generator-frontend-liard.vercel.app"
    },
    {
      title: "Realtime Chat App",
      description: "Realtime Chat App for exchange on messages and media.",
      tags: ["React", "Node JS", "Mongo DB", "Express JS", "Tailwind"],
      image: chatApp,
      demoUrl: "https://chat-app-frontend-gray.vercel.app/login"
    },
    {
      title: "Employee Management System",
      description: "HR system for tracking employee records and performance (Enter email: admin@me.com and password: 123 for admin panel and add email:e@e.com or employee'2,3,4,5'@example.com and passeord:123 for employee panel)",
      tags: ["React", "Tailwind"],
      image: emp,
      demoUrl: "https://employ-managment-system-react.vercel.app"
    },
    {
      title: "Hotel Booking App",
      description: "Platform for browsing and booking hotel rooms.",
      tags: ["React", "Node.js", "Express JS", "Mongo DB", "clerk"],
      image: hba,
      demoUrl: "#"
    }
  ];

  return (
    <section id="Projects" className="py-20 px-5 md:px-[7%] lg:px-[10%] bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            My Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured works. Each project reflects problem-solving and clean code practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all duration-500 bg-gray-800"
            >
              {/* Project Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-sm bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition-all"
                    target='_blank'
                  >
                    <EyeIcon className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
