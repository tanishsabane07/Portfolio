import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal, Cpu, Code2, Database, Mail, Linkedin } from 'lucide-react';

export default function DarkNeubrutalismPortfolio() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-space selection:bg-[#00E5FF] selection:text-[#0A0A0A]">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Space+Grotesk:wght@400;700;800&display=swap');
        
        .font-space { font-family: 'Space Grotesk', sans-serif; }
        .font-mono-custom { font-family: 'JetBrains Mono', monospace; }
        
        /* Hide scrollbar for cleaner look, optional */
        ::-webkit-scrollbar {
          width: 12px;
          background: #0A0A0A;
          border-left: 3px solid #00E5FF;
        }
        ::-webkit-scrollbar-thumb {
          background: #00E5FF;
          border: 3px solid #0A0A0A;
        }
      `}} />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b-[3px] border-[#00E5FF] px-6 py-4 flex justify-between items-center">
        <div className="text-[#00E5FF] border-[3px] border-[#00E5FF] shadow-[4px_4px_0px_#00E5FF] px-3 py-1 font-mono-custom font-bold text-xl uppercase tracking-tighter hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#00E5FF] transition-all cursor-pointer bg-[#0A0A0A]">
          ALEX.SYS
        </div>
        <div className="hidden md:flex gap-8 font-mono-custom font-bold text-sm text-[#AAAAAA]">
          {['About', 'Skills', 'Projects', 'Timeline', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#00E5FF] transition-colors relative group uppercase">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#00E5FF] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <button className="md:hidden text-[#00E5FF] border-[3px] border-[#00E5FF] p-2 shadow-[4px_4px_0px_#00E5FF]">
          <Terminal size={24} />
        </button>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 relative overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl z-10"
        >
          <div className="inline-block border-[3px] border-[#B347FF] bg-[#0A0A0A] text-[#B347FF] shadow-[4px_4px_0px_#B347FF] px-4 py-2 font-mono-custom font-bold text-sm uppercase mb-8 transform -rotate-2">
            Status: Initializing System...
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase leading-[0.9] tracking-tighter mb-6">
            Hi, I'm <br className="md:hidden"/>
            <span className="relative inline-block">
              <span className="relative z-10 text-white">Alex</span>
              <span className="absolute bottom-1 md:bottom-3 left-0 w-full h-[12px] md:h-[24px] bg-[#00E5FF] -z-10 transform -rotate-1"></span>
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-[#AAAAAA] font-space font-bold max-w-3xl mb-12 leading-tight border-l-[6px] border-[#B347FF] pl-6 py-2">
            Software Engineer & Computer Engineering Student.<br/>
            <span className="text-white">Bridging the gap between physics and code.</span>
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a href="#projects" className="inline-flex items-center gap-2 bg-[#00E5FF] text-[#0A0A0A] border-[3px] border-[#00E5FF] px-8 py-4 font-mono-custom font-bold text-lg uppercase shadow-[6px_6px_0px_#B347FF] hover:shadow-[2px_2px_0px_#B347FF] hover:translate-x-[4px] hover:translate-y-[4px] transition-all active:shadow-none active:translate-x-[6px] active:translate-y-[6px]">
              <Terminal size={20} />
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#0A0A0A] text-[#00E5FF] border-[3px] border-[#00E5FF] px-8 py-4 font-mono-custom font-bold text-lg uppercase shadow-[6px_6px_0px_#00E5FF] hover:shadow-[2px_2px_0px_#00E5FF] hover:translate-x-[4px] hover:translate-y-[4px] transition-all active:shadow-none active:translate-x-[6px] active:translate-y-[6px]">
              <Mail size={20} />
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 md:px-20 bg-[#111111] border-y-[3px] border-[#00E5FF]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase mb-16 text-white tracking-tighter flex items-center gap-6">
            <span className="text-[#00E5FF]">{'//'}</span> Core Stack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Languages", icon: <Code2 className="text-[#00E5FF] mb-4" size={40} />, skills: ["C++", "Python", "TypeScript"] },
              { title: "Frontend", icon: <Terminal className="text-[#00E5FF] mb-4" size={40} />, skills: ["React", "Three.js", "Tailwind"] },
              { title: "Backend", icon: <Database className="text-[#00E5FF] mb-4" size={40} />, skills: ["Node.js", "Express", "PostgreSQL"] },
              { title: "Systems", icon: <Cpu className="text-[#00E5FF] mb-4" size={40} />, skills: ["Docker", "Physics Sims", "System Design"] },
            ].map((category, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-[#0A0A0A] border-[3px] border-[#0A0A0A] shadow-[4px_4px_0px_#00E5FF] p-8 flex flex-col group transition-all duration-200"
              >
                <div className="border-b-[3px] border-[#00E5FF] pb-4 mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold font-mono-custom text-[#00E5FF] uppercase">{category.title}</h3>
                </div>
                <ul className="flex-grow space-y-4 font-mono-custom text-lg font-bold text-[#AAAAAA]">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 group-hover:text-white transition-colors">
                      <span className="w-2 h-2 bg-[#B347FF] inline-block"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-20 bg-[#0A0A0A]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-extrabold uppercase text-white tracking-tighter flex items-center gap-6">
              <span className="text-[#B347FF]">*</span> Projects
            </h2>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono-custom text-[#00E5FF] font-bold text-lg hover:underline underline-offset-8 decoration-[3px]">
              View Github <ExternalLink size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "NeuralSim",
                desc: "Python neural network simulator built from scratch to visualize activation layers in real-time.",
                tech: ["Python", "NumPy", "Matplotlib"],
                link: "#",
                color: "#00E5FF"
              },
              {
                title: "OSKernel",
                desc: "Minimal OS kernel in C++ with memory management, custom bootloader, and VGA text mode driver.",
                tech: ["C++", "NASM", "QEMU"],
                link: "#",
                color: "#B347FF"
              },
              {
                title: "QuantumVis",
                desc: "Interactive 3D quantum state visualizer plotting Bloch spheres and probability distributions.",
                tech: ["TypeScript", "Three.js", "React"],
                link: "#",
                color: "#00E5FF"
              },
              {
                title: "GraphFlow",
                desc: "Algorithm visualization platform for pathfinding and graph traversal educational tools.",
                tech: ["React", "Node.js", "Express"],
                link: "#",
                color: "#B347FF"
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#111111] border-[3px] border-[#00E5FF] shadow-[6px_6px_0px_#00E5FF] hover:shadow-[2px_2px_0px_#00E5FF] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150 p-8 md:p-10 flex flex-col h-full relative group"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#00E5FF] flex items-center justify-center border-l-[3px] border-b-[3px] border-[#0A0A0A] translate-x-[3px] -translate-y-[3px]">
                  <ExternalLink size={20} className="text-[#0A0A0A]" />
                </div>
                
                <h3 className="text-4xl font-extrabold uppercase mb-4 text-white tracking-tight">{project.title}</h3>
                <p className="text-[#AAAAAA] text-lg font-space font-bold mb-8 flex-grow leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="bg-[#0A0A0A] text-white border-2 border-[#00E5FF] px-3 py-1 font-mono-custom text-sm font-bold uppercase shadow-[2px_2px_0px_#00E5FF]">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <a href={project.link} className="inline-flex items-center justify-center w-full bg-[#0A0A0A] text-[#00E5FF] border-[3px] border-[#00E5FF] py-4 font-mono-custom font-bold text-lg uppercase transition-colors group-hover:bg-[#00E5FF] group-hover:text-[#0A0A0A]">
                    Examine Source
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#111111] border-t-[3px] border-[#00E5FF] py-20 px-6 md:px-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase text-white mb-8">Initiate <span className="text-[#00E5FF]">Contact</span></h2>
          <p className="text-[#AAAAAA] font-mono-custom text-lg max-w-xl mx-auto mb-12">
            System ready for new connections. Open to engineering roles, collaborations, and physics discussions.
          </p>
          
          <div className="flex gap-6 justify-center mb-16">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a key={i} href="#" className="bg-[#0A0A0A] text-[#00E5FF] border-[3px] border-[#00E5FF] p-4 shadow-[4px_4px_0px_#00E5FF] hover:shadow-[2px_2px_0px_#00E5FF] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                <Icon size={32} />
              </a>
            ))}
          </div>
          
          <div className="inline-block border-[3px] border-[#00E5FF] bg-[#0A0A0A] px-6 py-3 font-mono-custom font-bold text-sm text-[#00E5FF] uppercase shadow-[4px_4px_0px_#00E5FF]">
            © {new Date().getFullYear()} ALEX.SYS // ALL SYSTEMS NOMINAL
          </div>
        </div>
      </footer>
    </div>
  );
}
