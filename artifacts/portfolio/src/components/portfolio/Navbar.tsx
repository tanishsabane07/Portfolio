import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-[#00E5FF] ${
        scrolled ? 'bg-[#0A0A0A]' : 'bg-[#0A0A0A]/95'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="font-mono text-sm font-black tracking-widest uppercase text-black bg-[#00E5FF] px-3 py-1 border-2 border-[#00E5FF] shadow-[3px_3px_0px_#B347FF] hover:shadow-[1px_1px_0px_#B347FF] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          ALEX.SYS
        </a>
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-bold tracking-widest uppercase text-[#AAAAAA] hover:text-[#00E5FF] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
