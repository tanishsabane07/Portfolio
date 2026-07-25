import { motion } from 'framer-motion';
import tanish from '../../../public.tanish_ascii.png'

export function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--theme-bg)]"
      id="hero"
      style={{
        backgroundImage:
          'linear-gradient(var(--theme-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--theme-grid-color) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="max-w-4xl">
            {/* Status badge */}
            <div className="inline-block mb-8">
              <span className="border-2 border-[var(--theme-secondary)] text-[var(--theme-secondary)] font-mono text-xs font-bold tracking-widest uppercase px-3 py-1" style={{ boxShadow: '3px 3px 0px var(--theme-secondary)' }}>
                STATUS: INITIALIZING SYSTEM...
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-2 leading-none uppercase">
              HI, I'M
              <span
                className="block text-[var(--theme-primary)]"
                style={{ textShadow: "4px 4px 0px var(--theme-secondary)" }}
              >
                TANISH SABANE
              </span>
            </h1>

            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 leading-none uppercase">
              I craft software with precision and intent
            </h2>

            {/* Tagline */}
            <div className="border-l-4 border-[var(--theme-secondary)] pl-4 mb-10 max-w-xl">
              <p className="text-[var(--theme-text-muted)] font-mono text-base leading-relaxed">
                Software Engineer & Computer Engineering Student.<br />
                Bridging the gap between physics and code.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-[var(--theme-primary)] text-[var(--theme-logo-text)] font-mono font-black text-sm uppercase tracking-widest border-2 border-[var(--theme-primary)] transition-all"
                style={{ boxShadow: '4px 4px 0px var(--theme-primary)' }}
              >
                &gt;_ VIEW PROJECTS
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent text-[var(--theme-primary)] font-mono font-black text-sm uppercase tracking-widest border-2 border-[var(--theme-primary)] transition-all"
                style={{ boxShadow: '4px 4px 0px var(--theme-secondary)' }}
              >
                CONTACT ME
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div
              className="min-h-[520px] w-full border-2 border-[var(--theme-border)] bg-[var(--theme-bg-card)]"
              style={{ boxShadow: '6px 6px 0px var(--theme-primary)' }}
            >
              <img src='tanish_ascii.png' ></img>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-[var(--theme-primary)] flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-[var(--theme-primary)]" />
        </div>
      </motion.div>
    </section>
  );
}
