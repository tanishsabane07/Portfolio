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
    <section id="timeline" className="py-32 bg-[#0D0D0D] border-t-2 border-[#00E5FF] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white mb-20 text-center"
        >
          <span className="text-[#B347FF] font-mono text-xl md:text-2xl mr-4">04.</span>
          EXECUTION TRACE
        </motion.h2>

        <div className="relative border-l-2 border-[#00E5FF] ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-10">
          {timeline.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center ${isEven ? 'md:justify-start' : 'md:justify-end'} justify-start`}
              >
                {/* Square dot on timeline */}
                <div className="absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-[#00E5FF] z-10 shadow-[0_0_8px_#00E5FF]" />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-[45%] p-5 bg-[#0A0A0A] border-2 border-[#00E5FF] hover:translate-x-[2px] hover:translate-y-[2px] transition-all ${
                    isEven ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                  style={{ boxShadow: '4px 4px 0px #00E5FF' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '2px 2px 0px #00E5FF')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0px #00E5FF')}
                >
                  <span className="text-xs font-mono font-black text-[#B347FF] mb-2 block tracking-widest uppercase">
                    {item.year}
                  </span>
                  <h3 className="text-base font-black uppercase tracking-tight text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#AAAAAA] text-sm font-mono leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
