import { motion } from 'framer-motion';

const timeline = [
  { year: "Sept 2021", title: "Started Computer Engineering Degree", desc: "Dived deep into lower-level systems, logic gates, and fundamental physics." },
  { year: "Jan 2022", title: "Backend Developer Intern", desc: "First industry experience at a local startup. Built REST APIs using Node.js and PostgreSQL." },
  { year: "May 2022", title: "Won University Hackathon", desc: "AI/ML Track. Developed a predictive model for energy grid load balancing." },
  { year: "Sept 2022", title: "Year 2: Systems Specialization", desc: "Shifted focus towards OS concepts, computer architecture, and C++." },
  { year: "Jan 2023", title: "Open Source Contributor", desc: "Contributed memory safety patches to a popular Rust-based CLI tool." },
  { year: "May 2023", title: "Full-Stack Developer Intern", desc: "Built production features, handled deployments, and optimized database queries." },
  { year: "Sept 2023", title: "Final Year Dissertation", desc: "Researching GPU-accelerated physics simulations for fluid dynamics." },
  { year: "2024", title: "Expected Graduation", desc: "Ready to compile the next chapter." },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center"
        >
          <span className="text-secondary font-mono text-xl md:text-2xl mr-4">04.</span>
          Execution Trace
        </motion.h2>

        <div className="relative border-l border-muted-foreground/30 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12">
          {timeline.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center ${isEven ? 'md:justify-start' : 'md:justify-end'} justify-start`}
              >
                {/* Center dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] z-10" />
                
                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-[45%] p-6 bg-background border border-border rounded-xl hover:border-secondary/50 transition-colors ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <span className="text-sm font-mono text-secondary mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
