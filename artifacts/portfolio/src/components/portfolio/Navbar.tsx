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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-[var(--theme-border)]"
      style={{ backgroundColor: 'var(--theme-bg-navbar)', opacity: scrolled ? 1 : 0.95 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="font-mono text-sm font-black tracking-widest uppercase text-[var(--theme-logo-text)] bg-[var(--theme-logo-bg)] px-3 py-1 border-2 border-[var(--theme-border)] transition-all"
          style={{ boxShadow: '3px 3px 0px var(--theme-secondary)' }}
        >
          TANISH.SABANE
        </a>
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--theme-text-muted)] hover:text-[var(--theme-primary)] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
