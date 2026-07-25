import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  { name: 'C++', color: 'bg-[#CCFF00]' },
  { name: 'Python', color: 'bg-[#FF3CAC]' },
  { name: 'TypeScript', color: 'bg-[#00B4FF]' },
  { name: 'React', color: 'bg-[#D7AAFF]' },
  { name: 'Node.js', color: 'bg-[#FFE500]' },
  { name: 'Three.js', color: 'bg-[#CCFF00]' },
  { name: 'Docker', color: 'bg-[#FF3CAC]' },
  { name: 'PostgreSQL', color: 'bg-[#00B4FF]' },
  { name: 'Physics Simulations', color: 'bg-[#D7AAFF]' },
  { name: 'System Design', color: 'bg-[#FFE500]' },
];

const PROJECTS = [
  {
    title: 'NeuralSim',
    description: 'Python neural network simulator built from scratch to visualize node activations.',
    stack: ['Python', 'NumPy', 'Matplotlib'],
    color: 'bg-[#FF3CAC]',
  },
  {
    title: 'OSKernel',
    description: 'Minimal OS kernel displaying custom hardware interrupts and memory mapping.',
    stack: ['C++', 'NASM', 'QEMU'],
    color: 'bg-[#00B4FF]',
  },
  {
    title: 'QuantumVis',
    description: 'Interactive quantum state visualizer simulating quantum gates in 3D.',
    stack: ['TypeScript', 'Three.js', 'React'],
    color: 'bg-[#CCFF00]',
  },
  {
    title: 'GraphFlow',
    description: 'Algorithm visualization platform for traversing complex graph networks.',
    stack: ['React', 'Node.js', 'Express'],
    color: 'bg-[#D7AAFF]',
  },
];

export default function ColorfulNeubrutalism() {
  return (
    <div className="min-h-[100dvh] bg-[#FAFAFA] font-['Space_Grotesk',sans-serif] text-black overflow-hidden selection:bg-[#CCFF00]">
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Space+Grotesk:wght@400;700;800&display=swap');
      `}} />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#CCFF00] border-b-[3px] border-black px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-[800] uppercase tracking-tighter border-[3px] border-black bg-white px-3 py-1 shadow-[4px_4px_0px_#000]"
        >
          Alex
        </motion.div>
        
        <div className="hidden md:flex gap-8 font-bold text-lg">
          {['About', 'Skills', 'Projects', 'Timeline', 'Contact'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:underline decoration-[3px] underline-offset-4">
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-[90vh] flex flex-col justify-center items-start px-6 md:px-20 py-20 relative border-b-[3px] border-black">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#FFE500] border-[3px] border-black shadow-[6px_6px_0px_#000] hidden md:block rounded-full" />
        <div className="absolute bottom-32 left-10 w-24 h-24 bg-[#00B4FF] border-[3px] border-black shadow-[6px_6px_0px_#000] hidden md:block" />

        <div className="max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-[#FF3CAC] text-white px-4 py-2 border-[3px] border-black text-xl font-bold shadow-[4px_4px_0px_#000] mb-6">
              HELLO WORLD
            </span>
            <h1 className="text-6xl md:text-8xl font-[800] leading-none tracking-tight mb-8">
              I'm Alex. <br />
              <span className="relative inline-block mt-4">
                <span className="relative z-10">Bridging the gap between</span>
                <span className="absolute bottom-2 left-0 w-full h-8 bg-[#00B4FF] -z-10 border-[3px] border-black"></span>
              </span><br />
              physics and code.
            </h1>
            <p className="text-xl md:text-3xl font-bold max-w-3xl mb-12 bg-white inline-block p-4 border-[3px] border-black shadow-[5px_5px_0px_#000]">
              Software Engineer & Computer Engineering Student.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <button className="bg-[#CCFF00] border-[3px] border-black px-8 py-4 text-xl font-[800] shadow-[5px_5px_0px_#000] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all uppercase">
              View Projects
            </button>
            <button className="bg-[#D7AAFF] border-[3px] border-black px-8 py-4 text-xl font-[800] shadow-[5px_5px_0px_#000] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all uppercase">
              Contact Me
            </button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-[#FF6D00] py-24 px-6 md:px-20 border-b-[3px] border-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-[800] mb-12 text-black bg-white inline-block px-6 py-2 border-[3px] border-black shadow-[6px_6px_0px_#000] uppercase"
          >
            Toolkit
          </motion.h2>
          
          <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`${skill.color} border-[3px] border-black px-6 py-3 text-xl md:text-2xl font-[800] shadow-[5px_5px_0px_#000] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all`}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-20 bg-[#FAFAFA] border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-[800] mb-16 text-black bg-[#CCFF00] inline-block px-6 py-2 border-[3px] border-black shadow-[6px_6px_0px_#000] uppercase"
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${project.color} border-[3px] border-black p-8 shadow-[8px_8px_0px_#000] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all flex flex-col group cursor-pointer`}
              >
                <div className="bg-white border-[3px] border-black p-4 mb-6 shadow-[4px_4px_0px_#000] self-start group-hover:-translate-y-2 transition-transform">
                  <h3 className="text-3xl font-[800]">{project.title}</h3>
                </div>
                
                <p className="text-xl font-bold bg-white/80 border-[3px] border-black p-4 mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.stack.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-black text-white px-3 py-1 text-sm font-['JetBrains_Mono',monospace] font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-4xl font-[800] tracking-tighter text-[#CCFF00] uppercase border-[3px] border-[#CCFF00] px-4 py-2 hover:bg-[#CCFF00] hover:text-black transition-colors cursor-pointer">
            Alex.dev
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xl font-bold">
            <a href="#about" className="text-[#FF3CAC] hover:underline decoration-[3px] underline-offset-4">About</a>
            <a href="#skills" className="text-[#00B4FF] hover:underline decoration-[3px] underline-offset-4">Skills</a>
            <a href="#projects" className="text-[#CCFF00] hover:underline decoration-[3px] underline-offset-4">Projects</a>
            <a href="#timeline" className="text-[#D7AAFF] hover:underline decoration-[3px] underline-offset-4">Timeline</a>
            <a href="#contact" className="text-[#FFE500] hover:underline decoration-[3px] underline-offset-4">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
