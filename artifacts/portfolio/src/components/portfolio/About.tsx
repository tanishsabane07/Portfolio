import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { webGLSupported } from '@/hooks/use-webgl-support';

const About3D = lazy(() => import('./About3D'));

export function About() {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden bg-[var(--theme-bg)] border-t-2 border-[var(--theme-border)]"
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
              <span className="text-[var(--theme-primary)] font-mono text-xl md:text-2xl mr-4 block mb-2">01.</span>
              DRIVEN BY<br/>CURIOSITY
            </h2>
            <div className="space-y-4 text-base text-[#AAAAAA] font-mono leading-relaxed">
              <p>
                I'm a <span className="text-[var(--theme-text)] font-bold border-b-2 border-[var(--theme-primary)]">Computer Engineering</span> student who enjoys building software that is both practical and thoughtfully engineered. I like understanding how things work—from low-level systems to scalable backend architectures—and applying that knowledge to solve real problems.
              </p>
              <p>
                Problem solving is at the core of what I enjoy most about software engineering. The thrill of turning a seemingly impossible problem into an elegant solution keeps me coming back.
              </p>
              <p>
                I value clean architecture, thoughtful design, and continuous learning. Every project is an opportunity to sharpen my skills, experiment with new technologies, and build software that is reliable, scalable, and meaningful.
              </p>
            </div>

            <div className="pt-4">
              <div className="border-2 border-[var(--theme-border)] px-4 py-3 inline-block" style={{ boxShadow: '4px 4px 0px var(--theme-primary)' }}>
                <p className="text-[var(--theme-primary)] font-mono text-sm font-bold tracking-widest">
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
            className="flex-1 h-[400px] w-full border-2 border-[var(--theme-border)]"
            style={{ boxShadow: '6px 6px 0px var(--theme-primary)' }}
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
                  <div className="absolute inset-0 border-2 border-[var(--theme-primary)] animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-4 border-2 border-[var(--theme-secondary)] animate-spin" style={{ animationDuration: '8s' }} />
                  <div className="absolute inset-10 border-2 border-[var(--theme-primary)] animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }} />
                  <div className="absolute inset-[50%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--theme-primary)]" />
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
