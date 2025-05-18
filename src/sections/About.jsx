import { motion } from "framer-motion";
import Navbar from '../components/Navbar';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5 
    } 
  }
};

const gradientText = {
  hidden: { backgroundPosition: '0% 50%' },
  show: { 
    backgroundPosition: '100% 50%',
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear"
    }
  }
};

function About() {
  return (
    <div id="About" className="w-full text-white px-5 md:px-[7%] lg:px-[10%] relative z-5 min-h-screen">
      <motion.div 
        className="max-w-4xl mx-auto py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.div className="text-center mb-16" variants={item}>
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-6"
            variants={gradientText}
            style={{
              backgroundImage: 'linear-gradient(90deg, #24b5d9, #2d30df, #24b5d9)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            About Me
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-[#24b5d9] to-[#2d30df] mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <motion.div 
          className="space-y-8 text-gray-300 text-lg leading-relaxed"
          variants={container}
        >
          <motion.p 
            className="text-center text-xl"
            variants={item}
            viewport={{ once: true }}
          >
            I help <span className="text-[#24b5d9] font-medium">business owners</span> and <span className="text-[#24b5d9] font-medium">developers</span> transform visions into websites that captivate and convert.
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 mt-12"
            variants={container}
          >
            <motion.div 
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#24b5d9]/30 transition-all duration-300"
              variants={item}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#24b5d9] text-xl font-medium mb-3">Strategic Development</h3>
              <p>
                Building with purpose - every line of code serves your business goals and enhances user engagement.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#24b5d9]/30 transition-all duration-300"
              variants={item}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#24b5d9] text-xl font-medium mb-3">Visitor-Centric Design</h3>
              <p>
                Creating interfaces that don't just look good, but guide visitors to take meaningful actions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            variants={item}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-block px-8 py-4 border border-[#24b5d9]/30 rounded-full"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-sm tracking-widest text-[#24b5d9]">MY APPROACH</p>
              <p className="mt-2 italic">
                "Performance, conversion, and retention - the pillars of effective digital products"
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            variants={item}
            viewport={{ once: true }}
          >
            <motion.a
              href="#Contact"
              className="inline-block bg-gradient-to-r from-[#24b5d9] to-[#2d30df] text-white py-3 px-8 rounded-lg hover:from-[#2d30df] hover:to-[#24b5d9] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Build Something Remarkable
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;