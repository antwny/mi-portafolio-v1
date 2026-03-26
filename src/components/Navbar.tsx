import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'experiencia'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-2 md:py-3 flex justify-between items-center bg-[#191919]/80 backdrop-blur-md"
    >
      <div className="text-xl font-bold tracking-tighter text-white">antw.ny</div>

      <div className="hidden md:flex items-center space-x-1 bg-[#2a2a2a]/60 backdrop-blur-md rounded-full px-2 py-1.5 shadow-xl">
        {[
          { id: 'inicio', label: 'Inicio' },
          { id: 'sobre-mi', label: 'Sobre Mí' },
          { id: 'proyectos', label: 'Proyectos' },
          { id: 'experiencia', label: 'Experiencia' }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 capitalize ${activeSection === item.id
                ? 'bg-[#27e9b5]/20 text-[#27e9b5] shadow-[0_0_10px_rgba(39,233,181,0.15)]'
                : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      <a href="#contacto" className="glow-btn group pl-5 pr-2 py-1.5 text-sm inline-flex items-center">
        <span>Contactar</span>
        <div className="bg-portfolio-primary/20 text-portfolio-primary p-1 rounded-full group-hover:translate-x-1 transition-transform group-hover:bg-portfolio-dark group-hover:text-portfolio-primary ml-2">
          <ArrowRight size={14} strokeWidth={3} />
        </div>
      </a>
    </motion.nav>
  );
}
