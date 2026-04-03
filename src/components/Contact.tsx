import { Mail, MessageSquare, Linkedin, Github } from 'lucide-react';

const links = [
  { icon: Mail, label: 'Email', value: 'nahueltisera03@gmail.com', href: 'mailto:nahueltisera03@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: '/in/nahueltisera', href: 'https://www.linkedin.com/in/tisera-nahuel-ab3864219/' },
  { icon: Github, label: 'GitHub', value: '/nxhuel', href: 'https://github.com/nxhuel' },
  { icon: MessageSquare, label: 'WhatsApp', value: '+54 9 11 3350-1445', href: 'https://wa.me/54911335014445' },
];

const Contact = () => (
  <section id="contact" className="py-32">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="mb-16 text-center">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4 neon-text">~/contact</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight">Contacto</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {links.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={label !== 'Email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="glass rounded-xl p-6 flex flex-col items-center text-center card-hover group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <Icon size={24} className="text-primary" />
            </div>
            <p className="text-base font-semibold mb-1">{label}</p>
            <p className="text-sm text-muted-foreground font-mono">{value}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
