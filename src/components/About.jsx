import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundLines } from './ui/background_lines';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 text-white relative overflow-hidden">
      <BackgroundLines className="min-h-[80vh] w-full bg-black dark:bg-black flex items-center">
        <motion.div 
          className="container mx-auto max-w-4xl relative z-30 text-center py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-cyan-300"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl leading-relaxed mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I am a passionate and creative developer with a love for building beautiful and functional applications. 
            I specialize in modern web technologies including React, Node.js. I'm always eager to 
            learn new technologies and take on challenging projects that push the boundaries of what's possible.
            Alongside development, I actively practice data structures and algorithms on platforms like LeetCode,
            sharpening my problem-solving skills, optimization techniques, and time–space tradeoff analysis. 
            This helps me write efficient, reliable code and approach system design challenges with a solid algorithmic foundation.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-300">Node.js</div>
              <div className="text-sm text-gray-300">Backend</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-300">Express.js</div>
              <div className="text-sm text-gray-300">Server</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-300">MongoDB, MySQL</div>
              <div className="text-sm text-gray-300">Database</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-300">Python, C++</div>
              <div className="text-sm text-gray-300">Programming</div>
            </div>
          </motion.div>
        </motion.div>
      </BackgroundLines>
    </section>
  );
};

export default About;
