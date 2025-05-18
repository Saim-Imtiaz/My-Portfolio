import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // Use passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Simplified variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05, // Reduced stagger time
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 }, // Reduced movement
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'tween', // Changed to tween for better performance
        ease: 'easeOut',
        duration: 0.3
      } 
    },
  };

  return (
    <>
      <div className="h-20" />

      {/* Fixed Navbar */}
      <div className="fixed top-4 left-0 w-full z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={`flex items-center justify-between px-6 md:px-10 w-[90%] max-w-6xl py-3 rounded-full shadow-md transition-colors duration-300 pointer-events-auto
            ${isScrolled ? 'bg-white/90' : 'bg-black/30'} 
            ${isScrolled ? 'backdrop-blur-sm' : ''}`} // Reduced blur when scrolled
        >
          {/* Logo or Brand */}
          <motion.div
            className={`text-lg font-bold ${isScrolled ? 'text-gray-900' : 'text-white'} bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <a href="#Home">CH.dev</a>
          </motion.div>

          {/* Desktop Nav */}
          <motion.ul
            className="hidden md:flex gap-6 text-sm font-medium" // Reduced gap
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {navItems.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                whileHover={{ scale: 1.1, color: '#22d3ee' }} // Simplified hover
                whileTap={{ scale: 0.98 }} // Reduced tap effect
                className={`relative cursor-pointer transition-colors duration-200 
                  ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              >
                <a href={`#${item}`}>{item}</a>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-200" />
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Toggle Button */}
          <div className="md:hidden text-2xl cursor-pointer">
            {isOpen ? (
              <HiX onClick={toggleMenu} className={`${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <HiOutlineMenuAlt3 onClick={toggleMenu} className={`${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu - Simplified */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-20 left-0 w-full bg-[#101828] z-40 py-6 md:hidden rounded-b-3xl shadow-xl overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.25 }}
          >
            <ul className="flex flex-col items-center gap-4 text-white text-base font-medium">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
                  whileHover={{ color: '#22d3ee' }} // Removed scale on hover
                  className="py-2 transition-colors duration-200"
                >
                  <a href={`#${item}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;