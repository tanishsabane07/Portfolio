import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'home', label: 'Home', symbol: '{ }' },
    { to: 'about', label: 'About', symbol: '</>' },
    { to: 'projects', label: 'Projects', symbol: '[]' },
    { to: 'contact', label: 'Contact', symbol: '()' },
  ];

  const codeSnippets = [
    'const developer = "Tanish";',
    'function createAwesome() {',
    'return portfolio.build();',
    '}'
  ];

  return (
    <>
      {/* Creative floating navbar */}
      <motion.nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10' 
            : 'bg-black/60 backdrop-blur-lg border border-white/10'
        } rounded-full px-8 py-4`}
        initial={{ y: -100, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 20,
          delay: 0.2 
        }}
        whileHover={{ 
          boxShadow: scrolled 
            ? "0 20px 40px rgba(34, 211, 238, 0.3)" 
            : "0 20px 40px rgba(255, 255, 255, 0.1)" 
        }}
      >
        {/* Animated background dots */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Logo with typing effect */}
        <div className="flex items-center justify-center space-x-8">
          <motion.div 
            className="hidden md:flex items-center space-x-2 text-white font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-green-400">$</span>
            <motion.span
              key={codeSnippets[Math.floor(Date.now() / 3000) % codeSnippets.length]}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              className="text-cyan-300 overflow-hidden whitespace-nowrap"
            >
              {codeSnippets[Math.floor(Date.now() / 3000) % codeSnippets.length]}
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-cyan-400"
            >
              |
            </motion.span>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex items-center space-x-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                className="relative group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={800}
                  className="block cursor-pointer"
                >
                  <motion.div
                    className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-mono text-xs font-bold ${
                      activeSection === link.to
                        ? 'border-cyan-400 bg-cyan-400/20 text-cyan-300 shadow-lg shadow-cyan-400/30'
                        : 'border-white/30 text-white/60 hover:border-cyan-400/50 hover:text-cyan-300'
                    }`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.symbol}
                    
                    {/* Animated ring on active */}
                    {activeSection === link.to && (
                      <motion.div
                        className="absolute inset-0 border-2 border-cyan-400 rounded-full"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ 
                          scale: [1, 1.5, 1], 
                          opacity: [1, 0, 1] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity 
                        }}
                      />
                    )}
                  </motion.div>
                </Link>

                {/* Tooltip */}
                <motion.div
                  className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-black/90 text-cyan-300 px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                  initial={{ y: -5 }}
                  whileHover={{ y: 0 }}
                >
                  {link.label}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-black/90" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Terminal-style mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 bg-black/80 border border-green-400 rounded text-green-400 font-mono text-xs flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              boxShadow: isOpen 
                ? "0 0 20px rgba(34, 197, 94, 0.5)" 
                : "0 0 0px rgba(34, 197, 94, 0)" 
            }}
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? '×' : '≡'}
            </motion.span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Creative mobile menu - Terminal style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-black/95 backdrop-blur-xl border border-green-400/50 rounded-xl p-6 shadow-2xl shadow-green-400/10 font-mono">
              {/* Terminal header */}
              <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-green-400/30">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm ml-2">tanish@portfolio:~$</span>
              </div>

              {/* Terminal content */}
              <div className="space-y-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={800}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 text-green-400 hover:text-cyan-300 transition-colors cursor-pointer py-2"
                    >
                      <span className="text-white">$</span>
                      <span>cd ./{link.to}</span>
                      <span className="text-white/50 text-xs"># {link.label}</span>
                      <motion.span
                        className="opacity-0 group-hover:opacity-100 text-cyan-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Terminal cursor */}
                <div className="flex items-center space-x-2 pt-2">
                  <span className="text-green-400">$</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-cyan-400"
                  >
                    |
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;