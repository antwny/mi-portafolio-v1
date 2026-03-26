import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

import aniquem from '../assets/projects/AniquemMVP.png';
import styleStore from '../assets/projects/StyleStore.png';


export default function Projects() {
  const projects = [
    {
      title: "Aniquem - Portal de Gestión",
      category: "React / Vite / Tailwind",
      image: aniquem,
      description: "Sistema centralizado de gestión (ERP/CRM) diseñado para optimizar los procesos operativos de Aniquem.",
      githubUrl: "https://github.com/antwny/aniquem-portal-mvp",
      demoUrl: "https://antwny.github.io/aniquem-portal-mvp/"
    },
    {
      title: "Style Store - Tienda online de ropa",
      category: "Frontend / UI",
      image: styleStore,
      description: "Un e-commerce moderno con busquedas, carrito de compras, formulario de envío y de pago. Desarrollado con React. Diseño responsive.",
      githubUrl: "https://github.com/antwny/Style-Store",
      demoUrl: "https://antwny.github.io/Style-Store/"
    },
    {
      title: "Landing Page Empresarial",
      category: "Maquetación / SEO",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
      description: "Sitio web responsivo y optimizado con alto rendimiento. Desarrollado como proyecto freelance para un cliente local.",
      githubUrl: "https://github.com/tu-usuario/tu-repo",
      demoUrl: "https://tu-usuario.github.io/tu-repo"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-6 relative z-10" id="proyectos">
      <div className="max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#27e9b5] font-bold mb-6 tracking-wide text-sm font-sans drop-shadow-[0_0_8px_rgba(39,233,181,0.4)]">Mis Proyectos</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Creando Experiencias Web y Soluciones Reales
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-end lg:pr-12 md:max-w-md"
          >
            <p className="text-lg md:text-xl text-white/90 mb-8 font-medium leading-relaxed">
              Explora una selección de mis desarrollos recientes. Código limpio, interfaces increíbles y desplegados para que puedas probarlos ahora mismo.
            </p>

            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-white/50 leading-tight">
                Construyamos Algo<br />Increíble Juntos
              </div>
              <a href="#contacto" className="glow-btn group pl-6 pr-2 py-2 inline-flex">
                <span>Contactar</span>
                <div className="bg-portfolio-primary/20 text-portfolio-primary p-1.5 rounded-full group-hover:translate-x-1 transition-transform group-hover:bg-portfolio-dark group-hover:text-portfolio-primary">
                  <ArrowRight size={14} strokeWidth={3} />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative h-[450px] md:h-[500px] rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-[#162936] border-2 border-transparent hover:border-[#27e9b5]/50 transition-colors duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(39,233,181,0.2)]"
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
            }}
          >
            {/* The dynamic glowing overlay */}
            <div
              className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(39, 233, 181, 0.25), transparent 40%)' }}
            />

            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
            />

            {/* Soft gradient overlay matching image style */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#0e171e] via-[#0e171e]/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end z-20">
              <p className="text-[#27e9b5] font-bold text-xs uppercase tracking-wider mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">{project.title}</h3>

              <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="text-white/80 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#0a1118] bg-[#27e9b5] hover:bg-white transition-colors px-4 py-2.5 rounded-full"
                    >
                      <ExternalLink size={16} />
                      Ver Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-xs md:text-sm font-medium text-white border border-white/20 hover:border-[#27e9b5]/50 hover:text-[#27e9b5] transition-colors bg-white/5 hover:bg-black/20 px-4 py-2.5 rounded-full backdrop-blur-md"
                    >
                      <Github size={16} />
                      Ver Código
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
