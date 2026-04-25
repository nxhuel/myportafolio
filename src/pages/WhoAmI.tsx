import { User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const WhoAmI = () => (
  <div
    className="min-h-screen bg-black/80 bg-transparente bg-blend-overlay"
    style={{
      backgroundImage: "url('/images/fondo-proyectos.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <Navbar />
    <section className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-8 font-mono"
        >
          <ArrowLeft size={12} /> cd ~/home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
            <User size={16} className="text-primary" />
          </div>
          <div>
            <p className="text-primary font-mono text-[10px] tracking-widest uppercase neon-text">
              ~/about
            </p>
            <h1 className="text-2xl font-bold font-sans tracking-tight">
              Quién soy
            </h1>
          </div>
        </div>

        <div className="glass rounded p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Soy Nahuel Tisera, desarrollador de software con enfoque en backend
            y arquitectura de sistemas. Me apasiona construir soluciones
            robustas, seguras y escalables. Trabajo con tecnologías modernas y
            siempre busco la mejor práctica para cada problema.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Mi trabajo se centra en diseñar APIs bien estructuradas, implementar
            patrones de seguridad sólidos, y mantener código que otros
            desarrolladores puedan entender y escalar.
          </p>
          <div className="border-t border-border pt-4 mt-4">
            <p className="text-xs text-muted-foreground font-mono">
              <span className="text-primary">$</span> cat /etc/values.conf
            </p>
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
              <li>→ Código limpio y mantenible</li>
              <li>→ Seguridad por diseño</li>
              <li>→ Rendimiento y escalabilidad</li>
              <li>→ Documentación clara</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default WhoAmI;
