import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Terminal } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const aboutPages = [
  { label: "Quién soy", to: "/about" },
  { label: "Experiencia laboral", to: "/experience" },
  { label: "Formación profesional", to: "/education" },
];

const myWorkPage = [
  { label: "Servicios & Proyectos", to: "/my-work" },
  { label: "Guías", to: "/guides" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
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
        { label: "Sobre mí", href: "#about" },
        { label: "Contacto", href: "#contact" },
      ]
    : [
        { label: "Inicio", href: "/" },
        { label: "Sobre mí", href: "/#about" },
        { label: "Contacto", href: "/#contact" },
      ];

  const renderLink = (link: { label: string; href: string }) => {
    if (link.href.startsWith("#")) {
      return (
        <a
          key={link.href}
          href={link.href}
          className="text-sm text-muted-foreground hover:text-primary transition font-mono uppercase tracking-wide"
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        key={link.href}
        to={link.href}
        className="text-sm text-muted-foreground hover:text-primary transition font-mono uppercase tracking-wide"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-primary font-bold">
          <Terminal size={20} />
          <span className="font-mono">N.Tisera</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(renderLink)}

          {/* Mi trabajo */}
          <div className="relative">
            <button
              onClick={() => {
                setWorkOpen(!workOpen);
                setAboutOpen(false);
              }}
              className="flex items-center gap-1 text-sm font-mono uppercase text-muted-foreground hover:text-primary"
            >
              Mi trabajo
              <ChevronDown size={14} className={workOpen ? "rotate-180" : ""} />
            </button>

            {workOpen && (
              <div className="absolute right-0 mt-2 w-52 glass border border-border rounded-lg overflow-hidden">
                {myWorkPage.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-2 text-sm font-mono hover:bg-primary/5 hover:text-primary"
                    onClick={() => setWorkOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="px-6 py-4 space-y-4">
            {/* Links */}
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-mono uppercase text-sm text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-mono uppercase text-sm text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ),
            )}

            {/* Mi trabajo mobile */}
            <div>
              <p className="text-xs text-primary font-mono uppercase mb-2">
                Mi trabajo
              </p>
              {myWorkPage.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm pl-3 py-1 text-muted-foreground hover:text-primary font-mono"
                >
                  {item.label}
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
