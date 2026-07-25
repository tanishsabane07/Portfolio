import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
      id="hero"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,229,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl"
        >
          {/* Status badge */}
          <div className="inline-block mb-8">
            <span className="border-2 border-[#B347FF] text-[#B347FF] font-mono text-xs font-bold tracking-widest uppercase px-3 py-1 shadow-[3px_3px_0px_#B347FF]">
              STATUS: INITIALIZING SYSTEM...
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-2 leading-none uppercase">
            HI, I'M{' '}
            <span
              className="text-[#00E5FF]"
              style={{ textShadow: '4px 4px 0px #B347FF' }}
            >
              ALEX
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 leading-none uppercase">
            I BUILD SYSTEMS.
          </h2>

          {/* Tagline */}
          <div className="border-l-4 border-[#B347FF] pl-4 mb-10 max-w-xl">
            <p className="text-[#AAAAAA] font-mono text-base leading-relaxed">
              Software Engineer & Computer Engineering Student.<br />
              Bridging the gap between physics and code.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#00E5FF] text-black font-mono font-black text-sm uppercase tracking-widest border-2 border-[#00E5FF] shadow-[4px_4px_0px_#00E5FF] hover:shadow-[2px_2px_0px_#00E5FF] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              &gt;_ VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent text-[#00E5FF] font-mono font-black text-sm uppercase tracking-widest border-2 border-[#00E5FF] shadow-[4px_4px_0px_#B347FF] hover:shadow-[2px_2px_0px_#B347FF] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              CONTACT ME
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-[#00E5FF] flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-[#00E5FF]" />
        </div>
      </motion.div>
    </section>
  );
}
