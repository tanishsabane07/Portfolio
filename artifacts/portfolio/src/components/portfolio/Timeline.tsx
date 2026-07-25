import { motion } from 'framer-motion';

const timeline = [
  { year: "May 2021", title: "Millennium National School - 95.2%", desc: "Completed 10th grade with an oustanding score of 95.2%" },
  { year: "June 2023", title: "High School (HSC) - 85.17%", desc: "Fantastic experience studying Physics, Chemistry and Mathematics and Computer Science in depth. JEE - 95.54 %ile, MHT-CET - 99.55%ile" },
  { year: "August 2023", title: "Pune Institute of Computer Technology", desc: "Computer Engineering" },
  { year: "July 2026", title: "Jio Platforms Ltd. - Data Engineer Intern", desc: "Working on handling massive amounts of data and turning them into actionable insights." },
  { year: "2027", title: "Expected Graduation", desc: "Ready to compile the next chapter." },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-32 bg-[var(--theme-bg-card)] border-t-2 border-[var(--theme-border)] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-[var(--theme-text)] mb-20 text-center"
        >
          <span className="text-[var(--theme-secondary)] font-mono text-xl md:text-2xl mr-4">04.</span>
          EXECUTION TRACE
        </motion.h2>

        <div className="relative space-y-10 pl-4 md:pl-0">
          <div
            className="absolute top-0 bottom-0 left-4 w-0.5 bg-[var(--theme-border)] md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
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
                <div className="absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-[var(--theme-primary)] z-10" style={{ boxShadow: '0 0 8px var(--theme-primary)' }} />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-[45%] p-5 bg-[var(--theme-bg)] border-2 border-[var(--theme-border)] transition-all ${
                    isEven ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                  style={{ boxShadow: '4px 4px 0px var(--theme-primary)' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '2px 2px 0px var(--theme-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0px var(--theme-primary)')}
                >
                  <span className="text-xs font-mono font-black text-[var(--theme-secondary)] mb-2 block tracking-widest uppercase">
                    {item.year}
                  </span>
                  <h3 className="text-base font-black uppercase tracking-tight text-[var(--theme-text)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--theme-text-muted)] text-sm font-mono leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
