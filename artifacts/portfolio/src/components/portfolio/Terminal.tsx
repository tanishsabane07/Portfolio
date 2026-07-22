import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output';
  content: React.ReactNode;
}

const commands: Record<string, React.ReactNode> = {
  help: (
    <div className="text-secondary">
      Available commands:
      <br />
      whoami &nbsp;&nbsp;&nbsp;- display current user info
      <br />
      ls &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- list directory contents
      <br />
      cat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- read file contents (e.g. cat about.txt)
      <br />
      clear &nbsp;&nbsp;&nbsp;&nbsp;- clear terminal output
    </div>
  ),
  whoami: (
    <div className="text-primary">
      alex_sys
      <br />
      role: root
      <br />
      status: caffeinated & compiling
    </div>
  ),
  ls: (
    <div className="text-muted-foreground flex gap-4">
      <span className="text-blue-400">about.txt</span>
      <span className="text-blue-400">skills.txt</span>
      <span className="text-green-400">projects/</span>
      <span className="text-red-400">.secret</span>
    </div>
  ),
  'cat about.txt': (
    <div className="text-foreground">
      Loading abstract...
      <br />
      Just an engineer trying to reverse-engineer reality. 
      I like physics, systems, and staring at trace logs.
    </div>
  ),
  'cat skills.txt': (
    <div className="text-foreground">
      [C++, Rust, TypeScript, Python, Three.js, React, Node.js]
      <br />
      Warning: skill matrix is constantly expanding.
    </div>
  ),
  'cat .secret': (
    <div className="text-destructive">
      Permission denied. Nice try though.
    </div>
  ),
};

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: <div className="text-primary">SysOS v1.0.0 init. Type 'help' for commands.</div> }
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
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
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
          className="fixed bottom-6 right-6 w-[400px] h-[300px] bg-background border border-border shadow-2xl rounded-lg overflow-hidden flex flex-col z-[100]"
          style={{ boxShadow: '0 0 40px rgba(0, 229, 255, 0.1)' }}
        >
          {/* Terminal Header */}
          <div className="bg-muted px-4 py-2 flex justify-between items-center border-b border-border">
            <span className="text-xs font-mono text-muted-foreground">sys@engineer:~</span>
            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Body */}
          <div 
            className="flex-1 p-4 font-mono text-sm overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line, i) => (
              <div key={i} className="mb-1">
                {line.type === 'input' ? (
                  <div><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> {line.content}</div>
                ) : (
                  <div>{line.content}</div>
                )}
              </div>
            ))}
            
            <form onSubmit={handleSubmit} className="flex mt-1">
              <span className="text-green-400 mr-2">➜</span>
              <span className="text-blue-400 mr-2">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none border-none text-foreground caret-primary"
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
