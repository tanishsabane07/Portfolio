import React from 'react';
import { motion } from 'framer-motion';

const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Space+Grotesk:wght@400;700;800&display=swap');
    
    .font-space {
      font-family: 'Space Grotesk', sans-serif;
    }
    .font-mono {
      font-family: 'JetBrains Mono', monospace;
    }
  `}</style>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Github = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ExternalLink = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const skills = [
  "C++", "Python", "TypeScript", "React", "Node.js", "Three.js", 
  "Docker", "PostgreSQL", "Physics Simulations", "System Design"
];

const projects = [
  {
    title: "NeuralSim",
    description: "Python neural network simulator built from scratch to visualize deep learning concepts.",
    tags: ["Python", "NumPy", "Matplotlib"]
  },
  {
    title: "OSKernel",
    description: "Minimal OS kernel written in C++ and Assembly. Implements basic memory management and interrupts.",
    tags: ["C++", "NASM", "QEMU"]
  },
  {
    title: "QuantumVis",
    description: "Quantum state visualizer running entirely in the browser using WebGL.",
    tags: ["TypeScript", "Three.js", "React"]
  },
  {
    title: "GraphFlow",
    description: "Algorithm visualization platform for real-time graph traversal exploration.",
    tags: ["React", "Node.js", "Express"]
  }
];

export default function ClassicNeubrutalism() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#FFE500] selection:text-black overflow-x-hidden">
      <FontStyles />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="bg-[#FFE500] border-[3px] border-black shadow-[4px_4px_0px_0px_#000] px-4 py-1 flex items-center justify-center transform transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] cursor-pointer">
            <span className="font-space font-extrabold text-xl tracking-tight uppercase">Alex.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-mono font-bold text-lg">
            {["About", "Skills", "Projects", "Timeline", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="relative group">
                <span className="relative z-10 hover:-translate-y-1 inline-block transition-transform duration-200">
                  {link}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-[100dvh] pt-20 flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8 space-y-8"
            >
              <div className="inline-block bg-[#FFE500] border-[3px] border-black shadow-[6px_6px_0px_0px_#000] p-4 md:p-8">
                <h1 className="font-space text-6xl md:text-8xl font-[800] leading-none uppercase tracking-tighter">
                  Hi, I'm Alex.
                </h1>
              </div>
              
              <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] p-6 max-w-2xl">
                <p className="font-mono text-xl md:text-2xl font-bold leading-relaxed">
                  Software Engineer & Computer Engineering Student. Bridging the gap between physics and code.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <button className="bg-[#FFE500] border-[3px] border-black shadow-[6px_6px_0px_0px_#000] px-8 py-4 font-space font-bold text-xl uppercase tracking-wider flex items-center gap-3 transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none">
                  View Projects <ArrowRight />
                </button>
                <button className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] px-8 py-4 font-space font-bold text-xl uppercase tracking-wider flex items-center gap-3 transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none">
                  Contact Me
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4 hidden lg:block"
            >
              {/* Decorative graphic for hero */}
              <div className="relative aspect-square w-full max-w-md ml-auto">
                <div className="absolute inset-0 bg-[#FF6B6B] border-[3px] border-black shadow-[8px_8px_0px_0px_#000] transform translate-x-4 translate-y-4"></div>
                <div className="absolute inset-0 bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between p-6">
                  <div className="flex justify-between items-center border-b-[3px] border-black pb-4">
                    <div className="flex gap-2">
                      <div className="w-4 h-4 bg-black"></div>
                      <div className="w-4 h-4 bg-black"></div>
                      <div className="w-4 h-4 bg-black"></div>
                    </div>
                    <span className="font-mono font-bold text-xl">SYS.INIT</span>
                  </div>
                  <div className="flex-1 py-4 flex flex-col justify-center gap-4 font-mono font-bold text-lg">
                    <div>{">"} SYSTEM BOOT</div>
                    <div>{">"} LOADING MODULES...</div>
                    <div className="text-[#FF6B6B]">{">"} PHYSICS_ENGINE: OK</div>
                    <div className="text-[#FFE500]">{">"} ALGORITHM_CORE: OK</div>
                    <div>{">"} RENDER STATUS: READY</div>
                    <div className="animate-pulse">{">"} _</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-[3px] bg-black"></div>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative overflow-hidden">
        {/* Background decorative pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5" 
             style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-12">
              <h2 className="font-space text-5xl md:text-7xl font-[800] uppercase tracking-tighter bg-white pr-4">
                Tech Arsenal
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-[#FF6B6B] border-[3px] border-black shadow-[4px_4px_0px_0px_#000] px-6 py-3 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] cursor-default"
                >
                  <span className="font-mono text-xl font-bold whitespace-nowrap">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-[3px] bg-black"></div>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#FFE500]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-space text-5xl md:text-7xl font-[800] uppercase tracking-tighter inline-block bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] px-6 py-2">
              Featured Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] group transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_#000] flex flex-col h-full"
              >
                {/* Project Header */}
                <div className="border-b-[3px] border-black p-4 flex justify-between items-center bg-[#FFE500]">
                  <h3 className="font-space font-extrabold text-2xl uppercase tracking-tight">{project.title}</h3>
                  <div className="flex gap-3">
                    <button className="p-1 hover:bg-white border-[2px] border-transparent hover:border-black transition-colors">
                      <Github />
                    </button>
                    <button className="p-1 hover:bg-white border-[2px] border-transparent hover:border-black transition-colors">
                      <ExternalLink />
                    </button>
                  </div>
                </div>
                
                {/* Project Body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between gap-6">
                  <p className="font-mono text-lg font-bold leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono text-sm font-bold bg-white border-[2px] border-black px-3 py-1 shadow-[2px_2px_0px_0px_#000]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-[3px] bg-black"></div>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
            <div>
              <div className="bg-[#FFE500] text-black border-[3px] border-black shadow-[4px_4px_0px_0px_#fff] px-4 py-2 inline-block mb-6 transform transition-transform hover:-translate-y-1">
                <span className="font-space font-extrabold text-3xl tracking-tight uppercase">Alex.</span>
              </div>
              <p className="font-mono font-bold text-lg max-w-sm text-gray-300">
                Building systems from the ground up, one line of code at a time.
              </p>
            </div>
            
            <div className="flex flex-col md:text-right gap-4 font-mono font-bold text-lg">
              <a href="#" className="hover:text-[#FFE500] transition-colors flex items-center md:justify-end gap-2 group">
                <span className="group-hover:-translate-x-2 transition-transform">GitHub</span> <ArrowRight />
              </a>
              <a href="#" className="hover:text-[#FFE500] transition-colors flex items-center md:justify-end gap-2 group">
                <span className="group-hover:-translate-x-2 transition-transform">LinkedIn</span> <ArrowRight />
              </a>
              <a href="#" className="hover:text-[#FFE500] transition-colors flex items-center md:justify-end gap-2 group">
                <span className="group-hover:-translate-x-2 transition-transform">Twitter</span> <ArrowRight />
              </a>
            </div>
          </div>
          
          <div className="border-t-[3px] border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono font-bold text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Alex. All rights reserved.</p>
            <p>Designed with intense brutalism.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}