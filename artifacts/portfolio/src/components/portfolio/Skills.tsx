import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Programming Languages",
    items: ["C/C++", "Java", "Python", "JavaScript"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "Bootstrap", "Angular.js", "React.js", "Node.js", "Express", "Git", "Docker", "PostgreSQL"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQl", "Delta Lake"],
  },
  {
    category: "Core Engineering",
    items: ["Data Structures & Algorithms", "Object Oriented Programming", "System Programming", "Operating Systems", "Computer Networks"],
  },
  {
    category: "Develeopment Tools",
    items: ["Git", "GitHub", "Postman", "Docker", "Azure Databricks", "AWS"],
  },
];

export function Skills() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } },
  };

  return (
    <section id="skills" className="py-32 bg-[var(--theme-bg-card)] border-t-2 border-[var(--theme-border)] relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-[var(--theme-text)] mb-16"
        >
          <span className="text-[var(--theme-secondary)] font-mono text-xl md:text-2xl mr-4">02.</span>
          TECHNICAL ARSENAL
        </motion.h2>

        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              variants={itemVars}
              className="p-6 bg-[var(--theme-bg)] border-2 border-[var(--theme-border)] transition-all cursor-default"
              style={{ boxShadow: '4px 4px 0px var(--theme-primary)' }}
            >
              <h3 className="text-base font-mono font-black uppercase tracking-widest mb-5 text-[var(--theme-primary)] flex items-center gap-3">
                <span className="w-3 h-3 bg-[var(--theme-primary)] inline-block" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-mono font-bold bg-transparent text-[var(--theme-text-muted)] border border-[var(--theme-border-subtle)] hover:border-[var(--theme-border)] hover:text-[var(--theme-primary)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
