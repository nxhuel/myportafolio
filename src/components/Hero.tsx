import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import heroBgTwo from '@/assets/hero-bg.png';

const roles = ['Desarrollador de Software', 'Arquitecto de APIs', 'Backend Developer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBgTwo}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/85 to-background" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-primary font-mono text-sm mb-8 neon-text tracking-widest">$ whoami</p>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sans mb-4 animate-fade-up tracking-tight" style={{ animationDelay: '0.4s' }}>
          Nahuel <span className="text-primary neon-text">Tisera</span>
        </h1>

        <div className="h-10 mb-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <span className="text-lg sm:text-xl md:text-2xl text-accent amber-glow font-mono">
            {text}
            <span className="terminal-cursor inline-block w-0.5 h-6 bg-primary ml-1 align-middle" />
          </span>
        </div>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed animate-fade-up" style={{ animationDelay: '0.8s' }}>
          Enfocado en Diseñar y Construir sistemas backend robustos, APIs escalables y arquitecturas seguras.
          Enfocado en rendimiento, calidad de código y soluciones que escalan.
        </p>

        <div className="animate-fade-up" style={{ animationDelay: '1s' }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-mono"
          >
            Ver proyectos
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
