import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Programming Languages",
    items: ["C++", "Python", "TypeScript", "JavaScript", "Java", "Verilog"]
  },
  {
    category: "Frameworks & Tools",
    items: ["React", "Node.js", "Express", "Drizzle ORM", "Three.js", "Git", "Docker", "PostgreSQL"]
  },
  {
    category: "Core Engineering Concepts",
    items: ["Data Structures & Algorithms", "System Design", "OS", "Computer Architecture", "Networks"]
  },
  {
    category: "Scientific Domains",
    items: ["Physics Simulations", "Signal Processing", "Numerical Methods", "Scientific Computing"]
  }
];

export function Skills() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="py-32 bg-card relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16"
        >
          <span className="text-secondary font-mono text-xl md:text-2xl mr-4">02.</span>
          Technical Arsenal
        </motion.h2>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillsData.map((group, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVars}
              className="p-8 rounded-xl bg-background border border-border hover:border-secondary/50 transition-colors group"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-shadow" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 text-sm font-mono bg-muted text-muted-foreground rounded border border-border group-hover:bg-secondary/10 group-hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
}
