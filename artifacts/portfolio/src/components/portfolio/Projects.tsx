import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "NeuralSim",
    description: "A Python-based neural network simulator built from scratch. Implements backpropagation, multiple activation functions, and real-time loss visualization.",
    tech: ["Python", "NumPy", "Matplotlib"],
    depth: "Custom autograd engine, matrix-based forward/backward pass.",
    github: "#",
    live: "#",
    shadow: "#00E5FF",
  },
  {
    title: "OSKernel",
    description: "A minimal OS kernel in C++ capable of process scheduling, memory management, and basic system calls. Built for x86 architecture.",
    tech: ["C++", "NASM", "QEMU"],
    depth: "Monolithic kernel with custom bootloader.",
    github: "#",
    live: "#",
    shadow: "#B347FF",
  },
  {
    title: "QuantumVis",
    description: "Interactive web-based quantum state visualizer. Renders Bloch sphere representations and simulates qubit operations in 3D.",
    tech: ["TypeScript", "Three.js", "React"],
    depth: "WebGL rendering pipeline with custom quantum state machine.",
    github: "#",
    live: "#",
    shadow: "#00E5FF",
  },
  {
    title: "GraphFlow",
    description: "A full-stack algorithm visualization platform. Visualizes BFS, DFS, Dijkstra's, and A* in real-time with adjustable execution speed.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    depth: "Event-driven frontend with persistent graph state via WebSockets.",
    github: "#",
    live: "#",
    shadow: "#B347FF",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-[#0A0A0A] border-t-2 border-[#00E5FF] relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white mb-16"
        >
          <span className="text-[#00E5FF] font-mono text-xl md:text-2xl mr-4">03.</span>
          CONSTRUCTED SYSTEMS
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col justify-between p-6 bg-[#0D0D0D] border-2 border-[#00E5FF] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
              style={{ boxShadow: `4px 4px 0px ${project.shadow}` }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = `2px 2px 0px ${project.shadow}`)}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = `4px 4px 0px ${project.shadow}`)}
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white group-hover:text-[#00E5FF] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-[#555] hover:text-[#00E5FF] transition-colors border border-[#333] hover:border-[#00E5FF] p-1"
                      aria-label="GitHub Repo"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="text-[#555] hover:text-[#00E5FF] transition-colors border border-[#333] hover:border-[#00E5FF] p-1"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-[#AAAAAA] font-mono text-sm mb-5 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-5">
                  <h4 className="text-xs font-mono font-black uppercase tracking-widest text-[#555] mb-2">
                    // Engineering Depth
                  </h4>
                  <p className="text-sm font-mono text-[#AAAAAA] border-l-2 border-[#00E5FF] pl-3 py-1">
                    {project.depth}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-[#1A1A1A]">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono font-bold text-[#B347FF] border border-[#B347FF] px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
