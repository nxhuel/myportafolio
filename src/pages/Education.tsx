import { GraduationCap, Code2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const education = [
  {
    title: "Licenciatura en Tecnologías Digitales",
    institution: "UdelaCiudad",
    period: "2026 - Actualidad",
    desc: "Formación orientada a gestión de proyectos tecnológicos, comprensión del negocio y marco jurídico aplicado a entornos digitales. Enfoque en la planificación, toma de decisiones y alineación entre tecnología y objetivos organizacionales.",
  },
  {
    title: "Tecnicatura en Análisis de Sistemas",
    institution: "Instituto de Formación Técnica Superior N°21",
    period: "2023 — 2025",
    desc: "Formación en desarrollo de software, bases de datos y algoritmos. Enfoque en lógica de programación, diseño de sistemas y trabajo en equipo aplicando buenas prácticas.",
  },
];

const skills = [
  {
    category: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "Python",
    ],
  },
  {
    category: "Frontend",
    items: ["JavaScript", "React", "Angular", "TypeScript", "Tailwind CSS"],
  },
  { category: "Databases", items: ["MySQL", "QDrant", "Redis"] },
  { category: "DevOps", items: ["Docker", "GitHub Actions", "Linux"] },
  { category: "Tools", items: ["Git", "Postman", "IntelliJ", "VS Code"] },
  { category: "Methodologies", items: ["Scrum", "XP", "Kanban", "DevOps"] },
];

const Education = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-24 pb-5">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-8 font-mono"
        >
          <ArrowLeft size={12} /> cd ~/home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
            <GraduationCap size={16} className="text-primary" />
          </div>
          <div>
            <p className="text-primary font-mono text-[10px] tracking-widest uppercase neon-text">
              ~/education
            </p>
            <h1 className="text-2xl font-bold font-sans tracking-tight">
              Formación profesional
            </h1>
          </div>
        </div>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <div
              key={i}
              className="glass rounded p-5 card-hover animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="font-semibold font-sans text-sm mb-1">
                {edu.title}
              </h3>
              <p className="text-xs text-primary/70 mb-1 font-mono">
                {edu.institution}
              </p>
              <p className="text-[10px] text-accent font-mono amber-glow mb-3">
                {edu.period}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {edu.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
            <Code2 size={16} className="text-primary" />
          </div>
          <div>
            <p className="text-primary font-mono text-[10px] tracking-widest uppercase neon-text">
              ~/skills
            </p>
            <h1 className="text-2xl font-bold font-sans tracking-tight">
              Habilidades técnicas
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((cat, i) => (
            <div
              key={cat.category}
              className="glass rounded p-4 card-hover animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <h3 className="text-xs font-semibold text-primary mb-3 font-mono tracking-wide">
                $ {cat.category.toLowerCase()}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] px-2 py-1 rounded bg-primary/8 text-foreground border border-primary/15 font-mono"
                  >
                    {item}
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

export default Education;
