import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';
import linkedinIcon from '../assets/linkedin.png';
import whatsappIcon from '../assets/whatsapp.png';
import githubIcon from '../assets/github.png';
import emailIcon from '../assets/email.png';
import CV from '/Resume.pdf';

function Home() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, x: 20 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div
      id='Home'
      className="w-full overflow-x-hidden text-white px-5 md:px-[7%] lg:px-[10%] relative z-10 min-h-screen"
    >
      <Navbar />

      <motion.div
        className="flex flex-col-reverse sm:flex-row justify-center items-center gap-8 sm:gap-12 mt-16 sm:mt-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Left Column: Text Content */}
        <motion.div
          className="w-full sm:w-1/2 text-center sm:text-left"
          variants={container}
        >
          <motion.h1
            className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight mb-2 animate-gradient"
            variants={item}
          >
            Saim Imtiaz
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl font-light text-gray-300 mb-4"
            variants={item}
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg mx-auto sm:mx-0"
            variants={item}
          >
            I build modern, responsive web applications with React and Tailwind CSS.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center sm:justify-start"
            variants={item}
          >
            <motion.a
              href={CV}
              download="Saim_Imtiaz_Resume.pdf"
              className="bg-gradient-to-r from-[#24b5d9] to-[#2d30df] text-white py-3 px-8 rounded-lg hover:from-[#2d30df] hover:to-[#24b5d9] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Animated Logo */}
        <motion.div
          className="w-full sm:w-1/2 flex justify-center relative"
          variants={logoVariants}
          initial="hidden"
          animate="show"
        >
          <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]">
            <motion.img
              src={logo}
              alt="Saim Imtiaz Logo"
              className="w-full h-full object-contain logo-3d-glow"
              whileHover={{ rotate: 5 }}
            />
            <div className="absolute inset-0 rounded-full bg-[#00cccc]/20 blur-xl -z-10 animate-pulse" />
          </div>
        </motion.div>
      </motion.div>

      {/* Social Links (Right Sidebar) */}
      <motion.div
        className="hidden md:flex flex-col fixed right-4 md:right-6 top-1/2 transform -translate-y-1/2 space-y-6 p-3 rounded-full z-50"
        initial="hidden"
        animate="show"
      >
        {[
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/saim-imtiaz-127648348/", alt: "LinkedIn" },
          { icon: whatsappIcon, url: "https://wa.me/923019377152", alt: "WhatsApp" },
          { icon: githubIcon, url: "https://github.com/Saim-Imtiaz", alt: "GitHub" },
          { icon: emailIcon, url: "mailto:itssaimofficial.web@gmail.com", alt: "Email" }
        ].map((social, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-sm p-2 rounded-full"
            custom={i}
            variants={socialVariants}
            whileHover={{ scale: 1.1 }}
          >
            <a href={social.url} target="_blank" rel="noreferrer">
              <img
                src={social.icon}
                className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300"
                alt={social.alt}
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Home;
