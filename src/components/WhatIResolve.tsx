import { Server, Workflow, Bot, ShieldCheck, Database } from "lucide-react";

const items = [
  {
    icon: Server,
    title: "APIs escalables",
    desc: "APIs RESTful preparadas para alto tráfico y crecimiento.",
  },
  {
    icon: Workflow,
    title: "Integración de sistemas",
    desc: "Conexión entre microservicios y APIs.",
  },
  {
    icon: Bot,
    title: "Automatización",
    desc: "CI/CD y procesos automatizados con flujos n8n.",
  },
  {
    icon: ShieldCheck,
    title: "Backend seguro",
    desc: "Autenticación, autorización y seguridad por diseño.",
  },
  {
    icon: Database,
    title: "Bases de datos",
    desc: "Modelado, optimización y arquitectura de datos.",
  },
];

const WhatIResolve = () => (
  <section
    className="py-32"
    id="solutions"

  >
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="mb-16 text-center">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4 neon-text">
          ~/services
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight">
          Qué <span className="text-primary">resuelvo</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="glass rounded-lg p-8 card-hover group animate-fade-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
              <item.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold font-sans text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIResolve;
