import { useState, useMemo } from "react";
import {
  Search,
  FileText,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";

type ProjectStatus = "active" | "in-progress" | "done";
type ProjectType = "API" | "Web" | "Automatización";

interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface Project {
  name: string;
  description: string;
  techs: string[];
  status: ProjectStatus;
  type: ProjectType;
  github?: string;
  docs?: string[];
  media: MediaItem[];
}

const projects: Project[] = [
  {
    name: "Refactorización de Aula Virtual",
    description:
      "Plataforma integral para la institucion IFTS° 21 que permite gestionar usuarios, materias, correlativas e inscripciones de forma ágil y segura. Desarrollada con Java (Spring Boot y Spring Security) y Front-end (HTML, CSS y JavaScript). API RESTful segura con integración JWT y enfoque escalable.",
    techs: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "JavaScript",
      "GitBash",
      "Postman",
    ],
    status: "done",
    type: "Web",
    github: "https://github.com/nxhuel/aula-virtual-backend",
    docs: ["/doc/aula_virtual_doc.pdf"],
    media: [
      { type: "image", src: "/videos/pp-aulavirtual.gif" },
      { type: "image", src: "/images/pp-aulavirtual-uno.png" },
      { type: "image", src: "/images/pp-aulavirtual-dos.png" },
      { type: "video", src: "/videos/pp-aulavirtual.mp4" },
    ],
  },
  {
    name: "API Restful de Foro 'ForoHub'",
    description:
      "Desarrollo de una API RESTFull que  permite la gestión integral de un foro, ofreciendo operaciones para crear, leer, actualizar y eliminar temas, categorías y respuestas. Incorpora autenticación robusta y funcionalidades avanzadas como caché distribuido para un desempeño eficiente.",
    techs: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Redis",
      "GitBash",
      "Postman",
      "Swagger",
      "Docker",
    ],
    status: "done",
    type: "API",
    github: "https://github.com/nxhuel/foro_hub",
    docs: ["/doc/foro_hub_doc.pdf"],
    media: [{ type: "image", src: "/images/pp-forohub-uno.png" }],
  },
  {
    name: "API RestFull Bazar",
    description:
      "Desarrollo una API RESTFull para un bazar, permitiendo gestionar ventas y el stock de productos mediante operaciones CRUD para Productos, Clientes y Ventas. Incluye funcionalidades adicionales, como identificar productos con poco stock y consultar ventas por fecha o productos por venta.",
    techs: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "Junit",
      "GitBash",
      "Postman",
    ],
    status: "done",
    type: "API",
    github: "https://github.com/nxhuel/tp_final_todoCode",
    media: [{ type: "image", src: "/images/pp-bazar-uno.png" }],
  },
  {
    name: "Sistema de Gestión Educativa para Entidad Gubernamental",
    description:
      "Sistema completo para gestión de útiles provenientes de todas las áreas del organismo, permitiendo tener información actualizada del stock disponible, objeto que se pide, y toda la información correspondiente para ser auditada. Implementada con arquitectura Modelo-Vista-Plantilla (MVT) y Shared-Nothing (Múltiples aplicaciones independientes que forman el proyecto completo).",
    techs: [
      "Python",
      "Django",
      "Jinja2",
      "SQLServer",
      "GitBash",
      "Postman",

      "JavaScript",
      "Bootstrap",
    ],
    status: "done",
    type: "Web",
    media: [{ type: "image", src: "/videos/pp-suAgip.gif" }, { type: "image", src: "/images/pp-suAgip-uno.png" }, { type: "video", src: "/videos/pp-suAgip.mp4" }],
  },
  {
    name: "Encriptador de Texto",
    description:
      "Desarrollo de una Pagina Web con el desafío de generar mi propio hash seguro e irrepetible y manejo del DOM. El proyecto consiste en una página web que permite a los usuarios ingresar texto y generar un hash único e irrepetible utilizando un algoritmo de encriptación personalizado. La aplicación también incluye funcionalidades para verificar la autenticidad del texto ingresado comparándolo con el hash generado, proporcionando una capa adicional de seguridad y confianza para los usuarios.",
    techs: ["JavaScript", "GitBash", "Vercel"],
    status: "done",
    type: "Web",
    github: "https://github.com/nxhuel/challenge-oracle",

    media: [
      { type: "image", src: "/videos/pp-encryptor-challenge.gif" },
      { type: "image", src: "/images/pp-encryptor-uno.png" },
      { type: "video", src: "/videos/pp-encryptor-challenge.mp4" },
    ],
  },
];

const allTechs = [...new Set(projects.flatMap((p) => p.techs))].sort();
const allTypes: ProjectType[] = ["API", "Web", "Automatización"];
const allStatuses: { value: ProjectStatus; label: string }[] = [
  { value: "active", label: "Activo" },
  { value: "in-progress", label: "En progreso" },
  { value: "done", label: "Finalizado" },
];

const statusConfig: Record<ProjectStatus, { class: string; label: string }> = {
  active: { class: "status-active", label: "Activo" },
  "in-progress": { class: "status-progress", label: "En progreso" },
  done: { class: "status-done", label: "Finalizado" },
};

