import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiRedux } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500", bg: "bg-orange-100" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500", bg: "bg-blue-100" },
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400", bg: "bg-yellow-100" },
  { icon: <FaReact />, name: "React", color: "text-cyan-400", bg: "bg-cyan-100" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-500", bg: "bg-cyan-100" },
  { icon: <FaGitAlt />, name: "Git", color: "text-red-500", bg: "bg-red-100" },
  { icon: <FaGithub />, name: "GitHub", color: "text-gray-800", bg: "bg-gray-200" },
  { icon: <SiFigma />, name: "Figma", color: "text-purple-500", bg: "bg-purple-100" },
  { icon: <SiRedux />, name: "Redux Toolkit", color: "text-purple-400", bg: "bg-purple-100" },
];

const Skills = () => {
  return (
    <section id="Skills" className="py-20 px-5 md:px-[7%] lg:px-[10%] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#24b5d9] to-[#2d30df]"
        >
          My Skills
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg"
        >
          Tools & technologies I use to create modern, clean & high-performance web experiences
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "tween",
                ease: "easeOut",
                duration: 0.5,
                delay: index * 0.05
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center p-5 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
            >
              {/* Icon Circle */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${skill.bg}`}
              >
                <div className={`text-3xl ${skill.color}`}>{skill.icon}</div>
              </motion.div>

              {/* Skill Name */}
              <h3 className="text-md font-semibold text-gray-800">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Footer Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#24b5d9]/10 to-[#2d30df]/10 border border-[#24b5d9]/20 rounded-full px-6 py-3">
            <p className="text-gray-700 font-medium text-sm sm:text-base">
              Also experienced with: <span className="text-[#24b5d9] font-semibold">Framer Motion, Responsive Design, UI/UX Principles</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;