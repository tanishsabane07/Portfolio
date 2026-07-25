import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output';
  content: React.ReactNode;
}

const commands: Record<string, React.ReactNode> = {
  help: (
    <div className="text-[var(--theme-secondary)]">
      Available commands:<br />
      whoami &nbsp;&nbsp;&nbsp;- display current user info<br />
      ls &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- list directory contents<br />
      cat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- read file contents (e.g. cat about.txt)<br />
      clear &nbsp;&nbsp;&nbsp;&nbsp;- clear terminal output
    </div>
  ),
  whoami: (
    <div className="text-[var(--theme-primary)]">
      tanish_sabane<br />
      role: root<br />
      status: curious &amp; compiling
    </div>
  ),
  ls: (
    <div className="flex gap-4">
      <span className="text-[var(--theme-primary)]">about.txt</span>
      <span className="text-[var(--theme-primary)]">skills.txt</span>
      <span className="text-[var(--theme-secondary)]">projects/</span>
      <span className="text-red-400">.secret</span>
    </div>
  ),
  'cat about.txt': (
    <div className="text-[var(--theme-text)]">
      Loading abstract...<br />
      Just a curious and versatile engineer trying to understand how things work.<br />
    </div>
  ),
  'cat skills.txt': (
    <div className="text-[var(--theme-text)]">
      [C/C++, JavaScript, Python, Java]<br />
      Warning: skill matrix is constantly expanding.
    </div>
  ),
  'cat .secret': (
    <div className="text-red-400">
      Permission denied. Nice try though.
    </div>
  ),
};

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: <div className="text-[var(--theme-primary)]">SysOS v1.0.0 init. Type 'help' for commands.</div> },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const newHistory = [...history, { type: 'input' as const, content: cmd }];
    if (commands[cmd]) {
      newHistory.push({ type: 'output', content: commands[cmd] });
    } else if (cmd.startsWith('cat ')) {
      newHistory.push({ type: 'output', content: `cat: ${cmd.split(' ')[1]}: No such file or directory` });
    } else {
      newHistory.push({ type: 'output', content: `command not found: ${cmd}` });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 w-[420px] h-[300px] bg-[var(--theme-bg)] border-2 border-[var(--theme-border)] overflow-hidden flex flex-col z-[100]"
          style={{ boxShadow: '6px 6px 0px var(--theme-primary)' }}
        >
          {/* Header */}
          <div className="bg-[var(--theme-bg-card)] px-4 py-2 flex justify-between items-center border-b-2 border-[var(--theme-border)]">
            <span className="text-xs font-mono font-bold text-[var(--theme-primary)] tracking-widest uppercase">
              sys@engineer:~
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[var(--theme-text-muted)] hover:text-[var(--theme-primary)] border border-[var(--theme-border-subtle)] hover:border-[var(--theme-border)] p-0.5 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>

          {/* Body */}
          <div
            className="flex-1 p-4 font-mono text-sm overflow-y-auto text-[var(--theme-text-muted)]"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line, i) => (
              <div key={i} className="mb-1">
                {line.type === 'input' ? (
                  <div>
                    <span className="text-[var(--theme-primary)] mr-2">➜</span>
                    <span className="text-[var(--theme-secondary)] mr-2">~</span>
                    {line.content}
                  </div>
                ) : (
                  <div>{line.content}</div>
                )}
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex mt-1">
              <span className="text-[var(--theme-primary)] mr-2">➜</span>
              <span className="text-[var(--theme-secondary)] mr-2">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none border-none text-[var(--theme-text)] caret-[var(--theme-primary)]"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
