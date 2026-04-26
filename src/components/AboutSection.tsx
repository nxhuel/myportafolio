import { User, Briefcase, GraduationCap, Code2 } from "lucide-react";

const experiences = [
  {
    role: "Desarrollador de Software & IA",
    company: "Ministerio de Defensa",
    period: "2025 — Presente",
    desc: "Diseño e integro agentes de IA locales en sistemas internos, participando en su desarrollo, entrenamiento y despliegue junto al equipo. Implemento técnicas como RAG y OCR para mejorar la precisión y el acceso a información contextual. También desarrollé el sitio web de la Dirección de Informática y brindo soporte técnico integral, contribuyendo a la eficiencia operativa del área.",
    techs: [
      "Python",
      "LangChain",
      "PostgreSQL",
      "QDrant",
      "n8n",
      "Docker",
      "React",
      "Putty",
    ],
  },
  {
    role: "Desarrollador Trainee",
    company: "AGIP",
    period: "2024 - 2024",
    desc: "Junto al equipo de desarrollo, realicé la migración de PHP a Python, mejorando la calidad del código con principios SOLID y trabajando en metodologías ágiles como XP.",
    techs: ["Python", "Django", "SQL Server"],
  },
];

const education = [
  {
    title: "Licenciatura en Tecnologías Digitales",
    institution: "UdelaCiudad",
    period: "2026 - Actualidad",
  },
  {
    title: "Tecnicatura en Análisis de Sistemas",
    institution: "IFTS N°21",
    period: "2023 — 2025",
  },
];

const skills = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "React",
  "TypeScript",
  "Python",
  "Docker",
  "MySQL",
  "Linux",
  "Git",
  "Scrum",
  "Kanban",
  "DevOps",
];

const AboutSection = () => {
  return (
    <section className="py-32 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* HEADER */}
        <div className="mb-20 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            ~/about
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Sobre mí
          </h2>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 🧑 QUIÉN SOY */}
          <div className="glass rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2">
              <User size={18} className="text-primary" />
              <h3 className="font-semibold">Quién soy</h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Soy desarrollador de software enfocado en backend y su
              arquitectura, es decir, me especializo en diseñar y ejecutar
              soluciones escalables, seguras y mantenibles.
            </p>

            <ul className="text-xs text-muted-foreground space-y-1 font-mono pt-2">
              <li>→ Código limpio</li>
              <li>→ Seguridad</li>
              <li>→ Escalabilidad</li>
              <li>→ Proactivo</li>
              <li>→ Principios SOLID</li>
            </ul>


            {/* <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-primary text-lg font-bold">+2</p>
                <p className="text-xs text-muted-foreground">
                  Años experiencia
                </p>
              </div>
              <div>
                <p className="text-primary text-lg font-bold">10+</p>
                <p className="text-xs text-muted-foreground">Proyectos</p>
              </div>
            </div> */}
          </div>

          {/* 💼 EXPERIENCIA */}
          <div className="glass rounded-xl p-6 space-y-5">
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-primary" />
              <h3 className="font-semibold">Experiencia</h3>
            </div>

            {experiences.map((exp, i) => (
              <div key={i} className="border-t border-border pt-4">
                <p className="text-sm font-medium">{exp.role}</p>
                <p className="text-xs text-primary/70">{exp.company}</p>
                <p className="text-[10px] text-muted-foreground mb-2">
                  {exp.period}
                </p>
                <p className="text-xs text-muted-foreground mb-2">{exp.desc}</p>

                <div className="flex flex-wrap gap-1">
                  {exp.techs.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 🎓 EDUCACIÓN + SKILLS */}
          <div className="space-y-6">
            {/* EDUCACIÓN */}
            <div className="glass rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-primary" />
                <h3 className="font-semibold">Formación</h3>
              </div>

              {education.map((edu, i) => (
                <div key={i} className="border-t border-border pt-3">
                  <p className="text-sm">{edu.title}</p>
                  <p className="text-xs text-primary/70">{edu.institution}</p>
                  <p className="text-[10px] text-muted-foreground">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>

            {/* SKILLS */}
            <div className="glass rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Code2 size={18} className="text-primary" />
                <h3 className="font-semibold">Habilidades Técnicas</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
