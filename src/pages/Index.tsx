import { useState } from 'react';
import TerminalLoader from '@/components/TerminalLoader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIResolve from '@/components/WhatIResolve';
import ProjectPortal from '@/components/ProjectPortal';
import Contact from '@/components/Contact';
import { Terminal } from 'lucide-react';

const Index = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <TerminalLoader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatIResolve />
      <ProjectPortal />
      <Contact />

      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-primary text-sm neon-text font-mono">
            <Terminal size={16} />
            <span>Nahuel Tisera © {new Date().getFullYear()}</span>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            $ exit
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
