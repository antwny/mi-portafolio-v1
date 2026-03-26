import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Desarrollo de App Financiera",
      category: "Fullstack",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Dashboard Administrativo",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Red de APIs Sociales",
      category: "Arquitectura Backend",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
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
            <p className="text-[#27e9b5] font-bold mb-6 tracking-wide text-sm font-sans drop-shadow-[0_0_8px_rgba(39,233,181,0.4)]">Detrás del Código</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Creando Experiencias Web y Soporte Eficiente
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
              Enfocado en construir sistemas robustos e interfaces limpias mientras mantengo una infraestructura tecnológica estable.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-white/50 leading-tight">
                Construyamos Algo<br/>Increíble Juntos
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative aspect-[4/5] md:aspect-[3/4] rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-[#162936] cursor-pointer border-2 border-transparent hover:border-[#27e9b5]/50 transition-colors duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(39,233,181,0.2)]"
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
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
            
            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-[#27e9b5] font-bold text-xs uppercase tracking-wider mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
