import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Programming Languages",
    accent: "#00E5FF",
    items: ["C++", "Python", "TypeScript", "JavaScript", "Java", "Verilog"],
  },
  {
    category: "Frameworks & Tools",
    accent: "#B347FF",
    items: ["React", "Node.js", "Express", "Drizzle ORM", "Three.js", "Git", "Docker", "PostgreSQL"],
  },
  {
    category: "Core Engineering",
    accent: "#00E5FF",
    items: ["Data Structures & Algorithms", "System Design", "OS", "Computer Architecture", "Networks"],
  },
  {
    category: "Scientific Domains",
    accent: "#B347FF",
    items: ["Physics Simulations", "Signal Processing", "Numerical Methods", "Scientific Computing"],
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
    <section id="skills" className="py-32 bg-[#0D0D0D] border-t-2 border-[#00E5FF] relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white mb-16"
        >
          <span className="text-[#B347FF] font-mono text-xl md:text-2xl mr-4">02.</span>
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
              className="p-6 bg-[#0A0A0A] border-2 border-[#00E5FF] shadow-[4px_4px_0px_#00E5FF] hover:shadow-[2px_2px_0px_#00E5FF] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default"
            >
              <h3 className="text-base font-mono font-black uppercase tracking-widest mb-5 text-[#00E5FF] flex items-center gap-3">
                <span className="w-3 h-3 bg-[#00E5FF] inline-block" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-mono font-bold bg-transparent text-[#AAAAAA] border border-[#333] hover:border-[#00E5FF] hover:text-[#00E5FF] transition-colors"
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
