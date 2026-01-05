import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import aiImageGenerator from '../assets/projects/ai-image-generator.png';
import chatApp from '../assets/projects/chat-app.png';
import vi from '../assets/projects/vi.png';
import scw from '../assets/projects/school-webs.png';

function Projects() {
  const projects = [
    {
      title: "AI Image Generator",
      description: "A web application that creates custom AI-generated images from user prompts, allowing users to input text and receive unique visuals powered by advanced artificial intelligence models.",
      tags: ["React", "Node.js", "Mongo DB", "ExpressJS", "Clip Drop API", "Cloudinary", "Tailwind CSS"],
      image: aiImageGenerator,
      demoUrl: "https://ai-image-generator-frontend-liard.vercel.app"
    },
    {
      title: "Realtime Chat App",
      description: "A Realtime Chat App that allows users to send and receive messages instantly, share media files, and stay connected with others through a smooth and responsive chat interface.",
      tags: ["React", "Node JS", "Mongo DB", "Express JS", "Tailwind CSS", "Cloudinary"],
      image: chatApp,
      demoUrl: "https://chat-app-frontend-gray.vercel.app/login"
    },
    {
      title: "Virtual Assistant",
      description: "Users can chat with the assistant to get instant answers, perform calculations, fetch weather updates and get helpful suggestions. It supports real-time interaction and is designed for both productivity and fun.",
      tags: ["React", "Express Js", "Node Js", "Mongo DB", "Gemini API", "Cloudinary", "Tailwind CSS"],
      image: vi,
      demoUrl: "https://virtual-assistant-si.vercel.app"
    },
    {
      "title": "School Website",
      "description": "A comprehensive school management platform featuring AI Chatbot, Online Admission, School Information, Certificate Generation System, and others.",
      "tags": ["React", "Node.js", "Express JS", "Mongo DB", "Tailwind CSS", "JWT Auth",],
      "image": scw,
      "demoUrl": "https://gmhsno1.com"
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
