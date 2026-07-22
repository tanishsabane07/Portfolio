import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { webGLSupported } from '@/hooks/use-webgl-support';

const Hero3D = lazy(() => import('./Hero3D'));

// Stable particle positions, computed once
const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  size: ((i * 7 + 3) % 4) + 1,
  top: ((i * 37 + 11) % 100),
  left: ((i * 53 + 7) % 100),
  dur: 2 + ((i * 13) % 4),
  delay: (i * 17) % 3,
}));

function HeroParticleFallback() {
  return (
    <div className="h-full w-full relative overflow-hidden bg-background">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(0,229,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.06) 0%, transparent 60%)'
      }} />
      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: p.size + 'px',
            height: p.size + 'px',
            top: p.top + '%',
            left: p.left + '%',
            animation: `pulse ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="hero">
      {/* 3D Background — only mount Canvas when WebGL is available */}
      <div className="absolute inset-0 z-0">
        {webGLSupported ? (
          <Suspense fallback={<HeroParticleFallback />}>
            <Canvas camera={{ position: [0, 0, 1] }}>
              <Hero3D />
            </Canvas>
          </Suspense>
        ) : (
          <HeroParticleFallback />
        )}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm">
            Ready for compile.
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-foreground">
            Hi, I'm <span className="text-primary">Alex</span>.<br/>
            I build systems.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono max-w-2xl">
            Software Engineer & Computer Engineering Student.<br/>
            Bridging the gap between physics and code.
          </p>
          <div className="flex gap-4 pointer-events-auto">
            <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-border bg-card/50 backdrop-blur text-foreground font-semibold rounded hover:bg-muted transition-colors">
              Download Resume
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
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
