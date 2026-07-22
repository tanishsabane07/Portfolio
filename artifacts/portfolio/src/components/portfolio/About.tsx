import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { webGLSupported } from '@/hooks/use-webgl-support';

const About3D = lazy(() => import('./About3D'));

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              <span className="text-primary font-mono text-xl md:text-2xl mr-4">01.</span>
              The Logic in the Chaos
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground font-sans leading-relaxed">
              <p>
                My journey didn't start with print statements. It started with physics—trying to understand the fundamental rules that govern reality. But equations on paper could only take me so far. I wanted to build universes, not just observe them.
              </p>
              <p>
                That led me to <span className="text-foreground font-semibold">Computer Engineering</span>. I discovered that software is the closest thing we have to magic: you write words, and systems come alive. I specialize in backend architecture, systems programming, and scientific computing.
              </p>
              <p>
                Whether I'm writing a minimal OS kernel in C++ or architecting a scalable microservice in TypeScript, my goal is the same: to build elegant, precise solutions that solve complex problems.
              </p>
            </div>
            
            <div className="pt-6">
              <div className="flex items-center gap-4 text-sm font-mono text-primary">
                <div className="w-12 h-px bg-primary/50" />
                <p>Always compiling...</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 h-[400px] w-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
            {webGLSupported ? (
              <Suspense fallback={<div className="h-full w-full bg-card rounded-xl animate-pulse" />}>
                <Canvas camera={{ position: [0, 0, 4] }}>
                  <ambientLight intensity={0.5} />
                  <About3D />
                </Canvas>
              </Suspense>
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-4 rounded-full border border-accent/40 animate-spin" style={{ animationDuration: '8s' }} />
                  <div className="absolute inset-10 rounded-full border border-primary/60 animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }} />
                  <div className="absolute inset-[50%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary/80" />
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
