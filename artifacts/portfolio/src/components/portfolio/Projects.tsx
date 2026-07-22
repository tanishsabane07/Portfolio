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
  },
  {
    title: "OSKernel",
    description: "A minimal OS kernel in C++ capable of process scheduling, memory management, and basic system calls. Built for x86 architecture.",
    tech: ["C++", "NASM", "QEMU"],
    depth: "Monolithic kernel with custom bootloader.",
    github: "#",
    live: "#",
  },
  {
    title: "QuantumVis",
    description: "Interactive web-based quantum state visualizer. Renders Bloch sphere representations and simulates qubit operations in 3D.",
    tech: ["TypeScript", "Three.js", "React"],
    depth: "WebGL rendering pipeline with custom quantum state machine.",
    github: "#",
    live: "#",
  },
  {
    title: "GraphFlow",
    description: "A full-stack algorithm visualization platform. Visualizes BFS, DFS, Dijkstra's, and A* in real-time with adjustable execution speed.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    depth: "Event-driven frontend with persistent graph state via WebSockets.",
    github: "#",
    live: "#",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16"
        >
          <span className="text-primary font-mono text-xl md:text-2xl mr-4">03.</span>
          Constructed Systems
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,229,255,0.1)] overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Repo">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={project.live} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Live Demo">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-bold">Engineering Depth</h4>
                  <p className="text-sm font-mono text-foreground/80 border-l-2 border-primary/50 pl-3 py-1">
                    {project.depth}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono text-secondary">
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
