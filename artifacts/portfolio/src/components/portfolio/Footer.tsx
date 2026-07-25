export function Footer() {
  return (
    <footer className="py-8 bg-[#0A0A0A] border-t-2 border-[#00E5FF] text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm font-mono font-bold text-[#AAAAAA] uppercase tracking-widest">
          © {new Date().getFullYear()}{' '}
          <span className="text-[#00E5FF]">ALEX</span>. ENGINEERED WITH PRECISION.
        </p>
        <p className="text-xs font-mono text-[#555] mt-2">
          Press{' '}
          <kbd className="px-1.5 py-0.5 bg-transparent border border-[#00E5FF] text-[#00E5FF] text-xs">Ctrl</kbd>
          {' '}+{' '}
          <kbd className="px-1.5 py-0.5 bg-transparent border border-[#00E5FF] text-[#00E5FF] text-xs">`</kbd>
          {' '}to initialize console.
        </p>
      </div>
    </footer>
  );
}