const ProjectPortal = () => {
  const [search, setSearch] = useState("");
  const [filterTech, setFilterTech] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [docModal, setDocModal] = useState<{
    name: string;
    url: string[];
  } | null>(null);
  const [showcase, setShowcase] = useState<Project | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()))
        return false;
      if (filterTech && !p.techs.includes(filterTech)) return false;
      if (filterType && p.type !== filterType) return false;
      if (filterStatus && p.status !== filterStatus) return false;
      return true;
    });
  }, [search, filterTech, filterType, filterStatus]);

  const openShowcase = (project: Project) => {
    setShowcase(project);
    setMediaIndex(0);
  };

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="mb-16 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4 neon-text">
            ~/projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight">
            Portal de <span className="text-primary">Proyectos</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="max-w-6xl mx-auto mb-12 space-y-5">
          <div className="relative max-w-md mx-auto">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Buscar proyecto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <select
              value={filterTech}
              onChange={(e) => setFilterTech(e.target.value)}
              className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground focus:outline-none focus:border-primary/40"
            >
              <option value="">Tecnología</option>
              {allTechs.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground focus:outline-none focus:border-primary/40"
            >
              <option value="">Tipo</option>
              {allTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground focus:outline-none focus:border-primary/40"
            >
              <option value="">Estado</option>
              {allStatuses.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            {(filterTech || filterType || filterStatus) && (
              <button
                onClick={() => {
                  setFilterTech("");
                  setFilterType("");
                  setFilterStatus("");
                }}
                className="px-4 py-2 rounded-lg text-sm text-primary hover:bg-primary/10 transition-colors font-mono"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filtered.map((project, i) => (
            <div
              key={project.name}
              className="glass rounded-xl overflow-hidden card-hover group animate-fade-up cursor-pointer"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => openShowcase(project)}
            >
              <div className="relative overflow-hidden h-48">
                {project.media.find((m) => m.type === "image") ? (
                  <img
                    src={project.media.find((m) => m.type === "image")!.src}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <span className="text-muted-foreground">Video</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <span
                  className={`absolute top-3 right-3 text-xs px-2.5 py-1 rounded border font-mono ${statusConfig[project.status].class}`}
                >
                  {statusConfig[project.status].label}
                </span>
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs text-muted-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye size={14} /> Ver proyecto
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold font-sans text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techs.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-primary/8 text-primary/80 border border-primary/15 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors font-mono"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {project.docs && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDocModal({ name: project.name, url: project.docs! });
                      }}
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors font-mono"
                    >
                      <FileText size={14} /> Docs
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            <p className="font-mono text-sm">$ query returned 0 results</p>
          </div>
        )}
      </div>

      {/* Project Showcase Modal */}
      {showcase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setShowcase(null)}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-xl" />
          <div
            className="relative z-10 w-full max-w-5xl glass rounded-2xl border border-primary/20 overflow-hidden animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media carousel */}
            <div className="relative h-64 sm:h-80 md:h-96 bg-background/50">
              {showcase.media[mediaIndex].type === "image" ? (
                <img
                  src={showcase.media[mediaIndex].src}
                  alt={`${showcase.name} - ${mediaIndex + 1}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 opacity-80"
                />
              ) : (
                <video
                  src={showcase.media[mediaIndex].src}
                  controls
                  className="w-full h-full object-contain"
                  poster={showcase.media.find((m) => m.type === "image")?.src}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-card/30" />

              {showcase.media.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setMediaIndex(
                        (i) =>
                          (i - 1 + showcase.media.length) %
                          showcase.media.length,
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() =>
                      setMediaIndex((i) => (i + 1) % showcase.media.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {showcase.media.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setMediaIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === mediaIndex ? "bg-primary w-6" : "bg-foreground/30 hover:bg-foreground/50"}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setShowcase(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>

              <span
                className={`absolute top-4 left-4 text-xs px-3 py-1 rounded border font-mono ${statusConfig[showcase.status].class}`}
              >
                {statusConfig[showcase.status].label}
              </span>
            </div>

            {/* Info */}
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold font-sans mb-3">
                {showcase.name}
              </h3>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed max-w-3xl">
                {showcase.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {showcase.techs.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 rounded-lg bg-primary/8 text-primary/80 border border-primary/15 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {showcase.github && (
                  <a
                    href={showcase.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors font-mono"
                  >
                    <Github size={16} /> Ver en GitHub
                  </a>
                )}
                {showcase.docs && (
                  <button
                    onClick={() => {
                      setShowcase(null);
                      setDocModal({ name: showcase.name, url: showcase.docs! });
                    }}
                    className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors font-mono"
                  >
                    <FileText size={16} /> Documentación
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PDF Modal */}
      {docModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setDocModal(null)}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-xl" />
          <div
            className="relative z-10 w-full max-w-5xl h-[85vh] glass rounded-2xl border border-primary/20 flex flex-col overflow-hidden animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-primary" />
                <span className="text-base font-mono text-foreground">
                  {docModal.name}
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  — documentación
                </span>
              </div>
              <button
                onClick={() => setDocModal(null)}
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-background/50">
              <iframe
                src={docModal.url[0]}
                title={`Documentación - ${docModal.name}`}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectPortal;
