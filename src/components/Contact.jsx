import React from 'react';
import { motion } from 'framer-motion';
import ContactBackground from './ContactBackground';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/tanishsabane07',
      icon: '🐙',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tanishsabane',
      icon: '💼',
      description: 'Professional network'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/tanishsabane',
      icon: '💻',
      description: 'Competitive programming'
    },
    {
      name: 'Email',
      url: 'mailto:tanish.sabane@gmail.com',
      icon: '📧',
      description: 'Get in touch'
    }
  ];

  return (
    <motion.section 
      id="contact" 
      className="py-20 px-4 text-white min-h-screen flex items-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <ContactBackground />
      <div className="container mx-auto text-center max-w-4xl relative z-30">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-cyan-300"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's Connect
        </motion.h2>
        <motion.p 
          className="mb-12 text-lg md:text-xl text-gray-300"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm always open to discussing new opportunities and interesting projects.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-4xl mb-3">{link.icon}</div>
              <div className="text-cyan-300 font-semibold mb-1">{link.name}</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {link.description}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
