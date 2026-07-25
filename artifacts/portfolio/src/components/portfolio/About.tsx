import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { webGLSupported } from '@/hooks/use-webgl-support';

const About3D = lazy(() => import('./About3D'));

export function About() {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden bg-[#0A0A0A] border-t-2 border-[#00E5FF]"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white">
              <span className="text-[#00E5FF] font-mono text-xl md:text-2xl mr-4 block mb-2">01.</span>
              THE LOGIC IN<br/>THE CHAOS
            </h2>
            <div className="space-y-4 text-base text-[#AAAAAA] font-mono leading-relaxed">
              <p>
                My journey didn't start with print statements. It started with physics—trying to understand the fundamental rules that govern reality. But equations on paper could only take me so far. I wanted to build universes, not just observe them.
              </p>
              <p>
                That led me to{' '}
                <span className="text-white font-bold border-b-2 border-[#00E5FF]">Computer Engineering</span>
                . I discovered that software is the closest thing we have to magic: you write words, and systems come alive.
              </p>
              <p>
                Whether I'm writing a minimal OS kernel in C++ or architecting a scalable microservice in TypeScript, my goal is the same: elegant, precise solutions to complex problems.
              </p>
            </div>

            <div className="pt-4">
              <div className="border-2 border-[#00E5FF] shadow-[4px_4px_0px_#00E5FF] px-4 py-3 inline-block">
                <p className="text-[#00E5FF] font-mono text-sm font-bold tracking-widest">
                  &gt;_ ALWAYS COMPILING...
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex-1 h-[400px] w-full border-2 border-[#00E5FF] shadow-[6px_6px_0px_#00E5FF]"
          >
            {webGLSupported ? (
              <Suspense fallback={<div className="h-full w-full bg-[#111] animate-pulse" />}>
                <Canvas camera={{ position: [0, 0, 4] }}>
                  <ambientLight intensity={0.5} />
                  <About3D />
                </Canvas>
              </Suspense>
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-[#0D0D0D]">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 border-2 border-[#00E5FF] animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-4 border-2 border-[#B347FF] animate-spin" style={{ animationDuration: '8s' }} />
                  <div className="absolute inset-10 border-2 border-[#00E5FF] animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }} />
                  <div className="absolute inset-[50%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#00E5FF]" />
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
