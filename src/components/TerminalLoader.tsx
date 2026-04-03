import { useState, useEffect } from 'react';

const lines = [
  '> Initializing system...',
  '> Loading modules...',
  '> Connecting to server...',
  '> Fetching portfolio data...',
  '> Compiling components...',
  '> System ready.',
];

const TerminalLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timeout = setTimeout(() => setVisibleLines(v => v + 1), 300);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(onComplete, 500);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="w-full max-w-lg p-6">
        <div className="glass rounded-lg p-6 scanline relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-destructive/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-primary/80" />
            <span className="ml-3 text-xs text-muted-foreground">nahuel@portfolio:~</span>
          </div>
          <div className="space-y-2 font-mono text-sm">
            {lines.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                className={`${i === lines.length - 1 ? 'text-primary neon-text' : 'text-foreground/70'} animate-fade-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {line}
              </div>
            ))}
            {visibleLines < lines.length && (
              <span className="inline-block w-2 h-4 bg-primary terminal-cursor" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalLoader;
