import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Internship Management PLatform",
    description: "A platform built to streamline campus recruitment for students and administrators. enables companies to post opportunities, students to apply and tools to manage applications.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "ShadCN", "Cloudinary"],
    github: "https://github.com/tanishsabane07/IMPing",
    live: "https://im-ping.vercel.app/",
    shadow: "var(--theme-primary)",
  },
  {
    title: "Res-N-Play",
    description: "A court reservation system built to simplify sports venue bookings.",
    tech: ["React", "Node", "MongoDB"],
    github: "#",
    live: "#",
    shadow: "var(--theme-secondary)",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-[var(--theme-bg)] border-t-2 border-[var(--theme-border)] relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-[var(--theme-text)] mb-16"
        >
          <span className="text-[var(--theme-primary)] font-mono text-xl md:text-2xl mr-4">03.</span>
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
              className="group flex flex-col justify-between p-6 bg-[var(--theme-bg-card)] border-2 border-[var(--theme-border)] transition-all"
              style={{ boxShadow: `4px 4px 0px ${project.shadow}` }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = `2px 2px 0px ${project.shadow}`)}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = `4px 4px 0px ${project.shadow}`)}
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-[var(--theme-text)] group-hover:text-[var(--theme-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-[var(--theme-text-faint)] hover:text-[var(--theme-primary)] transition-colors border border-[var(--theme-border-subtle)] hover:border-[var(--theme-border)] p-1"
                      aria-label="GitHub Repo"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="text-[var(--theme-text-faint)] hover:text-[var(--theme-primary)] transition-colors border border-[var(--theme-border-subtle)] hover:border-[var(--theme-border)] p-1"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-[var(--theme-text-muted)] font-mono text-sm mb-5 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-[var(--theme-border-subtle)]">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono font-bold text-[var(--theme-secondary)] border border-[var(--theme-secondary)] px-2 py-0.5"
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
