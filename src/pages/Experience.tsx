import { Briefcase, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const experiences = [
  {
    role: "Desarrollador de Software & Soluciones en IA",
    company: "Ministerio de Defensa - Dpto de Infórmatica",
    period: "2025 — Presente",
    desc: "Participo en la integración de agentes de IA locales dentro de sistemas internos, incluyendo su entrenamiento y optimización. Apliqué técnicas como RAG, MCP y OCR para mejorar el contexto y la precisión en las respuestas de los agentes. Además, desarrollé herramientas internas que contribuyeron a optimizar la eficiencia operativa del área, brindando también soporte técnico integral.",
    techs: [
      "n8n",
      "QDrant",
      "Docker",
      "Linux",
      "React",
      "Tailwind",
      "Python",
      "LangChain",
      "PostgreSQL",
    ],
  },
  {
    role: "Desarrollador de Software Trainee",
    company: "AGIP",
    period: "2024 — 2024",
    desc: "trabajé en la migración de un sistema existente desarrollado en PHP hacia Python, con el objetivo de modernizar la solución. Fui responsable de mejorar la calidad del código aplicando principios SOLID, y colaboré activamente en equipo bajo la metodología de programación XP.",
    techs: ["Python", "SQL Server", "Django", "Bootstrap"],
  },
];

const Experience = () => (
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
            <Briefcase size={16} className="text-primary" />
          </div>
          <div>
            <p className="text-primary font-mono text-[10px] tracking-widest uppercase neon-text">
              ~/experience
            </p>
            <h1 className="text-2xl font-bold font-sans tracking-tight">
              Experiencia laboral
            </h1>
          </div>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="glass rounded p-5 card-hover animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-semibold font-sans text-sm">{exp.role}</h3>
                <span className="text-[10px] text-accent font-mono amber-glow">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs text-primary/70 mb-2 font-mono">
                {exp.company}
              </p>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-1">
                {exp.techs.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-primary/8 text-primary/70 border border-primary/15 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Experience;
