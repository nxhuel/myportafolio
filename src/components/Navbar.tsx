import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Terminal } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const aboutPages = [
  { label: "Quién soy", to: "/about" },
  { label: "Experiencia laboral", to: "/experience" },
  { label: "Formación profesional", to: "/education" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = isHome
    ? [
        { label: "Inicio", href: "#home" },
        { label: "Soluciones", href: "#solutions" },
        { label: "Proyectos", href: "#projects" },
        { label: "Contacto", href: "#contact" },
      ]
    : [
        { label: "Inicio", href: "/" },
        { label: "Soluciones", href: "#solutions" },
        { label: "Proyectos", href: "/#projects" }, 
        { label: "Contacto", href: "/#contact" },
      ];

  const renderLink = (link: { label: string; href: string }) => {
    if (link.href.startsWith("#")) {
      return (
        <a
          key={link.href}
          href={link.href}
          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase font-mono"
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        key={link.href}
        to={link.href}
        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase font-mono"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <div
        className="max-w-7xl mx-auto px-6 sm:px-10 h-18 flex items-center justify-between"
        style={{ height: "4.5rem" }}
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 text-primary neon-text font-bold text-base"
        >
          <Terminal size={20} />
          <span className="font-mono text-lg">N.Tisera</span>
          <span className="text-muted-foreground text-xs font-normal hidden sm:inline font-mono">
            ~/portfolio
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(renderLink)}

          <div className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              onBlur={() => setTimeout(() => setAboutOpen(false), 200)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase font-mono"
            >
              Sobre mí
              <ChevronDown
                size={14}
                className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
              />
            </button>
            {aboutOpen && (
              <div className="absolute top-full right-0 mt-3 w-56 glass rounded-lg border border-border overflow-hidden animate-fade-up">
                {aboutPages.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-5 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors font-mono"
                    onClick={() => setAboutOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-border animate-fade-up">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary py-2 font-mono uppercase tracking-wide"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary py-2 font-mono uppercase tracking-wide"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <div className="border-t border-border pt-3">
              <p className="text-xs text-primary mb-2 font-mono uppercase tracking-widest">
                Sobre mí
              </p>
              {aboutPages.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="block text-sm text-muted-foreground hover:text-primary py-2 pl-4 font-mono"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
