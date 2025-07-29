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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.3,
      },
    },
  };

  const linkClasses =
    'text-inherit no-underline visited:text-inherit focus:text-cyan-400 active:text-cyan-400';

  return (
    <>
      <div className="h-20" />

      <div className="fixed top-4 left-0 w-full z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={`flex items-center justify-between px-6 md:px-10 w-[90%] max-w-6xl py-3 rounded-full shadow-md transition-colors duration-300 pointer-events-auto
            ${isScrolled ? 'bg-white/90' : 'bg-black/30'} 
            ${isScrolled ? 'backdrop-blur-sm' : ''}`}
        >
          {/* Logo */}
          <motion.div
            className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'} bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <a href="#Home" className={linkClasses}>CH.dev</a>
          </motion.div>

          {/* Desktop Nav */}
          <motion.ul
            className="hidden md:flex gap-[50px] text-sm font-medium"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {navItems.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                whileHover={{ scale: 1.1, color: '#22d3ee' }}
                whileTap={{ scale: 0.98 }}
                className={`relative cursor-pointer transition-colors duration-200 group ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                <a
  href={`#${item}`}
  className="no-underline transition-colors duration-200"
  style={{ color: isScrolled ? '#111827' : '#ffffff' }} // Tailwind's gray-900 or white
>
  {item}
</a>

                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-200" />
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="md:hidden text-2xl cursor-pointer"
          >
            {isOpen ? (
              <HiX className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <HiOutlineMenuAlt3 className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
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
                  whileHover={{ color: '#22d3ee' }}
                  className="py-2 transition-colors duration-200"
                >
                  <a
                    href={`#${item}`}
                    className={linkClasses}
                  >
                    {item}
                  </a>
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
