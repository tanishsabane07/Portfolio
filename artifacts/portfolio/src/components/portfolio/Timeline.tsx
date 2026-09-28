import { motion } from 'framer-motion';

const timeline = [
  {
    year: "May 2021",
    title: "Millennium National School",
    desc: "Completed 10th grade with an oustanding score.",
    marks: <>CBSE: <span className="text-[var(--theme-text)] font-bold border-b-2 border-[var(--theme-primary)]">95.2%</span></>
  },
  {
    year: "June 2023",
    title: "High School (HSC)",
    desc: "Fantastic experience studying Physics, Chemistry and Mathematics and Computer Science in depth.",
    marks: <>HSC: <span className="text-[var(--theme-text)] font-bold border-b-2 border-[var(--theme-primary)]">85.17%</span> <br /> JEE Mains: <span className="text-[var(--theme-text)] font-bold border-b-2 border-[var(--theme-primary)]">95.54 %ile</span> <br /> MHT-CET: <span className="text-[var(--theme-text)] font-bold border-b-2 border-[var(--theme-primary)]">99.55 %ile</span></>
  },
  {
    year: "August 2023",
    title: "Pune Institute of Computer Technology",
    desc: "Computer Engineering",
    marks: <>CGPA: <span className="text-[var(--theme-text)] font-bold border-b-2 border-[var(--theme-primary)]">9.368</span></>
  },
  {
    year: "July 2026",
    title: "Jio Platforms Ltd. - Data Engineer Intern",
    desc: "Working on handling massive amounts of data and turning them into actionable insights."
  },
  {
    year: "2027",
    title: "Expected Graduation",
    desc: "Ready to compile the next chapter."
  },
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
                  className={`ml-8 md:ml-0 md:w-[45%] p-5 bg-[var(--theme-bg)] border-2 border-[var(--theme-border)] transition-all ${isEven ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  style={{ boxShadow: '4px 4px 0px var(--theme-secondary)' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '2px 2px 0px var(--theme-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0px var(--theme-secondary)')}
                >
                  <span className="text-xs font-mono font-black text-[var(--theme-secondary)] mb-2 block tracking-widest uppercase">
                    {item.year}
                  </span>
                  <h3 className="text-base font-black uppercase tracking-tight text-[var(--theme-text)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--theme-text-muted)] text-sm font-mono leading-relaxed">{item.desc}</p>

                  {/* @ts-ignore */}
                  {item.marks && (
                    <div className="mt-4 pt-3 border-t-2 border-dashed border-[var(--theme-border-subtle)] flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
                      <span className="text-s font-black text-[var(--theme-text)] uppercase tracking-wider">Score</span>
                      <span className="text-s md:text-sm font-mono font-bold text-[var(--theme-primary)] bg-[var(--theme-primary)]/10 px-2 py-1 rounded border border-[var(--theme-primary)]/20 w-fit">
                        {item.marks}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
